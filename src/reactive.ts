import type { Signal } from "./signal.js";
import { batch,signal } from "./signal.js";

const REACTIVE: unique symbol = Symbol("reactive");
const RAW: unique symbol = Symbol("raw");
const proxyCache: WeakMap<object, object> = new WeakMap();

const _passthrough: Set<string | symbol> = new Set([
  REACTIVE,
  RAW,
  Symbol.toPrimitive,
  Symbol.toStringTag,
  Symbol.iterator,
  Symbol.asyncIterator,
  Symbol.isConcatSpreadable,
  "__proto__",
  "constructor",
  "prototype",
  "toJSON",
]);
const _arrayMutators: Set<string> = new Set([
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
  "fill",
  "copyWithin",
]);
const _arrayLookups: Set<string> = new Set([
  "indexOf",
  "lastIndexOf",
  "includes",
]);

function _wrap(value: unknown): unknown {
  if (value == null || typeof value !== "object") return value;
  if (
    value instanceof Date ||
    value instanceof RegExp ||
    value instanceof Error ||
    value instanceof Node
  )
    return value;
  if (value instanceof Map || value instanceof Set) return value;
  return reactive(value as object);
}

function _syncArr(
  arr: unknown[],
  signals: Map<string | symbol, Signal<unknown>>,
): void {
  for (let i = 0; i < arr.length; i++) {
    const k = String(i);
    if (signals.has(k)) (signals.get(k) as Signal<unknown>)(_wrap(arr[i]));
  }
  if (signals.has("length"))
    (signals.get("length") as Signal<unknown>)(arr.length);
}

export function reactive<T extends object>(target: T): T {
  if (target == null || typeof target !== "object") return target;
  if ((target as Record<symbol, unknown>)[REACTIVE]) return target;
  if (proxyCache.has(target)) return proxyCache.get(target) as T;

  const signals: Map<string | symbol, Signal<unknown>> = new Map();

  function getSig(key: string | symbol): Signal<unknown> {
    if (!signals.has(key))
      signals.set(
        key,
        signal(_wrap((target as Record<string | symbol, unknown>)[key])),
      );
    return signals.get(key) as Signal<unknown>;
  }

  const proxy = new Proxy(target, {
    get(obj, key, receiver) {
      if (key === REACTIVE) return true;
      if (key === RAW) return obj;
      if (typeof key === "symbol" && _passthrough.has(key))
        return Reflect.get(obj, key, receiver);
      if (_passthrough.has(key)) return Reflect.get(obj, key, receiver);

      if (Array.isArray(obj) && typeof key === "string") {
        if (_arrayMutators.has(key)) {
          return (...args: unknown[]) => {
            let result: unknown;
            batch(() => {
              const rawArgs = args.map((a) =>
                a != null && (a as Record<symbol, unknown>)[RAW]
                  ? (a as Record<symbol, unknown>)[RAW]
                  : a,
              );
              result = (
                Array.prototype as unknown as Record<
                  string,
                  (...a: unknown[]) => unknown
                >
              )[key].apply(obj, rawArgs);
              _syncArr(obj as unknown[], signals);
            });
            return result;
          };
        }
        if (_arrayLookups.has(key)) {
          return (...args: unknown[]) => {
            getSig("length")();
            const rawArg =
              args[0] != null && (args[0] as Record<symbol, unknown>)[RAW]
                ? (args[0] as Record<symbol, unknown>)[RAW]
                : args[0];
            return (
              Array.prototype as unknown as Record<
                string,
                (...a: unknown[]) => unknown
              >
            )[key].apply(obj, [rawArg, ...args.slice(1)]);
          };
        }
      }
      return getSig(key)();
    },
    set(obj, key, value) {
      const raw =
        value != null && (value as Record<symbol, unknown>)[RAW]
          ? (value as Record<symbol, unknown>)[RAW]
          : value;
      (obj as Record<string | symbol, unknown>)[key] = raw;
      if (signals.has(key)) (signals.get(key) as Signal<unknown>)(_wrap(raw));
      if (Array.isArray(obj) && signals.has("length"))
        (signals.get("length") as Signal<unknown>)((obj as unknown[]).length);
      return true;
    },
    deleteProperty(obj, key) {
      delete (obj as Record<string | symbol, unknown>)[key];
      if (signals.has(key)) {
        (signals.get(key) as Signal<unknown>)(undefined as unknown);
        signals.delete(key);
      }
      return true;
    },
    has(obj, key) {
      if (key === REACTIVE || key === RAW) return true;
      if (typeof key === "string") getSig(key)();
      return key in obj;
    },
    ownKeys(obj) {
      if (Array.isArray(obj)) getSig("length")();
      return Reflect.ownKeys(obj);
    },
    getPrototypeOf(obj) {
      return Reflect.getPrototypeOf(obj);
    },
    getOwnPropertyDescriptor(obj, key) {
      return Reflect.getOwnPropertyDescriptor(obj, key);
    },
  });

  proxyCache.set(target, proxy);
  return proxy;
}

export function toRaw<T>(obj: T): T {
  return obj != null && (obj as Record<symbol, unknown>)[RAW]
    ? ((obj as Record<symbol, unknown>)[RAW] as T)
    : obj;
}

export function isReactive(obj: unknown): boolean {
  return obj != null && (obj as Record<symbol, unknown>)[REACTIVE] === true;
}

export function snapshot(obj: unknown): unknown {
  if (obj == null || typeof obj !== "object") return obj;
  if (isReactive(obj)) {
    const raw = (obj as Record<symbol, unknown>)[RAW] as object;
    if (Array.isArray(raw)) {
      const len = (obj as Record<string, unknown>)["length"] as number;
      const result: unknown[] = [];
      for (let i = 0; i < len; i++)
        result.push(snapshot((obj as Record<string | number, unknown>)[i]));
      return result;
    }
    const result: Record<string, unknown> = {};
    for (const key of Object.keys(raw))
      result[key] = snapshot((obj as Record<string, unknown>)[key]);
    return result;
  }
  if (Array.isArray(obj)) return (obj as unknown[]).map(snapshot);
  const result2: Record<string, unknown> = {};
  for (const k of Object.keys(obj as object))
    result2[k] = snapshot((obj as Record<string, unknown>)[k]);
  return result2;
}
