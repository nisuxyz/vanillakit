import {
  signal, computed, effect, batch, untrack,
  reactive, toRaw, isReactive, snapshot,
  html, each,
  css, keyframes, globalCss, cx,
} from "../../src/index.js";
import { CodeJar } from "codejar";
import { withLineNumbers } from "codejar-linenumbers";
import "codejar-linenumbers/es/codejar-linenumbers.css";
import Prism from "prismjs";

// ── Styles ─────────────────────────────────────────────────
const wrapperClass = css`
  margin: 8px 0 24px;
`;

globalCss`
  /* CodeJar editor overrides */
  .codejar-wrap {
    border-radius: var(--radius) var(--radius) 0 0;
    border: 1px solid var(--border);
    background: #111118;
  }
  .codejar-wrap:focus-within {
    border-color: var(--accent);
  }
  .codejar-linenumbers-inner-wrap {
    background: #111118 !important;
  }
  .codejar-linenumbers {
    background-color: rgba(255,255,255,0.04) !important;
  }
  .codejar-linenumber {
    color: #4a4a5a !important;
  }
`;

const editorClass = css`
  display: block;
  width: 100%;
  min-height: 60px;
  font-family: var(--mono);
  font-size: 0.82rem;
  line-height: 1.6;
  background: #111118;
  color: #d4d4d8;
  padding: 16px;
  tab-size: 2;
  white-space: pre;
  overflow-x: auto;
  outline: none;
  box-sizing: border-box;
  border: none;
  border-radius: var(--radius) var(--radius) 0 0;
`;

const outputClass = css`
  background: var(--surface);
  border: 1px solid var(--border);
  border-top: none;
  border-radius: 0 0 var(--radius) var(--radius);
  padding: 20px;
`;

const outputHeaderClass = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

const outputLabelClass = css`
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 6px;
  &::before { content: "▶"; font-size: 0.55rem; }
`;

const resetBtnClass = css`
  font-family: var(--mono);
  font-size: 0.68rem;
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 2px 6px;
  &:hover { color: var(--accent); }
`;

const errorClass = css`
  color: #e45;
  font-family: var(--mono);
  font-size: 0.8rem;
  white-space: pre-wrap;
  margin: 0;
`;

// ── Sandbox ────────────────────────────────────────────────
const SANDBOX_NAMES = [
  "signal", "computed", "effect", "batch", "untrack",
  "reactive", "toRaw", "isReactive", "snapshot",
  "html", "each",
  "css", "keyframes", "globalCss", "cx",
];

const SANDBOX_VALUES: unknown[] = [
  signal, computed, effect, batch, untrack,
  reactive, toRaw, isReactive, snapshot,
  html, each,
  css, keyframes, globalCss, cx,
];

// ── Component ──────────────────────────────────────────────

/**
 * LiveEditor — editable source code that is eval'd in a sandbox and
 * rendered live underneath. The source string IS the code that runs.
 */
export function LiveEditor({
  source,
  label = "Live output",
}: {
  source: string;
  label?: string;
}) {
  const trimmed = source.trim();
  const err = signal("");
  const modified = signal(false);
  const outputContainer = document.createElement("div");
  let prevDisposers: (() => void)[] = [];

  function evaluate(code: string) {
    // Clean up effects from the previous run
    prevDisposers.forEach(d => d());
    prevDisposers = [];
    outputContainer.innerHTML = "";
    err("");

    const stripped = code.replace(/^import\s+.*$/gm, "").trim();
    if (!stripped) return;

    try {
      // Intercept document.body.append / appendChild to capture output
      const captured: Node[] = [];
      const fakeAppend = (...nodes: (Node | string)[]) => {
        for (const n of nodes)
          captured.push(typeof n === "string" ? document.createTextNode(n) : n);
      };
      const fakeBody = new Proxy(document.body, {
        get(target, prop) {
          if (prop === "append") return fakeAppend;
          if (prop === "appendChild") return (n: Node) => { captured.push(n); return n; };
          return Reflect.get(target, prop);
        },
      });
      const fakeDoc = new Proxy(document, {
        get(target, prop) {
          if (prop === "body") return fakeBody;
          if (prop === "getElementById") return () => {
            const el = document.createElement("div");
            (el as any).append = fakeAppend;
            return el;
          };
          const val = Reflect.get(target, prop);
          return typeof val === "function" ? val.bind(target) : val;
        },
      });

      // Wrap effect() to track disposers for cleanup on re-eval
      const disposers: (() => void)[] = [];
      const trackedEffect = (fn: () => void) => {
        const dispose = effect(fn);
        disposers.push(dispose);
        return dispose;
      };

      const fn = new Function(...SANDBOX_NAMES, "document", stripped);
      const args = SANDBOX_VALUES.map((v, i) =>
        SANDBOX_NAMES[i] === "effect" ? trackedEffect : v,
      );
      fn(...args, fakeDoc);

      captured.forEach(n => outputContainer.append(n));
      prevDisposers = disposers;
    } catch (e: any) {
      err(e?.message ?? String(e));
    }
  }

  // Initial evaluation
  evaluate(trimmed);

  // Build CodeJar editor
  const editorEl = document.createElement("div");
  editorEl.className = `${editorClass} language-javascript`;

  const highlight = withLineNumbers((el: HTMLElement) => {
    const code = el.textContent || "";
    el.innerHTML = Prism.highlight(code, Prism.languages.javascript, "javascript");
  }, {
    color: "#4a4a5a",
    backgroundColor: "rgba(255,255,255,0.04)",
  });

  // Defer CodeJar init until element is in the DOM
  requestAnimationFrame(() => {
    const jar = CodeJar(editorEl, highlight, {
      tab: "  ",
      catchTab: true,
      preserveIdent: true,
      addClosing: true,
    });
    // Set code via updateCode so highlighting + line numbers render immediately
    jar.updateCode(trimmed);
    jar.onUpdate(code => {
      modified(code !== trimmed);
      evaluate(code);
    });
    // Store jar on element for reset access
    (editorEl as any)._jar = jar;
  });

  function reset() {
    const jar = (editorEl as any)._jar;
    if (jar) jar.updateCode(trimmed);
    modified(false);
    evaluate(trimmed);
  }

  return html`<div class=${wrapperClass}>
    ${editorEl}
    <div class=${outputClass}>
      <div class=${outputHeaderClass}>
        <div class=${outputLabelClass}>${label}</div>
        ${() => modified() ? html`<button class=${resetBtnClass} onclick=${reset}>↺ reset</button>` : ""}
      </div>
      ${() => err() ? html`<pre class=${errorClass}>${err()}</pre>` : ""}
      ${outputContainer}
    </div>
  </div>`;
}
