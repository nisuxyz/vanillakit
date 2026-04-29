import { describe, test, expect, beforeEach } from "bun:test";
import { css, keyframes, globalCss, cx } from "../src/css.js";

// ─────────────────────────────────────────────
// cx()
// ─────────────────────────────────────────────
describe("cx", () => {
  test("joins class names", () => {
    expect(cx("a", "b", "c")).toBe("a b c");
  });

  test("filters falsy values", () => {
    expect(cx("a", false, "b", null, "c", undefined, 0, "")).toBe("a b c");
  });

  test("returns empty string for all falsy", () => {
    expect(cx(false, null, undefined, 0)).toBe("");
  });

  test("single class name", () => {
    expect(cx("only")).toBe("only");
  });

  test("conditional usage", () => {
    const isActive = true;
    const isDisabled = false;
    expect(cx("btn", isActive && "active", isDisabled && "disabled")).toBe("btn active");
  });
});

// ─────────────────────────────────────────────
// css() — scoped styles
// ─────────────────────────────────────────────
describe("css", () => {
  test("returns a unique class name string", () => {
    const cn = css`color: red;`;
    expect(typeof cn).toBe("string");
    expect(cn.length).toBeGreaterThan(0);
    expect(cn.startsWith("v-")).toBe(true);
  });

  test("returns different class names on each call", () => {
    const cn1 = css`color: red;`;
    const cn2 = css`color: blue;`;
    expect(cn1).not.toBe(cn2);
  });

  test("class name format is v- followed by base-36 counter", () => {
    const cn = css`font-size: 14px;`;
    // v- prefix, then base-36 chars
    expect(cn).toMatch(/^v-[0-9a-z]+$/);
  });

  test("handles interpolated values", () => {
    const size = 16;
    const cn = css`font-size: ${size}px;`;
    expect(typeof cn).toBe("string");
    expect(cn.startsWith("v-")).toBe(true);
  });

  test("handles nested selectors", () => {
    // Should not throw
    const cn = css`
      color: red;
      & .child {
        color: blue;
      }
    `;
    expect(typeof cn).toBe("string");
  });

  test("handles @media nested rules", () => {
    const cn = css`
      color: red;
      @media (max-width: 768px) {
        color: blue;
      }
    `;
    expect(typeof cn).toBe("string");
  });

  test("handles & substitution in selectors", () => {
    const cn = css`
      color: red;
      &:hover {
        color: blue;
      }
      &.active {
        color: green;
      }
    `;
    expect(typeof cn).toBe("string");
  });

  test("handles child selectors", () => {
    const cn = css`
      color: red;
      p {
        margin: 0;
      }
      span {
        font-weight: bold;
      }
    `;
    expect(typeof cn).toBe("string");
  });
});

// ─────────────────────────────────────────────
// keyframes()
// ─────────────────────────────────────────────
describe("keyframes", () => {
  test("returns a unique animation name", () => {
    const name = keyframes`
      from { opacity: 0; }
      to { opacity: 1; }
    `;
    expect(typeof name).toBe("string");
    expect(name.startsWith("v-")).toBe(true);
  });

  test("returns different names on each call", () => {
    const n1 = keyframes`from { opacity: 0; } to { opacity: 1; }`;
    const n2 = keyframes`from { scale: 0; } to { scale: 1; }`;
    expect(n1).not.toBe(n2);
  });

  test("handles interpolated values", () => {
    const start = 0;
    const end = 1;
    const name = keyframes`from { opacity: ${start}; } to { opacity: ${end}; }`;
    expect(typeof name).toBe("string");
  });
});

// ─────────────────────────────────────────────
// globalCss()
// ─────────────────────────────────────────────
describe("globalCss", () => {
  test("does not return a value (void)", () => {
    const result = globalCss`body { margin: 0; }`;
    expect(result).toBeUndefined();
  });

  test("handles @import url() by adding link element", () => {
    const headBefore = document.head.querySelectorAll("link[rel='stylesheet']").length;
    globalCss`@import url('https://example.com/styles.css');`;
    const headAfter = document.head.querySelectorAll("link[rel='stylesheet']").length;
    expect(headAfter).toBe(headBefore + 1);
    const link = document.head.querySelector("link[href='https://example.com/styles.css']");
    expect(link).toBeTruthy();
  });

  test("handles @import with quotes", () => {
    const headBefore = document.head.querySelectorAll("link[rel='stylesheet']").length;
    globalCss`@import url("https://example.com/other.css");`;
    const headAfter = document.head.querySelectorAll("link[rel='stylesheet']").length;
    expect(headAfter).toBe(headBefore + 1);
  });

  test("handles mixed @import and regular rules", () => {
    // Should not throw
    globalCss`
      @import url('https://example.com/mixed.css');
      body { margin: 0; padding: 0; }
    `;
  });
});

// ─────────────────────────────────────────────
// Internal CSS parser behavior (tested via css())
// ─────────────────────────────────────────────
describe("CSS compilation (via css())", () => {
  test("deeply nested selectors compile without error", () => {
    const cn = css`
      color: red;
      .child {
        color: blue;
        .grandchild {
          color: green;
        }
      }
    `;
    expect(typeof cn).toBe("string");
  });

  test("multiple @media blocks", () => {
    const cn = css`
      color: red;
      @media (min-width: 768px) {
        color: blue;
      }
      @media (min-width: 1024px) {
        color: green;
      }
    `;
    expect(typeof cn).toBe("string");
  });

  test("@supports rule", () => {
    const cn = css`
      display: flex;
      @supports (display: grid) {
        display: grid;
      }
    `;
    expect(typeof cn).toBe("string");
  });

  test("@container rule", () => {
    const cn = css`
      color: red;
      @container (min-width: 400px) {
        color: blue;
      }
    `;
    expect(typeof cn).toBe("string");
  });

  test("comma-separated selectors with &", () => {
    const cn = css`
      color: red;
      &:hover, &:focus {
        color: blue;
      }
    `;
    expect(typeof cn).toBe("string");
  });

  test("declarations with strings containing braces", () => {
    // Ensure the parser handles quoted strings with braces
    const cn = css`
      content: "{ }";
      color: red;
    `;
    expect(typeof cn).toBe("string");
  });

  test("empty CSS does not crash", () => {
    const cn = css``;
    expect(typeof cn).toBe("string");
  });

  test("CSS with only whitespace does not crash", () => {
    const cn = css`   `;
    expect(typeof cn).toBe("string");
  });
});
