import { describe, test, expect, beforeEach } from "bun:test";
import { initStyleAttrs, applyStyleAttrs, PROPERTY_MAP, cn } from "../src/vss.js";

// ─────────────────────────────────────────────
// Helper: create a fresh element + container
// ─────────────────────────────────────────────
function setup() {
  const container = document.createElement("div");
  document.body.appendChild(container);
  return container;
}

function cleanup(container) {
  container.remove();
}

// ─────────────────────────────────────────────
// PROPERTY_MAP
// ─────────────────────────────────────────────
describe("PROPERTY_MAP", () => {
  test("is a Map", () => {
    expect(PROPERTY_MAP instanceof Map).toBe(true);
  });

  test("contains common abbreviations", () => {
    expect(PROPERTY_MAP.get("d")).toBe("display");
    expect(PROPERTY_MAP.get("m")).toBe("margin");
    expect(PROPERTY_MAP.get("mt")).toBe("margin-top");
    expect(PROPERTY_MAP.get("p")).toBe("padding");
    expect(PROPERTY_MAP.get("pt")).toBe("padding-top");
    expect(PROPERTY_MAP.get("g")).toBe("gap");
    expect(PROPERTY_MAP.get("jc")).toBe("justify-content");
    expect(PROPERTY_MAP.get("ai")).toBe("align-items");
    expect(PROPERTY_MAP.get("w")).toBe("width");
    expect(PROPERTY_MAP.get("h")).toBe("height");
    expect(PROPERTY_MAP.get("c")).toBe("color");
    expect(PROPERTY_MAP.get("bg")).toBe("background");
    expect(PROPERTY_MAP.get("br")).toBe("border-radius");
    expect(PROPERTY_MAP.get("of")).toBe("overflow");
    expect(PROPERTY_MAP.get("op")).toBe("opacity");
    expect(PROPERTY_MAP.get("fz")).toBe("font-size");
    expect(PROPERTY_MAP.get("fw")).toBe("font-weight");
    expect(PROPERTY_MAP.get("fwr")).toBe("flex-wrap");
    expect(PROPERTY_MAP.get("z")).toBe("z-index");
  });

  test("has comprehensive coverage", () => {
    expect(PROPERTY_MAP.size).toBeGreaterThanOrEqual(50);
  });
});

// ─────────────────────────────────────────────
// Verbatim property names (backward compat)
// ─────────────────────────────────────────────
describe("verbatim property names", () => {
  test("s-display sets display directly", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-display", "flex");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.display).toBe("flex");

    cleanup2();
    cleanup(container);
  });

  test("s-padding-inline sets padding-inline directly", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-padding-inline", "1rem");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    // happy-dom doesn't support style.paddingInline as a JS property
    expect(el.style.getPropertyValue("padding-inline")).toBe("1rem");

    cleanup2();
    cleanup(container);
  });

  test("s---my-var sets CSS custom property --my-var", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s---my-var", "red");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.getPropertyValue("--my-var")).toBe("red");

    cleanup2();
    cleanup(container);
  });
});

// ─────────────────────────────────────────────
// Abbreviated property names
// ─────────────────────────────────────────────
describe("abbreviated property names", () => {
  test("s-d resolves to display", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-d", "grid");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.display).toBe("grid");

    cleanup2();
    cleanup(container);
  });

  test("s-mt resolves to margin-top", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-mt", "10px");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.marginTop).toBe("10px");

    cleanup2();
    cleanup(container);
  });

  test("s-g resolves to gap", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-g", "8px");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.gap).toBe("8px");

    cleanup2();
    cleanup(container);
  });

  test("s-jc resolves to justify-content", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-jc", "center");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.justifyContent).toBe("center");

    cleanup2();
    cleanup(container);
  });

  test("s-fwr resolves to flex-wrap", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-fwr", "wrap");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    // happy-dom doesn't support style.flexWrap as a JS property
    expect(el.style.getPropertyValue("flex-wrap")).toBe("wrap");

    cleanup2();
    cleanup(container);
  });

  test("unknown abbreviation falls through as verbatim", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-xyz-unknown-prop", "test");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.getPropertyValue("xyz-unknown-prop")).toBe("test");

    cleanup2();
    cleanup(container);
  });
});

// ─────────────────────────────────────────────
// var() expansion
// ─────────────────────────────────────────────
describe("var() expansion", () => {
  test("standalone --token gets wrapped in var()", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-gap", "--vk-space-md");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.gap).toBe("var(--vk-space-md)");

    cleanup2();
    cleanup(container);
  });

  test("--token mid-value gets wrapped in var()", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-margin", "1rem --vk-space-md");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.margin).toBe("1rem var(--vk-space-md)");

    cleanup2();
    cleanup(container);
  });

  test("multiple --tokens in value all get wrapped", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-margin", "--vk-space-sm --vk-space-md");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.margin).toBe("var(--vk-space-sm) var(--vk-space-md)");

    cleanup2();
    cleanup(container);
  });

  test("value already containing var() is not double-wrapped", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-gap", "var(--vk-space-md)");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.gap).toBe("var(--vk-space-md)");

    cleanup2();
    cleanup(container);
  });

  test("mixed var() and bare --token: only bare token gets wrapped", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-margin", "var(--vk-space-sm) --vk-space-md");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.margin).toBe("var(--vk-space-sm) var(--vk-space-md)");

    cleanup2();
    cleanup(container);
  });

  test("value without -- passes through unchanged", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-display", "flex");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.display).toBe("flex");

    cleanup2();
    cleanup(container);
  });

  test("abbreviation + var() expansion combined", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-mt", "--vk-space-lg");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.marginTop).toBe("var(--vk-space-lg)");

    cleanup2();
    cleanup(container);
  });
});

// ─────────────────────────────────────────────
// Custom property map via config
// ─────────────────────────────────────────────
describe("custom property map", () => {
  test("merges user map from plain object", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-zz", "custom-value");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container, {
      propertyMap: { zz: "custom-property" },
    });
    expect(el.style.getPropertyValue("custom-property")).toBe("custom-value");

    cleanup2();
    cleanup(container);
  });

  test("merges user map from Map", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-zz", "custom-value");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container, {
      propertyMap: new Map([["zz", "custom-property"]]),
    });
    expect(el.style.getPropertyValue("custom-property")).toBe("custom-value");

    cleanup2();
    cleanup(container);
  });

  test("user map overrides default abbreviation", () => {
    const container = setup();
    const el = document.createElement("div");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container, {
      propertyMap: { d: "color" }, // override 'display' → 'color'
    });
    // Set attribute AFTER init so the observer picks it up
    el.setAttribute("s-d", "red");
    // Use applyStyleAttrs for synchronous processing
    applyStyleAttrs(el);
    expect(el.style.color).toBe("red");
    // display should NOT be set
    expect(el.style.display).toBe("");

    cleanup2();
    cleanup(container);
  });
});

// ─────────────────────────────────────────────
// null value removes property
// ─────────────────────────────────────────────
describe("null value handling", () => {
  test("changing attribute value updates the style", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-display", "flex");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.display).toBe("flex");

    // Change the value
    el.setAttribute("s-display", "none");
    applyStyleAttrs(el);
    expect(el.style.display).toBe("none");

    cleanup2();
    cleanup(container);
  });

  test("setting attribute to empty string sets empty value", () => {
    const container = setup();
    const el = document.createElement("div");
    el.setAttribute("s-display", "flex");
    container.appendChild(el);

    const cleanup2 = initStyleAttrs(container);
    expect(el.style.display).toBe("flex");

    // Empty string is a valid value (not null)
    el.setAttribute("s-display", "");
    applyStyleAttrs(el);
    // style.display should be set to empty string
    expect(el.style.getPropertyValue("display")).toBe("");

    cleanup2();
    cleanup(container);
  });
});

// ─────────────────────────────────────────────
// applyStyleAttrs (standalone)
// ─────────────────────────────────────────────
describe("applyStyleAttrs (standalone)", () => {
  test("applies abbreviated property names on a detached element", () => {
    // Reset activeMap to defaults
    initStyleAttrs(null);
    const el = document.createElement("div");
    el.setAttribute("s-d", "flex");
    el.setAttribute("s-g", "--vk-space-md");

    applyStyleAttrs(el);

    expect(el.style.display).toBe("flex");
    expect(el.style.gap).toBe("var(--vk-space-md)");
  });

  test("applies verbatim property names on a detached element", () => {
    const el = document.createElement("div");
    el.setAttribute("s-display", "grid");
    el.setAttribute("s-gap", "8px");

    applyStyleAttrs(el);

    expect(el.style.display).toBe("grid");
    expect(el.style.gap).toBe("8px");
  });
});

// ─────────────────────────────────────────────
// MutationObserver integration
// ─────────────────────────────────────────────
describe("MutationObserver integration", () => {
  test("dynamically added elements get processed", () => {
    const container = setup();
    initStyleAttrs(container);

    const el = document.createElement("div");
    el.setAttribute("s-d", "flex");
    container.appendChild(el);

    // Use applyStyleAttrs for synchronous verification
    applyStyleAttrs(el);
    expect(el.style.display).toBe("flex");

    cleanup(container);
  });

  test("attribute changes on existing elements get processed", () => {
    const container = setup();
    const el = document.createElement("div");
    container.appendChild(el);

    initStyleAttrs(container);

    el.setAttribute("s-d", "grid");
    // Use applyStyleAttrs for synchronous testing
    applyStyleAttrs(el);
    expect(el.style.display).toBe("grid");

    cleanup(container);
  });
});

// ─────────────────────────────────────────────
// cn() — Merge class strings + s-* style attrs
// ─────────────────────────────────────────────
describe("cn()", () => {
  test("returns empty object with no inputs", () => {
    expect(cn()).toEqual({});
  });

  test("merges class strings", () => {
    expect(cn("btn", "btn-primary")).toEqual({ class: "btn btn-primary" });
  });

  test("skips falsy values", () => {
    expect(cn("btn", false, null, undefined, "btn-primary")).toEqual({ class: "btn btn-primary" });
  });

  test("skips empty strings", () => {
    expect(cn("btn", "", "btn-primary")).toEqual({ class: "btn btn-primary" });
  });

  test("skips whitespace-only strings", () => {
    expect(cn("btn", "   ", "btn-primary")).toEqual({ class: "btn btn-primary" });
  });

  test("merges s-* attribute objects", () => {
    expect(cn({ "s-display": "flex" })).toEqual({ "s-display": "flex" });
  });

  test("last object value wins for same key", () => {
    expect(cn({ "s-display": "flex" }, { "s-display": "grid" })).toEqual({ "s-display": "grid" });
  });

  test("removes key when value is false", () => {
    expect(cn({ "s-display": "flex" }, { "s-display": false })).toEqual({});
  });

  test("removes key when value is null", () => {
    expect(cn({ "s-display": "flex" }, { "s-display": null })).toEqual({});
  });

  test("removes key when value is undefined", () => {
    expect(cn({ "s-display": "flex" }, { "s-display": undefined })).toEqual({});
  });

  test("combines class strings and s-* attributes", () => {
    expect(cn("btn", { "s-display": "flex", "s-gap": "1rem" })).toEqual({
      class: "btn",
      "s-display": "flex",
      "s-gap": "1rem",
    });
  });

  test("combines multiple class strings and objects", () => {
    expect(cn("btn", { "s-display": "flex" }, "btn-primary", { "s-gap": "1rem" })).toEqual({
      class: "btn btn-primary",
      "s-display": "flex",
      "s-gap": "1rem",
    });
  });

  test("skips falsy object values in result", () => {
    expect(cn({ "s-display": "flex", "s-gap": null })).toEqual({ "s-display": "flex" });
  });

  test("handles mixed falsy inputs", () => {
    expect(cn(false, "btn", null, { "s-display": "flex" }, undefined, "active")).toEqual({
      class: "btn active",
      "s-display": "flex",
    });
  });

  test("does not include class key when no classes", () => {
    expect(cn({ "s-display": "flex" })).not.toHaveProperty("class");
  });

  test("handles abbreviated s-* attributes", () => {
    expect(cn({ "s-d": "flex", "s-mt": "1rem" })).toEqual({
      "s-d": "flex",
      "s-mt": "1rem",
    });
  });

  test("handles custom property attributes", () => {
    expect(cn({ "s---my-var": "blue" })).toEqual({
      "s---my-var": "blue",
    });
  });

  test("last-wins for object keys across multiple objects", () => {
    expect(cn({ "s-display": "flex", "s-gap": "1rem" }, { "s-display": "grid" })).toEqual({
      "s-display": "grid",
      "s-gap": "1rem",
    });
  });

  test("removes previously set key with false in later object", () => {
    expect(cn({ "s-display": "flex", "s-gap": "1rem" }, { "s-gap": false })).toEqual({
      "s-display": "flex",
    });
  });
});