let cssCounter = 0;
const cssSheet: CSSStyleSheet = new CSSStyleSheet();
document.adoptedStyleSheets = [...document.adoptedStyleSheets, cssSheet];

function _cssId(): string {
  return "v-" + (cssCounter++).toString(36);
}

function _insertRules(rules: string[]): void {
  for (const r of rules) {
    const t = r.trim();
    if (!t) continue;
    try {
      cssSheet.insertRule(t, cssSheet.cssRules.length);
    } catch (e) {
      console.warn(
        "[css] Invalid rule:",
        (e as Error).message,
        "→",
        t.slice(0, 120),
      );
    }
  }
}

export function css(
  strings: TemplateStringsArray,
  ...values: (string | number)[]
): string {
  let raw = "";
  for (let i = 0; i < strings.length; i++) {
    raw += strings[i];
    if (i < values.length) raw += values[i];
  }
  const cn = _cssId();
  _insertRules(_compileScoped(raw, `.${cn}`));
  return cn;
}

export function keyframes(
  strings: TemplateStringsArray,
  ...values: (string | number)[]
): string {
  let raw = "";
  for (let i = 0; i < strings.length; i++) {
    raw += strings[i];
    if (i < values.length) raw += values[i];
  }
  const name = _cssId();
  _insertRules([`@keyframes ${name} { ${raw} }`]);
  return name;
}

export function globalCss(
  strings: TemplateStringsArray,
  ...values: (string | number)[]
): void {
  let raw = "";
  for (let i = 0; i < strings.length; i++) {
    raw += strings[i];
    if (i < values.length) raw += values[i];
  }
  const lines = raw.split("\n");
  const rest: string[] = [];
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

export function cx(...args: (string | false | null | undefined | 0)[]): string {
  return args.filter(Boolean).join(" ");
}

function _parseTopLevel(text: string): string[] {
  const rules: string[] = [];
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

function _compileScoped(cssText: string, rootSel: string): string[] {
  const ast = _parseBlocks(cssText);
  const rules: string[] = [];
  _flattenNode(ast, rootSel, rules);
  return rules;
}

interface CssNode {
  selector: string;
  declarations: string;
  children: CssNode[];
}

function _parseBlocks(text: string): CssNode {
  const root: CssNode = { declarations: "", children: [], selector: "" };
  const stack: CssNode[] = [root];
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
      let selector: string;
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
      const node: CssNode = { selector, declarations: "", children: [] };
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
  if (leftover) root.declarations += (root.declarations ? " " : "") + leftover;
  return root;
}

function _flattenNode(node: CssNode, ctx: string, rules: string[]): void {
  if (node.declarations) rules.push(`${ctx} { ${node.declarations} }`);
  for (const child of node.children) {
    const sel = child.selector;
    if (!sel) {
      if (child.declarations) rules.push(`${ctx} { ${child.declarations} }`);
      for (const gc of child.children) _flattenNode(gc, ctx, rules);
    } else if (/^@(media|supports|container|layer)\b/.test(sel)) {
      const inner: string[] = [];
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
