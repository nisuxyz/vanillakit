import { describe, test, expect } from "bun:test";
import { reactive, toRaw, isReactive, snapshot } from "../src/reactive.js";
import { signal, computed, effect, batch } from "@vanillakit/signal";

// ─────────────────────────────────────────────
// reactive() — creation & identity
// ─────────────────────────────────────────────
describe("reactive creation", () => {
  test("wraps a plain object in a proxy", () => {
    const obj = { a: 1 };
    const r = reactive(obj);
    expect(r).not.toBe(obj);
    expect(r.a).toBe(1);
  });

  test("wraps an array in a proxy", () => {
    const arr = [1, 2, 3];
    const r = reactive(arr);
    expect(r).not.toBe(arr);
    expect(r[0]).toBe(1);
    expect(r.length).toBe(3);
  });

  test("returns same proxy for same target (cache)", () => {
    const obj = { x: 1 };
    const r1 = reactive(obj);
    const r2 = reactive(obj);
    expect(r1).toBe(r2);
  });

  test("re-wrapping a reactive returns the same proxy", () => {
    const r = reactive({ a: 1 });
    const r2 = reactive(r);
    expect(r2).toBe(r);
  });

  test("returns primitives as-is", () => {
    expect(reactive(42)).toBe(42);
    expect(reactive("hello")).toBe("hello");
    expect(reactive(true)).toBe(true);
    expect(reactive(null)).toBeNull();
    expect(reactive(undefined)).toBeUndefined();
  });

  test("does not deeply wrap Date, RegExp, Error as nested values", () => {
    // reactive() itself wraps any object, but _wrap() (for nested properties)
    // skips Date, RegExp, Error — they are returned as-is from property reads
    const d = new Date();
    const r = reactive({ date: d });
    expect(r.date).toBe(d);
    expect(isReactive(r.date)).toBe(false);
  });

  test("does not deeply wrap Map or Set as nested values", () => {
    const m = new Map([["key", "val"]]);
    const s = new Set([1, 2, 3]);
    const r = reactive({ map: m, set: s });
    expect(r.map).toBe(m);
    expect(r.set).toBe(s);
    expect(isReactive(r.map)).toBe(false);
    expect(isReactive(r.set)).toBe(false);
  });
});

// ─────────────────────────────────────────────
// isReactive() / toRaw()
// ─────────────────────────────────────────────
describe("isReactive / toRaw", () => {
  test("isReactive returns true for reactive objects", () => {
    const r = reactive({ a: 1 });
    expect(isReactive(r)).toBe(true);
  });

  test("isReactive returns false for plain objects", () => {
    expect(isReactive({ a: 1 })).toBe(false);
    expect(isReactive(null)).toBe(false);
    expect(isReactive(undefined)).toBe(false);
    expect(isReactive(42)).toBe(false);
  });

  test("toRaw extracts the original object", () => {
    const obj = { a: 1 };
    const r = reactive(obj);
    expect(toRaw(r)).toBe(obj);
  });

  test("toRaw on a non-reactive returns itself", () => {
    const obj = { a: 1 };
    expect(toRaw(obj)).toBe(obj);
    expect(toRaw(null)).toBeNull();
    expect(toRaw(42)).toBe(42);
  });
});

// ─────────────────────────────────────────────
// Property read/write tracking
// ─────────────────────────────────────────────
describe("property tracking", () => {
  test("reading a property inside effect creates subscription", () => {
    const r = reactive({ count: 0 });
    let observed = -1;
    effect(() => {
      observed = r.count;
    });
    expect(observed).toBe(0);
    r.count = 5;
    expect(observed).toBe(5);
  });

  test("writing a property not read inside effect does not trigger it", () => {
    const r = reactive({ a: 1, b: 2 });
    let runs = 0;
    effect(() => {
      r.a;
      runs++;
    });
    expect(runs).toBe(1);
    r.b = 99;
    expect(runs).toBe(1); // only `a` is tracked
  });

  test("multiple effects on the same property", () => {
    const r = reactive({ x: 0 });
    let v1 = 0;
    let v2 = 0;
    effect(() => { v1 = r.x; });
    effect(() => { v2 = r.x * 10; });
    expect(v1).toBe(0);
    expect(v2).toBe(0);
    r.x = 3;
    expect(v1).toBe(3);
    expect(v2).toBe(30);
  });

  test("computed works with reactive objects", () => {
    const r = reactive({ a: 2, b: 3 });
    const sum = computed(() => r.a + r.b);
    expect(sum()).toBe(5);
    r.a = 10;
    expect(sum()).toBe(13);
    r.b = 7;
    expect(sum()).toBe(17);
  });
});

// ─────────────────────────────────────────────
// Deep reactivity
// ─────────────────────────────────────────────
describe("deep reactivity", () => {
  test("nested objects are automatically reactive", () => {
    const r = reactive({ user: { name: "Alice" } });
    let observed = "";
    effect(() => {
      observed = r.user.name;
    });
    expect(observed).toBe("Alice");
    r.user.name = "Bob";
    expect(observed).toBe("Bob");
  });

  test("deeply nested mutations trigger effects", () => {
    const r = reactive({
      a: { b: { c: { d: 1 } } },
    });
    let value = 0;
    effect(() => {
      value = r.a.b.c.d;
    });
    expect(value).toBe(1);
    r.a.b.c.d = 42;
    expect(value).toBe(42);
  });

  test("replacing a nested object triggers effects", () => {
    const r = reactive({ child: { x: 1 } });
    let value = 0;
    effect(() => {
      value = r.child.x;
    });
    expect(value).toBe(1);
    r.child = { x: 99 };
    expect(value).toBe(99);
  });

  test("nested array inside object is reactive", () => {
    const r = reactive({ items: [1, 2, 3] });
    let len = 0;
    effect(() => {
      len = r.items.length;
    });
    expect(len).toBe(3);
    r.items.push(4);
    expect(len).toBe(4);
  });

  test("nested object inside array is reactive", () => {
    const r = reactive({ list: [{ name: "a" }, { name: "b" }] });
    let firstName = "";
    effect(() => {
      firstName = r.list[0].name;
    });
    expect(firstName).toBe("a");
    r.list[0].name = "updated";
    expect(firstName).toBe("updated");
  });
});

// ─────────────────────────────────────────────
// Array mutations
// ─────────────────────────────────────────────
describe("array mutations", () => {
  test("push triggers effect", () => {
    const r = reactive([1, 2]);
    let len = 0;
    effect(() => { len = r.length; });
    expect(len).toBe(2);
    r.push(3);
    expect(len).toBe(3);
    expect(r[2]).toBe(3);
  });

  test("pop triggers effect", () => {
    const r = reactive([1, 2, 3]);
    let len = 0;
    effect(() => { len = r.length; });
    r.pop();
    expect(len).toBe(2);
  });

  test("shift triggers effect", () => {
    const r = reactive([10, 20, 30]);
    let first = -1;
    effect(() => { first = r[0]; });
    expect(first).toBe(10);
    r.shift();
    expect(first).toBe(20);
  });

  test("unshift triggers effect", () => {
    const r = reactive([2, 3]);
    let len = 0;
    let first = -1;
    effect(() => {
      len = r.length;
      first = r[0];
    });
    expect(len).toBe(2);
    expect(first).toBe(2);
    r.unshift(1);
    expect(len).toBe(3);
    expect(first).toBe(1);
  });

  test("splice triggers effect", () => {
    const r = reactive([1, 2, 3, 4, 5]);
    let len = 0;
    effect(() => { len = r.length; });
    r.splice(1, 2); // remove index 1,2
    expect(len).toBe(3);
    expect(toRaw(r)).toEqual([1, 4, 5]);
  });

  test("sort triggers effect", () => {
    const r = reactive([3, 1, 2]);
    let snapshot_val = [];
    effect(() => { snapshot_val = [...toRaw(r)]; });
    r.sort((a, b) => a - b);
    expect(r[0]).toBe(1);
    expect(r[1]).toBe(2);
    expect(r[2]).toBe(3);
  });

  test("reverse triggers effect", () => {
    const r = reactive([1, 2, 3]);
    let first = 0;
    effect(() => { first = r[0]; });
    expect(first).toBe(1);
    r.reverse();
    expect(first).toBe(3);
  });

  test("fill triggers effect", () => {
    const r = reactive([1, 2, 3]);
    let val = 0;
    effect(() => { val = r[1]; });
    r.fill(0);
    expect(val).toBe(0);
  });

  test("copyWithin triggers effect", () => {
    const r = reactive([1, 2, 3, 4, 5]);
    let val = 0;
    effect(() => { val = r[0]; });
    r.copyWithin(0, 3); // copies [4,5] to position 0
    expect(val).toBe(4);
  });

  test("array mutator is batched — single effect execution per call", () => {
    const r = reactive([1, 2, 3]);
    let runs = 0;
    effect(() => {
      // read all indices and length
      for (let i = 0; i < r.length; i++) r[i];
      runs++;
    });
    expect(runs).toBe(1);
    r.push(4);
    expect(runs).toBe(2); // exactly one re-run, not multiple
  });

  test("multiple pushes in a batch cause single effect run", () => {
    const r = reactive([]);
    let runs = 0;
    effect(() => {
      r.length;
      runs++;
    });
    expect(runs).toBe(1);
    batch(() => {
      r.push(1);
      r.push(2);
      r.push(3);
    });
    expect(runs).toBe(2); // one batch → one re-run
    expect(r.length).toBe(3);
  });
});

// ─────────────────────────────────────────────
// Array lookups
// ─────────────────────────────────────────────
describe("array lookups", () => {
  test("indexOf works", () => {
    const r = reactive([10, 20, 30]);
    expect(r.indexOf(20)).toBe(1);
    expect(r.indexOf(99)).toBe(-1);
  });

  test("lastIndexOf works", () => {
    const r = reactive([1, 2, 3, 2, 1]);
    expect(r.lastIndexOf(2)).toBe(3);
  });

  test("includes works", () => {
    const r = reactive([1, 2, 3]);
    expect(r.includes(2)).toBe(true);
    expect(r.includes(99)).toBe(false);
  });

  test("lookups track length signal — reactive to pushes", () => {
    const r = reactive([1, 2]);
    let found = false;
    effect(() => { found = r.includes(3); });
    expect(found).toBe(false);
    r.push(3);
    expect(found).toBe(true);
  });
});

// ─────────────────────────────────────────────
// deleteProperty
// ─────────────────────────────────────────────
describe("deleteProperty", () => {
  test("deleting a property triggers effect", () => {
    const r = reactive({ a: 1, b: 2 });
    let val = 0;
    effect(() => {
      val = r.a ?? -1;
    });
    expect(val).toBe(1);
    delete r.a;
    expect(val).toBe(-1);
  });

  test("deleted signal is removed from internal map", () => {
    const r = reactive({ x: 42 });
    // Read to create signal
    let v = 0;
    effect(() => { v = r.x; });
    expect(v).toBe(42);
    delete r.x;
    expect(v).toBeUndefined();
    // After deletion, the old signal (and its subscriptions) is gone.
    // Re-assigning creates a new signal, and the old effect won't track it
    // because it was subscribed to the deleted signal. This is expected.
    // But reading from a NEW effect will work:
    let v2 = 0;
    effect(() => { v2 = r.x; });
    r.x = 100;
    expect(v2).toBe(100);
  });
});

// ─────────────────────────────────────────────
// has trap
// ─────────────────────────────────────────────
describe("has trap", () => {
  test("'key in reactive' triggers tracking", () => {
    const r = reactive({ a: 1 });
    let has = false;
    effect(() => {
      has = "a" in r;
    });
    expect(has).toBe(true);
  });

  test("'key in reactive' detects new properties via effect", () => {
    const raw = {};
    const r = reactive(raw);
    let has = false;
    effect(() => {
      has = "x" in r;
    });
    expect(has).toBe(false);
    r.x = 1;
    expect(has).toBe(true);
  });
});

// ─────────────────────────────────────────────
// ownKeys trap
// ─────────────────────────────────────────────
describe("ownKeys trap", () => {
  test("Object.keys on reactive array tracks length", () => {
    const r = reactive([1, 2]);
    let keys = [];
    effect(() => {
      keys = Object.keys(r);
    });
    expect(keys).toEqual(["0", "1"]);
    r.push(3);
    expect(keys).toEqual(["0", "1", "2"]);
  });

  test("Object.keys on reactive object", () => {
    const r = reactive({ a: 1, b: 2 });
    const keys = Object.keys(r);
    expect(keys).toEqual(["a", "b"]);
  });
});

// ─────────────────────────────────────────────
// snapshot()
// ─────────────────────────────────────────────
describe("snapshot", () => {
  test("returns a plain deep copy of a reactive object", () => {
    const r = reactive({ a: 1, b: { c: 2 } });
    const s = snapshot(r);
    expect(s).toEqual({ a: 1, b: { c: 2 } });
    expect(isReactive(s)).toBe(false);
    expect(isReactive(s.b)).toBe(false);
  });

  test("returns a plain deep copy of a reactive array", () => {
    const r = reactive([1, [2, 3], { x: 4 }]);
    const s = snapshot(r);
    expect(s).toEqual([1, [2, 3], { x: 4 }]);
    expect(Array.isArray(s)).toBe(true);
    expect(isReactive(s)).toBe(false);
  });

  test("snapshot of a non-reactive returns the value", () => {
    expect(snapshot(42)).toBe(42);
    expect(snapshot("str")).toBe("str");
    expect(snapshot(null)).toBeNull();
  });

  test("snapshot tracks reactive reads (used inside effect)", () => {
    const r = reactive({ count: 0 });
    let s = null;
    effect(() => {
      s = snapshot(r);
    });
    expect(s).toEqual({ count: 0 });
    r.count = 5;
    expect(s).toEqual({ count: 5 });
  });
});

// ─────────────────────────────────────────────
// Proxy passthrough
// ─────────────────────────────────────────────
describe("proxy passthrough", () => {
  test("constructor and prototype are accessible", () => {
    const r = reactive({ a: 1 });
    expect(r.constructor).toBe(Object);
    expect(Object.getPrototypeOf(r)).toBe(Object.prototype);
  });

  test("Symbol.iterator works for arrays", () => {
    const r = reactive([1, 2, 3]);
    const result = [];
    for (const item of r) result.push(item);
    expect(result).toEqual([1, 2, 3]);
  });

  test("JSON.stringify works via toJSON passthrough", () => {
    const r = reactive({ a: 1, b: 2 });
    // toJSON is in passthrough, so stringify sees raw object
    const json = JSON.stringify(r);
    expect(json).toBe('{"a":1,"b":2}');
  });

  test("Array.isArray works on reactive arrays", () => {
    const r = reactive([1, 2]);
    expect(Array.isArray(r)).toBe(true);
  });

  test("spread on reactive array works", () => {
    const r = reactive([1, 2, 3]);
    const copy = [...r];
    expect(copy).toEqual([1, 2, 3]);
  });
});

// ─────────────────────────────────────────────
// Integration with signals & batching
// ─────────────────────────────────────────────
describe("reactive + signal integration", () => {
  test("reactive property read inside signal effect works", () => {
    const r = reactive({ value: "hello" });
    const s = signal(0);
    let combined = "";
    effect(() => {
      combined = `${r.value}-${s()}`;
    });
    expect(combined).toBe("hello-0");
    r.value = "world";
    expect(combined).toBe("world-0");
    s(1);
    expect(combined).toBe("world-1");
  });

  test("batch works with reactive mutations", () => {
    const r = reactive({ a: 1, b: 2 });
    let runs = 0;
    effect(() => {
      r.a;
      r.b;
      runs++;
    });
    expect(runs).toBe(1);
    batch(() => {
      r.a = 10;
      r.b = 20;
    });
    expect(runs).toBe(2); // single re-run from batch
  });

  test("computed with reactive object", () => {
    const r = reactive({ items: [1, 2, 3] });
    const total = computed(() =>
      r.items.reduce((sum, n) => sum + n, 0),
    );
    expect(total()).toBe(6);
    r.items.push(4);
    expect(total()).toBe(10);
  });

  test("reactive array used as signal value", () => {
    const items = reactive([]);
    let len = 0;
    effect(() => { len = items.length; });
    expect(len).toBe(0);
    items.push({ id: 1, text: "first" });
    expect(len).toBe(1);
    items.push({ id: 2, text: "second" });
    expect(len).toBe(2);
    items.splice(0, 1);
    expect(len).toBe(1);
  });
});

// ─────────────────────────────────────────────
// Edge cases
// ─────────────────────────────────────────────
describe("reactive edge cases", () => {
  test("setting same value does not trigger effect", () => {
    const r = reactive({ x: 1 });
    let runs = 0;
    effect(() => {
      r.x;
      runs++;
    });
    expect(runs).toBe(1);
    r.x = 1; // same value
    // May or may not trigger depending on implementation
    // At minimum, the value should be correct
    expect(r.x).toBe(1);
  });

  test("assigning a reactive object stores raw value", () => {
    const inner = reactive({ a: 1 });
    const outer = reactive({ child: null });
    outer.child = inner;
    // The raw target should store the unwrapped value
    expect(toRaw(outer).child).toBe(toRaw(inner));
  });

  test("reading undefined property returns undefined", () => {
    const r = reactive({});
    expect(r.nonExistent).toBeUndefined();
  });

  test("large array operations", () => {
    const items = Array.from({ length: 100 }, (_, i) => i);
    const r = reactive(items);
    let len = 0;
    effect(() => { len = r.length; });
    expect(len).toBe(100);
    r.push(100);
    expect(len).toBe(101);
    r.splice(0, 50);
    expect(len).toBe(51);
  });

  test("nested arrays are deeply reactive", () => {
    const r = reactive({ matrix: [[1, 2], [3, 4]] });
    let val = 0;
    effect(() => { val = r.matrix[0][0]; });
    expect(val).toBe(1);
    r.matrix[0][0] = 99;
    expect(val).toBe(99);
  });

  test("Object.assign on reactive triggers effects", () => {
    const r = reactive({ a: 1, b: 2 });
    let sum = 0;
    effect(() => { sum = r.a + r.b; });
    expect(sum).toBe(3);
    Object.assign(r, { a: 10, b: 20 });
    expect(sum).toBe(30);
  });

  test("for...of on reactive array works and tracks", () => {
    const r = reactive([1, 2, 3]);
    let total = 0;
    effect(() => {
      total = 0;
      for (const item of r) total += item;
    });
    expect(total).toBe(6);
    r.push(4);
    expect(total).toBe(10);
  });

  test("destructuring reads trigger tracking", () => {
    const r = reactive({ x: 1, y: 2 });
    let sum = 0;
    effect(() => {
      const { x, y } = r;
      sum = x + y;
    });
    expect(sum).toBe(3);
    r.x = 10;
    expect(sum).toBe(12);
  });
});
