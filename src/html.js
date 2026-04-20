import { signal, effect, untrack } from "./signal.js";

/** @type {number} */
let uid = 0;
const MARKER_ATTR = "data-v-";

// custom type for "vanilla elements" so you don't have to type Node | DocumentFragment
/**
 * @typedef {Node | DocumentFragment} VanillaElement
 */

/**
 * Tagged template that creates live DOM with reactive bindings.
 * @param {TemplateStringsArray} strings
 * @param {...*} values
 * @returns {VanillaElement}
 */
export function html(strings, ...values) {
  const id = uid++;
  let h = "";
  const attrBindings = [];

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
  /** @type {Array<() => void>} */
  const disposers = [];

  for (const { index, attrName, elemMarker } of attrBindings) {
    const el = fragment.querySelector(`[${elemMarker}]`);
    if (!el) continue;
    el.removeAttribute(elemMarker);
    _bindAttr(/** @type {HTMLElement} */(el), attrName, values[index], disposers);
  }

  const walker = document.createTreeWalker(
    fragment,
    NodeFilter.SHOW_COMMENT,
  );
  const comments = [];
  while (walker.nextNode()) {
    const c = /** @type {Comment} */ (walker.currentNode);
    if (c.data.startsWith(`v${id}-`)) {
      comments.push({
        node: c,
        index: parseInt(c.data.slice(`v${id}-`.length)),
      });
    }
  }
  for (const { node, index } of comments)
    _bindChild(node, values[index], disposers);

  // @ts-ignore — custom dispose property
  fragment.__v_dispose = () => {
    for (const d of disposers) d();
    disposers.length = 0;
  };
  const nodes = [...fragment.childNodes];
  if (nodes.length > 0)
    // @ts-ignore — custom disposers property
    (nodes[0].__v_disposers || (nodes[0].__v_disposers = [])).push(
      // @ts-ignore
      fragment.__v_dispose,
    );
  return fragment.childNodes.length === 1
    ? fragment.childNodes[0]
    : fragment;
}

/**
 * @param {string} str
 * @returns {boolean}
 */
function _isInTag(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ">") return false;
    if (str[i] === "<") return true;
  }
  return false;
}

/**
 * @param {HTMLElement} el
 * @param {string} name
 * @param {*} value
 * @param {Array<() => void>} disposers
 */
function _bindAttr(el, name, value, disposers) {
  if (name.startsWith("on")) {
    el.addEventListener(
      name.slice(2).toLowerCase(),
      typeof value === "function" ? value : () => { },
    );
    return;
  }
  if (name === "ref" && typeof value === "function") {
    value(el);
    return;
  }
  if (typeof value === "function") {
    disposers.push(effect(() => _setAttr(el, name, value())));
    return;
  }
  _setAttr(el, name, value);
}

/**
 * @param {HTMLElement} el
 * @param {string} name
 * @param {*} value
 */
function _setAttr(el, name, value) {
  if (name === "class" || name === "className")
    el.className = value ?? "";
  else if (name === "style" && typeof value === "object")
    Object.assign(el.style, value);
  else if (name === "style" && typeof value === "string")
    el.setAttribute("style", value);
  else if (name === "checked") /** @type {HTMLInputElement} */ (el).checked = !!value;
  else if (name === "value" && "value" in el) /** @type {HTMLInputElement} */ (el).value = value ?? "";
  else if (
    name === "disabled" ||
    name === "readonly" ||
    name === "hidden"
  ) {
    if (value) el.setAttribute(name, "");
    else el.removeAttribute(name);
  } else if (value === false || value == null) el.removeAttribute(name);
  else el.setAttribute(name, value === true ? "" : String(value));
}

/**
 * @param {Comment} anchor
 * @param {*} value
 * @param {Array<() => void>} disposers
 */
function _bindChild(anchor, value, disposers) {
  if (value != null && value.__v_each) {
    disposers.push(_mountEach(anchor, value));
    return;
  }
  if (typeof value === "function") {
    /** @type {Node | Node[] | null} */
    let cur = null;
    disposers.push(
      effect(() => {
        cur = _reconcile(anchor, cur, value());
      }),
    );
    return;
  }
  _reconcile(anchor, null, value);
}

/**
 * @param {Comment} anchor
 * @param {Node | Node[] | null} current
 * @param {*} value
 * @returns {Node | Node[] | null}
 */
function _reconcile(anchor, current, value) {
  const parent = anchor.parentNode;
  if (!parent) return current;
  if (current) {
    const ns = Array.isArray(current) ? current : [current];
    for (const n of ns)
      if (n.parentNode) {
        _disposeTree(n);
        /** @type {ChildNode} */ (n).remove();
      }
  }
  if (value == null || value === false || value === true) return null;
  if (Array.isArray(value)) {
    const frag = document.createDocumentFragment();
    const ns = [];
    for (const item of value.flat(Infinity)) {
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

/**
 * @param {*} v
 * @returns {Node | null}
 */
function _toNode(v) {
  if (v == null || v === false || v === true) return null;
  if (v instanceof Node) return v;
  return document.createTextNode(String(v));
}

/**
 * @param {Node} node
 */
function _disposeTree(node) {
  // @ts-ignore — custom disposers property
  if (node.__v_disposers) {
    // @ts-ignore
    for (const d of node.__v_disposers) d();
    // @ts-ignore
    node.__v_disposers = null;
  }
  if (node.childNodes) for (const c of node.childNodes) _disposeTree(c);
}

// ---- each() — Keyed list reconciliation ----

/**
 * Keyed list reconciliation for reactive arrays.
 * @template T
 * @param {() => T[]} listFn
 * @param {(item: T, index: number) => any} keyFn
 * @param {(item: import("./signal.js").Signal<T>, index: import("./signal.js").ReadonlySignal<number>) => Node} renderFn
 * @returns {{ __v_each: true, listFn: () => T[], keyFn: (item: T, index: number) => any, renderFn: (item: import("./signal.js").Signal<T>, index: import("./signal.js").ReadonlySignal<number>) => Node }}
 */
export function each(listFn, keyFn, renderFn) {
  return { __v_each: true, listFn, keyFn, renderFn };
}

/**
 * @param {Comment} anchor
 * @param {{ listFn: () => any[], keyFn: (item: any, index: number) => any, renderFn: Function }} desc
 * @returns {() => void}
 */
function _mountEach(anchor, { listFn, keyFn, renderFn }) {
  const endAnchor = document.createComment("/each");
  anchor.parentNode?.insertBefore(endAnchor, anchor.nextSibling);
  /** @type {Map<any, { nodes: Node[], disposers: Array<() => void>, itemSig: any, indexSig: any }>} */
  const entries = new Map();

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
          /** @type {ChildNode} */ (n).remove();
        }
        entries.delete(key);
      }
    }

    // Phase 2: Insert / update / reorder
    let cursor = anchor.nextSibling;

    for (let i = 0; i < arr.length; i++) {
      const key = newKeys[i];
      let entry = entries.get(key);

      if (!entry) {
        // New entry
        const itemSig = signal(arr[i]);
        const indexSig = signal(i);
        const disposers = [];
        /** @type {Node | DocumentFragment | undefined} */
        let rendered;
        const outerDispose = untrack(() => {
          rendered = renderFn(itemSig, indexSig);
          // @ts-ignore — custom dispose property
          return rendered?.__v_dispose || null;
        });
        const nodes =
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
          entry.nodes[entry.nodes.length - 1]?.nextSibling ?? cursor;
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
            ? entry.nodes[entry.nodes.length - 1].nextSibling
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
        /** @type {ChildNode} */ (n).remove();
      }
    }
    entries.clear();
    if (endAnchor.parentNode) endAnchor.remove();
  };
}


const x = html``;