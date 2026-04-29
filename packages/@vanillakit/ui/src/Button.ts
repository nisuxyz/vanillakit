// Button.ts — Button component for @vanillakit/ui
import { cn } from "@vanillakit/vss";
import { button } from "@vanillakit/vkml";
import { extractProps } from "./extractProps.js";
import type { CnInput, CnValue } from "@vanillakit/vss";
import type { VanillaChild } from "@vanillakit/types";

// ── Variants ───────────────────────────────────────────────
export type ButtonVariant = "default" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

const VARIANT_STYLES: Record<ButtonVariant, Record<string, string>> = {
  default: {
    "s-background": "var(--vk-color-accent)",
    "s-color": "#fff",
    "s-border": "1px solid var(--vk-color-accent)",
  },
  outline: {
    "s-background": "transparent",
    "s-color": "var(--vk-color-text)",
    "s-border": "1px solid var(--vk-color-border)",
  },
  ghost: {
    "s-background": "transparent",
    "s-color": "var(--vk-color-text)",
    "s-border": "1px solid transparent",
  },
  danger: {
    "s-background": "var(--vk-color-danger)",
    "s-color": "#fff",
    "s-border": "1px solid var(--vk-color-danger)",
  },
};

const SIZE_STYLES: Record<ButtonSize, Record<string, string>> = {
  sm: {
    "s-font-size": "var(--vk-font-size-sm)",
    "s-padding": "var(--vk-space-xs) var(--vk-space-sm)",
    "s-border-radius": "var(--vk-radius-sm)",
  },
  md: {
    "s-font-size": "var(--vk-font-size-base)",
    "s-padding": "var(--vk-space-sm) var(--vk-space-md)",
    "s-border-radius": "var(--vk-radius-md)",
  },
  lg: {
    "s-font-size": "var(--vk-font-size-lg)",
    "s-padding": "var(--vk-space-md) var(--vk-space-lg)",
    "s-border-radius": "var(--vk-radius-lg)",
  },
};

// ── Button ─────────────────────────────────────────────────
export interface ButtonProps {
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size */
  size?: ButtonSize;
  /** Additional class names and s-* style attributes (merged via cn) */
  "s-cn"?: CnInput[];
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onclick?: (e: MouseEvent) => void;
  /** Button type attribute */
  type?: "button" | "submit" | "reset";
}

export type ButtonPropsOrChild = ButtonProps | VanillaChild;

export function Button(...args: ButtonPropsOrChild[]): Element {
  const { props, children } = extractProps<ButtonProps>(args);
  const {
    variant = "default",
    size = "md",
    disabled,
    onclick,
    type,
  } = props;

  const attrs = cn(
    {
      "s-display": "inline-flex",
      "s-align-items": "center",
      "s-justify-content": "center",
      "s-font-weight": "600",
      "s-line-height": "var(--vk-line-height)",
      "s-white-space": "nowrap",
      "s-cursor": disabled ? "not-allowed" : "pointer",
      "s-opacity": disabled ? "0.5" : "1",
      "s-text-decoration": "none",
      "s-transition": `all var(--vk-transition-speed) var(--vk-ease-default)`,
    },
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    ...(props["s-cn"] ?? []),
  );

  if (disabled) attrs.disabled = "";
  if (type) attrs.type = type;
  if (onclick) attrs.onclick = onclick as CnValue;

  return button(attrs, ...children);
}