import { effect,signal } from "../index.js";
import type { ThemeToggle } from "./types.js";
export type { SidebarGroup,Tab, ThemeToggle } from "./types.js";

import "./vanilla.css";

let _initialized = false;

export function initVanillaCss(): void {
  if (_initialized) return;
  _initialized = true;
}

const STORAGE_KEY = "vanillacss-theme";

export function themeToggle(): ThemeToggle {
  const stored = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const systemTheme = () => (prefersDark.matches ? "dark" : "light");

  const initial = stored || systemTheme();
  const theme = signal(initial);

  function apply(value: string): void {
    document.documentElement.dataset.theme = value;
  }

  apply(theme());

  effect(() => {
    apply(theme());
  });

  prefersDark.addEventListener("change", () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      theme(systemTheme());
    }
  });

  return {
    theme,
    toggle() {
      const next = theme() === "dark" ? "light" : "dark";
      theme(next);
      localStorage.setItem(STORAGE_KEY, next);
    },
    set(value: "dark" | "light" | "auto") {
      if (value === "auto") {
        localStorage.removeItem(STORAGE_KEY);
        theme(systemTheme());
      } else {
        theme(value);
        localStorage.setItem(STORAGE_KEY, value);
      }
    },
  };
}
