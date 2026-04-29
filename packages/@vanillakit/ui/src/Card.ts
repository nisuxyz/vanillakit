// Card.ts — Card component for @vanillakit/ui
import { cn } from "@vanillakit/vss";
import { article, div, footer, header, section } from "@vanillakit/vkml";
import { extractProps } from "./extractProps.js";
import type { CnInput } from "@vanillakit/vss";
import type { VanillaChild } from "@vanillakit/types";

// ── Card ──────────────────────────────────────────────────
export interface CardProps {
  /** Additional class names and s-* style attributes (merged via cn) */
  "s-cn"?: CnInput[];
}

export type CardPropsOrChild = CardProps | VanillaChild;

export function Card(...args: CardPropsOrChild[]): Element {
  const { props, children } = extractProps<CardProps>(args);
  const attrs = cn(
    {
      "s-display": "flex",
      "s-flex-direction": "column",
      "s-gap": "var(--vk-space-md)",
      "s-border": "1px solid var(--vk-color-border)",
      "s-border-radius": "var(--vk-radius-lg)",
      "s-padding": "var(--vk-space-lg)",
      "s-background": "var(--vk-color-surface)",
      "s-box-shadow": "var(--vk-shadow-sm)",
    },
    ...(props["s-cn"] ?? []),
  );
  return article(attrs, ...children);
}

// ── CardHeader ─────────────────────────────────────────────
export interface CardHeaderProps {
  "s-cn"?: CnInput[];
}

export type CardHeaderPropsOrChild = CardHeaderProps | VanillaChild;

export function CardHeader(...args: CardHeaderPropsOrChild[]): Element {
  const { props, children } = extractProps<CardHeaderProps>(args);
  const attrs = cn(
    {
      "s-display": "flex",
      "s-flex-direction": "column",
      "s-padding-top": "0",
      "s-gap": "var(--vk-space-xs)",
    },
    ...(props["s-cn"] ?? []),
  );
  return header(attrs, ...children);
}

// ── CardTitle ──────────────────────────────────────────────
export interface CardTitleProps {
  "s-cn"?: CnInput[];
}

export type CardTitlePropsOrChild = CardTitleProps | VanillaChild;

export function CardTitle(...args: CardTitlePropsOrChild[]): Element {
  const { props, children } = extractProps<CardTitleProps>(args);
  const attrs = cn(
    {
      "s-font-size": "var(--vk-font-size-lg)",
      "s-font-weight": "600",
      "s-line-height": "var(--vk-line-height-tight)",
    },
    ...(props["s-cn"] ?? []),
  );
  return div(attrs, ...children);
}

// ── CardDescription ────────────────────────────────────────
export interface CardDescriptionProps {
  "s-cn"?: CnInput[];
}

export type CardDescriptionPropsOrChild = CardDescriptionProps | VanillaChild;

export function CardDescription(...args: CardDescriptionPropsOrChild[]): Element {
  const { props, children } = extractProps<CardDescriptionProps>(args);
  const attrs = cn(
    {
      "s-font-size": "var(--vk-font-size-sm)",
      "s-color": "var(--vk-color-text-muted)",
      "s-line-height": "var(--vk-line-height)",
    },
    ...(props["s-cn"] ?? []),
  );
  return div(attrs, ...children);
}

// ── CardContent ────────────────────────────────────────────
export interface CardContentProps {
  "s-cn"?: CnInput[];
}

export type CardContentPropsOrChild = CardContentProps | VanillaChild;

export function CardContent(...args: CardContentPropsOrChild[]): Element {
  const { props, children } = extractProps<CardContentProps>(args);
  return section(cn(...(props["s-cn"] ?? [])), ...children);
}

// ── CardFooter ─────────────────────────────────────────────
export interface CardFooterProps {
  "s-cn"?: CnInput[];
}

export type CardFooterPropsOrChild = CardFooterProps | VanillaChild;

export function CardFooter(...args: CardFooterPropsOrChild[]): Element {
  const { props, children } = extractProps<CardFooterProps>(args);
  const attrs = cn(
    {
      "s-display": "flex",
      "s-align-items": "center",
      "s-gap": "var(--vk-space-sm)",
    },
    ...(props["s-cn"] ?? []),
  );
  return footer(attrs, ...children);
}