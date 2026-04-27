import * as VanillaKit from "../../src/index.js";
import {
  signal,
  effect,
  vkml,
  css,
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

const liveEditorRootClass = css`
  position: relative;
`;

const backdropClass = css`
  position: fixed;
  inset: 0;
  background: rgba(8, 10, 16, 0.58);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 79;
`;

const backdropVisibleClass = css`
  opacity: 1;
  pointer-events: auto;
`;

const shellClass = css`
  position: relative;
  padding: 0;
  padding-inline: 0;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const fullscreenShellClass = css`
  position: fixed;
  inset: 2rem;
  z-index: 80;
  width: auto;
  max-width: none;
  height: calc(100vh - 4rem);
  margin: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
`;

const workspaceClass = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  min-height: 0;
  padding: 0;
`;

const workspaceSplitClass = css`
  height: 100%;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  }
`;

const paneClass = css`
  min-width: 0;
  min-height: 0;
`;

const fullscreenPaneClass = css`
  height: 100%;
`;

const codePaneClass = css`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--editor-bg);
`;

const editorsViewportClass = css`
  flex: 1;
  min-height: 0;
  overflow: auto;
  background: var(--editor-bg);
`;

const previewPaneClass = css`
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 18px 18px 78px;
  border-top: 1px solid var(--vk-color-border);
  background: var(--vk-color-bg);
`;

const previewPaneSplitClass = css`
  border-top: none;
  border-left: 1px solid var(--vk-color-border);

  @media (max-width: 960px) {
    border-left: none;
    border-top: 1px solid var(--vk-color-border);
  }
`;

const previewHeaderClass = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`;

const previewTitleClass = css`
  font-family: var(--vk-font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vk-color-accent);
`;

const previewBodyClass = css`
  flex: 1;
  min-height: 0;
  overflow: auto;
`;

const previewOutputClass = css`
  min-height: 100%;
`;

const controlsClass = css`
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
`;

const controlGroupClass = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
  padding: 8px;
  border: 1px solid var(--vk-color-border);
  border-radius: 999px;
  background: var(--editor-bg);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
  opacity: 0.98;
`;

const controlButtonClass = css`
  border-radius: 999px;
  white-space: nowrap;
`;

const fullscreenTabPickerClass = css`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const tabPickerButtonActiveClass = css`
  background: var(--vk-color-accent);
  color: white;
  border-color: var(--vk-color-accent);
`;

const hiddenPaneClass = css`
  display: none;
`;

type DisposableElement = HTMLElement & {
  __v_disposers?: Array<() => void> | null;
};

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
  const fullscreen = signal(false);
  const fullscreenLayout = signal<"split" | "tab">("split");
  const fullscreenPanel = signal<"code" | "preview">("code");
  const outputContainer = document.createElement("div");
  let prevDisposers: (() => void)[] = [];
  const manualDisposers: Array<() => void> = [];

  outputContainer.className = previewOutputClass;

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

  const maximize = () => {
    fullscreenPanel("code");
    fullscreen(true);
  };

  const minimize = () => {
    fullscreen(false);
  };

  const toggleFullscreenLayout = () => {
    if (fullscreenLayout() === "split") {
      fullscreenLayout("tab");
      fullscreenPanel("code");
      return;
    }
    fullscreenLayout("split");
  };

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

  const editorsViewport = div(
    { class: editorsViewportClass },
    ...variantNames.map((name) => {
      const el = editors[name].wrapper;
      manualDisposers.push(
        effect(() => {
          el.style.display = mode() === name ? "block" : "none";
        }),
      );
      return el;
    }),
  );

  let previousBodyOverflow = "";
  let bodyLocked = false;
  manualDisposers.push(
    effect(() => {
      if (fullscreen()) {
        if (!bodyLocked) {
          previousBodyOverflow = document.body.style.overflow;
          bodyLocked = true;
        }
        document.body.style.overflow = "hidden";
        return;
      }

      if (bodyLocked) {
        document.body.style.overflow = previousBodyOverflow;
        bodyLocked = false;
      }
    }),
  );

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || !fullscreen()) return;
    event.preventDefault();
    minimize();
  };

  document.addEventListener("keydown", handleKeydown);
  manualDisposers.push(() => {
    document.removeEventListener("keydown", handleKeydown);
  });
  manualDisposers.push(() => {
    prevDisposers.forEach((dispose) => dispose());
    prevDisposers = [];
    if (bodyLocked) {
      document.body.style.overflow = previousBodyOverflow;
      bodyLocked = false;
    }
  });

  const root = div(
    { class: liveEditorRootClass },
    div({
      class: () =>
        cx(backdropClass, fullscreen() ? backdropVisibleClass : undefined),
      onclick: minimize,
      "aria-hidden": true,
    }),
    article(
      {
        "data-card": true,
        class: () =>
          cx(shellClass, fullscreen() ? fullscreenShellClass : undefined),
      },
      div(
        {
          class: () =>
            cx(
              workspaceClass,
              fullscreen() && fullscreenLayout() === "split"
                ? workspaceSplitClass
                : undefined,
            ),
        },
        div(
          {
            class: () =>
              cx(
                paneClass,
                codePaneClass,
                fullscreen() ? fullscreenPaneClass : undefined,
                fullscreen() &&
                  fullscreenLayout() === "tab" &&
                  fullscreenPanel() !== "code"
                  ? hiddenPaneClass
                  : undefined,
              ),
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
          editorsViewport,
        ),
        div(
          {
            class: () =>
              cx(
                paneClass,
                previewPaneClass,
                fullscreen() ? fullscreenPaneClass : undefined,
                fullscreen() && fullscreenLayout() === "split"
                  ? previewPaneSplitClass
                  : undefined,
                fullscreen() &&
                  fullscreenLayout() === "tab" &&
                  fullscreenPanel() !== "preview"
                  ? hiddenPaneClass
                  : undefined,
              ),
          },
          header(
            { class: previewHeaderClass },
            div({ class: previewTitleClass }, "▶ ", label),
            () =>
              modified()
                ? button(
                    {
                      "data-style-variant": "ghost",
                      style: "padding: 2px 8px; font-size: 0.7rem;",
                      onclick: reset,
                    },
                    "Reset",
                  )
                : null,
          ),
          div(
            { class: previewBodyClass },
            () =>
              err()
                ? vkml.pre(
                    {
                      style:
                        "color: var(--vk-color-danger, #e45); margin: 0 0 12px; white-space: pre-wrap; font-family: var(--vk-font-mono); font-size: 0.8rem;",
                    },
                    err(),
                  )
                : null,
            outputContainer,
          ),
        ),
      ),
      div(
        { class: controlsClass },
        div({ class: controlGroupClass }, () =>
          fullscreen()
            ? [
                button(
                  {
                    "data-style-variant": "outline",
                    class: controlButtonClass,
                    onclick: toggleFullscreenLayout,
                  },
                  fullscreenLayout() === "split" ? "Tab view" : "Split view",
                ),
                fullscreenLayout() === "tab"
                  ? div(
                      { class: fullscreenTabPickerClass },
                      button(
                        {
                          "data-style-variant": "outline",
                          class: () =>
                            cx(
                              controlButtonClass,
                              fullscreenPanel() === "code"
                                ? tabPickerButtonActiveClass
                                : undefined,
                            ),
                          onclick: () => fullscreenPanel("code"),
                        },
                        "Code",
                      ),
                      button(
                        {
                          "data-style-variant": "outline",
                          class: () =>
                            cx(
                              controlButtonClass,
                              fullscreenPanel() === "preview"
                                ? tabPickerButtonActiveClass
                                : undefined,
                            ),
                          onclick: () => fullscreenPanel("preview"),
                        },
                        "Preview",
                      ),
                    )
                  : null,
                button(
                  {
                    "data-style-variant": "outline",
                    class: controlButtonClass,
                    onclick: minimize,
                  },
                  "Minimize",
                ),
              ]
            : button(
                {
                  "data-style-variant": "outline",
                  class: controlButtonClass,
                  onclick: maximize,
                },
                "Full screen",
              ),
        ),
      ),
    ),
  ) as DisposableElement;

  root.__v_disposers = [...(root.__v_disposers ?? []), ...manualDisposers];

  return root;
}
