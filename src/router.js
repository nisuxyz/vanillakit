import { signal, effect } from "./signal.js";

/** @type {import("./signal.js").Signal<string>} */
export const currentPath = signal(window.location.hash.slice(1) || "/");
/** @type {import("./signal.js").Signal<Record<string, string>>} */
export const routeParams = signal({});

window.addEventListener("hashchange", () => {
  currentPath(window.location.hash.slice(1) || "/");
});

/**
 * Navigate to a hash path.
 * @param {string} path
 * @returns {void}
 */
export function navigate(path) {
  window.location.hash = path;
}

/**
 * Create a hash-based router that renders the matching route handler.
 * @param {Record<string, () => Node>} routeMap
 * @returns {() => HTMLDivElement}
 */
export function createRouter(routeMap) {
  const entries = Object.entries(routeMap).sort((a, b) => {
    if (a[0] === "*") return 1;
    if (b[0] === "*") return -1;
    return b[0].split("/").length - a[0].split("/").length;
  });
  return () => {
    const container = document.createElement("div");
    effect(() => {
      const path = currentPath();
      let match = null;
      for (const [pattern, handler] of entries) {
        const { regex, keys } = (() => {
          if (pattern === "*") return { regex: /.*/, keys: /** @type {string[]} */ ([]) };
          /** @type {string[]} */
          const keys = [];
          const re = pattern.replace(/:([^/]+)/g, (_, k) => {
            keys.push(k);
            return "([^/]+)";
          });
          return { regex: new RegExp(`^${re}$`), keys };
        })();
        const m = path.match(regex);
        if (m) {
          /** @type {Record<string, string>} */
          const p = {};
          keys.forEach((k, i) => {
            p[k] = decodeURIComponent(m[i + 1]);
          });
          match = { handler, params: p };
          break;
        }
      }
      routeParams(match ? match.params : /** @type {Record<string, string>} */ ({}));
      container.innerHTML = "";
      if (match) {
        const r = match.handler();
        if (r instanceof Node) container.append(r);
      }
    });
    return container;
  };
}

/**
 * Create a navigation link element with active-state styling.
 * @param {string} path
 * @param {string} text
 * @param {string} activeClass
 * @param {string} baseClass
 * @returns {HTMLAnchorElement}
 */
export function navLink(path, text, activeClass, baseClass) {
  const a = document.createElement("a");
  a.href = "#" + path;
  a.textContent = text;
  effect(() => {
    a.className = (
      path === "/"
        ? currentPath() === "/"
        : currentPath().startsWith(path)
    )
      ? activeClass
      : baseClass;
  });
  a.addEventListener("click", (e) => {
    e.preventDefault();
    navigate(path);
  });
  return a;
}
