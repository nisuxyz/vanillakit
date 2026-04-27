import * as VanillaKit from "../../src/index.js";
import {
  signal,
  computed,
  effect,
  batch,
  untrack,
  reactive,
  toRaw,
  isReactive,
  snapshot,
  html,
  vkml,
  each,
  css,
  keyframes,
  globalCss,
  cx,
  article,
  div,
  header,
  button,
} from "../../src/index.js";
import { CodeJar } from "codejar";
import { withLineNumbers } from "codejar-linenumbers";
import Prism from "prismjs";
import { transform } from "sucrase";

// ── Styles ─────────────────────────────────────────────────

globalCss`
  :root {
    --editor-bg: #111118;
    --editor-text: #d4d4d8;
    --editor-line-nr: #4a4a5a;
    --editor-gutter: rgba(255,255,255,0.04);
  }
  [data-theme="light"] {
    --editor-bg: #f5f5f8;
    --editor-text: #2a2a3e;
    --editor-line-nr: #a0a0b0;
    --editor-gutter: rgba(0,0,0,0.04);
  }
`;

globalCss`
  @media (prefers-color-scheme: light) {
    :root:not([data-theme]) {
      --editor-bg: #f5f5f8;
      --editor-text: #2a2a3e;
      --editor-line-nr: #a0a0b0;
      --editor-gutter: rgba(0,0,0,0.04);
    }
  }
`;

globalCss`
  /* CodeJar editor overrides */
  .codejar-wrap {
    border-radius: var(--vk-radius-md) var(--vk-radius-md) 0 0;
    border: 1px solid var(--vk-color-border);
    background: var(--editor-bg);
  }
  .codejar-wrap:focus-within {
    border-color: var(--vk-color-accent);
  }
  .codejar-linenumbers-inner-wrap {
    background: var(--editor-bg) !important;
  }
  .codejar-linenumbers {
    background-color: var(--editor-gutter) !important;
  }
  .codejar-linenumber {
    color: var(--editor-line-nr) !important;
  }
`;

const tabsContainerClass = css`
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--vk-color-border);
  background: var(--editor-bg);
  margin: 0;
  padding: 0;
`;

const tabButtonClass = css`
  flex: 0 1 auto;
  padding: 10px 16px;
  border: none;
  background: transparent;
  color: var(--editor-line-nr);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  &:hover {
    color: var(--editor-text);
  }
`;

const tabButtonActiveClass = css`
  color: var(--vk-color-accent);
  border-bottom-color: var(--vk-color-accent);
`;

const editorClass = css`
  display: block;
  width: 100%;
  min-height: 60px;
  font-family: var(--vk-font-mono);
  font-size: 0.82rem;
  line-height: 1.6;
  background: var(--editor-bg);
  color: var(--editor-text);
  padding: 16px;
  tab-size: 2;
  white-space: pre;
  overflow-x: auto;
  outline: none;
  box-sizing: border-box;
  border: none;
  margin: 0;
  border-radius: 0;
`;

// ── Sandbox ────────────────────────────────────────────────

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
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "variable",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "use",
];

const SANDBOX_NAMES = [...baseSandboxExports, ...elements];

const SANDBOX_VALUES = SANDBOX_NAMES.map((name) => (VanillaKit as any)[name]);

export function LiveEditor({
  sourceVariants,
  label = "Live output",
}: {
  sourceVariants: Record<string, string>;
  label?: string;
}) {
  const variantNames = Object.keys(sourceVariants);
  const initialMode = variantNames[0];
  const mode = signal<string>(initialMode);
  const err = signal("");
  const modified = signal(false);
  const outputContainer = document.createElement("div");
  let prevDisposers: (() => void)[] = [];

  function evaluate(code: string) {
    prevDisposers.forEach((d) => d());
    prevDisposers = [];
    outputContainer.innerHTML = "";
    err("");

    const withoutImports = code.replace(/^import\s+.*$/gm, "").trim();
    if (!withoutImports) return;

    let stripped: string;
    try {
      stripped = transform(withoutImports, {
        transforms: ["typescript"],
        disableESTransforms: true,
      }).code;
    } catch (e: any) {
      err(e?.message ?? String(e));
      return;
    }

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

      captured.forEach((n) => outputContainer.append(n));
      prevDisposers = disposers;
    } catch (e: any) {
      err(e?.message ?? String(e));
    }
  }

  function buildEditor(variantName: string) {
    const wrapper = document.createElement("div");
    const editorEl = document.createElement("div");
    editorEl.className = `${editorClass} language-typescript`;
    wrapper.appendChild(editorEl);

    const initialCode = sourceVariants[variantName].trim();
    const sig = signal(initialCode);

    // Store jar reference
    const state = {
      wrapper,
      editorEl,
      jar: null as null | ReturnType<typeof CodeJar>,
      sig,
      initialCode,
    };

    requestAnimationFrame(() => {
      const highlight = withLineNumbers(
        (el: HTMLElement) => {
          const code = el.textContent || "";
          el.innerHTML = Prism.highlight(
            code,
            /// @ts-ignore
            Prism.languages["typescript"],
            "typescript",
          );
        },
        {
          color: "#4a4a5a",
          backgroundColor: "rgba(255,255,255,0.04)",
        },
      );

      const jar = CodeJar(editorEl, highlight, {
        tab: "  ",
        catchTab: true,
        preserveIdent: true,
        addClosing: true,
      });

      state.jar = jar;
      jar.updateCode(initialCode);
      jar.onUpdate((code) => {
        sig(code);
        modified(code !== initialCode);
        evaluate(code);
      });
    });

    return state;
  }

  const editors: Record<
    string,
    {
      wrapper: HTMLElement;
      editorEl: HTMLElement;
      jar: any;
      sig: any;
      initialCode: string;
    }
  > = {};
  for (const name of variantNames) {
    editors[name] = buildEditor(name);
  }

  // Defer initial evaluation since jar initialization is deferred
  requestAnimationFrame(() => {
    evaluate(editors[mode()].initialCode);
  });

  function reset() {
    const state = editors[mode()];
    state.jar.updateCode(state.initialCode);
    state.sig(state.initialCode);
    modified(false);
    evaluate(state.initialCode);
  }

  function switchMode(newMode: string) {
    if (newMode === mode()) return;
    mode(newMode);
    const state = editors[newMode];
    modified(state.sig() !== state.initialCode);
    evaluate(state.sig());
  }

  return article(
    {
      "data-card": true,
      style:
        "padding: 0; padding-inline: 0; margin-bottom: 2rem; overflow: hidden;",
    },
    variantNames.length > 1
      ? div(
          { class: tabsContainerClass },
          ...variantNames.map((name) =>
            vkml.button(
              {
                class: () =>
                  cx(
                    tabButtonClass,
                    mode() === name ? tabButtonActiveClass : undefined,
                  ),
                onclick: () => switchMode(name),
                style:
                  "border-radius: var(--vk-radius-md) var(--vk-radius-md) 0 0; text-transform: uppercase;",
              },
              name,
            ),
          ),
        )
      : null,
    div(
      {
        class: css`
          padding-inline: 0;
          margin-top: 0;
        `,
      },
      () => {
        // Toggle visibility via display instead of remounting nodes.
        // Remounting breaks CodeJar's internal wrapper structure.
        return null; // The real nodes are returned separately below
      },
      ...variantNames.map((name) => {
        const el = editors[name].wrapper;
        // Effect to toggle display
        effect(() => {
          el.style.display = mode() === name ? "block" : "none";
        });
        return el;
      }),
    ),
    div(
      header(
        {
          style:
            "display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;",
        },
        div(
          {
            style:
              "font-family: var(--vk-font-mono); font-size: 0.68rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vk-color-accent);",
          },
          "▶ " + label,
        ),
        () =>
          modified()
            ? button(
                {
                  "data-style-variant": "ghost",
                  style: "padding: 2px 8px; font-size: 0.7rem;",
                  onclick: reset,
                },
                "↺ reset",
              )
            : null,
      ),
      () =>
        err()
          ? vkml.pre(
              {
                style:
                  "color: var(--vk-color-danger, #e45); margin: 0; white-space: pre-wrap; font-family: var(--vk-font-mono); font-size: 0.8rem;",
              },
              err(),
            )
          : null,
      outputContainer,
    ),
  );
}
