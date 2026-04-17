import { signal, html, css } from "../../src/index.js";
import {
  pageClass, headingClass, subtitleClass,
  docSectionClass,
} from "../styles.ts";
import { code } from "../highlight.ts";
import { LiveEditor } from "../components/LiveEditor.ts";

// ── Sidebar + layout styles ────────────────────────────────
const docsLayoutClass = css`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 36px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const sidebarClass = css`
  position: sticky;
  top: 24px;
  align-self: start;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  padding-right: 12px;
  @media (max-width: 768px) {
    position: static;
    max-height: none;
    border-bottom: 1px solid var(--border);
    padding-bottom: 16px;
    margin-bottom: 8px;
  }
`;

const sidebarGroupClass = css`
  margin-bottom: 20px;
  & .group-label {
    font-family: var(--mono);
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-muted);
    margin-bottom: 6px;
    padding-left: 8px;
  }
`;

const sidebarLinkBase = css`
  display: block;
  font-size: 0.82rem;
  color: var(--text-muted);
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 6px;
  border-left: 2px solid transparent;
  transition: all 0.12s ease;
  cursor: pointer;
  &:hover {
    color: var(--text);
    background: var(--surface);
  }
`;

const sidebarLinkActive = css`
  display: block;
  font-size: 0.82rem;
  color: var(--accent);
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 6px;
  border-left: 2px solid var(--accent);
  background: var(--accent-dim);
  font-weight: 600;
  cursor: pointer;
`;

const docsContentClass = css`
  min-width: 0;
`;

// ── Section definitions ────────────────────────────────────
type SectionId =
  | "getting-started" | "typescript"
  | "components" | "reactivity" | "data-fetching" | "conditional" | "lists" | "forms" | "styling" | "routing-concepts"
  | "examples"
  | "signal" | "reactive" | "html-module" | "css-module" | "router";

interface SidebarGroup {
  label: string;
  items: { id: SectionId; label: string }[];
}

const sidebarGroups: SidebarGroup[] = [
  {
    label: "Guide",
    items: [
      { id: "getting-started", label: "Getting Started" },
      { id: "typescript", label: "TypeScript & Tooling" },
    ],
  },
  {
    label: "Concepts",
    items: [
      { id: "components", label: "Components" },
      { id: "reactivity", label: "Reactivity" },
      { id: "data-fetching", label: "Data Fetching" },
      { id: "conditional", label: "Conditional Rendering" },
      { id: "lists", label: "Lists & Keys" },
      { id: "forms", label: "Forms" },
      { id: "styling", label: "Styling" },
      { id: "routing-concepts", label: "Routing" },
    ],
  },
  {
    label: "Examples",
    items: [
      { id: "examples", label: "Code Examples" },
    ],
  },
  {
    label: "API Reference",
    items: [
      { id: "signal", label: "signal.js" },
      { id: "reactive", label: "reactive.js" },
      { id: "html-module", label: "html.js" },
      { id: "css-module", label: "css.js" },
      { id: "router", label: "router.js" },
    ],
  },
];

// ── Section renderers ──────────────────────────────────────

function GettingStartedSection() {
  return html`<div class=${docSectionClass}>
    <h2>Getting Started</h2>
    <p>
      vanillakit is a collection of standalone ES modules. No build step required —
      import from source and go. Works with any bundler (Vite, esbuild, etc.) or direct
      <code>&lt;script type="module"&gt;</code>.
    </p>

    <h3>Install</h3>
    <p>Grab the source from GitHub directly, or use a CDN like jsDelivr or esm.sh:</p>
    ${code(`# clone the repo
git clone https://github.com/nisuxyz/vanillakit.git
cp -r vanillakit/src ./vanillakit`, "bash")}

    <p>Or import straight from a CDN — no install needed:</p>
    ${code(`<script type="module">
  import { signal, html, css } from "https://esm.sh/gh/nisuxyz/vanillakit/src/index.js";

  // ready to go
</script>`, "markup")}

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
import { signal, html, css, globalCss } from "./vanillakit/index.js";

globalCss\`
  body { margin: 0; font-family: system-ui; background: #111; color: #eee; }
\`;

const count = signal(0);

const btn = css\`
  padding: 8px 20px; border: none; border-radius: 6px;
  background: gold; color: #111; font-weight: 600; cursor: pointer;
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
  </div>`;
}

function TypeScriptSection() {
  return html`<div class=${docSectionClass}>
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
      A minimal <code>vite.config.js</code>:
    </p>
    ${code(`import { defineConfig } from "vite";

export default defineConfig({
  root: "demo",
  base: "./",
});`)}

    <h3>Production builds</h3>
    <p>
      <code>vite build</code> produces a single minified JS bundle. The entire library
      plus this full demo app compiles to ~25 KB gzipped.
    </p>
    ${code(`npx vite build
# output in dist/ (or wherever outDir points)`, "bash")}
  </div>`;
}

// ── Concept sections ───────────────────────────────────────

function ComponentsSection() {
  return html`<div class=${docSectionClass}>
    <h2>Components</h2>
    <p>
      There's no special component API. A component is just a function that returns
      a DOM node. Call it, get a node, append it wherever you want.
    </p>

    ${LiveEditor({
    source: `import { signal, html, css, cx } from "vanillakit";

const btnBase = css\`
  padding: 6px 16px; border: none; border-radius: 6px;
  font-weight: 600; cursor: pointer; font-size: 0.85rem;
\`;
const btnPrimary = css\`background: var(--accent); color: #111;\`;
const btnGhost = css\`background: transparent; color: var(--text); border: 1px solid var(--border);\`;

function Counter(initial = 0) {
  const count = signal(initial);
  return html\`
    <div style="display:flex; align-items:center; gap:12px;">
      <span style="font-family:var(--mono); font-size:1.1rem; font-weight:700;">
        \${count}
      </span>
      <button class=\${cx(btnBase, btnPrimary)}
        onclick=\${() => count(n => n + 1)}>+</button>
      <button class=\${cx(btnBase, btnGhost)}
        onclick=\${() => count(initial)}>Reset</button>
    </div>
  \`;
}

document.body.append(Counter(10));`,
    label: "Counter component",
  })}

    <h3>Passing data (props)</h3>
    <p>
      Props are just function arguments. Pass signals for reactive data, or plain
      values for static data.
    </p>

    ${LiveEditor({
    source: `import { html, css } from "vanillakit";

const cardStyle = css\`
  padding: 16px; border: 1px solid var(--border);
  border-radius: 8px; background: var(--bg);
\`;

function UserCard({ name, role }) {
  return html\`
    <div class=\${cardStyle}>
      <h3 style="margin:0 0 4px; font-size:0.95rem;">\${name}</h3>
      <p style="margin:0; color:var(--text-muted); font-size:0.85rem;">\${role}</p>
    </div>
  \`;
}

document.body.append(html\`
  <div style="display:flex; gap:12px; flex-wrap:wrap;">
    \${UserCard({ name: "Ada", role: "Engineer" })}
    \${UserCard({ name: "Grace", role: "Admiral" })}
    \${UserCard({ name: "Alan", role: "Mathematician" })}
  </div>
\`);`,
    label: "UserCard component",
  })}

    <h3>Reactive props</h3>
    <p>
      Pass signals as props for reactive data flow. The child component
      updates automatically when the parent signal changes — no re-rendering,
      no prop diffing.
    </p>

    ${LiveEditor({
    source: `import { signal, html } from "vanillakit";

function Greeting({ name, color }) {
  return html\`
    <p style=\${() => \`color: \${color()}; font-size: 1.2rem; font-weight: 600; margin:0 0 12px;\`}>
      Hello, \${name}!
    </p>
  \`;
}

const userName = signal("Ada");
const userColor = signal("#e8c547");

document.body.append(html\`
  <div>
    \${Greeting({ name: userName, color: userColor })}
    <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
      <input value=\${() => userName()} oninput=\${(e) => userName(e.target.value)}
        placeholder="Name" style="max-width:200px;" />
      <input type="color" value=\${() => userColor()} oninput=\${(e) => userColor(e.target.value)}
        style="width:40px; height:34px; border:none; cursor:pointer;" />
    </div>
  </div>
\`);`,
    label: "Reactive props — type a name or pick a color",
  })}

    <h3>Children / composition</h3>
    <p>
      Since components return DOM nodes, compose them by nesting in <code>html\`\`</code>:
    </p>

    ${code(`function Layout(title, ...children) {
  return html\`
    <div class=\${css\`max-width: 800px; margin: 0 auto; padding: 24px;\`}>
      <h1>\${title}</h1>
      \${children}
    </div>
  \`;
}

function App() {
  return Layout("My App",
    Counter(),
    UserCard({ name: "Ada", role: "Admin", onDelete: () => {} }),
  );
}`)}
  </div>`;
}

function ReactivitySection() {
  return html`<div class=${docSectionClass}>
    <h2>Reactivity</h2>
    <p>
      Reactivity in vanillakit is built on signals — tiny observable values that
      automatically track which effects and computations depend on them.
    </p>

    <h3>Signals</h3>
    <p>
      A signal holds a value. Read it by calling with no args (and subscribe to changes).
      Write by calling with a value or updater function.
    </p>
    ${code(`import { signal, effect } from "vanillakit";

const count = signal(0);

// Reading inside an effect creates a subscription
effect(() => {
  console.log("count is", count());
});

count(1);          // effect re-runs → "count is 1"
count(n => n + 1); // effect re-runs → "count is 2"`)}

    ${LiveEditor({
    source: `import { signal, effect, html, css, cx } from "vanillakit";

const count = signal(0);
const log = signal([]);

effect(() => {
  const v = count();
  log(l => [...l.slice(-4), \`count is \${v}\`]);
});

document.body.append(html\`
  <div>
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
      <button onclick=\${() => count(n => n + 1)}>+1</button>
      <button onclick=\${() => count(0)}>Reset</button>
      <span style="font-family:monospace;">count = \${count}</span>
    </div>
    <div style="font-family:monospace; font-size:0.8rem; color:gray; line-height:1.6;">
      \${() => log().map(l => html\`<div>→ \${l}</div>\`)}
    </div>
  </div>
\`);`,
    label: "Signal — click to update, watch the effect log",
  })}

    <h3>Computed values</h3>
    <p>
      <code>computed</code> derives a read-only signal from others.
      It only recalculates when its dependencies change.
    </p>
    ${code(`import { signal, computed } from "vanillakit";

const price = signal(10);
const qty = signal(3);
const total = computed(() => price() * qty());

total(); // 30
qty(5);
total(); // 50`)}

    ${LiveEditor({
    source: `import { signal, computed, html } from "vanillakit";

const price = signal(10);
const qty = signal(3);
const total = computed(() => price() * qty());

document.body.append(html\`
  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
    <label>Price:
      <input type="number" value=\${() => price()}
        oninput=\${(e) => price(+e.target.value)} style="width:80px;" />
    </label>
    <label>Qty:
      <input type="number" value=\${() => qty()}
        oninput=\${(e) => qty(+e.target.value)} style="width:80px;" />
    </label>
    <span style="font-weight:700;">Total: $\${total}</span>
  </div>
\`);`,
    label: "Computed — derived value updates automatically",
  })}

    <h3>Batching</h3>
    <p>
      Multiple signal writes inside <code>batch()</code> are grouped —
      effects run once at the end, not after each write.
    </p>
    ${code(`import { signal, effect, batch } from "vanillakit";

const a = signal(1), b = signal(2);
effect(() => console.log(a() + b()));
// logs: 3

batch(() => { a(10); b(20); });
// logs: 30 (once, not twice)`)}

    ${LiveEditor({
    source: `import { signal, computed, batch, html } from "vanillakit";

const a = signal(1), b = signal(2);
const runCount = signal(0);
const sum = computed(() => { runCount(n => n + 1); return a() + b(); });

document.body.append(html\`
  <div>
    <div style="margin-bottom:10px; font-family:monospace;">
      a=\${a} b=\${b} sum=\${sum} (computed ran \${runCount}×)
    </div>
    <button onclick=\${() => { a(n => n + 1); b(n => n + 1); }}>
      a++ b++ (no batch, 2 runs)
    </button>
    <button onclick=\${() => batch(() => { a(n => n + 1); b(n => n + 1); })}>
      a++ b++ (batched, 1 run)
    </button>
    <button onclick=\${() => { a(1); b(2); runCount(0); }}>Reset</button>
  </div>
\`);`,
    label: "Batch — grouped writes, single recomputation",
  })}

    <h3>Reactive proxies</h3>
    <p>
      For complex state, <code>reactive()</code> wraps objects in deep proxies.
      Mutate normally — changes propagate automatically.
    </p>
    ${code(`import { reactive, effect, snapshot } from "vanillakit";

const state = reactive({
  user: { name: "Ada", scores: [95, 87] },
});

effect(() => console.log(state.user.name));
// logs: "Ada"

state.user.name = "Grace";
// logs: "Grace"

state.user.scores.push(92); // also tracked`)}

    <h3>vs. React / Vue / Solid</h3>
    <p>
      If you're coming from React, signals replace <code>useState</code> and
      <code>useMemo</code>. From Vue, they replace <code>ref</code> and <code>computed</code>.
      The key difference: signals are standalone values, not tied to a component lifecycle.
      They work anywhere — module scope, inside functions, in event handlers.
    </p>
  </div>`;
}

function DataFetchingSection() {
  return html`<div class=${docSectionClass}>
    <h2>Data Fetching</h2>
    <p>
      There's no special data fetching API. Use <code>fetch</code> (or any HTTP client)
      and store results in signals. Effects react to loading/error/data state changes.
    </p>

    <h3>Basic fetch</h3>
    ${code(`import { signal, html } from "vanillakit";

const users = signal([]);
const loading = signal(true);
const error = signal(null);

fetch("/api/users")
  .then(r => r.json())
  .then(data => { users(data); loading(false); })
  .catch(err => { error(err.message); loading(false); });

document.body.append(html\`
  <div>
    \${() => {
      if (loading()) return html\`<p>Loading...</p>\`;
      if (error()) return html\`<p style="color:red">\${error()}</p>\`;
      return html\`<ul>\${() => users().map(u => html\`<li>\${u.name}</li>\`)}</ul>\`;
    }}
  </div>
\`);`)}

    <h3>Reusable fetch helper</h3>
    <p>
      Wrap fetch logic in a function that returns signals — the
      vanillakit equivalent of a custom hook.
    </p>
    ${code(`function useFetch(url) {
  const data = signal(null);
  const loading = signal(true);
  const error = signal(null);

  fetch(url)
    .then(r => r.json())
    .then(d => { data(d); loading(false); })
    .catch(e => { error(e.message); loading(false); });

  return { data, loading, error };
}

// Use it anywhere
const { data: todos, loading } = useFetch("/api/todos");

document.body.append(html\`
  <div>
    \${() => loading()
      ? html\`<p>Loading...</p>\`
      : html\`<ul>
          \${() => todos().map(t => html\`<li>\${t.text}</li>\`)}
        </ul>\`
    }
  </div>
\`);`)}

    <h3>Reactive refetch</h3>
    <p>
      Use <code>effect</code> to refetch when a signal changes:
    </p>
    ${code(`import { signal, effect } from "vanillakit";

const page = signal(1);
const items = signal([]);

effect(() => {
  const p = page();
  fetch(\`/api/items?page=\${p}\`)
    .then(r => r.json())
    .then(data => items(data));
});

// Changing page triggers a refetch
page(2);`)}
  </div>`;
}

function ConditionalSection() {
  return html`<div class=${docSectionClass}>
    <h2>Conditional Rendering</h2>
    <p>
      In <code>html\`\`</code>, use a function that returns different nodes (or <code>null</code>)
      based on signal values. The DOM updates surgically when conditions change.
    </p>

    <h3>Show / hide</h3>
    ${LiveEditor({
    source: `import { signal, html } from "vanillakit";

const loggedIn = signal(false);

document.body.append(html\`
  <div>
    \${() => loggedIn()
      ? html\`<div style="display:flex; align-items:center; gap:12px;">
          <span style="color:gold; font-weight:600;">Welcome back!</span>
          <button onclick=\${() => loggedIn(false)}>Log out</button>
        </div>\`
      : html\`<button onclick=\${() => loggedIn(true)}>Log in</button>\`
    }
  </div>
\`);`,
    label: "Show/hide — toggle login state",
  })}

    <h3>Multiple conditions</h3>
    ${LiveEditor({
    source: `import { signal, html } from "vanillakit";

const status = signal("idle"); // "idle" | "loading" | "error" | "done"

document.body.append(html\`
  <div>
    <div style="display:flex; gap:8px; margin-bottom:12px;">
      <button onclick=\${() => status("idle")}>Idle</button>
      <button onclick=\${() => status("loading")}>Loading</button>
      <button onclick=\${() => status("error")}>Error</button>
      <button onclick=\${() => status("done")}>Done</button>
    </div>
    <div style="font-size:1rem; font-weight:600;">
      \${() => {
        switch (status()) {
          case "loading": return html\`<span>Loading...</span>\`;
          case "error":   return html\`<span style="color:red;">Error!</span>\`;
          case "done":    return html\`<span style="color:green;">Done ✓</span>\`;
          default:        return html\`<span>Ready.</span>\`;
        }
      }}
    </div>
  </div>
\`);`,
    label: "Switch — click buttons to change status",
  })}

    <h3>vs. React / Vue</h3>
    <p>
      React uses JSX ternaries or early returns. Vue uses <code>v-if</code> / <code>v-else</code>.
      vanillakit uses plain JS functions — return a DOM node or <code>null</code>.
      There's no template syntax to learn.
    </p>
  </div>`;
}

function ListsSection() {
  return html`<div class=${docSectionClass}>
    <h2>Lists &amp; Keys</h2>
    <p>
      Use <code>each()</code> for keyed list rendering. DOM nodes are reused by key across
      updates — input state, scroll position, and focus are preserved.
    </p>

    <h3>Basic list</h3>
    ${LiveEditor({
    source: `import { signal, each, html, css } from "vanillakit";

let nextId = 4;
const items = signal([
  { id: 1, label: "Alpha" },
  { id: 2, label: "Bravo" },
  { id: 3, label: "Charlie" },
]);

const itemStyle = css\`
  display: flex; align-items: center; gap: 8px;
  padding: 6px 10px; border-radius: 6px;
  background: var(--bg); border: 1px solid var(--border);
  font-size: 0.85rem; font-family: monospace;
\`;

const names = ["Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India"];

document.body.append(html\`
  <div>
    <div style="display:flex; gap:8px; margin-bottom:12px;">
      <button onclick=\${() => items(l =>
        [...l, { id: nextId++, label: names[(nextId - 5) % names.length] }]
      )}>Add item</button>
      <button onclick=\${() => items(l => [...l].reverse())}>Reverse</button>
      <button onclick=\${() => items(l => l.slice(0, -1))}>Remove last</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:6px;">
      \${each(items, i => i.id, (itemSig, indexSig) =>
        html\`<div class=\${itemStyle}>
          <span style="color:gray;">#\${indexSig}</span>
          <span>\${() => itemSig().label}</span>
          <button style="margin-left:auto; background:none; border:none; color:gray; cursor:pointer;"
            onclick=\${() => items(l => l.filter(i => i.id !== itemSig().id))}>✕</button>
        </div>\`,
      )}
    </div>
  </div>
\`);`,
    label: "Keyed list — add, remove, reverse",
  })}

    <h3>Adding, removing, reordering</h3>
    <p>
      Mutate the signal array — <code>each()</code> diffs by key and moves/creates/removes
      DOM nodes efficiently.
    </p>
    ${code(`// Add
items(list => [...list, { id: 4, label: "Delta" }]);

// Remove
items(list => list.filter(i => i.id !== 2));

// Reorder (DOM nodes are moved, not recreated)
items(list => [...list].reverse());

// Update an item (the itemSig in the render function updates)
items(list => list.map(i =>
  i.id === 1 ? { ...i, label: "Updated" } : i
));`)}

    <h3>Why keys matter</h3>
    <p>
      Without keys, reordering a list destroys and recreates every DOM node.
      With keys, <code>each()</code> matches old and new items by key and
      reuses existing nodes — preserving input values, focus, animations, etc.
    </p>

    <h3>vs. React / Vue</h3>
    <p>
      React's <code>key</code> prop on <code>map()</code> and Vue's <code>:key</code>
      on <code>v-for</code> serve the same purpose. <code>each()</code> combines the
      list rendering and key matching into one call. Each item is passed as a signal,
      so individual item updates don't re-run the render for other items.
    </p>
  </div>`;
}

function FormsSection() {
  return html`<div class=${docSectionClass}>
    <h2>Forms</h2>
    <p>
      Bind form inputs to signals for two-way data binding. Use <code>value</code>
      with a reactive function and <code>oninput</code> to write back.
    </p>

    <h3>Text input</h3>
    ${LiveEditor({
    source: `import { signal, html } from "vanillakit";

const name = signal("");

document.body.append(html\`
  <div>
    <input value=\${() => name()} oninput=\${(e) => name(e.target.value)}
      placeholder="Your name" style="max-width:240px; margin-bottom:10px;" />
    <p style="font-size:1rem; font-weight:600;">Hello, \${() => name() || "…"}!</p>
  </div>
\`);`,
    label: "Two-way binding — type to see it update",
  })}

    <h3>Checkbox</h3>
    ${LiveEditor({
    source: `import { signal, html } from "vanillakit";

const agreed = signal(false);

document.body.append(html\`
  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
    <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">
      <input type="checkbox" checked=\${() => agreed()}
        onchange=\${(e) => agreed(e.target.checked)} />
      I agree to the terms
    </label>
    <button disabled=\${() => !agreed()}
      style=\${() => !agreed() ? "opacity:0.4; cursor:not-allowed;" : ""}>
      Submit
    </button>
  </div>
\`);`,
    label: "Checkbox — toggle to enable the button",
  })}

    <h3>Select</h3>
    ${LiveEditor({
    source: `import { signal, html } from "vanillakit";

const color = signal("blue");
const colorMap = { red: "#e45", blue: "#48f", green: "#4c8" };

document.body.append(html\`
  <div style="display:flex; align-items:center; gap:14px;">
    <select onchange=\${(e) => color(e.target.value)}>
      <option value="red">Red</option>
      <option value="blue" selected>Blue</option>
      <option value="green">Green</option>
    </select>
    <span style=\${() => \`font-weight:700; color:\${colorMap[color()]};\`}>
      Chosen: \${color}
    </span>
  </div>
\`);`,
    label: "Select — pick a color",
  })}

    <h3>Form submission</h3>
    ${code(`const form = { name: signal(""), email: signal("") };

html\`
  <form onsubmit=\${(e) => {
    e.preventDefault();
    console.log({ name: form.name(), email: form.email() });
  }}>
    <input value=\${() => form.name()} oninput=\${(e) => form.name(e.target.value)} />
    <input value=\${() => form.email()} oninput=\${(e) => form.email(e.target.value)} type="email" />
    <button type="submit">Submit</button>
  </form>
\`;`)}

    <h3>vs. React / Vue</h3>
    <p>
      React needs <code>useState</code> + <code>onChange</code> for controlled inputs.
      Vue has <code>v-model</code>. vanillakit uses <code>value=\${() => sig()}</code> +
      <code>oninput=\${(e) => sig(e.target.value)}</code> — explicit and transparent.
    </p>
  </div>`;
}

function StylingSection() {
  return html`<div class=${docSectionClass}>
    <h2>Styling</h2>
    <p>
      vanillakit includes a CSS-in-JS engine. <code>css\`\`</code> generates scoped class names,
      <code>keyframes\`\`</code> creates animations, and <code>globalCss\`\`</code> injects global styles.
      You can also use external CSS, Tailwind, or any other approach.
    </p>

    <h3>Scoped styles</h3>
    ${LiveEditor({
    source: `import { css, html } from "vanillakit";

const card = css\`
  padding: 16px; background: var(--bg);
  border: 1px solid var(--border); border-radius: 8px;
  transition: border-color 0.15s ease;
  &:hover { border-color: var(--accent); }
  & .title { font-weight: 700; color: var(--accent); }
  & .desc { font-size: 0.85rem; color: gray; margin-top: 4px; }
\`;

document.body.append(html\`
  <div class=\${card}>
    <span class="title">Styled card</span>
    <div class="desc">Hover me — the border changes color.</div>
  </div>
\`);`,
    label: "Scoped CSS — hover the card",
  })}

    <h3>Dynamic styles</h3>
    <p>
      For styles that change based on signals, use a reactive <code>class</code> attribute
      or inline <code>style</code>:
    </p>
    ${code(`import { signal, html, css } from "vanillakit";

const active = signal(false);

const base = css\`padding: 8px; border-radius: 6px;\`;
const highlight = css\`background: gold; color: #111;\`;

// Reactive class
html\`<div class=\${() => active() ? cx(base, highlight) : base}>Click me</div>\`;

// Reactive inline style
const size = signal(16);
html\`<p style=\${() => \`font-size: \${size()}px\`}>Resizable text</p>\`;`)}

    ${LiveEditor({
    source: `import { signal, html } from "vanillakit";

const size = signal(16);

document.body.append(html\`
  <div>
    <input type="range" min="10" max="40" value=\${() => size()}
      oninput=\${(e) => size(+e.target.value)}
      style="width:200px; margin-bottom:10px;" />
    <span style="font-family:monospace; font-size:0.8rem; margin-left:8px;">
      \${size}px
    </span>
    <p style=\${() => \`font-size: \${size()}px; font-weight: 600; transition: font-size 0.1s;\`}>
      Resizable text
    </p>
  </div>
\`);`,
    label: "Dynamic styles — drag the slider",
  })}

    <h3>Animations</h3>
    ${code(`import { css, keyframes } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;

const spinner = css\`animation: \${spin} 1s linear infinite;\`;`)}

    ${LiveEditor({
    source: `import { css, keyframes, html } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;

const spinner = css\`
  display: inline-block; width: 24px; height: 24px;
  border: 3px solid var(--border); border-top-color: var(--accent);
  border-radius: 50%; animation: \${spin} 0.8s linear infinite;
\`;

document.body.append(html\`
  <div style="display:flex; align-items:center; gap:12px;">
    <div class=\${spinner}></div>
    <span style="font-size:0.85rem; color:gray;">Spinning via keyframes\\\`\\\`</span>
  </div>
\`);`,
    label: "Keyframes animation",
  })}

    <h3>Combining class names</h3>
    <p>
      <code>cx()</code> joins class names, filtering out falsy values:
    </p>
    ${code(`import { cx, css } from "vanillakit";

const base = css\`padding: 8px;\`;
const active = css\`color: gold;\`;
const disabled = false;

cx(base, isActive && active, disabled && "disabled");
// falsy values are skipped`)}

    <h3>vs. React / Vue</h3>
    <p>
      React uses CSS modules, styled-components, or Tailwind. Vue has
      <code>&lt;style scoped&gt;</code>. vanillakit's <code>css\`\`</code> is closest to
      styled-components but returns a class name string instead of wrapping components.
    </p>
  </div>`;
}

function RoutingConceptsSection() {
  return html`<div class=${docSectionClass}>
    <h2>Routing</h2>
    <p>
      vanillakit includes a hash-based SPA router. Routes map path patterns to
      functions that return DOM nodes. The router swaps content reactively
      when the hash changes.
    </p>

    <h3>Basic setup</h3>
    ${code(`import { html, createRouter, navLink, css } from "vanillakit";

const Router = createRouter({
  "/":      () => html\`<h1>Home</h1>\`,
  "/about": () => html\`<h1>About</h1>\`,
  "*":      () => html\`<h1>404</h1>\`,
});

const active = css\`color: gold;\`;
const base = css\`color: gray;\`;

document.body.append(html\`
  <nav>
    \${navLink("/", "Home", active, base)}
    \${navLink("/about", "About", active, base)}
  </nav>
  \${Router()}
\`);`)}

    <h3>Route parameters</h3>
    ${code(`import { createRouter, routeParams, html } from "vanillakit";

const Router = createRouter({
  "/user/:id": () => html\`
    <div>
      <h1>User \${() => routeParams().id}</h1>
    </div>
  \`,
});`)}

    <h3>Programmatic navigation</h3>
    ${code(`import { navigate } from "vanillakit";

// Navigate from code
navigate("/user/42");

// In a click handler
html\`<button onclick=\${() => navigate("/settings")}>Settings</button>\`;`)}

    <h3>vs. React Router / Vue Router</h3>
    <p>
      React Router uses <code>&lt;Route&gt;</code> components and hooks.
      Vue Router uses a plugin and <code>&lt;router-view&gt;</code>.
      vanillakit's router is ~60 lines: a plain object mapping paths to functions.
      No providers, no hooks, no wrapping — just call <code>createRouter()</code> and
      drop the result into the DOM.
    </p>
  </div>`;
}

function ExamplesSection() {
  return html`<div class=${docSectionClass}>
    <h2>Examples</h2>

    <h3>Counter</h3>
    <p>The simplest possible app — a signal and a button.</p>
    ${LiveEditor({
    source: `import { signal, html } from "vanillakit";

const count = signal(0);

document.body.append(html\`
  <button onclick=\${() => count(n => n + 1)}>
    Clicked \${count} times
  </button>
\`);`,
    label: "Counter",
  })}

    <h3>Two-way binding</h3>
    <p>Bind an input to a signal. The heading updates as you type.</p>
    ${LiveEditor({
    source: `import { signal, html } from "vanillakit";

const name = signal("world");

document.body.append(html\`
  <div>
    <p style="font-size:1.2rem; font-weight:700;">Hello, \${name}!</p>
    <input value=\${() => name()} oninput=\${(e) => name(e.target.value)}
      style="max-width:240px;" />
  </div>
\`);`,
    label: "Two-way binding",
  })}

    <h3>Derived state</h3>
    ${LiveEditor({
    source: `import { signal, computed, html } from "vanillakit";

const price    = signal(10);
const quantity = signal(3);
const total    = computed(() => price() * quantity());

document.body.append(html\`
  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
    <label>Price:
      <input type="number" value=\${() => price()}
        oninput=\${(e) => price(+e.target.value)} style="width:80px;" />
    </label>
    <label>Qty:
      <input type="number" value=\${() => quantity()}
        oninput=\${(e) => quantity(+e.target.value)} style="width:80px;" />
    </label>
    <span style="font-weight:700;">Total: $\${total}</span>
  </div>
\`);`,
    label: "Derived state — change price or qty",
  })}

    <h3>Reactive object</h3>
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

    <h3>Scoped styles + routing</h3>
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
  </div>`;
}

// ── API reference sections ─────────────────────────────────

function SignalSection() {
  return html`<div class=${docSectionClass}>
    <h2>signal.js</h2>
    <p>Fine-grained reactivity primitives. Every other module builds on this.</p>

    <h3>signal(initial)</h3>
    <p>Creates a read/write signal. Call with no args to read (and track), call with a value to write.</p>
    ${code(`import { signal } from "vanillakit";

const count = signal(0);
count();           // read → 0
count(5);          // write → 5
count(n => n + 1); // update via function → 6
count.peek();      // read without tracking`)}

    <h3>computed(fn)</h3>
    <p>Derives a read-only signal. Re-evaluates only when dependencies change.</p>
    ${code(`import { signal, computed } from "vanillakit";

const a = signal(2), b = signal(3);
const sum = computed(() => a() + b());
sum(); // 5
a(10);
sum(); // 13`)}

    <h3>effect(fn)</h3>
    <p>Runs a side effect whenever dependencies change. Returns a dispose function.</p>
    ${code(`import { signal, effect } from "vanillakit";

const name = signal("world");
const dispose = effect(() => console.log("Hello, " + name() + "!"));
// logs: Hello, world!
name("vanillakit");
// logs: Hello, vanillakit!
dispose(); // stops tracking`)}

    <h3>batch(fn)</h3>
    <p>Groups writes — effects run once at the end.</p>
    ${code(`import { signal, effect, batch } from "vanillakit";

const a = signal(1), b = signal(2);
effect(() => console.log(a() + b())); // 3
batch(() => { a(10); b(20); });       // 30 (once)`)}

    <h3>untrack(fn)</h3>
    <p>Reads signals inside <code>fn</code> without creating a dependency.</p>
    ${code(`import { signal, effect, untrack } from "vanillakit";

const a = signal(1), b = signal(2);
effect(() => console.log(a() + untrack(() => b())));
b(99); // does NOT re-run
a(10); // re-runs, reads b's current value`)}
  </div>`;
}

function ReactiveModuleSection() {
  return html`<div class=${docSectionClass}>
    <h2>reactive.js</h2>
    <p>Deep reactive proxies backed by signals. Mutate normally — changes propagate automatically.</p>

    <h3>reactive(target)</h3>
    <p>Wraps a plain object/array in a deep reactive proxy.</p>
    ${code(`import { reactive, effect } from "vanillakit";

const state = reactive({
  user: { name: "Ada", scores: [95, 87] },
});

effect(() => console.log(state.user.name)); // "Ada"
state.user.name = "Grace";                  // "Grace"
state.user.scores.push(92);                 // tracked`)}

    <h3>snapshot(obj)</h3>
    <p>Returns a deep plain-object copy. Useful for serialization.</p>

    <h3>toRaw(obj) / isReactive(obj)</h3>
    <p>Get the underlying raw object, or check if an object is reactive.</p>
  </div>`;
}

function HtmlModuleSection() {
  return html`<div class=${docSectionClass}>
    <h2>html.js</h2>
    <p>Tagged template producing live DOM nodes with reactive bindings. No virtual DOM.</p>

    <h3>html\`...\`</h3>
    <p>Interpolations can be static values, signals, or functions. Functions are wrapped in effects.</p>
    ${code(`import { signal, html } from "vanillakit";

const name = signal("world");

const el = html\`
  <div>
    <h1>Hello, \${name}!</h1>
    <input value=\${() => name()} oninput=\${(e) => name(e.target.value)} />
  </div>
\`;
document.body.append(el);`)}

    <p>Supported attribute bindings:</p>
    <ul style="color:var(--text-muted);font-size:0.88rem;margin-bottom:10px;padding-left:20px;line-height:1.8;">
      <li><code>class</code> — sets className</li>
      <li><code>style</code> — string or object</li>
      <li><code>checked</code>, <code>value</code> — synced to DOM properties</li>
      <li><code>on*</code> — event listeners</li>
      <li><code>ref</code> — called with the element</li>
    </ul>

    <h3>each(listFn, keyFn, renderFn)</h3>
    <p>Keyed list reconciliation. Each item is passed as a signal.</p>
    ${code(`import { signal, each, html } from "vanillakit";

const items = signal([{ id: 1, text: "first" }, { id: 2, text: "second" }]);

html\`<ul>
  \${each(items, i => i.id, (itemSig) => html\`<li>\${() => itemSig().text}</li>\`)}
</ul>\`;`)}
  </div>`;
}

function CssModuleSection() {
  return html`<div class=${docSectionClass}>
    <h2>css.js</h2>
    <p>Scoped CSS-in-JS using <code>CSSStyleSheet</code>. Supports nesting, <code>@media</code>, <code>@keyframes</code>.</p>

    <h3>css\`...\`</h3>
    <p>Returns a unique class name. <code>&amp;</code> is replaced by the generated selector.</p>
    ${code(`import { css } from "vanillakit";

const card = css\`
  padding: 16px;
  background: #1a1a1a;
  &:hover { border-color: gold; }
  & .title { font-weight: 700; }
  @media (max-width: 600px) { padding: 8px; }
\`;`)}

    <h3>keyframes\`...\`</h3>
    <p>Creates a scoped <code>@keyframes</code> rule.</p>
    ${code(`import { css, keyframes } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;
const spinner = css\`animation: \${spin} 1s linear infinite;\`;`)}

    <h3>globalCss\`...\` / cx(...classes)</h3>
    <p>Inject unscoped CSS or join class names (filtering falsy values).</p>
    ${code(`import { globalCss, cx, css } from "vanillakit";

globalCss\`body { margin: 0; }\`;

const base = css\`padding: 8px;\`;
const active = css\`color: gold;\`;
cx(base, isActive && active); // falsy values skipped`)}
  </div>`;
}

function RouterModuleSection() {
  return html`<div class=${docSectionClass}>
    <h2>router.js</h2>
    <p>Hash-based SPA router. Routes are functions returning DOM nodes.</p>

    <h3>createRouter(routeMap)</h3>
    <p>Maps path patterns to handlers. Supports <code>:param</code> and <code>*</code> catch-all.</p>
    ${code(`import { createRouter, html } from "vanillakit";

const Router = createRouter({
  "/":         () => html\`<h1>Home</h1>\`,
  "/user/:id": () => html\`<h1>User page</h1>\`,
  "*":         () => html\`<h1>404</h1>\`,
});
document.body.append(Router());`)}

    <h3>navigate(path)</h3>
    <p>Programmatic navigation.</p>

    <h3>currentPath / routeParams</h3>
    <p>Signals holding the current hash path and extracted <code>:param</code> values.</p>

    <h3>navLink(path, text, activeClass, baseClass)</h3>
    <p>Creates an <code>&lt;a&gt;</code> that swaps classes based on the current route.</p>
    ${code(`import { navLink, css } from "vanillakit";

const active = css\`color: gold; font-weight: 700;\`;
const base   = css\`color: gray;\`;

document.body.append(navLink("/about", "About", active, base));`)}
  </div>`;
}

// ── Section map ────────────────────────────────────────────
const sections: Record<SectionId, () => Node> = {
  "getting-started": GettingStartedSection,
  "typescript": TypeScriptSection,
  "components": ComponentsSection,
  "reactivity": ReactivitySection,
  "data-fetching": DataFetchingSection,
  "conditional": ConditionalSection,
  "lists": ListsSection,
  "forms": FormsSection,
  "styling": StylingSection,
  "routing-concepts": RoutingConceptsSection,
  "examples": ExamplesSection,
  "signal": SignalSection,
  "reactive": ReactiveModuleSection,
  "html-module": HtmlModuleSection,
  "css-module": CssModuleSection,
  "router": RouterModuleSection,
};

// ── Main docs page ─────────────────────────────────────────
export function DocsPage() {
  const activeSection = signal<SectionId>("getting-started");

  return html`<div class=${pageClass}>
    <h1 class=${headingClass}>Docs</h1>
    <p class=${subtitleClass}>
      API reference, concepts, and guides. ~760 lines total, zero dependencies.
    </p>

    <div class=${docsLayoutClass}>
      <aside class=${sidebarClass}>
        ${sidebarGroups.map(group => html`
          <div class=${sidebarGroupClass}>
            <div class="group-label">${group.label}</div>
            ${group.items.map(item => html`
              <a
                class=${() => activeSection() === item.id ? sidebarLinkActive : sidebarLinkBase}
                onclick=${(e: Event) => { e.preventDefault(); activeSection(item.id); }}
                href="#"
              >${item.label}</a>
            `)}
          </div>
        `)}
      </aside>

      <div class=${docsContentClass}>
        ${() => sections[activeSection()]()}
      </div>
    </div>
  </div>`;
}
