import type { ReadonlySignal, Signal } from "@vanillakit/signal";
import { effect, signal, untrack } from "@vanillakit/signal";
import type { EachDescriptor, EachEntry, VanillaNode } from "@vanillakit/types";
export type { EachDescriptor } from "@vanillakit/types";

let uid = 0;
const MARKER_ATTR = "data-v-";

export function html(
  strings: TemplateStringsArray,
  ...values: unknown[]
): Node | DocumentFragment {
  const id = uid++;
  let h = "";
  const attrBindings: Array<{
    index: number;
    attrName: string;
    elemMarker: string;
  }> = [];

  for (let i = 0; i < strings.length; i++) {
    h += strings[i];
    if (i < values.length) {
      if (_isInTag(h)) {
        const attrMatch = h.match(/(\S+)\s*=\s*["']?$/);
        if (attrMatch) {
          const attrName = attrMatch[1];
          const elemMarker = `${MARKER_ATTR}${id}-${i}`;
          h = h.slice(0, -attrMatch[0].length);
          h += `${elemMarker}="" `;
          attrBindings.push({ index: i, attrName, elemMarker });
        } else {
          h += `v${id}_${i}`;
        }
      } else {
        h += `<!--v${id}-${i}-->`;
      }
    }
  }

  const tpl = document.createElement("template");
  tpl.innerHTML = h;
  const fragment = tpl.content;
  const disposers: Array<() => void> = [];

  for (const { index, attrName, elemMarker } of attrBindings) {
    const el = fragment.querySelector(`[${elemMarker}]`);
    if (!el) continue;
    el.removeAttribute(elemMarker);
    _bindAttr(el as HTMLElement, attrName, values[index], disposers);
  }

  const walker = document.createTreeWalker(fragment, NodeFilter.SHOW_COMMENT);
  const comments: Array<{ node: Comment; index: number }> = [];
  while (walker.nextNode()) {
    const c = walker.currentNode as Comment;
    if (c.data.startsWith(`v${id}-`)) {
      comments.push({
        node: c,
        index: parseInt(c.data.slice(`v${id}-`.length)),
      });
    }
  }
  for (const { node, index } of comments)
    _bindChild(node, values[index], disposers);

  (fragment as VanillaNode).__v_dispose = () => {
    for (const d of disposers) d();
    disposers.length = 0;
  };
  const nodes = [...fragment.childNodes];
  if (nodes.length > 0) {
    const first = nodes[0] as VanillaNode;
    (first.__v_disposers || (first.__v_disposers = [])).push(
      (fragment as VanillaNode).__v_dispose!,
    );
  }
  return fragment.childNodes.length === 1 ? fragment.childNodes[0] : fragment;
}

function _isInTag(str: string): boolean {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ">") return false;
    if (str[i] === "<") return true;
  }
  return false;
}

function _bindAttr(
  el: HTMLElement,
  name: string,
  value: unknown,
  disposers: Array<() => void>,
): void {
  if (name.startsWith("on")) {
    el.addEventListener(
      name.slice(2).toLowerCase(),
      typeof value === "function" ? (value as EventListener) : () => {},
    );
    return;
  }
  if (name === "ref" && typeof value === "function") {
    (value as (el: HTMLElement) => void)(el);
    return;
  }
  if (typeof value === "function") {
    disposers.push(
      effect(() => _setAttr(el, name, (value as () => unknown)())),
    );
    return;
  }
  _setAttr(el, name, value);
}

function _setAttr(el: HTMLElement, name: string, value: unknown): void {
  if (name === "class" || name === "className")
    el.className = (value as string) ?? "";
  else if (name === "style" && typeof value === "object")
    Object.assign(el.style, value);
  else if (name === "style" && typeof value === "string")
    el.setAttribute("style", value);
  else if (name === "checked") (el as HTMLInputElement).checked = !!value;
  else if (name === "value" && "value" in el)
    (el as HTMLInputElement).value = (value as string) ?? "";
  else if (name === "disabled" || name === "readonly" || name === "hidden") {
    if (value) el.setAttribute(name, "");
    else el.removeAttribute(name);
  } else if (value === false || value == null) el.removeAttribute(name);
  else el.setAttribute(name, value === true ? "" : String(value));
}

function _bindChild(
  anchor: Comment,
  value: unknown,
  disposers: Array<() => void>,
): void {
  if (value != null && (value as EachDescriptor<unknown>).__v_each) {
    disposers.push(_mountEach(anchor, value as EachDescriptor<unknown>));
    return;
  }
  if (typeof value === "function") {
    let cur: Node | Node[] | null = null;
    disposers.push(
      effect(() => {
        cur = _reconcile(anchor, cur, (value as () => unknown)());
      }),
    );
    return;
  }
  _reconcile(anchor, null, value);
}

function _reconcile(
  anchor: Comment,
  current: Node | Node[] | null,
  value: unknown,
): Node | Node[] | null {
  const parent = anchor.parentNode;
  if (!parent) return current;
  if (current) {
    const ns = Array.isArray(current) ? current : [current];
    for (const n of ns)
      if (n.parentNode) {
        _disposeTree(n);
        (n as ChildNode).remove();
      }
  }
  if (value == null || value === false || value === true) return null;
  if (Array.isArray(value)) {
    const frag = document.createDocumentFragment();
    const ns: Node[] = [];
    for (const item of (value as unknown[]).flat(Infinity)) {
      const n = _toNode(item);
      if (n) {
        frag.append(n);
        ns.push(n);
      }
    }
    parent.insertBefore(frag, anchor);
    return ns;
  }
  const node = _toNode(value);
  if (node) parent.insertBefore(node, anchor);
  return node;
}

function _toNode(v: unknown): Node | null {
  if (v == null || v === false || v === true) return null;
  if (v instanceof Node) return v;
  return document.createTextNode(String(v));
}

function _disposeTree(node: Node): void {
  const vNode = node as VanillaNode;
  if (vNode.__v_disposers) {
    for (const d of vNode.__v_disposers) d();
    vNode.__v_disposers = null;
  }
  if (node.childNodes) for (const c of node.childNodes) _disposeTree(c);
}

// ---- each() — Keyed list reconciliation ----

export function Each<T>(
{ list, key }: { list: () => T[]; key: (item: T, index: number) => unknown; },
render: (item: Signal<T>, index: ReadonlySignal<number>) => Node,
): EachDescriptor<T> {
  return { __v_each: true, listFn: list, keyFn: key, renderFn: render };
}

function _mountEach<T>(
  anchor: Comment,
  { listFn, keyFn, renderFn }: EachDescriptor<T>,
): () => void {
  const endAnchor = document.createComment("/each");
  anchor.parentNode?.insertBefore(endAnchor, anchor.nextSibling);
  const entries: Map<unknown, EachEntry<T>> = new Map();

  const dispose = effect(() => {
    const items = listFn();
    const arr = Array.isArray(items) ? items : [];
    const parentNode = anchor.parentNode;
    if (!parentNode) return;

    const newKeys = arr.map(keyFn);
    const newKeySet = new Set(newKeys);

    // Phase 1: Remove absent keys
    for (const [key, entry] of entries) {
      if (!newKeySet.has(key)) {
        for (const d of entry.disposers) d();
        for (const n of entry.nodes) {
          _disposeTree(n);
          (n as ChildNode).remove();
        }
        entries.delete(key);
      }
    }

    // Phase 2: Insert / update / reorder
    let cursor: ChildNode | null = anchor.nextSibling;

    for (let i = 0; i < arr.length; i++) {
      const key = newKeys[i];
      let entry = entries.get(key);

      if (!entry) {
        // New entry
        const itemSig = signal(arr[i]);
        const indexSig = signal(i);
        const disposers: Array<() => void> = [];
        let rendered: Node | DocumentFragment | undefined;
        const outerDispose = untrack(() => {
          rendered = renderFn(
            itemSig,
            indexSig as unknown as ReadonlySignal<number>,
          );
          return (rendered as VanillaNode).__v_dispose ?? null;
        });
        const nodes: Node[] =
          rendered instanceof DocumentFragment
            ? [...rendered.childNodes]
            : [
                rendered instanceof Node
                  ? rendered
                  : document.createTextNode(String(rendered)),
              ];
        if (outerDispose) disposers.push(outerDispose);
        entry = { nodes, disposers, itemSig, indexSig };
        entries.set(key, entry);
        const frag = document.createDocumentFragment();
        for (const n of nodes) frag.append(n);
        parentNode.insertBefore(frag, cursor);
        cursor =
          (entry.nodes[entry.nodes.length - 1]
            ?.nextSibling as ChildNode | null) ?? cursor;
      } else {
        // Update signals
        entry.itemSig(arr[i]);
        entry.indexSig(i);
        // Move if out of position
        if (entry.nodes.length > 0 && entry.nodes[0] !== cursor) {
          for (const n of entry.nodes) parentNode.insertBefore(n, cursor);
        }
        cursor =
          entry.nodes.length > 0
            ? (entry.nodes[entry.nodes.length - 1]
                .nextSibling as ChildNode | null)
            : cursor;
      }
    }
  });

  return () => {
    dispose();
    for (const [, entry] of entries) {
      for (const d of entry.disposers) d();
      for (const n of entry.nodes) {
        _disposeTree(n);
        (n as ChildNode).remove();
      }
    }
    entries.clear();
    if (endAnchor.parentNode) endAnchor.remove();
  };
}
