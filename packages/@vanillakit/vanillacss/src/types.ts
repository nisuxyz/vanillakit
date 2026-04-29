/**
 * Types for vanillacss — JS/TS enhancements for the vanilla CSS framework.
 * @module vanillacss/types
 */

import type { Signal } from "@vanillakit/signal";

// ── Theme ──────────────────────────────────────────────────

/** Theme toggle controller returned by `themeToggle()`. */
export interface ThemeToggle {
  theme: Signal<string>;
  toggle(): void;
  set(value: "dark" | "light" | "auto"): void;
}

// ── Navigation ─────────────────────────────────────────────

/** A tab item for tab-bar navigation. */
export interface Tab {
  label: string;
  path: string;
}

/** A sidebar navigation group with labeled items. */
export interface SidebarGroup<T extends string = string> {
  label: string;
  items: { id: T; label: string }[];
}
