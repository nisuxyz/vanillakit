export interface Signal<T> {
  (): T;
  (value: T | ((prev: T) => T)): T;
  peek: () => T;
}

export interface ReadonlySignal<T> {
  (): T;
  peek: () => T;
}

export interface Effect {
  _fn: () => void;
  _deps: Set<Set<Effect>>;
  _disposed: boolean;
  _run: () => void;
}

let currentEffect: Effect | null = null;
let batchDepth = 0;
const batchQueue: Set<Effect> = new Set();

export function signal<T>(initial: T): Signal<T> {
  let val = initial;
  const subs: Set<Effect> = new Set();
  function s(): T;
  function s(value: T | ((prev: T) => T)): T;
  function s(...args: [] | [T | ((prev: T) => T)]): T {
    if (args.length === 0) {
      if (currentEffect) {
        subs.add(currentEffect);
        currentEffect._deps.add(subs);
      }
      return val;
    }
    const next =
      typeof args[0] === "function"
        ? (args[0] as (prev: T) => T)(val)
        : args[0];
    if (Object.is(next, val)) return val;
    val = next;
    if (batchDepth > 0) {
      for (const sub of subs) batchQueue.add(sub);
    } else {
      for (const sub of [...subs]) sub._run();
    }
    return val;
  }
  s.peek = () => val;
  s.toString = () => {
    console.warn(
      "[vanillakit] Signal was coerced to a string. " +
        "For reactivity, call the signal as a function and wrap your statement in a function instead: `() => signal()` not `signal`.\n" +
        "  Example: html`<p>${() => mySignal() + ' suffix'}</p>`\n" +
        "  To force stringification, use signal.peek() or String(signal()).",
    );
    return String(val);
  };
  (s as unknown as Record<symbol, unknown>)[Symbol.toPrimitive] = () => {
    console.warn(
      "[vanillakit] Signal was coerced to a primitive. " +
        "For reactivity, call the signal as a function and wrap your statement in a function instead: `() => signal()` not `signal`.\n" +
        "  Example: html`<p>${() => mySignal() + ' suffix'}</p>`\n" +
        "  To force stringification, use signal.peek() or String(signal()).",
    );
    return val;
  };
  return s as unknown as Signal<T>;
}

export function computed<T>(fn: () => T): ReadonlySignal<T> {
  const s = signal<T>(undefined as unknown as T);
  effect(() => s(fn()));
  const reader = () => s();
  reader.peek = s.peek;
  return reader as unknown as ReadonlySignal<T>;
}

export function effect(fn: () => void): () => void {
  const e: Effect = {
    _fn: fn,
    _deps: new Set(),
    _disposed: false,
    _run() {
      if (e._disposed) return;
      for (const depSet of e._deps) depSet.delete(e);
      e._deps.clear();
      const prev = currentEffect;
      currentEffect = e;
      try {
        fn();
      } finally {
        currentEffect = prev;
      }
    },
  };
  e._run();
  return () => {
    e._disposed = true;
    for (const d of e._deps) d.delete(e);
    e._deps.clear();
  };
}

export function batch<T>(fn: () => T): T {
  batchDepth++;
  try {
    return fn();
  } finally {
    batchDepth--;
    if (batchDepth === 0) {
      const q = [...batchQueue];
      batchQueue.clear();
      for (const e of q) e._run();
    }
  }
}

export function untrack<T>(fn: () => T): T {
  const prev = currentEffect;
  currentEffect = null;
  try {
    return fn();
  } finally {
    currentEffect = prev;
  }
}
