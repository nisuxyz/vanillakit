import { describe, test, expect } from "bun:test";
import { signal, computed, effect, batch, untrack } from "../src/signal.js";

// ─────────────────────────────────────────────
// signal()
// ─────────────────────────────────────────────
describe("signal", () => {
  test("creates a signal with initial value", () => {
    const s = signal(42);
    expect(s()).toBe(42);
  });

  test("updates value when called with argument", () => {
    const s = signal(1);
    s(2);
    expect(s()).toBe(2);
  });

  test("returns updated value from setter call", () => {
    const s = signal(1);
    const ret = s(5);
    expect(ret).toBe(5);
  });

  test("supports functional updates", () => {
    const s = signal(10);
    s((prev) => prev + 5);
    expect(s()).toBe(15);
  });

  test("peek reads without subscribing", () => {
    const s = signal(7);
    let runs = 0;
    effect(() => {
      s.peek(); // should NOT subscribe
      runs++;
    });
    expect(runs).toBe(1);
    s(99);
    expect(runs).toBe(1); // effect should NOT re-run
  });

  test("does not trigger when value is identical (Object.is)", () => {
    const s = signal(1);
    let runs = 0;
    effect(() => {
      s();
      runs++;
    });
    expect(runs).toBe(1);
    s(1);
    expect(runs).toBe(1); // same value, no re-run
  });

  test("Object.is distinguishes -0 and +0", () => {
    const s = signal(0);
    let runs = 0;
    effect(() => {
      s();
      runs++;
    });
    expect(runs).toBe(1);
    s(-0);
    expect(runs).toBe(2); // -0 !== +0 per Object.is
  });

  test("NaN equality: does not trigger for same NaN", () => {
    const s = signal(NaN);
    let runs = 0;
    effect(() => {
      s();
      runs++;
    });
    expect(runs).toBe(1);
    s(NaN);
    expect(runs).toBe(1); // NaN === NaN per Object.is
  });

  test("handles various types: string, object, null, undefined", () => {
    const s1 = signal("hello");
    expect(s1()).toBe("hello");
    s1("world");
    expect(s1()).toBe("world");

    const obj = { a: 1 };
    const s2 = signal(obj);
    expect(s2()).toBe(obj);

    const s3 = signal(null);
    expect(s3()).toBeNull();

    const s4 = signal(undefined);
    expect(s4()).toBeUndefined();
  });
});

// ─────────────────────────────────────────────
// computed()
// ─────────────────────────────────────────────
describe("computed", () => {
  test("derives value from signals", () => {
    const a = signal(2);
    const b = signal(3);
    const sum = computed(() => a() + b());
    expect(sum()).toBe(5);
  });

  test("updates when dependencies change", () => {
    const a = signal(1);
    const double = computed(() => a() * 2);
    expect(double()).toBe(2);
    a(5);
    expect(double()).toBe(10);
  });

  test("peek reads without subscribing", () => {
    const a = signal(10);
    const c = computed(() => a() + 1);
    expect(c.peek()).toBe(11);
  });

  test("chains multiple computeds", () => {
    const a = signal(1);
    const b = computed(() => a() * 2);
    const c = computed(() => b() + 10);
    expect(c()).toBe(12);
    a(5);
    expect(c()).toBe(20);
  });

  test("does not recompute when upstream value is identical", () => {
    const a = signal(3);
    let computeCount = 0;
    const c = computed(() => {
      computeCount++;
      return a() * 2;
    });
    c();
    expect(computeCount).toBe(1); // initial via effect
    a(3);
    expect(computeCount).toBe(1); // no change, no recompute
    a(4);
    expect(computeCount).toBe(2);
  });
});

// ─────────────────────────────────────────────
// effect()
// ─────────────────────────────────────────────
describe("effect", () => {
  test("runs immediately", () => {
    let runs = 0;
    effect(() => {
      runs++;
    });
    expect(runs).toBe(1);
  });

  test("re-runs when dependency changes", () => {
    const s = signal(0);
    let value = -1;
    effect(() => {
      value = s();
    });
    expect(value).toBe(0);
    s(42);
    expect(value).toBe(42);
  });

  test("returns a dispose function", () => {
    const s = signal(0);
    let runs = 0;
    const dispose = effect(() => {
      s();
      runs++;
    });
    expect(runs).toBe(1);
    dispose();
    s(1);
    expect(runs).toBe(1); // no more runs after dispose
  });

  test("cleans up old dependencies on re-run", () => {
    const a = signal(1);
    const b = signal(2);
    const cond = signal(true);
    let runs = 0;
    effect(() => {
      runs++;
      if (cond()) {
        a();
      } else {
        b();
      }
    });
    expect(runs).toBe(1);
    a(10);
    expect(runs).toBe(2); // `a` is a dep
    cond(false);
    expect(runs).toBe(3); // cond change triggers re-run
    a(20);
    expect(runs).toBe(3); // `a` is no longer a dep
    b(99);
    expect(runs).toBe(4); // `b` is now a dep
  });

  test("handles diamond dependency graph", () => {
    const a = signal(1);
    const b = computed(() => a() * 2);
    const c = computed(() => a() * 3);
    let runs = 0;
    let value = 0;
    effect(() => {
      value = b() + c();
      runs++;
    });
    expect(value).toBe(5); // 2 + 3
    expect(runs).toBe(1);
    a(2);
    expect(value).toBe(10); // 4 + 6
  });

  test("nested effects are independent", () => {
    const s1 = signal(0);
    const s2 = signal(0);
    let outerRuns = 0;
    let innerRuns = 0;
    effect(() => {
      s1();
      outerRuns++;
      effect(() => {
        s2();
        innerRuns++;
      });
    });
    expect(outerRuns).toBe(1);
    expect(innerRuns).toBe(1);
    s2(1);
    expect(outerRuns).toBe(1);
    expect(innerRuns).toBe(2);
  });
});

// ─────────────────────────────────────────────
// batch()
// ─────────────────────────────────────────────
describe("batch", () => {
  test("defers effect execution until batch completes", () => {
    const a = signal(1);
    const b = signal(2);
    let runs = 0;
    effect(() => {
      a();
      b();
      runs++;
    });
    expect(runs).toBe(1);
    batch(() => {
      a(10);
      b(20);
    });
    expect(runs).toBe(2); // only ONE additional run, not two
  });

  test("returns the function result", () => {
    const result = batch(() => 42);
    expect(result).toBe(42);
  });

  test("supports nesting", () => {
    const s = signal(0);
    let runs = 0;
    effect(() => {
      s();
      runs++;
    });
    expect(runs).toBe(1);
    batch(() => {
      s(1);
      batch(() => {
        s(2);
      });
      // inner batch should not flush yet
      expect(runs).toBe(1);
      s(3);
    });
    expect(runs).toBe(2); // only flushes at outermost batch end
  });

  test("batch with no signal changes does not trigger effects", () => {
    let runs = 0;
    const s = signal(1);
    effect(() => {
      s();
      runs++;
    });
    expect(runs).toBe(1);
    batch(() => {
      // no changes
    });
    expect(runs).toBe(1);
  });
});

// ─────────────────────────────────────────────
// untrack()
// ─────────────────────────────────────────────
describe("untrack", () => {
  test("reads signal without subscribing", () => {
    const s = signal(0);
    let runs = 0;
    effect(() => {
      untrack(() => s());
      runs++;
    });
    expect(runs).toBe(1);
    s(1);
    expect(runs).toBe(1); // no re-run, signal read was untracked
  });

  test("returns the function result", () => {
    const s = signal(42);
    const val = untrack(() => s());
    expect(val).toBe(42);
  });

  test("only untracks the inner read, not outer reads", () => {
    const a = signal(1);
    const b = signal(2);
    let runs = 0;
    effect(() => {
      a(); // tracked
      untrack(() => b()); // untracked
      runs++;
    });
    expect(runs).toBe(1);
    b(99);
    expect(runs).toBe(1); // b is untracked
    a(10);
    expect(runs).toBe(2); // a is tracked
  });

  test("restores currentEffect context after untrack", () => {
    const a = signal(1);
    const b = signal(2);
    const c = signal(3);
    let runs = 0;
    effect(() => {
      a(); // tracked
      untrack(() => b()); // untracked
      c(); // tracked (context restored)
      runs++;
    });
    expect(runs).toBe(1);
    c(30);
    expect(runs).toBe(2); // c is tracked even after untrack block
  });
});
