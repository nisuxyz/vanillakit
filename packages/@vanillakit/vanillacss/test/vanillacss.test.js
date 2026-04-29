import { describe, test, expect, beforeEach, afterEach, mock } from "bun:test";

// ─────────────────────────────────────────────
// We cannot test themeToggle easily because the
// vanillacss module imports a CSS file and has
// module-level state. We test what we can.
// ─────────────────────────────────────────────

beforeEach(() => {
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});

describe("themeToggle", () => {
  // Dynamically import to avoid module-level CSS import issues
  async function loadThemeToggle() {
    // Reset module cache by using a unique query param
    const mod = await import("../src/index.js");
    return mod.themeToggle;
  }

  test("themeToggle returns object with theme, toggle, set", async () => {
    const themeToggle = await loadThemeToggle();
    const tt = themeToggle();
    expect(typeof tt.theme).toBe("function"); // signal
    expect(typeof tt.toggle).toBe("function");
    expect(typeof tt.set).toBe("function");
  });

  test("theme signal has a value (dark or light)", async () => {
    const themeToggle = await loadThemeToggle();
    const tt = themeToggle();
    const val = tt.theme();
    expect(val === "dark" || val === "light").toBe(true);
  });

  test("toggle switches between dark and light", async () => {
    const themeToggle = await loadThemeToggle();
    const tt = themeToggle();
    const initial = tt.theme();
    tt.toggle();
    const toggled = tt.theme();
    expect(toggled).toBe(initial === "dark" ? "light" : "dark");
    tt.toggle();
    expect(tt.theme()).toBe(initial);
  });

  test("toggle saves to localStorage", async () => {
    const themeToggle = await loadThemeToggle();
    const tt = themeToggle();
    tt.toggle();
    const stored = localStorage.getItem("vanillacss-theme");
    expect(stored === "dark" || stored === "light").toBe(true);
  });

  test("set('dark') sets theme and saves", async () => {
    const themeToggle = await loadThemeToggle();
    const tt = themeToggle();
    tt.set("dark");
    expect(tt.theme()).toBe("dark");
    expect(localStorage.getItem("vanillacss-theme")).toBe("dark");
  });

  test("set('light') sets theme and saves", async () => {
    const themeToggle = await loadThemeToggle();
    const tt = themeToggle();
    tt.set("light");
    expect(tt.theme()).toBe("light");
    expect(localStorage.getItem("vanillacss-theme")).toBe("light");
  });

  test("set('auto') removes localStorage entry", async () => {
    const themeToggle = await loadThemeToggle();
    const tt = themeToggle();
    tt.set("dark");
    expect(localStorage.getItem("vanillacss-theme")).toBe("dark");
    tt.set("auto");
    expect(localStorage.getItem("vanillacss-theme")).toBeNull();
  });

  test("applies theme to document.documentElement.dataset.theme", async () => {
    const themeToggle = await loadThemeToggle();
    const tt = themeToggle();
    tt.set("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
    tt.set("light");
    expect(document.documentElement.dataset.theme).toBe("light");
  });
});

describe("initVanillaCss", () => {
  test("initVanillaCss is idempotent", async () => {
    const { initVanillaCss } = await import("../src/index.js");
    // Should not throw on multiple calls
    initVanillaCss();
    initVanillaCss();
    initVanillaCss();
  });
});
