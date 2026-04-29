// ── LiveEditor (main) ──────────────────────────────────────
import {
  article,
  button,
  css,
  cx,
  div,
  effect,
  html,
  onDispose,
  signal,
  vkml,
} from "@vanillakit/vanillakit";
import { CodeJar } from "codejar";
import { withLineNumbers } from "codejar-linenumbers";
import Prism from "prismjs";

import {
  liveEditorRootClass,
  backdropClass,
  backdropVisibleClass,
  shellClass,
  fullscreenShellClass,
  workspaceClass,
  workspaceSplitClass,
  paneClass,
  codePaneClass,
  fullscreenPaneClass,
  hiddenPaneClass,
  editorsViewportClass,
  editorClass,
  previewOutputClass,
} from "./styles";
import { evaluateInSandbox, SandboxEnv, stripImports } from "./sandbox";
import { ControlsBar } from "./ControlsBar";
import { PreviewPane } from "./PreviewPane";

export type { SandboxEnv };

export function LiveEditor({
  sourceVariants,
  label = "Live output",
  sandboxEnv,
}: {
  sourceVariants: Record<string, string>;
  label?: string;
  sandboxEnv?: SandboxEnv;
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
    prevDisposers = evaluateInSandbox(
      code,
      outputContainer,
      (v) => err(v),
      sandboxEnv,
      prevDisposers,
    );
  }

  function buildEditor(variantName: string) {
    const wrapper = document.createElement("div");
    const editorEl = document.createElement("div");
    editorEl.className = `${editorClass} language-typescript`;
    wrapper.appendChild(editorEl);

    const initialCode = sourceVariants[variantName].trim();
    const sig = signal(initialCode);

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
            // @ts-ignore
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
        // Code pane
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
        // Preview pane
        PreviewPane({
          fullscreen,
          fullscreenLayout,
          fullscreenPanel,
          label,
          modified,
          onReset: reset,
          err,
          outputContainer,
        }),
      ),
      // Controls
      ControlsBar({
        fullscreen,
        fullscreenLayout,
        fullscreenPanel,
        onMaximize: maximize,
        onMinimize: minimize,
        onToggleLayout: toggleFullscreenLayout,
      }),
    ),
  );

  for (const fn of manualDisposers) onDispose(root, fn);

  return root;
}