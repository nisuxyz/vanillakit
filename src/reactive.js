import { signal, batch } from "./signal.js";

/** @type {unique symbol} */
const REACTIVE = Symbol("reactive");
/** @type {unique symbol} */
const RAW = Symbol("raw");
/** @type {WeakMap<object, object>} */
const proxyCache = new WeakMap();

const _passthrough = new Set([
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
const _arrayMutators = new Set([
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
const _arrayLookups = new Set(["indexOf", "lastIndexOf", "includes"]);

/**
 * @param {*} value
 * @returns {*}
 */
function _wrap(value) {
  if (value == null || typeof value !== "object") return value;
  if (
    value instanceof Date ||
    value instanceof RegExp ||
    value instanceof Error ||
    value instanceof Node
  )
    return value;
  if (value instanceof Map || value instanceof Set) return value;
  return reactive(value);
}
/**
 * @param {any[]} arr
 * @param {Map<string | symbol, import("./signal.js").Signal<any>>} signals
 */
function _syncArr(arr, signals) {
  for (let i = 0; i < arr.length; i++) {
    const k = String(i);
    if (signals.has(k)) /** @type {Function} */ (signals.get(k))(_wrap(arr[i]));
  }
  if (signals.has("length")) /** @type {Function} */ (signals.get("length"))(arr.length);
}

/**
 * @template {object} T
 * @param {T} target
 * @returns {T}
 */
export function reactive(target) {
  if (target == null || typeof target !== "object") return target;
  // @ts-ignore — symbol property
  if (target[REACTIVE]) return target;
  // @ts-ignore — WeakMap returns T
  if (proxyCache.has(target)) return proxyCache.get(target);

  /** @type {Map<string | symbol, import("./signal.js").Signal<any>>} */
  const signals = new Map();
  /** @param {string | symbol} key
   *  @returns {import("./signal.js").Signal<any>} */
  function getSig(key) {
    if (!signals.has(key)) signals.set(key, signal(_wrap(/** @type {any} */(target)[key])));
    return /** @type {import("./signal.js").Signal<any>} */ (signals.get(key));
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
          return (/** @type {(...args: any[]) => any} */ ((...args) => {
            let result;
            batch(() => {
              const rawArgs = args.map((a) => (a && a[RAW] ? a[RAW] : a));
              result = /** @type {any} */ (Array.prototype)[key].apply(obj, rawArgs);
              _syncArr(obj, signals);
            });
            return result;
          }));
        }
        if (_arrayLookups.has(key)) {
          return (/** @type {(...args: any[]) => any} */ ((...args) => {
            getSig("length")();
            const rawArg =
              args[0] && args[0][RAW] ? args[0][RAW] : args[0];
            return /** @type {any} */ (Array.prototype)[key].apply(obj, [
              rawArg,
              ...args.slice(1),
            ]);
          }));
        }
      }
      return getSig(key)();
    },
    set(obj, key, value) {
      const raw = value && value[RAW] ? value[RAW] : value;
      /** @type {any} */ (obj)[key] = raw;
      if (signals.has(key)) /** @type {Function} */ (signals.get(key))(_wrap(raw));
      if (Array.isArray(obj) && signals.has("length"))
        /** @type {Function} */ (signals.get("length"))(obj.length);
      return true;
    },
    deleteProperty(obj, key) {
      delete /** @type {any} */ (obj)[key];
      if (signals.has(key)) {
        /** @type {Function} */ (signals.get(key))(undefined);
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

/**
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function toRaw(obj) {
  // @ts-ignore — symbol property
  return obj && obj[RAW] ? obj[RAW] : obj;
}

/**
 * @param {*} obj
 * @returns {boolean}
 */
export function isReactive(obj) {
  return obj != null && obj[REACTIVE] === true;
}

/**
 * @param {*} obj
 * @returns {*}
 */
export function snapshot(obj) {
  if (obj == null || typeof obj !== "object") return obj;
  if (isReactive(obj)) {
    /** @type {any} */
    const raw = obj[RAW];
    if (Array.isArray(raw)) {
      const len = /** @type {any} */ (obj).length; // read through proxy → tracks length signal
      const result = [];
      for (let i = 0; i < len; i++) result.push(snapshot(/** @type {any} */(obj)[i])); // read each index through proxy
      return result;
    }
    /** @type {Record<string, any>} */
    const result = {};
    for (const key of Object.keys(raw)) result[key] = snapshot(/** @type {any} */(obj)[key]); // read each key through proxy
    return result;
  }
  if (Array.isArray(obj)) return obj.map(snapshot);
  /** @type {Record<string, any>} */
  const result2 = {};
  for (const k of Object.keys(obj)) result2[k] = snapshot(obj[k]);
  return result2;
}
