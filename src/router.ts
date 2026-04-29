import type { Signal } from "./signal.js";
import { effect,signal } from "./signal.js";
import type { DisposableNode } from "./types.js";

let _mode: "hash" | "history" = "hash";
let _base: string = "";

export const currentPath: Signal<string> = signal(
  window.location.hash.slice(1) || "/",
);
export const routeParams: Signal<Record<string, string>> = signal({});

function _onHashChange() {
  currentPath(window.location.hash.slice(1) || "/");
}

function _onPopState() {
  currentPath(window.location.pathname.slice(_base.length) || "/");
}

function _disposeNodeTree(node: Node): void {
  const disposableNode = node as DisposableNode;

  if (disposableNode.__v_dispose) {
    disposableNode.__v_dispose();
  } else if (disposableNode.__v_disposers) {
    for (const dispose of disposableNode.__v_disposers) dispose();
    disposableNode.__v_disposers = null;
  }

  for (const child of Array.from(node.childNodes)) {
    _disposeNodeTree(child);
  }
}

window.addEventListener("hashchange", _onHashChange);

export function initRouter(
  config: { mode?: "hash" | "history"; base?: string } = {},
): void {
  const mode = config.mode ?? "hash";
  _base = (config.base ?? "").replace(/\/$/, "").replace(/^\/$/, "");

  if (mode === _mode) return;

  if (_mode === "hash") {
    window.removeEventListener("hashchange", _onHashChange);
  } else {
    window.removeEventListener("popstate", _onPopState);
  }

  _mode = mode;

  if (mode === "hash") {
    currentPath(window.location.hash.slice(1) || "/");
    window.addEventListener("hashchange", _onHashChange);
  } else {
    currentPath(window.location.pathname.slice(_base.length) || "/");
    window.addEventListener("popstate", _onPopState);
  }
}

export function navigate(path: string): void {
  if (_mode === "history") {
    window.history.pushState({}, "", _base + path);
    currentPath(path);
  } else {
    window.location.hash = path;
  }
}

export function createRouter(
  routeMap: Record<string, () => Node>,
): () => HTMLDivElement {
  const entries = Object.entries(routeMap).sort((a, b) => {
    if (a[0] === "*") return 1;
    if (b[0] === "*") return -1;
    return b[0].split("/").length - a[0].split("/").length;
  });
  return () => {
    const container = document.createElement("div");
    effect(() => {
      const path = currentPath();
      let match: {
        handler: () => Node;
        params: Record<string, string>;
      } | null = null;
      for (const [pattern, handler] of entries) {
        const { regex, keys } = (() => {
          if (pattern === "*") return { regex: /.*/, keys: [] as string[] };
          const keys: string[] = [];
          const re = pattern.replace(/:([^/]+)/g, (_, k: string) => {
            keys.push(k);
            return "([^/]+)";
          });
          return { regex: new RegExp(`^${re}$`), keys };
        })();
        const m = path.match(regex);
        if (m) {
          const p: Record<string, string> = {};
          keys.forEach((k, i) => {
            p[k] = decodeURIComponent(m[i + 1]);
          });
          match = { handler, params: p };
          break;
        }
      }
      routeParams(match ? match.params : {});
      for (const child of Array.from(container.childNodes)) {
        _disposeNodeTree(child);
      }
      container.replaceChildren();
      if (match) {
        const r = match.handler();
        if (r instanceof Node) container.append(r);
      }
    });
    return container;
  };
}

export function navLink(path: string, text: string): HTMLAnchorElement {
  const a = document.createElement("a");
  a.href = _mode === "history" ? _base + path : "#" + path;
  a.textContent = text;
  effect(() => {
    const isActive =
      path === "/" ? currentPath() === "/" : currentPath().startsWith(path);
    if (isActive) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
  a.addEventListener("click", (e) => {
    e.preventDefault();
    navigate(path);
  });
  return a;
}
