import { describe, test, expect, beforeEach, afterEach } from "bun:test";
import { currentPath, routeParams, navigate, initRouter, createRouter, navLink } from "../src/router.js";

beforeEach(() => {
  // Reset to hash mode
  initRouter({ mode: "hash" });
  window.location.hash = "";
  currentPath("/");
  routeParams({});
  document.body.innerHTML = "";
});

// ─────────────────────────────────────────────
// currentPath signal
// ─────────────────────────────────────────────
describe("currentPath", () => {
  test("defaults to '/' when hash is empty", () => {
    window.location.hash = "";
    currentPath(window.location.hash.slice(1) || "/");
    expect(currentPath()).toBe("/");
  });

  test("reads from window.location.hash", () => {
    window.location.hash = "/about";
    currentPath(window.location.hash.slice(1) || "/");
    expect(currentPath()).toBe("/about");
  });

  test("is a readable signal", () => {
    currentPath("/test");
    expect(currentPath()).toBe("/test");
  });

  test("hashchange event updates currentPath", () => {
    window.location.hash = "/new-route";
    window.dispatchEvent(new Event("hashchange"));
    expect(currentPath()).toBe("/new-route");
  });
});

// ─────────────────────────────────────────────
// navigate()
// ─────────────────────────────────────────────
describe("navigate", () => {
  test("sets window.location.hash", () => {
    navigate("/about");
    expect(window.location.hash).toBe("#/about");
  });

  test("updates currentPath via hashchange", () => {
    navigate("/contact");
    window.dispatchEvent(new Event("hashchange"));
    expect(currentPath()).toBe("/contact");
  });
});

// ─────────────────────────────────────────────
// routeParams
// ─────────────────────────────────────────────
describe("routeParams", () => {
  test("is initially empty", () => {
    expect(routeParams()).toEqual({});
  });

  test("can be set and read", () => {
    routeParams({ id: "123" });
    expect(routeParams()).toEqual({ id: "123" });
  });
});

// ─────────────────────────────────────────────
// createRouter()
// ─────────────────────────────────────────────
describe("createRouter", () => {
  test("returns a function that creates a container div", () => {
    const router = createRouter({
      "/": () => document.createElement("p"),
    });
    const container = router();
    expect(container).toBeInstanceOf(HTMLDivElement);
  });

  test("renders matching route", () => {
    currentPath("/");
    const router = createRouter({
      "/": () => {
        const p = document.createElement("p");
        p.textContent = "Home";
        return p;
      },
    });
    const container = router();
    document.body.append(container);
    expect(container.querySelector("p")?.textContent).toBe("Home");
  });

  test("switches routes when currentPath changes", () => {
    currentPath("/");
    const router = createRouter({
      "/": () => {
        const p = document.createElement("p");
        p.textContent = "Home";
        return p;
      },
      "/about": () => {
        const p = document.createElement("p");
        p.textContent = "About";
        return p;
      },
    });
    const container = router();
    document.body.append(container);
    expect(container.querySelector("p")?.textContent).toBe("Home");
    currentPath("/about");
    expect(container.querySelector("p")?.textContent).toBe("About");
  });

  test("extracts route params from :param patterns", () => {
    currentPath("/users/42");
    const router = createRouter({
      "/users/:id": () => document.createElement("div"),
    });
    router();
    expect(routeParams()).toEqual({ id: "42" });
  });

  test("extracts multiple params", () => {
    currentPath("/users/42/posts/7");
    const router = createRouter({
      "/users/:userId/posts/:postId": () => document.createElement("div"),
    });
    router();
    expect(routeParams()).toEqual({ userId: "42", postId: "7" });
  });

  test("decodes URI components in params", () => {
    currentPath("/search/hello%20world");
    const router = createRouter({
      "/search/:query": () => document.createElement("div"),
    });
    router();
    expect(routeParams()).toEqual({ query: "hello world" });
  });

  test("longest route wins (specificity)", () => {
    currentPath("/users/42");
    let matched = "";
    const router = createRouter({
      "/users": () => { matched = "list"; return document.createElement("div"); },
      "/users/:id": () => { matched = "detail"; return document.createElement("div"); },
    });
    router();
    expect(matched).toBe("detail");
  });

  test("wildcard * matches last", () => {
    currentPath("/unknown/path");
    let matched = "";
    const router = createRouter({
      "/": () => { matched = "home"; return document.createElement("div"); },
      "*": () => { matched = "404"; return document.createElement("div"); },
    });
    router();
    expect(matched).toBe("404");
  });

  test("no match clears container", () => {
    currentPath("/");
    const router = createRouter({
      "/": () => {
        const p = document.createElement("p");
        p.textContent = "Home";
        return p;
      },
    });
    const container = router();
    document.body.append(container);
    expect(container.querySelector("p")).toBeTruthy();
    currentPath("/nonexistent");
    expect(container.innerHTML).toBe("");
  });

  test("no match clears routeParams", () => {
    currentPath("/users/42");
    const router = createRouter({
      "/users/:id": () => document.createElement("div"),
      "/": () => document.createElement("div"),
    });
    router();
    expect(routeParams()).toEqual({ id: "42" });
    currentPath("/");
    expect(routeParams()).toEqual({});
  });
});

// ─────────────────────────────────────────────
// navLink()
// ─────────────────────────────────────────────
describe("navLink", () => {
  test("creates an anchor element", () => {
    const link = navLink("/about", "About");
    expect(link).toBeInstanceOf(HTMLAnchorElement);
    expect(link.textContent).toBe("About");
    expect(link.href).toContain("#/about");
  });

  test("sets aria-current on active route", () => {
    currentPath("/about");
    const link = navLink("/about", "About");
    document.body.append(link);
    expect(link.getAttribute("aria-current")).toBe("page");
  });

  test("removes aria-current on inactive route", () => {
    currentPath("/");
    const link = navLink("/about", "About");
    document.body.append(link);
    expect(link.getAttribute("aria-current")).toBeNull();
  });

  test("prefix matching for nested routes", () => {
    currentPath("/docs/api");
    const link = navLink("/docs", "Docs");
    document.body.append(link);
    expect(link.getAttribute("aria-current")).toBe("page");
  });

  test("root path only matches exact '/'", () => {
    currentPath("/about");
    const link = navLink("/", "Home");
    document.body.append(link);
    expect(link.getAttribute("aria-current")).toBeNull();
  });

  test("updates aria-current reactively", () => {
    currentPath("/");
    const link = navLink("/about", "About");
    document.body.append(link);
    expect(link.getAttribute("aria-current")).toBeNull();
    currentPath("/about");
    expect(link.getAttribute("aria-current")).toBe("page");
  });

  test("click navigates and prevents default", () => {
    currentPath("/");
    const link = navLink("/about", "About");
    document.body.append(link);
    link.click();
    expect(window.location.hash).toBe("#/about");
  });
});

// ─────────────────────────────────────────────
// History API mode (initRouter)
// ─────────────────────────────────────────────
describe("initRouter – history mode", () => {
  beforeEach(() => {
    initRouter({ mode: "history" });
    currentPath("/");
    routeParams({});
    document.body.innerHTML = "";
  });

  test("navigate() uses pushState and updates currentPath", () => {
    navigate("/about");
    expect(currentPath()).toBe("/about");
  });

  test("popstate event updates currentPath", () => {
    // Simulate browser back: update the URL then fire popstate
    window.location.href = "http://localhost/home";
    window.dispatchEvent(new PopStateEvent("popstate", { state: {} }));
    expect(currentPath()).toBe("/home");
  });

  test("navLink sets href without hash prefix", () => {
    const link = navLink("/docs", "Docs");
    expect(link.href).not.toContain("#");
    expect(link.href).toContain("/docs");
  });

  test("navLink click navigates via navigate()", () => {
    const link = navLink("/about", "About");
    document.body.append(link);
    link.click();
    expect(currentPath()).toBe("/about");
  });

  test("createRouter renders matching route by pathname", () => {
    currentPath("/");
    const router = createRouter({
      "/": () => {
        const p = document.createElement("p");
        p.textContent = "Home";
        return p;
      },
      "/about": () => {
        const p = document.createElement("p");
        p.textContent = "About";
        return p;
      },
    });
    const container = router();
    document.body.append(container);
    expect(container.querySelector("p")?.textContent).toBe("Home");
    navigate("/about");
    expect(container.querySelector("p")?.textContent).toBe("About");
  });
});

describe("initRouter – switching modes", () => {
  test("switching back to hash mode re-attaches hashchange listener", () => {
    initRouter({ mode: "history" });
    initRouter({ mode: "hash" });
    window.location.hash = "/switched";
    window.dispatchEvent(new Event("hashchange"));
    expect(currentPath()).toBe("/switched");
  });

  test("calling initRouter with same mode is a no-op", () => {
    initRouter({ mode: "hash" });
    window.location.hash = "/noop";
    window.dispatchEvent(new Event("hashchange"));
    expect(currentPath()).toBe("/noop");
  });
});

// ─────────────────────────────────────────────
// History mode with base path
// ─────────────────────────────────────────────
describe("initRouter – history mode with base", () => {
  beforeEach(() => {
    initRouter({ mode: "history", base: "/vanillakit" });
    currentPath("/");
    routeParams({});
    document.body.innerHTML = "";
  });

  afterEach(() => {
    // Reset base so other tests are not affected
    initRouter({ mode: "hash" });
  });

  test("navigate() pushes base-prefixed URL but currentPath is app-relative", () => {
    navigate("/about");
    expect(currentPath()).toBe("/about");
    expect(window.location.pathname).toBe("/vanillakit/about");
  });

  test("popstate strips base prefix from pathname", () => {
    window.history.pushState({}, "", "/vanillakit/docs");
    window.dispatchEvent(new PopStateEvent("popstate", { state: {} }));
    expect(currentPath()).toBe("/docs");
  });

  test("navLink href includes base prefix", () => {
    const link = navLink("/docs", "Docs");
    expect(link.href).toContain("/vanillakit/docs");
    expect(link.href).not.toContain("#");
  });

  test("base with trailing slash is normalized", () => {
    initRouter({ mode: "history", base: "/vanillakit/" });
    navigate("/about");
    expect(window.location.pathname).toBe("/vanillakit/about");
  });

  test("base '/' is treated as empty (no prefix)", () => {
    initRouter({ mode: "history", base: "/" });
    navigate("/about");
    expect(window.location.pathname).toBe("/about");
  });
});
