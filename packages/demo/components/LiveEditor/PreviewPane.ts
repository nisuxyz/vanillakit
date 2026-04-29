// ── LiveEditor PreviewPane ──────────────────────────────────
import { button, div, header, Signal, cx, vkml } from "@vanillakit/vanillakit";
import {
  paneClass,
  previewPaneClass,
  previewPaneSplitClass,
  fullscreenPaneClass,
  hiddenPaneClass,
  previewBodyClass,
  previewOutputClass,
} from "./styles";

export interface PreviewPaneProps {
  fullscreen: Signal<boolean>;
  fullscreenLayout: Signal<"split" | "tab">;
  fullscreenPanel: Signal<"code" | "preview">;
  label: string;
  modified: Signal<boolean>;
  onReset: () => void;
  err: Signal<string>;
  outputContainer: HTMLElement;
}

export function PreviewPane({
  fullscreen,
  fullscreenLayout,
  fullscreenPanel,
  label,
  modified,
  onReset,
  err,
  outputContainer,
}: PreviewPaneProps) {
  return div(
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
      {
        style:
          "gap: 12px; margin-bottom: 14px; border-bottom: none; padding: 0;",
      },
      div(
        {
          style:
            "font-family: var(--vk-font-mono); font-size: 0.68rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vk-color-accent);",
        },
        "▶ ",
        label,
      ),
      () =>
        modified()
          ? button(
              {
                "data-style-variant": "ghost",
                style: "padding: 2px 8px; font-size: 0.7rem;",
                onclick: onReset,
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
  );
}