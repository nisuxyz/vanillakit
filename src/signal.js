/**
 * @template T
 * @typedef {{
 *   (): T;
 *   (value: T | ((prev: T) => T)): T;
 *   peek: () => T;
 * }} Signal
 */

/**
 * @template T
 * @typedef {{
 *   (): T;
 *   peek: () => T;
 * }} ReadonlySignal
 */

/**
 * @internal
 * @typedef {{
 *   _fn: () => void;
 *   _deps: Set<Set<Effect>>;
 *   _disposed: boolean;
 *   _run: () => void;
 * }} Effect
 */

/** @type {Effect | null} */
let currentEffect = null;
let batchDepth = 0;
/** @type {Set<import("./signal.js").Effect>} */
const batchQueue = new Set();

/**
 * @template T
 * @param {T} initial
 * @returns {Signal<T>}
 */
export function signal(initial) {
  let val = initial;
  const subs = new Set();
  function s() {
    if (arguments.length === 0) {
      if (currentEffect) {
        subs.add(currentEffect);
        currentEffect._deps.add(subs);
      }
      return val;
    }
    const next =
      typeof arguments[0] === "function"
        ? arguments[0](val)
        : arguments[0];
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
  return /** @type {Signal<T>} */ (/** @type {unknown} */ (s));
}

/**
 * @template T
 * @param {() => T} fn
 * @returns {ReadonlySignal<T>}
 */
export function computed(fn) {
  // @ts-ignore — initial undefined is replaced before read
  const s = signal(undefined);
  // @ts-ignore — T is assigned via fn()
  effect(() => s(fn()));
  const reader = () => s();
  reader.peek = s.peek;
  return /** @type {ReadonlySignal<T>} */ (/** @type {unknown} */ (reader));
}

/**
 * @param {() => void} fn
 * @returns {() => void}
 */
export function effect(fn) {
  const e = {
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

/**
 * @template T
 * @param {() => T} fn
 * @returns {T}
 */
export function batch(fn) {
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

/**
 * @template T
 * @param {() => T} fn
 * @returns {T}
 */
export function untrack(fn) {
  const prev = currentEffect;
  currentEffect = null;
  try {
    return fn();
  } finally {
    currentEffect = prev;
  }
}
