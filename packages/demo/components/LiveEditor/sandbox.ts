// ── LiveEditor Sandbox ──────────────────────────────────────
import * as VanillaKit from "@vanillakit/vanillakit";
import { effect } from "@vanillakit/vanillakit";
import { transform } from "sucrase";

const baseSandboxExports = [
  "signal",
  "computed",
  "effect",
  "batch",
  "untrack",
  "reactive",
  "toRaw",
  "isReactive",
  "snapshot",
  "html",
  "vkml",
  "each",
  "css",
  "keyframes",
  "globalCss",
  "cx",
];

const elements = [
  "a", "abbr", "address", "area", "article", "aside", "audio",
  "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button",
  "canvas", "caption", "cite", "code", "col", "colgroup",
  "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir",
  "div", "dl", "dt",
  "em", "embed",
  "fieldset", "figcaption", "figure", "footer", "form",
  "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr",
  "i", "iframe", "img", "input", "ins",
  "kbd",
  "label", "legend", "li", "link",
  "main", "map", "mark", "menu", "meta", "meter",
  "nav", "noscript",
  "object", "ol", "optgroup", "option", "output",
  "p", "picture", "pre", "progress",
  "q",
  "rp", "rt", "ruby",
  "s", "samp", "script", "section", "select", "small", "source", "span",
  "strong", "style", "sub", "summary", "sup",
  "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead",
  "time", "title", "tr", "track",
  "u", "ul",
  "variable", "video",
  "wbr",
  "circle", "clipPath", "defs", "ellipse", "g", "image", "line",
  "linearGradient", "mask", "path", "pattern", "polygon", "polyline",
  "radialGradient", "rect", "stop", "svg", "text", "use",
];

const baseSandboxNames = [...baseSandboxExports, ...elements];
const baseSandboxValues = baseSandboxNames.map((name) => (VanillaKit as any)[name]);

export interface SandboxEnv {
  [moduleSpecifier: string]: Record<string, any>;
}

interface ParsedImport {
  names: string[];       // named imports
  namespace?: string;     // import * as X
  module: string;        // module specifier
}

/**
 * Parse import statements from code and resolve them against sandboxEnv.
 * Returns { names, values } arrays suitable for spreading into Function args.
 */
function parseImports(code: string, sandboxEnv: SandboxEnv): { names: string[]; values: any[] } {
  const importRegex = /^import\s+(.+?)\s+from\s+["']([^"']+)["']/gm;
  const names: string[] = [];
  const values: any[] = [];

  let match: RegExpExecArray | null;
  while ((match = importRegex.exec(code)) !== null) {
    const [, importClause, moduleSpecifier] = match;
    const modExports = sandboxEnv[moduleSpecifier];
    if (!modExports) continue;

    // import * as Alias from "mod"
    const nsMatch = importClause.match(/\*\s+as\s+(\w+)/);
    if (nsMatch) {
      // We can't add a dynamic name to Function params, so we inject
      // the namespace as a named binding via the base sandbox.
      // Instead, we'll handle this in evaluateInSandbox by prepending a const.
      continue;
    }

    // import { X, Y as Z } from "mod"
    const namedMatch = importClause.match(/\{(.+)\}/);
    if (namedMatch) {
      const bindings = namedMatch[1].split(",").map((s) => s.trim());
      for (const binding of bindings) {
        const parts = binding.split(/\s+as\s+/).map((s) => s.trim());
        const originalName = parts[0];
        const localName = parts[1] || parts[0];
        if (modExports[originalName] !== undefined) {
          names.push(localName);
          values.push(modExports[originalName]);
        }
      }
    }
  }

  return { names, values };
}

/**
 * Strip import statements from code.
 */
export function stripImports(code: string): string {
  return code.replace(/^import\s+.*$/gm, "").trim();
}

/**
 * Build the sandbox environment: merge base VanillaKit exports with
 * user-provided sandboxEnv modules.
 */
export function buildSandboxEnv(sandboxEnv?: SandboxEnv): {
  names: string[];
  values: any[];
} {
  return { names: [...baseSandboxNames], values: [...baseSandboxValues] };
}

/**
 * Evaluate code in the sandbox, resolving imports from sandboxEnv.
 * Returns { outputContainer, error } or throws.
 */
export function evaluateInSandbox(
  code: string,
  outputContainer: HTMLElement,
  errSignal: (v: string) => void,
  sandboxEnv?: SandboxEnv,
  prevDisposers?: (() => void)[],
): (() => void)[] {
  // Reset
  prevDisposers?.forEach((d) => d());
  const disposers: (() => void)[] = [];
  outputContainer.innerHTML = "";
  errSignal("");

  const withoutImports = stripImports(code);
  if (!withoutImports) return disposers;

  let stripped: string;
  try {
    stripped = transform(withoutImports, {
      transforms: ["typescript"],
      disableESTransforms: true,
    }).code;
  } catch (e: any) {
    errSignal(e?.message ?? String(e));
    return disposers;
  }

  // Resolve imports from sandboxEnv
  const { names: importNames, values: importValues } = sandboxEnv
    ? parseImports(code, sandboxEnv)
    : { names: [] as string[], values: [] as any[] };

  // Handle namespace imports (import * as X from "mod")
  // We need to prepend const declarations for these
  let namespacePrefix = "";
  if (sandboxEnv) {
    const nsRegex = /^import\s+\*\s+as\s+(\w+)\s+from\s+["']([^"']+)["']/gm;
    let nsMatch: RegExpExecArray | null;
    while ((nsMatch = nsRegex.exec(code)) !== null) {
      const [, alias, moduleSpecifier] = nsMatch;
      const modExports = sandboxEnv[moduleSpecifier];
      if (modExports) {
        namespacePrefix += `const ${alias} = ${JSON.stringify(modExports)};\n`;
      }
    }
  }

  const fullCode = namespacePrefix + stripped;

  try {
    const captured: Node[] = [];
    const fakeAppend = (...nodes: (Node | string)[]) => {
      for (const n of nodes)
        captured.push(typeof n === "string" ? document.createTextNode(n) : n);
    };
    const fakeBody = new Proxy(document.body, {
      get(target, prop) {
        if (prop === "append") return fakeAppend;
        if (prop === "appendChild") {
          return (n: Node) => {
            captured.push(n);
            return n;
          };
        }
        return Reflect.get(target, prop);
      },
    });
    const fakeDoc = new Proxy(document, {
      get(target, prop) {
        if (prop === "body") return fakeBody;
        if (prop === "getElementById") {
          return () => {
            const el = document.createElement("div");
            (el as any).append = fakeAppend;
            return el;
          };
        }
        const val = Reflect.get(target, prop);
        return typeof val === "function" ? val.bind(target) : val;
      },
    });

    const trackedEffect = (fn: () => void) => {
      const dispose = effect(fn);
      disposers.push(dispose);
      return dispose;
    };

    const allNames = [...baseSandboxNames, ...importNames];
    const allValues = [
      ...baseSandboxValues.map((v, i) =>
        baseSandboxNames[i] === "effect" ? trackedEffect : v,
      ),
      ...importValues,
    ];

    const fn = new Function(...allNames, "document", fullCode);
    fn(...allValues, fakeDoc);

    captured.forEach((n) => outputContainer.append(n));
  } catch (e: any) {
    errSignal(e?.message ?? String(e));
  }

  return disposers;
}

export { baseSandboxNames, baseSandboxValues };