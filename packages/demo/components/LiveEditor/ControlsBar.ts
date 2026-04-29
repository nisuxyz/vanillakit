// ── LiveEditor ControlsBar ───────────────────────────────────
import { button, div, Signal, cx } from "@vanillakit/vanillakit";
import {
  controlsClass,
  controlGroupClass,
  fullscreenTabPickerClass,
} from "./styles";
import {
  fullscreenIcon,
  minimizeIcon,
  splitViewIcon,
  tabViewIcon,
  codeIcon,
  previewIcon,
} from "./icons";

export interface ControlsBarProps {
  fullscreen: Signal<boolean>;
  fullscreenLayout: Signal<"split" | "tab">;
  fullscreenPanel: Signal<"code" | "preview">;
  onMaximize: () => void;
  onMinimize: () => void;
  onToggleLayout: () => void;
}

export function ControlsBar({
  fullscreen,
  fullscreenLayout,
  fullscreenPanel,
  onMaximize,
  onMinimize,
  onToggleLayout,
}: ControlsBarProps) {
  return div(
    { class: controlsClass },
    div({ class: controlGroupClass }, () =>
      fullscreen()
        ? [
            button(
              {
                "data-style-variant": "outline",
                style:
                  "border-radius: var(--vk-radius-full); white-space: nowrap;",
                onclick: onToggleLayout,
              },
              fullscreenLayout() === "split" ? splitViewIcon : tabViewIcon,
            ),
            fullscreenLayout() === "tab"
              ? div(
                  { class: fullscreenTabPickerClass },
                  button(
                    {
                      "data-style-variant": "outline",
                      "data-color-variant": () =>
                        fullscreenPanel() === "code" ? "primary" : undefined,
                      style:
                        "border-radius: var(--vk-radius-full); white-space: nowrap;",
                      onclick: () => fullscreenPanel("code"),
                    },
                    codeIcon,
                  ),
                  button(
                    {
                      "data-style-variant": "outline",
                      "data-color-variant": () =>
                        fullscreenPanel() === "preview" ? "primary" : undefined,
                      style:
                        "border-radius: var(--vk-radius-full); white-space: nowrap;",
                      onclick: () => fullscreenPanel("preview"),
                    },
                    previewIcon,
                  ),
                )
              : null,
            button(
              {
                "data-style-variant": "outline",
                "data-hover": "scale",
                style:
                  "border-radius: var(--vk-radius-full); white-space: nowrap;",
                onclick: onMinimize,
              },
              minimizeIcon,
            ),
          ]
        : button(
            {
              "data-style-variant": "outline",
              style:
                "border-radius: var(--vk-radius-full); white-space: nowrap;",
              onclick: onMaximize,
            },
            fullscreenIcon,
          ),
    ),
  );
}