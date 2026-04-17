import { html } from "../../src/index.js";
import {
  pageClass, headingClass, subtitleClass,
  sourceBlock, detailsSummary, docSectionClass,
} from "../styles.ts";
import { code } from "../highlight.ts";

export function DocsPage() {
  return html`<div class=${pageClass}>
    <h1 class=${headingClass}>Docs</h1>
    <p class=${subtitleClass}>
      API reference for each module. ~760 lines total, zero dependencies.
    </p>

    <!-- Getting Started -->
    <div class=${docSectionClass}>
      <h2>Getting Started</h2>
      <p>
        vanillakit is a collection of standalone ES modules. No build step required —
        import from source and go. Works with any bundler (Vite, esbuild, etc.) or direct
        <code>&lt;script type="module"&gt;</code>.
      </p>

      <h3>Install</h3>
      ${code(`npm install vanillakit`, "bash")}

      <h3>Quick setup</h3>
      <p>Create an <code>index.html</code> and a module entry point:</p>
      ${code(`<!doctype html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="./app.js"></script>
  </body>
</html>`, "markup")}

      ${code(`// app.js
import { signal, html, css, globalCss } from "vanillakit";

globalCss\`
  body { margin: 0; font-family: system-ui; background: #111; color: #eee; }
\`;

const count = signal(0);

const btn = css\`
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  background: gold;
  color: #111;
  font-weight: 600;
  cursor: pointer;
\`;

const app = html\`
  <div style="padding: 40px; text-align: center;">
    <h1>Count: \${count}</h1>
    <button class=\${btn} onclick=\${() => count(n => n + 1)}>
      Increment
    </button>
  </div>
\`;

document.getElementById("app").append(app);`)}

      <h3>Project structure</h3>
      <p>There's no required structure. The library is five files:</p>
      ${code(`src/
  signal.js    — signal, computed, effect, batch, untrack
  reactive.js  — reactive, toRaw, isReactive, snapshot
  html.js      — html, each
  css.js       — css, keyframes, globalCss, cx
  router.js    — createRouter, navigate, navLink, currentPath, routeParams
  index.js     — re-exports everything`, "bash")}

      <p>Import what you need. Each module (except <code>reactive.js</code> and <code>html.js</code>) only depends on <code>signal.js</code>.</p>
      <hr />
    </div>

    <!-- TypeScript & Tooling -->
    <div class=${docSectionClass}>
      <h2>TypeScript &amp; Tooling</h2>

      <h3>TypeScript</h3>
      <p>
        The source is plain JS with JSDoc type annotations, so it works out of the box
        with TypeScript — no <code>@types</code> package needed. Import the types directly:
      </p>
      ${code(`import { signal } from "vanillakit";
import type { Signal, ReadonlySignal } from "vanillakit/signal.js";

const count: Signal<number> = signal(0);`, "typescript")}

      <p>
        If you're writing <code>.ts</code> files, make sure your <code>tsconfig.json</code>
        has <code>"moduleResolution": "bundler"</code> and
        <code>"allowImportingTsExtensions": true</code> (already the default with Vite).
      </p>
      ${code(`{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowJs": true,
    "checkJs": true,
    "noEmit": true,
    "allowImportingTsExtensions": true,
    "strict": true,
    "lib": ["ESNext", "DOM", "DOM.Iterable"]
  }
}`, "javascript")}

      <h3>HMR with Vite</h3>
      <p>
        vanillakit works with Vite's HMR out of the box. Since state lives in module-level
        signals, hot-updated modules keep their reactive graph intact — the DOM updates in
        place without a full reload.
      </p>
      <p>
        A minimal <code>vite.config.js</code>:
      </p>
      ${code(`import { defineConfig } from "vite";

export default defineConfig({
  root: "demo",     // folder with your index.html
  base: "./",       // relative paths (important for GitHub Pages)
});`)}

      <p>
        Run <code>npx vite</code> (or <code>bun run dev</code>) and edits to your templates,
        styles, and signals will hot-swap instantly. CSS changes via <code>css\`\`</code>
        trigger full reloads since styles are injected via <code>CSSStyleSheet</code> at
        module evaluation time — this is fast enough to feel instant in practice.
      </p>

      <h3>Type checking</h3>
      <p>
        Run <code>tsc --noEmit</code> to type-check without emitting files. The <code>checkJs</code>
        flag ensures the JSDoc-typed source files are validated too.
      </p>
      ${code(`# type-check everything
npx tsc --noEmit

# or add a script to package.json
# "check": "tsc --noEmit"`, "bash")}

      <h3>Production builds</h3>
      <p>
        <code>vite build</code> produces a single minified JS bundle. The entire library
        plus a full demo app compiles to ~25 KB gzipped.
      </p>
      ${code(`npx vite build
# output in dist/ (or wherever outDir points)`, "bash")}
      <hr />
    </div>

    <!-- Examples -->
    <div class=${docSectionClass}>
      <h2>Examples</h2>

      <h3>Counter</h3>
      <p>The simplest possible app — a signal and a button.</p>
      ${code(`import { signal, html } from "vanillakit";

const count = signal(0);

document.body.append(html\`
  <button onclick=\${() => count(n => n + 1)}>
    Clicked \${count} times
  </button>
\`);`)}

      <h3>Two-way binding</h3>
      <p>Bind an input to a signal. The heading updates as you type.</p>
      ${code(`import { signal, html } from "vanillakit";

const name = signal("world");

document.body.append(html\`
  <div>
    <h1>Hello, \${name}!</h1>
    <input
      value=\${() => name()}
      oninput=\${(e) => name(e.target.value)}
    />
  </div>
\`);`)}

      <h3>Derived state</h3>
      <p><code>computed</code> derives values. <code>batch</code> groups writes so effects fire once.</p>
      ${code(`import { signal, computed, effect, batch } from "vanillakit";

const price    = signal(10);
const quantity = signal(3);
const total    = computed(() => price() * quantity());

effect(() => console.log("Total: $" + total()));
// logs: Total: $30

batch(() => {
  price(20);
  quantity(5);
});
// logs: Total: $100 (once)`)}

      <h3>Reactive object</h3>
      <p>Deeply nested mutations tracked automatically via Proxy.</p>
      ${code(`import { reactive, snapshot, effect } from "vanillakit";

const state = reactive({
  todos: [
    { text: "Learn signals", done: true },
    { text: "Build an app",  done: false },
  ],
});

effect(() => console.log(JSON.stringify(snapshot(state), null, 2)));

state.todos.push({ text: "Ship it", done: false });
state.todos[0].done = false;`)}

      <h3>Keyed list</h3>
      <p><code>each()</code> reconciles DOM nodes by key. Nodes persist across reorders — input state, focus, etc. are preserved.</p>
      ${code(`import { signal, each, html } from "vanillakit";

const items = signal([
  { id: 1, label: "Alpha" },
  { id: 2, label: "Bravo" },
  { id: 3, label: "Charlie" },
]);

document.body.append(html\`
  <ul>
    \${each(
      items,
      (item) => item.id,
      (itemSig, indexSig) => html\`
        <li>#\${indexSig} — \${() => itemSig().label}</li>
      \`,
    )}
  </ul>
  <button onclick=\${() => items(l => [...l].reverse())}>
    Reverse
  </button>
\`);`)}

      <h3>Scoped styles + routing</h3>
      <p>Full mini-app with CSS-in-JS and hash routing.</p>
      ${code(`import { html, css, globalCss, createRouter, navLink } from "vanillakit";

globalCss\`body { margin: 0; font-family: system-ui; }\`;

const page = css\`padding: 24px;\`;
const active = css\`color: gold; font-weight: 700;\`;
const base = css\`color: gray; text-decoration: none;\`;

const Router = createRouter({
  "/":      () => html\`<div class=\${page}><h1>Home</h1></div>\`,
  "/about": () => html\`<div class=\${page}><h1>About</h1></div>\`,
  "*":      () => html\`<div class=\${page}><h1>404</h1></div>\`,
});

document.body.append(html\`
  <nav>
    \${navLink("/", "Home", active, base)}
    \${navLink("/about", "About", active, base)}
  </nav>
  \${Router()}
\`);`)}
      <hr />
    </div>

    <!-- signal.js -->
    <div class=${docSectionClass}>
      <h2>signal.js</h2>
      <p>Fine-grained reactivity primitives. Every other module builds on this.</p>

      <h3>signal(initial)</h3>
      <p>Creates a read/write signal. Call with no args to read (and track), call with a value to write.</p>
      ${code(`
import { signal } from "vanillakit";

const count = signal(0);
count();           // read → 0
count(5);          // write → 5
count(n => n + 1); // update via function → 6
count.peek();      // read without tracking
`)}

      <h3>computed(fn)</h3>
      <p>Derives a read-only signal from other signals. Re-evaluates only when dependencies change.</p>
      ${code(`
import { signal, computed } from "vanillakit";

const a = signal(2);
const b = signal(3);
const sum = computed(() => a() + b());

sum(); // 5
a(10);
sum(); // 13
`)}

      <h3>effect(fn)</h3>
      <p>Runs a side effect whenever its dependencies change. Returns a dispose function.</p>
      ${code(`
import { signal, effect } from "vanillakit";

const name = signal("world");
const dispose = effect(() => {
  console.log("Hello, " + name() + "!");
});
// logs: Hello, world!

name("vanillakit");
// logs: Hello, vanillakit!

dispose(); // stops tracking
`)}

      <h3>batch(fn)</h3>
      <p>Groups multiple signal writes — effects run once at the end, not after each write.</p>
      ${code(`
import { signal, effect, batch } from "vanillakit";

const a = signal(1);
const b = signal(2);
effect(() => console.log(a() + b()));
// logs: 3

batch(() => {
  a(10);
  b(20);
});
// logs: 30 (once, not twice)
`)}

      <h3>untrack(fn)</h3>
      <p>Reads signals inside <code>fn</code> without creating a dependency.</p>
      ${code(`
import { signal, effect, untrack } from "vanillakit";

const a = signal(1);
const b = signal(2);

effect(() => {
  // tracks a, ignores b
  console.log(a() + untrack(() => b()));
});

b(99); // effect does NOT re-run
a(10); // effect re-runs, reads b's current value
`)}
      <hr />
    </div>

    <!-- reactive.js -->
    <div class=${docSectionClass}>
      <h2>reactive.js</h2>
      <p>Deep reactive proxies backed by signals. Mutate normally — changes propagate automatically.</p>

      <h3>reactive(target)</h3>
      <p>Wraps a plain object (or array) in a deep reactive proxy. Nested objects are wrapped lazily.</p>
      ${code(`
import { reactive, effect } from "vanillakit";

const state = reactive({
  user: { name: "Ada", scores: [95, 87] },
});

effect(() => console.log(state.user.name));
// logs: Ada

state.user.name = "Grace";
// logs: Grace

state.user.scores.push(92);
// tracked — any effect reading scores will re-run
`)}

      <h3>snapshot(obj)</h3>
      <p>Returns a deep plain-object copy of a reactive proxy. Useful for serialization or debugging.</p>
      ${code(`
import { reactive, snapshot } from "vanillakit";

const state = reactive({ x: 1, nested: { y: 2 } });
const plain = snapshot(state);
// { x: 1, nested: { y: 2 } } — no proxies
`)}

      <h3>toRaw(obj)</h3>
      <p>Returns the underlying raw object from a reactive proxy.</p>

      <h3>isReactive(obj)</h3>
      <p>Returns <code>true</code> if the object is a reactive proxy.</p>
      <hr />
    </div>

    <!-- html.js -->
    <div class=${docSectionClass}>
      <h2>html.js</h2>
      <p>Tagged template that produces live DOM nodes with reactive bindings. No virtual DOM — updates are surgical.</p>

      <h3>html\`...\`</h3>
      <p>Interpolations can be static values, signals, or functions. Functions are wrapped in effects and update their DOM node automatically.</p>
      ${code(`
import { signal, html } from "vanillakit";

const name = signal("world");

const el = html\`
  <div>
    <h1>Hello, \${name}!</h1>
    <input
      value=\${() => name()}
      oninput=\${(e) => name(e.target.value)}
    />
  </div>
\`;

document.body.append(el);
`)}

      <p>Supported attribute bindings:</p>
      <ul style="color:var(--text-muted);font-size:0.88rem;margin-bottom:10px;padding-left:20px;line-height:1.8;">
        <li><code>class</code> / <code>className</code> — sets className</li>
        <li><code>style</code> — string or object</li>
        <li><code>checked</code>, <code>value</code> — synced to DOM properties</li>
        <li><code>on*</code> — event listeners (<code>onclick</code>, <code>oninput</code>, etc.)</li>
        <li><code>ref</code> — called with the element: <code>ref=\${(el) => ...}</code></li>
      </ul>

      <h3>each(listFn, keyFn, renderFn)</h3>
      <p>Keyed list reconciliation. Reuses DOM nodes across re-renders by matching keys. Each item is passed as a signal so the render function can react to changes without re-creating the node.</p>
      ${code(`
import { signal, each, html } from "vanillakit";

const items = signal([
  { id: 1, text: "first" },
  { id: 2, text: "second" },
]);

const list = html\`
  <ul>
    \${each(
      items,
      (item) => item.id,
      (itemSig) => html\`<li>\${() => itemSig().text}</li>\`,
    )}
  </ul>
\`;
`)}
      <hr />
    </div>

    <!-- css.js -->
    <div class=${docSectionClass}>
      <h2>css.js</h2>
      <p>Scoped CSS-in-JS using <code>CSSStyleSheet</code>. No style tags injected into the DOM. Supports nesting, <code>@media</code>, <code>@keyframes</code>, and combinators.</p>

      <h3>css\`...\`</h3>
      <p>Returns a unique class name. Styles are scoped — the template body is compiled with <code>&amp;</code> replaced by the generated selector.</p>
      ${code(`
import { css } from "vanillakit";

const card = css\`
  padding: 16px;
  background: #1a1a1a;
  border-radius: 8px;

  &:hover {
    border-color: gold;
  }

  & .title {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    padding: 8px;
  }
\`;
// card = "v-0" (unique class name)
`)}

      <h3>keyframes\`...\`</h3>
      <p>Creates a scoped <code>@keyframes</code> rule, returns the generated animation name.</p>
      ${code(`
import { css, keyframes } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;

const spinner = css\`
  animation: \${spin} 1s linear infinite;
\`;
`)}

      <h3>globalCss\`...\`</h3>
      <p>Injects unscoped CSS rules. <code>@import url(...)</code> lines are converted to <code>&lt;link&gt;</code> tags.</p>
      ${code(`
import { globalCss } from "vanillakit";

globalCss\`
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap')
\`;

globalCss\`
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: 'Inter', sans-serif; }
\`;
`)}

      <h3>cx(...classes)</h3>
      <p>Joins class names, filtering out falsy values. Handy for conditional styling.</p>
      ${code(`
import { css, cx } from "vanillakit";

const base = css\`padding: 8px;\`;
const active = css\`color: gold;\`;

el.className = cx(base, isActive && active, null, undefined);
// falsy values are skipped
`)}
      <hr />
    </div>

    <!-- router.js -->
    <div class=${docSectionClass}>
      <h2>router.js</h2>
      <p>Hash-based client-side router. Routes are plain functions that return DOM nodes.</p>

      <h3>createRouter(routeMap)</h3>
      <p>Takes an object mapping path patterns to handler functions. Returns a function that renders the current route into a container div. Supports <code>:param</code> segments and a <code>*</code> catch-all.</p>
      ${code(`
import { createRouter, html } from "vanillakit";

const Router = createRouter({
  "/":         () => html\`<h1>Home</h1>\`,
  "/user/:id": () => html\`<h1>User page</h1>\`,
  "*":         () => html\`<h1>404</h1>\`,
});

document.body.append(Router());
`)}

      <h3>navigate(path)</h3>
      <p>Navigates to a hash path.</p>
      ${code(`
import { navigate } from "vanillakit";

navigate("/user/42"); // sets window.location.hash
`)}

      <h3>currentPath</h3>
      <p>A signal holding the current hash path (without the <code>#</code>). Updates on <code>hashchange</code>.</p>

      <h3>routeParams</h3>
      <p>A signal holding the extracted <code>:param</code> values from the current route as a <code>Record&lt;string, string&gt;</code>.</p>

      <h3>navLink(path, text, activeClass, baseClass)</h3>
      <p>Creates an <code>&lt;a&gt;</code> element that swaps between <code>activeClass</code> and <code>baseClass</code> reactively based on the current path.</p>
      ${code(`
import { navLink, css } from "vanillakit";

const active = css\`color: gold; font-weight: 700;\`;
const base   = css\`color: gray;\`;

document.body.append(navLink("/about", "About", active, base));
`)}
    </div>
  </div>`;
}
