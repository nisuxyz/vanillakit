import { GlobalRegistrator } from "@happy-dom/global-registrator";

GlobalRegistrator.register();

// Polyfill CSSStyleSheet.insertRule + adoptedStyleSheets if happy-dom lacks them
if (typeof globalThis.CSSStyleSheet === "undefined") {
  globalThis.CSSStyleSheet = class CSSStyleSheet {
    constructor() {
      /** @type {{ cssText: string }[]} */
      this.cssRules = [];
    }
    /** @param {string} rule @param {number} [index] */
    insertRule(rule, index) {
      const idx = index ?? 0;
      this.cssRules.splice(idx, 0, { cssText: rule });
      return idx;
    }
    /** @param {number} index */
    deleteRule(index) {
      this.cssRules.splice(index, 1);
    }
  };
}

// Ensure document.adoptedStyleSheets is writable
if (!("adoptedStyleSheets" in document)) {
  Object.defineProperty(document, "adoptedStyleSheets", {
    value: [],
    writable: true,
    configurable: true,
  });
}
