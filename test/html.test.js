import { describe, test, expect, beforeEach } from "bun:test";
import { html, each } from "../src/html.js";
import { signal, effect, computed } from "../src/signal.js";

beforeEach(() => {
  document.body.innerHTML = "";
});

// ─────────────────────────────────────────────
// Basic rendering
// ─────────────────────────────────────────────
describe("html basic rendering", () => {
  test("renders static text element", () => {
    const node = html`<p>Hello</p>`;
    document.body.append(node);
    expect(document.body.innerHTML).toContain("Hello");
  });

  test("renders multiple elements as DocumentFragment", () => {
    const frag = html`<span>A</span><span>B</span>`;
    document.body.append(frag);
    expect(document.body.querySelectorAll("span").length).toBe(2);
  });

  test("single element returns a Node, not fragment", () => {
    const node = html`<div>Only</div>`;
    expect(node.nodeType).toBe(Node.ELEMENT_NODE);
    expect(node.nodeName).toBe("DIV");
  });

  test("renders nested HTML", () => {
    const node = html`<div><span>inner</span></div>`;
    document.body.append(node);
    const span = document.body.querySelector("span");
    expect(span?.textContent).toBe("inner");
  });
});

// ─────────────────────────────────────────────
// Attribute binding
// ─────────────────────────────────────────────
describe("attribute binding", () => {
  test("static attribute", () => {
    const node = html`<div id="test-id"></div>`;
    document.body.append(node);
    expect(document.getElementById("test-id")).toBeTruthy();
  });

  test("dynamic attribute via value", () => {
    const node = html`<div id=${"dynamic-id"}></div>`;
    document.body.append(node);
    expect(document.getElementById("dynamic-id")).toBeTruthy();
  });

  test("class attribute binding", () => {
    const node = html`<div class=${"my-class"}></div>`;
    document.body.append(node);
    expect(node.className).toBe("my-class");
  });

  test("reactive class attribute via function", () => {
    const cls = signal("initial");
    const node = html`<div class=${cls}></div>`;
    document.body.append(node);
    expect(node.className).toBe("initial");
    cls("updated");
    expect(node.className).toBe("updated");
  });

  test("style string binding", () => {
    const node = html`<div style=${"color: red"}></div>`;
    document.body.append(node);
    expect(node.getAttribute("style")).toBe("color: red");
  });

  test("style object binding", () => {
    const node = html`<div style=${{ color: "red", fontSize: "14px" }}></div>`;
    document.body.append(node);
    expect(node.style.color).toBe("red");
    expect(node.style.fontSize).toBe("14px");
  });

  test("boolean attribute: disabled", () => {
    const node = html`<button disabled=${true}>Click</button>`;
    document.body.append(node);
    expect(node.hasAttribute("disabled")).toBe(true);

    const node2 = html`<button disabled=${false}>Click</button>`;
    document.body.append(node2);
    expect(node2.hasAttribute("disabled")).toBe(false);
  });

  test("reactive boolean attribute", () => {
    const isDisabled = signal(false);
    const node = html`<button disabled=${isDisabled}>Click</button>`;
    document.body.append(node);
    expect(node.hasAttribute("disabled")).toBe(false);
    isDisabled(true);
    expect(node.hasAttribute("disabled")).toBe(true);
  });

  test("checked attribute binding", () => {
    const node = html`<input type="checkbox" checked=${true} />`;
    document.body.append(node);
    expect(node.checked).toBe(true);
  });

  test("value attribute binding", () => {
    const node = html`<input value=${"hello"} />`;
    document.body.append(node);
    expect(node.value).toBe("hello");
  });

  test("hidden attribute binding", () => {
    const node = html`<div hidden=${true}>secret</div>`;
    document.body.append(node);
    expect(node.hasAttribute("hidden")).toBe(true);
  });

  test("false/null/undefined removes attribute", () => {
    const node = html`<div data-x=${false}></div>`;
    document.body.append(node);
    expect(node.hasAttribute("data-x")).toBe(false);

    const node2 = html`<div data-y=${null}></div>`;
    document.body.append(node2);
    expect(node2.hasAttribute("data-y")).toBe(false);
  });

  test("true sets empty attribute", () => {
    const node = html`<div data-active=${true}></div>`;
    document.body.append(node);
    expect(node.hasAttribute("data-active")).toBe(true);
    expect(node.getAttribute("data-active")).toBe("");
  });
});

// ─────────────────────────────────────────────
// Event binding
// ─────────────────────────────────────────────
describe("event binding", () => {
  test("onclick handler fires", () => {
    let clicked = false;
    const node = html`<button onclick=${() => { clicked = true; }}>Click</button>`;
    document.body.append(node);
    node.click();
    expect(clicked).toBe(true);
  });

  test("oninput handler fires", () => {
    let inputVal = "";
    const node = html`<input oninput=${(e) => { inputVal = e.target.value; }} />`;
    document.body.append(node);
    node.value = "test";
    node.dispatchEvent(new Event("input"));
    expect(inputVal).toBe("test");
  });

  test("multiple event handlers on same element", () => {
    let clicks = 0;
    let focuses = 0;
    const node = html`<button onclick=${() => clicks++} onfocus=${() => focuses++}>btn</button>`;
    document.body.append(node);
    node.click();
    node.dispatchEvent(new Event("focus"));
    expect(clicks).toBe(1);
    expect(focuses).toBe(1);
  });
});

// ─────────────────────────────────────────────
// ref binding
// ─────────────────────────────────────────────
describe("ref binding", () => {
  test("ref function is called with the element", () => {
    let refEl = null;
    const node = html`<div ref=${(el) => { refEl = el; }}>content</div>`;
    document.body.append(node);
    expect(refEl).toBe(node);
    expect(refEl.textContent).toBe("content");
  });
});

// ─────────────────────────────────────────────
// Content binding
// ─────────────────────────────────────────────
describe("content binding", () => {
  test("static text interpolation", () => {
    const node = html`<p>${"hello"}</p>`;
    document.body.append(node);
    expect(node.textContent).toBe("hello");
  });

  test("number interpolation", () => {
    const node = html`<p>${42}</p>`;
    document.body.append(node);
    expect(node.textContent).toBe("42");
  });

  test("null/false renders nothing", () => {
    const node = html`<p>${null}${false}</p>`;
    document.body.append(node);
    expect(node.textContent?.trim()).toBe("");
  });

  test("reactive text via signal function", () => {
    const text = signal("initial");
    const node = html`<p>${text}</p>`;
    document.body.append(node);
    expect(node.textContent).toContain("initial");
    text("updated");
    expect(node.textContent).toContain("updated");
  });

  test("reactive conditional rendering", () => {
    const show = signal(true);
    const node = html`<div>${() => show() ? html`<span>visible</span>` : null}</div>`;
    document.body.append(node);
    expect(node.querySelector("span")).toBeTruthy();
    show(false);
    expect(node.querySelector("span")).toBeFalsy();
    show(true);
    expect(node.querySelector("span")).toBeTruthy();
  });

  test("nested html templates", () => {
    const inner = html`<span>inner</span>`;
    const outer = html`<div>${inner}</div>`;
    document.body.append(outer);
    expect(outer.querySelector("span")?.textContent).toBe("inner");
  });

  test("array of nodes", () => {
    const items = [1, 2, 3].map((n) => html`<li>${n}</li>`);
    const node = html`<ul>${items}</ul>`;
    document.body.append(node);
    expect(node.querySelectorAll("li").length).toBe(3);
  });
});

// ─────────────────────────────────────────────
// Invalid interpolation detection
// ─────────────────────────────────────────────
describe("invalid interpolation values", () => {
  test("signal coerced to string via concatenation should warn, not print source", () => {
    const count = signal(5);
    const node = html`<p>${count + " "}</p>`;
    document.body.append(node);
    const text = node.textContent;
    // Should NOT contain function source code
    expect(text).not.toContain("function");
    expect(text).not.toContain("arguments");
    expect(text).not.toContain("Object.is");
    // Should render actual value instead
    expect(text).toContain("5");
  });

  test("signal used with template literal coercion should warn, not print source", () => {
    const name = signal("Alice");
    const node = html`<p>${`Hello ${name}`}</p>`;
    document.body.append(node);
    const text = node.textContent;
    expect(text).not.toContain("function");
    expect(text).not.toContain("arguments");
    expect(text).toBe("Hello Alice");
  });

  test("signal arithmetic coercion should return actual value, not NaN", () => {
    const count = signal(5);
    const node = html`<p>${count * 2}</p>`;
    document.body.append(node);
    const text = node.textContent;
    expect(text).not.toBe("NaN");
    expect(text).toBe("10");
  });

  test("signal toString warns via console", () => {
    const count = signal(42);
    const warned = [];
    const origWarn = console.warn;
    console.warn = (...args) => warned.push(args.join(" "));
    const result = count + "";
    console.warn = origWarn;
    expect(warned.length).toBe(1);
    expect(warned[0]).toContain("coerced");
    expect(warned[0]).toContain("signal()");
    expect(result).toContain("42");
  });

  test("signal Symbol.toPrimitive warns on arithmetic coercion", () => {
    const count = signal(7);
    const warned = [];
    const origWarn = console.warn;
    console.warn = (...args) => warned.push(args.join(" "));
    const result = count * 3;
    console.warn = origWarn;
    expect(warned.length).toBe(1);
    expect(warned[0]).toContain("coerced");
    expect(result).toBe(21);
  });

  test("peek and signal() still work without warning", () => {
    const count = signal(5);
    const warned = [];
    const origWarn = console.warn;
    console.warn = (...args) => warned.push(args.join(" "));
    const v1 = count();
    const v2 = count.peek();
    console.warn = origWarn;
    expect(warned.length).toBe(0);
    expect(v1).toBe(5);
    expect(v2).toBe(5);
  });
});

// ─────────────────────────────────────────────
// each() — keyed list reconciliation
// ─────────────────────────────────────────────
describe("each() keyed lists", () => {
  test("renders initial list", () => {
    const items = signal([
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
    ]);
    const node = html`<ul>${each(items, (t) => t.id, (item) => html`<li>${() => item().text}</li>`)}</ul>`;
    document.body.append(node);
    const lis = node.querySelectorAll("li");
    expect(lis.length).toBe(3);
    expect(lis[0].textContent).toBe("a");
    expect(lis[1].textContent).toBe("b");
    expect(lis[2].textContent).toBe("c");
  });

  test("adding items appends nodes", () => {
    const items = signal([{ id: 1, text: "a" }]);
    const node = html`<ul>${each(items, (t) => t.id, (item) => html`<li>${() => item().text}</li>`)}</ul>`;
    document.body.append(node);
    expect(node.querySelectorAll("li").length).toBe(1);
    items((prev) => [...prev, { id: 2, text: "b" }]);
    expect(node.querySelectorAll("li").length).toBe(2);
  });

  test("removing items removes nodes", () => {
    const items = signal([
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
    ]);
    const node = html`<ul>${each(items, (t) => t.id, (item) => html`<li>${() => item().text}</li>`)}</ul>`;
    document.body.append(node);
    expect(node.querySelectorAll("li").length).toBe(3);
    items((prev) => prev.filter((t) => t.id !== 2));
    expect(node.querySelectorAll("li").length).toBe(2);
  });

  test("reordering preserves DOM nodes", () => {
    const items = signal([
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
    ]);
    const node = html`<ul>${each(items, (t) => t.id, (item) => html`<li>${() => item().text}</li>`)}</ul>`;
    document.body.append(node);
    const originalLis = [...node.querySelectorAll("li")];
    items((prev) => [...prev].reverse());
    const newLis = [...node.querySelectorAll("li")];
    // Nodes should be the same DOM elements, just reordered
    expect(newLis[0]).toBe(originalLis[2]);
    expect(newLis[1]).toBe(originalLis[1]);
    expect(newLis[2]).toBe(originalLis[0]);
  });

  test("updating item signal updates content without re-creating DOM", () => {
    const items = signal([
      { id: 1, text: "original" },
    ]);
    const node = html`<ul>${each(items, (t) => t.id, (item) => html`<li>${() => item().text}</li>`)}</ul>`;
    document.body.append(node);
    const li = node.querySelector("li");
    items([{ id: 1, text: "updated" }]);
    const liAfter = node.querySelector("li");
    expect(li).toBe(liAfter); // same DOM node
    expect(liAfter.textContent).toBe("updated");
  });

  test("index signal updates when items reorder", () => {
    const items = signal([
      { id: 1, text: "a" },
      { id: 2, text: "b" },
    ]);
    const indexValues = [];
    const node = html`<ul>${each(items, (t) => t.id, (item, idx) => {
      const li = html`<li>${() => `${idx()}: ${item().text}`}</li>`;
      return li;
    })}</ul>`;
    document.body.append(node);
    const lis = node.querySelectorAll("li");
    expect(lis[0].textContent).toBe("0: a");
    expect(lis[1].textContent).toBe("1: b");
    items((prev) => [...prev].reverse());
    const lisAfter = node.querySelectorAll("li");
    expect(lisAfter[0].textContent).toBe("0: b");
    expect(lisAfter[1].textContent).toBe("1: a");
  });

  test("empty list renders nothing", () => {
    const items = signal([]);
    const node = html`<ul>${each(items, (t) => t.id, (item) => html`<li>${() => item().text}</li>`)}</ul>`;
    document.body.append(node);
    expect(node.querySelectorAll("li").length).toBe(0);
  });

  test("clearing list removes all nodes", () => {
    const items = signal([
      { id: 1, text: "a" },
      { id: 2, text: "b" },
    ]);
    const node = html`<ul>${each(items, (t) => t.id, (item) => html`<li>${() => item().text}</li>`)}</ul>`;
    document.body.append(node);
    expect(node.querySelectorAll("li").length).toBe(2);
    items([]);
    expect(node.querySelectorAll("li").length).toBe(0);
  });
});

// ─────────────────────────────────────────────
// Disposal
// ─────────────────────────────────────────────
describe("disposal", () => {
  test("__v_dispose cleans up effects", () => {
    const s = signal("initial");
    const node = html`<p>${s}</p>`;
    document.body.append(node);
    expect(node.textContent).toContain("initial");

    // Dispose
    if (node.__v_disposers) {
      for (const d of node.__v_disposers) d();
    }
    s("changed");
    // After disposal, the text should NOT update
    expect(node.textContent).not.toContain("changed");
  });

  test("removing a reactive conditional cleans up inner effects", () => {
    const show = signal(true);
    const inner = signal("inner");
    let innerEffectRuns = 0;
    const node = html`<div>${() => {
      if (show()) {
        return html`<span>${() => { innerEffectRuns++; return inner(); }}</span>`;
      }
      return null;
    }}</div>`;
    document.body.append(node);
    expect(innerEffectRuns).toBe(1);
    show(false);
    const runsBefore = innerEffectRuns;
    inner("changed");
    // Inner effect should not run after the conditional removed it
    expect(innerEffectRuns).toBe(runsBefore);
  });
});
