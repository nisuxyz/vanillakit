// Badge.ts — Badge component for @vanillakit/ui
import { cn } from "@vanillakit/vss";
import { span } from "@vanillakit/vkml";
import { extractProps } from "./extractProps.js";
import type { CnInput } from "@vanillakit/vss";
import type { VanillaChild } from "@vanillakit/types";

// ── Variants ───────────────────────────────────────────────
export type BadgeVariant = "default" | "outline" | "danger" | "success" | "warning" | "info";

const VARIANT_STYLES: Record<BadgeVariant, Record<string, string>> = {
  default: {
    "s-background": "var(--vk-color-accent-dim)",
    "s-color": "var(--vk-color-accent)",
    "s-border": "1px solid var(--vk-color-accent)",
  },
  outline: {
    "s-background": "transparent",
    "s-color": "var(--vk-color-text)",
    "s-border": "1px solid var(--vk-color-border)",
  },
  danger: {
    "s-background": "var(--vk-color-danger-dim)",
    "s-color": "var(--vk-color-danger)",
    "s-border": "1px solid var(--vk-color-danger)",
  },
  success: {
    "s-background": "var(--vk-color-success-dim)",
    "s-color": "var(--vk-color-success)",
    "s-border": "1px solid var(--vk-color-success)",
  },
  warning: {
    "s-background": "var(--vk-color-warning-dim)",
    "s-color": "var(--vk-color-warning)",
    "s-border": "1px solid var(--vk-color-warning)",
  },
  info: {
    "s-background": "var(--vk-color-info-dim)",
    "s-color": "var(--vk-color-info)",
    "s-border": "1px solid var(--vk-color-info)",
  },
};

// ── Badge ──────────────────────────────────────────────────
export interface BadgeProps {
  /** Visual variant */
  variant?: BadgeVariant;
  /** Additional class names and s-* style attributes (merged via cn) */
  "s-cn"?: CnInput[];
}

export type BadgePropsOrChild = BadgeProps | VanillaChild;

export function Badge(...args: BadgePropsOrChild[]): Element {
  const { props, children } = extractProps<BadgeProps>(args);
  const { variant = "default" } = props;

  const attrs = cn(
    {
      "s-display": "inline-flex",
      "s-align-items": "center",
      "s-border-radius": "var(--vk-radius-full)",
      "s-padding": "var(--vk-space-xs) var(--vk-space-sm)",
      "s-font-size": "var(--vk-font-size-sm)",
      "s-font-weight": "500",
      "s-line-height": "var(--vk-line-height)",
      "s-white-space": "nowrap",
    },
    VARIANT_STYLES[variant],
    ...(props["s-cn"] ?? []),
  );

  return span(attrs, ...children);
}