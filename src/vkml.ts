import type { ReadonlySignal,Signal } from "./signal.js";
import { effect, signal, untrack } from "./signal.js";
import type { EachDescriptor, EachEntry, VanillaNode } from "./types.js";
export type { EachDescriptor } from "./types.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const SVG_TAGS = new Set([
  "svg",
  "path",
  "circle",
  "rect",
  "line",
  "polyline",
  "polygon",
  "text",
  "g",
  "defs",
  "use",
  "image",
  "clipPath",
  "mask",
  "pattern",
  "linearGradient",
  "radialGradient",
  "stop",
  "ellipse",
]);

function _isProps(obj: any): obj is Record<string, any> {
  return (
    obj != null &&
    typeof obj === "object" &&
    !Array.isArray(obj) &&
    !(obj instanceof Node) &&
    !obj.__v_each
  );
}

function _createElement(tag: string): Element {
  if (SVG_TAGS.has(tag)) {
    return document.createElementNS(SVG_NS, tag);
  }
  return document.createElement(tag);
}

function _setAttr(el: Element, name: string, value: unknown): void {
  if (name === "class" || name === "className") {
    if (el instanceof SVGElement) {
      el.setAttribute("class", (value as string) ?? "");
    } else {
      (el as HTMLElement).className = (value as string) ?? "";
    }
  } else if (name === "style" && typeof value === "object") {
    if (el instanceof HTMLElement || el instanceof SVGElement) {
      Object.assign(el.style, value);
    }
  } else if (name === "style" && typeof value === "string") {
    el.setAttribute("style", value);
  } else if (name === "checked" && "checked" in el) {
    (el as HTMLInputElement).checked = !!value;
  } else if (name === "value" && "value" in el) {
    (el as HTMLInputElement).value = (value as string) ?? "";
  } else if (name === "disabled" || name === "readonly" || name === "hidden") {
    if (value) el.setAttribute(name, "");
    else el.removeAttribute(name);
  } else if (value === false || value == null) {
    el.removeAttribute(name);
  } else {
    el.setAttribute(name, value === true ? "" : String(value));
  }
}

function _bindAttr(
  el: Element,
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
    (value as (el: Element) => void)(el);
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
  if (node.childNodes) {
    for (const c of Array.from(node.childNodes)) _disposeTree(c);
  }
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
    for (const n of ns) {
      if (n.parentNode) {
        _disposeTree(n);
        (n as ChildNode).remove();
      }
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
        entry.itemSig(arr[i]);
        entry.indexSig(i);
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

function _bindChild(
  el: Element,
  value: unknown,
  disposers: Array<() => void>,
): void {
  if (value != null && (value as EachDescriptor<unknown>).__v_each) {
    const anchor = document.createComment("each");
    el.append(anchor);
    disposers.push(_mountEach(anchor, value as EachDescriptor<unknown>));
    return;
  }
  if (typeof value === "function") {
    const anchor = document.createComment("fn");
    el.append(anchor);
    let cur: Node | Node[] | null = null;
    disposers.push(
      effect(() => {
        cur = _reconcile(anchor, cur, (value as () => unknown)());
      }),
    );
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value.flat(Infinity)) {
      _bindChild(el, item, disposers);
    }
    return;
  }

  const node = _toNode(value);
  if (node) el.append(node);
}

export type VkmlBuilder = (
  propsOrChild?: Record<string, any> | unknown,
  ...children: unknown[]
) => Element;

export const vkml: Record<string, VkmlBuilder> = new Proxy({} as any, {
  get(_, tag: string) {
    return (propsOrChild?: any, ...children: any[]) => {
      tag = tag === "variable" ? "var" : tag; // Handle reserved word
      const el = _createElement(tag) as VanillaNode;
      const disposers: Array<() => void> = [];

      let childArgs = children;
      if (_isProps(propsOrChild)) {
        for (const [key, value] of Object.entries(propsOrChild)) {
          _bindAttr(el as Element, key, value, disposers);
        }
      } else if (propsOrChild !== undefined) {
        childArgs = [propsOrChild, ...children];
      }

      for (const child of childArgs) {
        _bindChild(el as Element, child, disposers);
      }

      if (disposers.length > 0) {
        el.__v_disposers = disposers;
        el.__v_dispose = () => {
          for (const d of disposers) d();
          el.__v_disposers = null;
        };
      }

      return el;
    };
  },
});

export function onDispose(el: Element, fn: () => void): void {
  const vNode = el as VanillaNode;
  (vNode.__v_disposers ??= []).push(fn);
}

export const {
  a,
  abbr,
  address,
  area,
  article,
  aside,
  audio,
  b,
  base,
  bdi,
  bdo,
  blockquote,
  body,
  br,
  button,
  canvas,
  caption,
  cite,
  code,
  col,
  colgroup,
  data,
  datalist,
  dd,
  del,
  details,
  dfn,
  dialog,
  dir,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  header,
  hgroup,
  hr,
  i,
  iframe,
  img,
  input,
  ins,
  kbd,
  label,
  legend,
  li,
  link,
  main,
  map,
  mark,
  menu,
  meta,
  meter,
  nav,
  noscript,
  object,
  ol,
  optgroup,
  option,
  output,
  p,
  picture,
  pre,
  progress,
  q,
  rp,
  rt,
  ruby,
  s,
  samp,
  script,
  section,
  select,
  small,
  source,
  span,
  strong,
  style,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  template,
  textarea,
  tfoot,
  th,
  thead,
  time,
  title,
  tr,
  track,
  u,
  ul,
  variable,
  video,
  wbr,
  circle,
  clipPath,
  defs,
  ellipse,
  g,
  image,
  line,
  linearGradient,
  mask,
  path,
  pattern,
  polygon,
  polyline,
  radialGradient,
  rect,
  stop,
  svg,
  text,
  use,
} = vkml;

export function each<T>(
  listFn: () => T[],
  keyFn: (item: T, index: number) => unknown,
  renderFn: (item: Signal<T>, index: ReadonlySignal<number>) => Node,
): EachDescriptor<T> {
  return { __v_each: true, listFn, keyFn, renderFn };
}
