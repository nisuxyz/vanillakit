import * as VanillaKit from "../../src/index.js";
import {
  article,
  button,
  css,
  cx,
  div,
  effect,
  globalCss,
  header,
  html,
  onDispose,
  signal,
  vkml,
} from "../../src/index.js";
import { CodeJar } from "codejar";
import { withLineNumbers } from "codejar-linenumbers";
import Prism from "prismjs";
import { transform } from "sucrase";

// ── Styles ─────────────────────────────────────────────────

globalCss`
  /* CodeJar editor overrides */
  .codejar-wrap {
    border-radius: var(--vk-radius-md) var(--vk-radius-md) 0 0;
    border: 1px solid var(--vk-color-border);
    background: var(--vk-color-surface);
  }
  .codejar-wrap:focus-within {
    border-color: var(--vk-color-accent);
  }
  .codejar-linenumbers-inner-wrap {
    background: var(--vk-color-surface) !important;
  }
  .codejar-linenumbers {
    background-color: var(--vk-color-surface-2) !important;
  }
  .codejar-linenumber {
    color: var(--vk-color-text-muted) !important;
  }
`;


const editorClass = css`
  display: block;
  width: 100%;
  min-height: 60px;
  font-family: var(--vk-font-mono);
  font-size: 0.82rem;
  line-height: 1.6;
  background: var(--vk-color-surface);
  color: var(--vk-color-text);
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
  margin-bottom: 2rem;
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
  background: var(--vk-color-surface);
`;

const editorsViewportClass = css`
  flex: 1;
  min-height: 0;
  overflow: auto;
  background: var(--vk-color-surface);
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
  right: var(--vk-space-xs);
  top: var(--vk-space-xs);
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
  border-radius: var(--vk-radius-full);
  background: var(--vk-color-surface);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
  opacity: 0.98;
`;

const fullscreenTabPickerClass = css`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const hiddenPaneClass = css`
  display: none;
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
          color: "var(--vk-color-text-muted)",
          backgroundColor: "var(--vk-color-surface-2)",
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
                { role: "tablist" },
                ...variantNames.map((name) =>
                  vkml.button(
                    {
                      role: "tab",
                      "aria-selected": () => mode() === name,
                      onclick: () => switchMode(name),
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
            { style: "gap: 12px; margin-bottom: 14px; border-bottom: none; padding: 0;" },
            div({ style: "font-family: var(--vk-font-mono); font-size: 0.68rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vk-color-accent);" }, "▶ ", label),
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
                    style: "border-radius: var(--vk-radius-full); white-space: nowrap;",
                    onclick: toggleFullscreenLayout,
                  },
                  // fullscreenLayout() === "split" ? "Toggleable view" : "Split view",
                  fullscreenLayout() === "split" ?
                    html`
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="m15.71 14.29-1.42 1.42 3 3L15 21h6v-6l-2.29 2.29zM8.29 9.71l1.42-1.42-3-3L9 3H3v6l2.29-2.29zm9-4.42-3 3 1.42 1.42 3-3L21 9V3h-6zM6.71 18.71l3-3-1.42-1.42-3 3L3 15v6h6z"></path>
</svg>
                    `:
                    html`
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M4 19V5h7v14zm16 0h-7V5h7z"></path>
</svg>`
                ),
                fullscreenLayout() === "tab"
                  ? div(
                      { class: fullscreenTabPickerClass },
                      button(
                        {
                          "data-style-variant": "outline",
                          "data-color-variant": () =>
                            fullscreenPanel() === "code" ? "primary" : undefined,
                          style: "border-radius: var(--vk-radius-full); white-space: nowrap;",
                          onclick: () => fullscreenPanel("code"),
                        },
                        // "Code",
                        html`<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M9.71 16.29 5.41 12l4.3-4.29-1.42-1.42L2.59 12l5.7 5.71zm6 1.42 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z"></path>
</svg>`
                      ),
                      button(
                        {
                          "data-style-variant": "outline",
                          "data-color-variant": () =>
                            fullscreenPanel() === "preview" ? "primary" : undefined,
                          style: "border-radius: var(--vk-radius-full); white-space: nowrap;",
                          onclick: () => fullscreenPanel("preview"),
                        },
                        // "Preview",
                        html`<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
</svg>`
                      ),
                    )
                  : null,
                button(
                  {
                    "data-style-variant": "outline",
                    "data-hover": "scale",
                    style: "border-radius: var(--vk-radius-full); white-space: nowrap;",
                    onclick: minimize,
                  },
                  // "Minimize",
                  html`
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24">
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M10 4H8v4H4v2h6zm0 16v-6H4v2h4v4zm6-4h4v-2h-6v6h2zm4-8h-4V4h-2v6h6z"></path>
</svg>
                  `
                ),
              ]
            : button(
                {
                  "data-style-variant": "outline",
                  style: "border-radius: var(--vk-radius-full); white-space: nowrap;",
                  onclick: maximize,
                },
                // "Full screen",
                html`
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" style="animation: vk-pulse 1s infinite;">
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M10 3H3v7h2V5h5zm0 16H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm0-11h-7v2h5v5h2z"></path>
</svg>
                `
              ),
        ),
      ),
    ),
  );

  for (const fn of manualDisposers) onDispose(root, fn);

  return root;
}
