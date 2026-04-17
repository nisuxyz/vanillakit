/** @type {number} */
let cssCounter = 0;
/** @type {CSSStyleSheet} */
const cssSheet = new CSSStyleSheet();
document.adoptedStyleSheets = [...document.adoptedStyleSheets, cssSheet];

/** @returns {string} */
function _cssId() {
  return "v-" + (cssCounter++).toString(36);
}

/**
 * @param {string[]} rules
 */
function _insertRules(rules) {
  for (const r of rules) {
    const t = r.trim();
    if (!t) continue;
    try {
      cssSheet.insertRule(t, cssSheet.cssRules.length);
    } catch (/** @type {*} */ e) {
      console.warn("[css] Invalid rule:", e.message, "→", t.slice(0, 120));
    }
  }
}

/**
 * Scoped CSS tagged template. Returns a unique class name.
 * @param {TemplateStringsArray} strings
 * @param {...(string | number)} values
 * @returns {string}
 */
export function css(strings, ...values) {
  let raw = "";
  for (let i = 0; i < strings.length; i++) {
    raw += strings[i];
    if (i < values.length) raw += values[i];
  }
  const cn = _cssId();
  _insertRules(_compileScoped(raw, `.${cn}`));
  return cn;
}

/**
 * Creates a scoped @keyframes rule. Returns the animation name.
 * @param {TemplateStringsArray} strings
 * @param {...(string | number)} values
 * @returns {string}
 */
export function keyframes(strings, ...values) {
  let raw = "";
  for (let i = 0; i < strings.length; i++) {
    raw += strings[i];
    if (i < values.length) raw += values[i];
  }
  const name = _cssId();
  _insertRules([`@keyframes ${name} { ${raw} }`]);
  return name;
}

/**
 * Injects global (unscoped) CSS rules.
 * @param {TemplateStringsArray} strings
 * @param {...(string | number)} values
 * @returns {void}
 */
export function globalCss(strings, ...values) {
  let raw = "";
  for (let i = 0; i < strings.length; i++) {
    raw += strings[i];
    if (i < values.length) raw += values[i];
  }
  const lines = raw.split("\n");
  const rest = [];
  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith("@import ")) {
      const m =
        t.match(/@import\s+url\(\s*['"]?([^'")\s]+)['"]?\s*\)/) ||
        t.match(/@import\s+['"]([^'"]+)['"]/);
      if (m) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = m[1];
        document.head.appendChild(link);
      }
    } else {
      rest.push(line);
    }
  }
  _insertRules(_parseTopLevel(rest.join("\n")));
}

/**
 * Joins class names, filtering out falsy values.
 * @param {...(string | false | null | undefined | 0)} args
 * @returns {string}
 */
export function cx(...args) {
  return args.filter(Boolean).join(" ");
}

/**
 * @param {string} text
 * @returns {string[]}
 */
function _parseTopLevel(text) {
  /** @type {string[]} */
  const rules = [];
  let depth = 0;
  let cur = "";
  let inStr = false;
  let sCh = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inStr) {
      cur += ch;
      if (ch === sCh && text[i - 1] !== "\\") inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inStr = true;
      sCh = ch;
      cur += ch;
      continue;
    }
    if (ch === "{") {
      depth++;
      cur += ch;
    } else if (ch === "}") {
      depth--;
      cur += ch;
      if (depth === 0) {
        if (cur.trim()) rules.push(cur.trim());
        cur = "";
      }
    } else {
      cur += ch;
    }
  }
  return rules;
}

/**
 * @param {string} cssText
 * @param {string} rootSel
 * @returns {string[]}
 */
function _compileScoped(cssText, rootSel) {
  const ast = _parseBlocks(cssText);
  /** @type {string[]} */
  const rules = [];
  _flattenNode(ast, rootSel, rules);
  return rules;
}

/**
 * @typedef {{ selector: string; declarations: string; children: CssNode[] }} CssNode
 */

/**
 * @param {string} text
 * @returns {CssNode}
 */
function _parseBlocks(text) {
  /** @type {CssNode} */
  const root = { declarations: "", children: [], selector: "" };
  /** @type {CssNode[]} */
  const stack = [root];
  let cur = "";
  let inStr = false;
  let sCh = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inStr) {
      cur += ch;
      if (ch === sCh && text[i - 1] !== "\\") inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inStr = true;
      sCh = ch;
      cur += ch;
      continue;
    }
    if (ch === "{") {
      const raw = cur.trim();
      cur = "";
      const lastSemi = raw.lastIndexOf(";");
      let selector;
      if (lastSemi !== -1) {
        const decls = raw.slice(0, lastSemi + 1).trim();
        if (decls) {
          const top = stack[stack.length - 1];
          top.declarations += (top.declarations ? " " : "") + decls;
        }
        selector = raw.slice(lastSemi + 1).trim();
      } else {
        selector = raw;
      }
      /** @type {CssNode} */
      const node = { selector, declarations: "", children: [] };
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    } else if (ch === "}") {
      const d = cur.trim();
      if (d) {
        const top = stack[stack.length - 1];
        top.declarations += (top.declarations ? " " : "") + d;
      }
      cur = "";
      stack.pop();
    } else {
      cur += ch;
    }
  }
  const leftover = cur.trim();
  if (leftover)
    root.declarations += (root.declarations ? " " : "") + leftover;
  return root;
}

/**
 * @param {CssNode} node
 * @param {string} ctx
 * @param {string[]} rules
 */
function _flattenNode(node, ctx, rules) {
  if (node.declarations) rules.push(`${ctx} { ${node.declarations} }`);
  for (const child of node.children) {
    const sel = child.selector;
    if (!sel) {
      if (child.declarations) rules.push(`${ctx} { ${child.declarations} }`);
      for (const gc of child.children) _flattenNode(gc, ctx, rules);
    } else if (/^@(media|supports|container|layer)\b/.test(sel)) {
      const inner = [];
      if (child.declarations) inner.push(`${ctx} { ${child.declarations} }`);
      for (const gc of child.children) _flattenNode(gc, ctx, inner);
      if (inner.length) rules.push(`${sel} { ${inner.join(" ")} }`);
    } else if (sel.includes("&")) {
      const resolved = sel
        .split(",")
        .map((p) => p.trim().replace(/&/g, ctx))
        .join(", ");
      if (child.declarations)
        rules.push(`${resolved} { ${child.declarations} }`);
      for (const gc of child.children) _flattenNode(gc, resolved, rules);
    } else {
      const resolved = `${ctx} ${sel}`;
      if (child.declarations)
        rules.push(`${resolved} { ${child.declarations} }`);
      for (const gc of child.children) _flattenNode(gc, resolved, rules);
    }
  }
}
