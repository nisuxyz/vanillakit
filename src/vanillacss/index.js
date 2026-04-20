import { signal, effect } from "../index.js";

import "./vanilla.css";

let _initialized = false;

/**
 * Initialize vanillacss. CSS is loaded via native import.
 * Safe to call multiple times — only runs once.
 */
export function initVanillaCss() {
  if (_initialized) return;
  _initialized = true;
}

const STORAGE_KEY = "vanillacss-theme";

/**
 * Create a reactive theme toggle. Returns an object with:
 * - `theme`: a signal holding "dark" | "light"
 * - `toggle()`: switch between dark and light
 * - `set(value)`: explicitly set "dark" | "light" | "auto"
 *
 * Reads from localStorage on init, falls back to prefers-color-scheme.
 * Writes to document.documentElement.dataset.theme.
 */
export function themeToggle() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const systemTheme = () => (prefersDark.matches ? "dark" : "light");

  const initial = stored || systemTheme();
  const theme = signal(initial);

  // Apply theme to DOM
  function apply(/** @type {string} */ value) {
    document.documentElement.dataset.theme = value;
  }

  // Initial apply
  apply(theme());

  // React to signal changes
  effect(() => {
    apply(theme());
  });

  // Listen for system preference changes when no stored preference
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
    set(/** @type {"dark" | "light" | "auto"} */ value) {
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
