import { describe, it, expect, vi } from "vitest";
import { vkml } from "../src/vkml.js";
import { signal, effect, untrack } from "../src/signal.js";

describe("vkml proxy factories", () => {
  it("creates standard elements", () => {
    const el = vkml.div({ id: "test" }, "Hello World");
    expect(el.tagName.toLowerCase()).toBe("div");
    expect(el.id).toBe("test");
    expect(el.textContent).toBe("Hello World");
  });

  it("creates svg elements with correct namespace", () => {
    const el = vkml.svg({ viewBox: "0 0 100 100" }, vkml.path({ d: "M10 10 H 90 V 90 H 10 L 10 10" }));
    expect(el.tagName.toLowerCase()).toBe("svg");
    expect(el.namespaceURI).toBe("http://www.w3.org/2000/svg");
    expect(el.getAttribute("viewBox")).toBe("0 0 100 100");
    const path = el.firstChild;
    expect(path.tagName.toLowerCase()).toBe("path");
    expect(path.namespaceURI).toBe("http://www.w3.org/2000/svg");
  });

  it("reactively updates text via signal fn", async () => {
    const s = signal("foo");
    const el = vkml.span({}, () => s());
    document.body.appendChild(el);
    expect(el.textContent).toContain("foo");

    s("bar");
    expect(el.textContent).toContain("bar");
  });

  it("adds and updates classes correctly", () => {
    const c = signal("class-a");
    const el = vkml.div({ class: () => c() });
    expect(el.className).toBe("class-a");
    c("class-b");
    expect(el.className).toBe("class-b");
  });

  it("supports event listeners", () => {
    const fn = vi.fn();
    const el = vkml.button({ onclick: fn }, "Click me");
    el.click();
    expect(fn).toHaveBeenCalled();
  });
});
