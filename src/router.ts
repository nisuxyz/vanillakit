import { signal, effect } from "./signal.js";
import type { Signal } from "./signal.js";

export const currentPath: Signal<string> = signal(
  window.location.hash.slice(1) || "/",
);
export const routeParams: Signal<Record<string, string>> = signal({});

window.addEventListener("hashchange", () => {
  currentPath(window.location.hash.slice(1) || "/");
});

export function navigate(path: string): void {
  window.location.hash = path;
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
      container.innerHTML = "";
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
  a.href = "#" + path;
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
