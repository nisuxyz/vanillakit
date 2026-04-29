export const COUNTER = {
  html: `
import { signal, html, type VanillaElement } from "vanillakit";

interface CounterProps {
  initial: number;
}

const Counter = (props: CounterProps = { initial: 0 }): VanillaElement => {
  const count = signal(props.initial);
  return html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      Count: \${count}
      <button onclick=\${() => count(n => n + 1)}>+1</button>
    </div>
  \`;
};

document.body.append(Counter({ initial: 10 }));
`,
  vkml: `
import { signal, div, button, type VanillaElement } from "vanillakit";

interface CounterProps {
  initial: number;
}

const Counter = (props: CounterProps = { initial: 0 }): VanillaElement => {
  const count = signal(props.initial);
  return div({ style: "display: flex; flex-direction: column; gap: 1rem;" },
    () => "Count: " + count(),
    button({ onclick: () => count(n => n + 1) }, "+1")
  );
};

document.body.append(Counter({ initial: 10 }));
`,
  "html+vkml": `
import { signal, html, div, type VanillaElement } from "vanillakit";

interface CounterProps {
  initial: number;
}

const Counter = (props: CounterProps = { initial: 0 }): VanillaElement => {
  const count = signal(props.initial);
  return div({ style: "display: flex; flex-direction: column; gap: 1rem;" },
    () => "Count: " + count(),
    html\`<button onclick=\${() => count(n => n + 1)}>+1</button>\`
  );
};

document.body.append(Counter({ initial: 10 }));
`,
};

export const PROPS = {
  html: `
import { html, css, type VanillaElement } from "vanillakit";

interface UserComponentProps {
  name: string;
  role: string;
}

const UserComponent = ({ name, role }: UserComponentProps): VanillaElement => {
  return html\`
    <article>
      <h3 style="margin:0 0 4px; font-size:0.95rem;">\${name}</h3>
      <p>\${role}</p>
    </article>
  \`;
}

document.body.append(html\`
  <div style="display:flex; gap: 1rem; flex-wrap:wrap;">
    \${UserComponent({ name: "Ada", role: "Engineer" })}
    \${UserComponent({ name: "Grace", role: "Admiral" })}
    \${UserComponent({ name: "Alan", role: "Mathematician" })}
  </div>
\`);`,
  vkml: `
import { article, h3, p, div, css, type VanillaElement } from "vanillakit";

interface UserComponentProps {
  name: string;
  role: string;
}

const UserComponent = ({ name, role }: UserComponentProps): VanillaElement => {
  return article(
    h3({ style: "margin:0 0 4px; font-size:0.95rem;" }, name),
    p(role)
  );
}

document.body.append(
  div({ style: "display:flex; gap: 1rem; flex-wrap:wrap;" },
    UserComponent({ name: "Ada", role: "Engineer" }),
    UserComponent({ name: "Grace", role: "Admiral" }),
    UserComponent({ name: "Alan", role: "Mathematician" })
  )
);
`,
};

export const SIGNAL_PROPS = {
  html: `
import { signal, html } from "vanillakit";

const Greeting = ({ name, color }) => {
  return html\`
    <p style=\${() => \`color: \${color()};\`}>
      Hello, \${name}!
    </p>
  \`;
}

const userName = signal("Ada");
const userColor = signal("#e8c547");

document.body.append(html\`
  <div>
    \${Greeting({ name: userName, color: userColor })}
    <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">
      <input value=\${userName} oninput=\${(e) => userName(e.target.value)}
        placeholder="Name" style="max-width:200px;" />
      <input type="color" value=\${userColor} oninput=\${(e) => userColor(e.target.value)}
        style="width:40px; height:34px; border:none; cursor:pointer;" />
    </div>
  </div>
\`);
`,
  vkml: `
import { signal, p, div, input } from "vanillakit";

const Greeting = ({ name, color }) => {
  return vkml.p(
    { style: () => \`color: \${color()};\` },
    () => \`Hello, \${name()}!\`
  );
}

const userName = signal("Ada");
const userColor = signal("#e8c547");

document.body.append(
  div(
    Greeting({ name: userName, color: userColor }),
    div({ style: "display:flex; gap:1rem; align-items:center; flex-wrap:wrap;" },
      input({ 
        value: userName, 
        oninput: (e) => userName(e.target.value),
        placeholder: "Name", 
        style: "max-width:200px;" 
      }),
      input({ 
        type: "color", 
        value: userColor, 
        oninput: (e) => userColor(e.target.value),
        style: "width:40px; height:34px; border:none; cursor:pointer;" 
      })
    )
  )
);
`,
};

export const PROPS_CHILDREN = {
  html: `
import { html, css } from "vanillakit";

const Layout = (title, ...children) => {
  return html\`
    <div class=\${css\`max-width: 800px; margin: 0 auto; padding: 24px;\`}>
      <h1>\${title}</h1>
      \${children}
    </div>
  \`;
}

const Child1 = () => html\`<p>This is the first child component.</p>\`;
const Child2 = () => html\`<p>This is the second child component.</p>\`;

const App = () => {
  return Layout("My App",
    Child1(),
    Child2(),
    html\`<p>This is a child passed directly as an argument.</p>\`
  );
}

document.body.append(App());
`,
  vkml: `
import { div, h1, p, css } from "vanillakit";

const Layout = (title, ...children) => {
  return div({ class: css\`max-width: 800px; margin: 0 auto; padding: 24px;\` },
    h1(title),
    ...children
  );
}

const Child1 = () => p("This is the first child component.");
const Child2 = () => p("This is the second child component.");

const App = () => {
  return Layout("My App",
    Child1(),
    Child2(),
    p("This is a child passed directly as an argument.")
  );
}

document.body.append(App());
`,
};

export const DIRECT_CHILDREN = {
  html: `
import { html } from "vanillakit";

const ChildComponent = () => html\`<p>This is a child component.</p>\`;

document.body.append(html\`
  <div>
    <h1>Parent Component</h1>
    \${ChildComponent()}
  </div>
\`);
`,
  vkml: `
import { p, div, h1 } from "vanillakit";

const ChildComponent = () => p("This is a child component.");

document.body.append(
  div(
    h1("Parent Component"),
    ChildComponent()
  )
);
`,
};

export const REACTIVITY = {
  html: `
import { signal, effect, html, computed, batch, reactive, snapshot } from "vanillakit";

const ReactiveComponent = () => {
  const count = signal(0);
  effect(() => console.log("Count is", count()));
  
  const double = computed(() => count() * 2);
  effect(() => console.log("Double is", double()));
  
  const countPlus1 = computed(() => count() + 1);
  effect(() => console.log("Count + 1 is", countPlus1()));
  batch(() => {
    count(1);
    count(2);
    count(3);
  });
  
  const state = reactive({
    todos: [
      { text: "Learn signals", done: true },
      { text: "Build an app", done: false },
    ],
  });
  
  effect(() => console.log("State is", JSON.stringify(snapshot(state), null, 2)));
  
  const addTodo = (text) => state().todos.push({ text, done: false });

  return html\`
    <div>
      <h2>Count: \${count}</h2>
      <h3>Double: \${double}</h3>
      <h3>Triple: \${() => count() * 3}</h3>
      <button onclick=\${() => count(count() + 1)}>Increment</button>
      
      <h2>Todos:</h2>
      <ul>
        \${() => state.todos.map(todo => html\`
          <li style=\${() => \`text-decoration: \${todo.done ? "line-through" : "none"};\`}>
            \${todo.text}
          </li>
        \`)}
      </ul>
      <button onclick=\${() => addTodo("New Todo")}>Add Todo</button>
    </div>
  \`;
}

document.body.append(ReactiveComponent());
`,
  vkml: `
import { signal, effect, div, h2, h3, button, ul, computed, batch, reactive, snapshot } from "vanillakit";

const ReactiveComponent = () => {
  const count = signal(0);
  effect(() => console.log("Count is", count()));
  
  const double = computed(() => count() * 2);
  effect(() => console.log("Double is", double()));
  
  const countPlus1 = computed(() => count() + 1);
  effect(() => console.log("Count + 1 is", countPlus1()));
  batch(() => {
    count(1);
    count(2);
    count(3);
  });
  
  const state = reactive({
    todos: [
      { text: "Learn signals", done: true },
      { text: "Build an app", done: false },
    ],
  });
  
  effect(() => console.log("State is", JSON.stringify(snapshot(state), null, 2)));
  
  const addTodo = (text) => state().todos.push({ text, done: false });

  return div(
    h2("Count: ", count),
    h3("Double: ", double),
    h3("Triple: ", () => count() * 3),
    button({ onclick: () => count(count() + 1) }, "Increment"),
    
    h2("Todos:"),
    ul(
      () => state.todos.map(todo => li(
        { style: () => \`text-decoration: \${todo.done ? "line-through" : "none"};\` },
        todo.text
      ))
    ),
    button({ onclick: () => addTodo("New Todo") }, "Add Todo")
  );
}

document.body.append(ReactiveComponent());
`,
};

export const HTMX_PARTIAL = `<!-- partials/dashboard.html -->
<div class="server-row"><strong>Dashboard</strong> — loaded via htmx</div>
<div class="server-row">User: <em>Ada Lovelace</em> | Role: Admin</div>
<div class="server-row">Last login: <span id="login-time"></span></div>
<div data-vanillakit="counter"></div>
<script>
  document.getElementById("login-time").textContent = new Date().toLocaleTimeString();
</script>`;

export const HTMX_SETUP = `<!doctype html>
<html>
  <head>
    <script src="https://unpkg.com/htmx.org@2"></script>
  </head>
  <body>
    <div hx-get="/partials/dashboard.html" hx-trigger="click" hx-target="#content">
      Load dashboard
    </div>
    <div id="content"></div>
    <script type="module" src="./app.js"></script>
  </body>
</html>`;

export const HTMX_ISLANDS = {
  html: `import { signal, html, css } from "vanillakit";

function LiveCounter(el) {
  const count = signal(0);
  el.replaceChildren(html\`
    <button
      class=\${css\`padding: 6px 14px; cursor: pointer;\`}
      onclick=\${() => count(n => n + 1)}
    >
      Clicked \${count} times
    </button>
  \`);
}

document.body.addEventListener("htmx:afterSwap", (e) => {
  e.detail.target
    .querySelectorAll("[data-vanillakit]")
    .forEach((el) => {
      if (el.dataset.vanillakit === "counter") LiveCounter(el);
    });
});`,
  vkml: `import { signal, button, css } from "vanillakit";

function LiveCounter(el) {
  const count = signal(0);
  el.replaceChildren(
    button({
        class: css\`padding: 6px 14px; cursor: pointer;\`,
        onclick: () => count(n => n + 1)
      },
      "Clicked ", count, " times"
    )
  );
}

document.body.addEventListener("htmx:afterSwap", (e) => {
  e.detail.target
    .querySelectorAll("[data-vanillakit]")
    .forEach((el) => {
      if (el.dataset.vanillakit === "counter") LiveCounter(el);
    });
});`,
};

export const TAILWIND_DIRECT = {
  html: `import { signal, html } from "vanillakit";

const open = signal(false);

document.body.append(html\`
  <div class="max-w-md mx-auto p-6">
    <button
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      onclick=\${() => open(v => !v)}
    >
      Toggle
    </button>
    <div class=\${() => open()
      ? "mt-4 p-4 bg-gray-800 rounded border border-gray-700"
      : "hidden"
    }>
      Reactively shown/hidden via signals.
    </div>
  </div>
\`);`,
  vkml: `import { signal, div, button } from "vanillakit";

const open = signal(false);

document.body.append(
  div({ class: "max-w-md mx-auto p-6" },
    button({
        class: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",
        onclick: () => open(v => !v)
      },
      "Toggle"
    ),
    div({ class: () => open() 
        ? "mt-4 p-4 bg-gray-800 rounded border border-gray-700" 
        : "hidden" 
      },
      "Reactively shown/hidden via signals."
    )
  )
);`,
};

export const TAILWIND_MIX = {
  html: `import { html, css, cx } from "vanillakit";

const glowEffect = css\`
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  transition: box-shadow 0.3s ease;
  &:hover { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
\`;

document.body.append(html\`
  <div class=\${cx("p-6 rounded-lg bg-gray-900 border border-gray-700", glowEffect)}>
    Best of both worlds.
  </div>
\`);`,
  vkml: `import { div, css, cx } from "vanillakit";

const glowEffect = css\`
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  transition: box-shadow 0.3s ease;
  &:hover { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
\`;

document.body.append(
  div({ class: cx("p-6 rounded-lg bg-gray-900 border border-gray-700", glowEffect) },
    "Best of both worlds."
  )
);`,
};

export const TAILWIND_CONFIG = `// tailwind.config.js
export default {
  content: [
    "./demo/**/*.{html,ts,js}",
    "./src/**/*.js",
  ],
};`;

export const HONO_SERVER = `// server.ts (Hono on Bun)
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";

const app = new Hono();
app.use("/api/*", cors());

app.get("/api/todos", (c) => {
  return c.json([
    { id: 1, text: "Build with vanillakit", done: false },
    { id: 2, text: "Deploy to edge", done: true },
  ]);
});

app.post("/api/todos", async (c) => {
  const body = await c.req.json();
  return c.json({ id: Date.now(), ...body }, 201);
});

// Serve the Vite build as static files
app.use("/*", serveStatic({ root: "./docs" }));

export default app;`;

export const HONO_FETCH = {
  html: `import { signal, html } from "vanillakit";

const todos = signal([]);
const loading = signal(true);

fetch("/api/todos")
  .then(r => r.json())
  .then(data => { todos(data); loading(false); });

document.body.append(html\`
  <div>
    \${() => loading()
      ? html\`<p>Loading...</p>\`
      : html\`<ul>
          \${() => todos().map(t => html\`<li>\${t.text}</li>\`)}
        </ul>\`
    }
  </div>
\`);`,
  vkml: `import { signal, div, p, ul, li } from "vanillakit";

const todos = signal([]);
const loading = signal(true);

fetch("/api/todos")
  .then(r => r.json())
  .then(data => { todos(data); loading(false); });

document.body.append(
  div(() => loading()
    ? p("Loading...")
    : ul(() => todos().map(t => li(t.text)))
  )
);`,
};

export const FASTAPI_LAYOUT = `project/
  backend/
    main.py
    requirements.txt
  frontend/
    demo/
      index.html
      app.ts
    src/        # vanillakit source
    vite.config.js`;

export const FASTAPI_BACKEND = `# backend/main.py
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])

class Todo(BaseModel):
    id: int
    text: str
    done: bool = False

todos: list[Todo] = [
    Todo(id=1, text="Learn vanillakit", done=True),
    Todo(id=2, text="Build something", done=False),
]

@app.get("/api/todos")
def get_todos():
    return todos

@app.post("/api/todos")
def add_todo(todo: Todo):
    todos.append(todo)
    return todo

app.mount("/", StaticFiles(directory="../frontend/docs", html=True))`;

export const FASTAPI_FETCH = {
  html: `import { signal, html, each } from "vanillakit";

const todos = signal([]);

async function loadTodos() {
  const res = await fetch("/api/todos");
  todos(await res.json());
}

async function addTodo(text) {
  const res = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: Date.now(), text, done: false }),
  });
  todos(list => [...list, await res.json()]);
}

loadTodos();

const input = signal("");

document.body.append(html\`
  <div>
    <input
      value=\${() => input()}
      oninput=\${(e) => input(e.target.value)}
      onkeydown=\${(e) => {
        if (e.key === "Enter") { addTodo(input()); input(""); }
      }}
      placeholder="New todo..."
    />
    <ul>
      \${each(todos, t => t.id,
        (itemSig) => html\`<li>\${() => itemSig().text}</li>\`
      )}
    </ul>
  </div>
\`);`,
  vkml: `import { signal, div, input as inputEl, ul, li, each } from "vanillakit";

const todos = signal([]);

async function loadTodos() {
  const res = await fetch("/api/todos");
  todos(await res.json());
}

async function addTodo(text) {
  const res = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: Date.now(), text, done: false }),
  });
  todos(list => [...list, await res.json()]);
}

loadTodos();

const input = signal("");

document.body.append(div(
  inputEl({
    value: input,
    oninput: (e) => input(e.target.value),
    onkeydown: (e) => {
      if (e.key === "Enter") { addTodo(input()); input(""); }
    },
    placeholder: "New todo..."
  }),
  ul(() => each(todos, t => t.id, (itemSig) => li(() => itemSig().text)))
));`,
};

export const LISTS_SNIPPET_1 = `// Add
items(list => [...list, { id: 4, label: "Delta" }]);

// Remove
items(list => list.filter(i => i.id !== 2));

// Reorder (DOM nodes are moved, not recreated)
items(list => [...list].reverse());

// Update an item (the itemSig in the render function updates)
items(list => list.map(i =>
  i.id === 1 ? { ...i, label: "Updated" } : i
));`;

export const REACTIVITY_SNIPPET_1 = `import { signal, effect } from "vanillakit";

const count = signal(0);

// Reading inside an effect creates a subscription
effect(() => {
  console.log("count is", count());
});

count(1);          // effect re-runs → "count is 1"
count(n => n + 1); // effect re-runs → "count is 2"`;

export const REACTIVITY_SNIPPET_2 = `import { signal, computed } from "vanillakit";

const price = signal(10);
const qty = signal(3);
const total = computed(() => price() * qty());

total(); // 30
qty(5);
total(); // 50`;

export const ROUTER_MODULE_SNIPPET_1 = `import { initRouter } from "vanillakit";

// Hash mode (default): URLs like /#/about
initRouter({ mode: "hash" });

// History mode: URLs like /about (requires server-side fallback)
initRouter({ mode: "history" });`;

export const ROUTER_MODULE_SNIPPET_2 = {
  html: `import { createRouter, html } from "vanillakit";

const Router = createRouter({
  "/":         () => html\`<h1>Home</h1>\`,
  "/user/:id": () => html\`<h1>User page</h1>\`,
  "*":         () => html\`<h1>404</h1>\`,
});
document.body.append(Router());`,
  vkml: `import { createRouter, h1 } from "vanillakit";

const Router = createRouter({
  "/":         () => h1("Home"),
  "/user/:id": () => h1("User page"),
  "*":         () => h1("404"),
});
document.body.append(Router());`,
};

export const ROUTER_MODULE_SNIPPET_3 = `import { navLink, css } from "vanillakit";

const active = css\`color: gold; font-weight: 700;\`;
const base   = css\`color: gray;\`;

document.body.append(navLink("/about", "About", active, base));`;

export const ROUTING_CONCEPTS_SNIPPET_3 = {
  html: `import { createRouter, routeParams, html } from "vanillakit";

const Router = createRouter({
  "/user/:id": () => html\`
    <div>
      <h1>User \${() => routeParams().id}</h1>
    </div>
  \`,
});`,
  vkml: `import { createRouter, routeParams, div, h1 } from "vanillakit";

const Router = createRouter({
  "/user/:id": () => div(
    h1("User ", () => routeParams().id)
  ),
});`,
};

export const ROUTING_CONCEPTS_SNIPPET_4 = {
  html: `import { navigate, html } from "vanillakit";

// Navigate from code
navigate("/user/42");

// In a click handler
html\`<button onclick=\${() => navigate("/settings")}>Settings</button>\`;`,
  vkml: `import { navigate, button } from "vanillakit";

// Navigate from code
navigate("/user/42");

// In a click handler
button({ onclick: () => navigate("/settings") }, "Settings");`,
};

export const SIGNAL_SNIPPET_1 = `import { signal } from "vanillakit";

const count = signal(0);
count();           // read → 0
count(5);          // write → 5
count(n => n + 1); // update via function → 6
count.peek();      // read without tracking`;

export const SIGNAL_SNIPPET_2 = `import { signal, computed } from "vanillakit";

const x = signal(2), y = signal(3);
const sum = computed(() => x() + y());
sum(); // 5
x(10);
sum(); // 13`;

export const SIGNAL_SNIPPET_3 = `import { signal, effect } from "vanillakit";

const name = signal("world");
const dispose = effect(() => console.log("Hello, " + name() + "!"));
// logs: Hello, world!
name("vanillakit");
// logs: Hello, vanillakit!
dispose(); // stops tracking`;

export const SIGNAL_SNIPPET_4 = `import { signal, effect, batch } from "vanillakit";

const x = signal(1), y = signal(2);
effect(() => console.log(x() + y())); // 3
batch(() => { x(10); y(20); });       // 30 (once)`;

export const SIGNAL_SNIPPET_5 = `import { signal, effect, untrack } from "vanillakit";

const x = signal(1), y = signal(2);
effect(() => console.log(x() + untrack(() => y())));
y(99); // does NOT re-run
x(10); // re-runs, reads y's current value`;

export const STYLING_SNIPPET_1 = {
  html: `import { signal, html, css, cx } from "vanillakit";

const active = signal(false);

const base = css\`padding: 8px; border-radius: 6px;\`;
const highlight = css\`background: gold; color: #111;\`;

// Reactive class
html\`<div class=\${() => active() ? cx(base, highlight) : base}>Click me</div>\`;

// Reactive inline style
const size = signal(16);
html\`<p style=\${() => \`font-size: \${size()}px\`}>Resizable text</p>\`;`,
  vkml: `import { signal, div, p, css, cx } from "vanillakit";

const active = signal(false);

const base = css\`padding: 8px; border-radius: 6px;\`;
const highlight = css\`background: gold; color: #111;\`;

// Reactive class
div({ class: () => active() ? cx(base, highlight) : base },
  "Click me"
);

// Reactive inline style
const size = signal(16);
p({ style: () => \`font-size: \${size()}px\` },
  "Resizable text"
);`,
};

export const STYLING_SNIPPET_2 = `import { css, keyframes } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;

const spinner = css\`animation: \${spin} 1s linear infinite;\`;`;

export const STYLING_SNIPPET_3 = `import { cx, css } from "vanillakit";

const base = css\`padding: 8px;\`;
const active = css\`color: gold;\`;
const disabled = false;
const isActive = true;

cx(base, isActive && active, disabled && "disabled");
// falsy values are skipped`;

export const TYPE_SCRIPT_SNIPPET_1 = `import { signal } from "vanillakit";
import type { Signal, ReadonlySignal } from "vanillakit/signal.js";

const count: Signal<number> = signal(0);`;

export const TYPE_SCRIPT_SNIPPET_2 = `{
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
}`;

export const TYPE_SCRIPT_SNIPPET_3 = `import { defineConfig } from "vite";

export default defineConfig({
  root: "demo",
  base: "./",
});`;

export const TYPE_SCRIPT_SNIPPET_4 = `npx vite build
# output in dist/ (or wherever outDir points)`;

export const CSS_MODULE_SNIPPET_1 = `import { css } from "vanillakit";

const card = css\`
  padding: 16px;
  background: #1a1a1a;
  &:hover { border-color: gold; }
  & .title { font-weight: 700; }
  @media (max-width: 600px) { padding: 8px; }
\`;`;

export const DATA_FETCHING_SNIPPET_1 = {
  html: `import { signal, html } from "vanillakit";

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
\`);`,
  vkml: `import { signal, div, p, ul, li } from "vanillakit";

const users = signal([]);
const loading = signal(true);
const error = signal(null);

fetch("/api/users")
  .then(r => r.json())
  .then(data => { users(data); loading(false); })
  .catch(err => { error(err.message); loading(false); });

document.body.append(
  div(() => {
    if (loading()) return p("Loading...");
    if (error()) return p({ style: "color:red" }, error());
    return ul(() => users().map(u => li(u.name)));
  })
);`,
};

export const DATA_FETCHING_SNIPPET_2 = {
  html: `function useFetch(url) {
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
\`);`,
  vkml: `function useFetch(url) {
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

document.body.append(
  div(() => loading()
    ? p("Loading...")
    : ul(() => todos().map(t => li(t.text)))
  )
);`,
};

export const DATA_FETCHING_SNIPPET_3 = `import { signal, effect } from "vanillakit";

const page = signal(1);
const items = signal([]);

effect(() => {
  const p = page();
  fetch(\`/api/items?page=\${p}\`)
    .then(r => r.json())
    .then(data => items(data));
});

// Changing page triggers a refetch
page(2);`;

export const FORMS_SNIPPET_1 = {
  html: `const form = { name: signal(""), email: signal("") };

html\`
  <form onsubmit=\${(e) => {
    e.preventDefault();
    console.log({ name: form.name(), email: form.email() });
  }}>
    <input value=\${() => form.name()} oninput=\${(e) => form.name(e.target.value)} />
    <input value=\${() => form.email()} oninput=\${(e) => form.email(e.target.value)} type="email" />
    <button type="submit">Submit</button>
  </form>
\`;`,
  vkml: `import { form as formEl, input, button } from "vanillakit";

const form = { name: signal(""), email: signal("") };

formEl({
    onsubmit: (e) => {
      e.preventDefault();
      console.log({ name: form.name(), email: form.email() });
    }
  },
  input({ 
    value: form.name, 
    oninput: (e) => form.name(e.target.value) 
  }),
  input({ 
    value: form.email, 
    oninput: (e) => form.email(e.target.value), 
    type: "email"
  }),
  button({ type: "submit" }, "Submit")
);`,
};

export const HTML_MODULE_SNIPPET_1 = {
  html: `import { signal, html } from "vanillakit";

const name = signal("world");

const el = html\`
  <div>
    <h1>Hello, \${name}!</h1>
    <input value=\${() => name()} oninput=\${(e) => name(e.target.value)} />
  </div>
\`;
document.body.append(el);`,
  vkml: `import { signal, div, h1, input } from "vanillakit";

const name = signal("world");

const el = div(
  h1("Hello, ", name, "!"),
  input({ value: name, oninput: (e) => name(e.target.value) })
);
document.body.append(el);`,
};

export const HTML_MODULE_SNIPPET_2 = {
  html: `import { signal, each, html } from "vanillakit";

const items = signal([{ id: 1, text: "first" }, { id: 2, text: "second" }]);

html\`<ul>
  \${each(items, i => i.id, (itemSig) => html\`<li>\${() => itemSig().text}</li>\`)}
</ul>\`;`,
  vkml: `import { signal, each, ul, li } from "vanillakit";

const items = signal([{ id: 1, text: "first" }, { id: 2, text: "second" }]);

ul(
  () => each(items, i => i.id, (itemSig) => li(() => itemSig().text))
);`,
};
export const STYLING_LIVE_1 = {
  html: `import { css, html } from "vanillakit";

const card = css\`
  padding: 16px; background: var(--vk-color-bg);
  border: 1px solid var(--vk-color-border); border-radius: 8px;
  transition: border-color 0.15s ease;
  &:hover { border-color: var(--vk-color-accent); }
  & .title { font-weight: 700; color: var(--vk-color-accent); }
  & .desc { font-size: 0.85rem; color: gray; margin-top: 4px; }
\`;

document.body.append(html\`
  <div class=\${card}>
    <span class="title">Styled card</span>
    <div class="desc">Hover me — the border changes color.</div>
  </div>
\`);`,
  vkml: `import { css, div, span } from "vanillakit";

const card = css\`
  padding: 16px; background: var(--vk-color-bg);
  border: 1px solid var(--vk-color-border); border-radius: 8px;
  transition: border-color 0.15s ease;
  &:hover { border-color: var(--vk-color-accent); }
  & .title { font-weight: 700; color: var(--vk-color-accent); }
  & .desc { font-size: 0.85rem; color: gray; margin-top: 4px; }
\`;

document.body.append(
  div({ class: card },
    span({ class: "title" }, "Styled card"),
    div({ class: "desc" }, "Hover me — the border changes color.")
  )
);`,
};

export const STYLING_LIVE_2 = {
  html: `import { signal, html } from "vanillakit";

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
  vkml: `import { signal, div, input, span, p } from "vanillakit";

const size = signal(16);

document.body.append(
  div(
    input({ 
      type: "range", 
      min: "10", 
      max: "40", 
      value: size,
      oninput: (e) => size(+e.target.value),
      style: "width:200px; margin-bottom:10px;" 
    }),
    span({ style: "font-family:monospace; font-size:0.8rem; margin-left:8px;" },
      size, "px"
    ),
    p({ style: () => \`font-size: \${size()}px; font-weight: 600; transition: font-size 0.1s;\` },
      "Resizable text"
    )
  )
);`,
};

export const STYLING_LIVE_3 = {
  html: `import { css, keyframes, html } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;

const spinner = css\`
  display: inline-block; width: 24px; height: 24px;
  border: 3px solid var(--vk-color-border); border-top-color: var(--vk-color-accent);
  border-radius: 50%; animation: \${spin} 0.8s linear infinite;
\`;

document.body.append(html\`
  <div style="display:flex; align-items:center; gap:12px;">
    <div class=\${spinner}></div>
    <span style="font-size:0.85rem; color:gray;">Spinning via keyframes\\\`\\\`</span>
  </div>
\`);`,
  vkml: `import { css, keyframes, div, span } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;

const spinner = css\`
  display: inline-block; width: 24px; height: 24px;
  border: 3px solid var(--vk-color-border); border-top-color: var(--vk-color-accent);
  border-radius: 50%; animation: \${spin} 0.8s linear infinite;
\`;

document.body.append(
  div({ style: "display:flex; align-items:center; gap:12px;" },
    div({ class: spinner }),
    span({ style: "font-size:0.85rem; color:gray;" },
      "Spinning via keyframes\`\`"
    )
  )
);`,
};

export const VANILLA_CSS_SNIPPET_1 = {
  html: `import { initVanillaCss, themeToggle } from "vanillakit";
import { html } from "vanillakit";

initVanillaCss();  // inject VanillaCSS

// Optional: reactive dark/light toggle
const { theme, toggle } = themeToggle();

document.body.append(html\`
  <button onclick=\${toggle}>
    \${() => theme() === "dark" ? "☀️ Light" : "🌙 Dark"}
  </button>
\`);`,
  vkml: `import { initVanillaCss, themeToggle } from "vanillakit";
import { button } from "vanillakit";

initVanillaCss();  // inject VanillaCSS

// Optional: reactive dark/light toggle
const { theme, toggle } = themeToggle();

document.body.append(
  button({ onclick: toggle },
    () => theme() === "dark" ? "☀️ Light" : "🌙 Dark"
  )
);`,
};

export const VANILLA_CSS_SNIPPET_2 = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./vanillacss/vanilla.css" />
  </head>
  <body>
    <header>
      <a href="/">MySite</a>
      <nav>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
      </nav>
    </header>
    <main>
      <h1>Hello</h1>
      <p>Styled automatically — no class names needed.</p>
      <button data-color-variant="primary">Get started</button>
    </main>
  </body>
</html>`;

export const VANILLA_CSS_SNIPPET_3 = `/* styles.css */
@import "./vanillacss/vanilla.css";

/* Your styles here — unlayered rules always beat @layer rules */
:root {
  --vk-color-accent: hsl(220 80% 60%);  /* swap to blue */
}`;

export const VANILLA_CSS_SNIPPET_4 = `/* Sub-layer cascade order — lowest to highest priority */
@layer vanillacss.reset,       /* minireset.css foundation      */
       vanillacss.tokens,      /* custom properties & theme     */
       vanillacss.base,        /* html, body, img, input reset  */
       vanillacss.typography,  /* headings, links, lists, code  */
       vanillacss.layout,      /* main, header, cards, grid     */
       vanillacss.nav,         /* nav, breadcrumb, pagination   */
       vanillacss.buttons,     /* buttons, hover effects        */
       vanillacss.forms,       /* inputs, checkbox, switch      */
       vanillacss.feedback,    /* alerts, progress, toast       */
       vanillacss.data,        /* tables, tags, avatars         */
       vanillacss.components,  /* dialog, tabs, accordion       */
       vanillacss.utilities;   /* badges, sr-only, keyframes    */`;

export const VANILLA_CSS_SNIPPET_5 = `/* Any selector outside a @layer beats everything inside one */
:root {
  --vk-color-accent: hsl(220 80% 60%);
}

/* Or target a specific sub-layer */
@layer vanillacss.typography {
  h1 { letter-spacing: -0.05em; }
}`;

export const VANILLA_CSS_COMPONENTS_SNIPPET_1 = `// Open as modal (with backdrop)
const dialog = document.querySelector("dialog");
dialog.showModal();

// Close
dialog.close();`;
export const VANILLA_CSS_THEME_SNIPPET_1 = `@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --vk-color-bg:      hsl(var(--vk-gray-9));
    --vk-color-surface: hsl(var(--vk-gray-8));
    --vk-color-text:    hsl(var(--vk-gray-0));
    color-scheme: dark;
  }
}`;

export const VANILLA_CSS_THEME_SNIPPET_2 = `<!-- Force dark -->
<html data-theme="dark">

<!-- Force light -->
<html data-theme="light">

<!-- Scope dark to a specific section -->
<div data-theme="dark">
  <article data-card>Always dark card</article>
</div>`;

export const VANILLA_CSS_THEME_SNIPPET_3 = {
  html: `import { initVanillaCss, themeToggle, html } from "vanillakit";

initVanillaCss();

const { theme, toggle, set } = themeToggle();

document.body.append(html\`
  <button onclick=\${toggle}>
    \${() => theme() === "dark" ? "☀️ Switch to light" : "🌙 Switch to dark"}
  </button>
\`);

// Explicit control
set("dark");   // force dark — saved to localStorage
set("light");  // force light — saved to localStorage
set("auto");   // follow system — clears localStorage`,
  vkml: `import { initVanillaCss, themeToggle, button } from "vanillakit";

initVanillaCss();

const { theme, toggle, set } = themeToggle();

document.body.append(
  button({ onclick: toggle },
    () => theme() === "dark" ? "☀️ Switch to light" : "🌙 Switch to dark"
  )
);

// Explicit control
set("dark");   // force dark — saved to localStorage
set("light");  // force light — saved to localStorage
set("auto");   // follow system — clears localStorage`,
};

export const VANILLA_CSS_THEME_SNIPPET_4 = `/* styles.css — swap gold accent for indigo */
:root {
  --vk-color-accent:     hsl(240 60% 60%);
  --vk-color-accent-dim: hsl(240 60% 60% / 0.15);
}`;

export const VANILLA_CSS_THEME_SNIPPET_5 = `/* Light mode accent */
:root {
  --vk-color-accent:     hsl(240 60% 55%);
  --vk-color-accent-dim: hsl(240 60% 55% / 0.12);
}

/* Dark mode accent */
[data-theme="dark"],
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --vk-color-accent:     hsl(240 80% 70%);
    --vk-color-accent-dim: hsl(240 80% 70% / 0.18);
  }
}`;

export const VANILLA_CSS_THEME_SNIPPET_6 = `/* Tighten transitions, widen container, adjust rem base */
:root {
  --vk-transition-speed: 0.1s;
  --vk-container-max-width: 80rem;
  --vk-font-size-root: 112.5%;  /* 18px base → scales all rem values */
}`;

export const VANILLA_CSS_TOKENS_SNIPPET_1 = `:root {
  --vk-color-accent: hsl(220 80% 60%);  /* override a single token */
}`;

export const GETTING_STARTED_SNIPPET_1 = `# clone the repo
git clone https://github.com/nisuxyz/vanillakit.git
cp -r vanillakit/src ./vanillakit`;

export const GETTING_STARTED_SNIPPET_2 = `<script type="module">
  import { signal, html, css } from "https://esm.sh/gh/nisuxyz/vanillakit/src/index.js";

  // ready to go
</script>`;

export const GETTING_STARTED_SNIPPET_3 = `<!doctype html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="./app.js"></script>
  </body>
</html>`;

export const GETTING_STARTED_SNIPPET_4 = `src/
  signal.js    — signal, computed, effect, batch, untrack
  reactive.js  — reactive, toRaw, isReactive, snapshot
  html.js      — html, each
  css.js       — css, keyframes, globalCss, cx
  router.js    — createRouter, navigate, navLink, currentPath, routeParams
  index.js     — re-exports everything`;

export const EXAMPLES_SNIPPET_1 = {
  typescript: `import { reactive, snapshot, effect } from "vanillakit";

const state = reactive({
  todos: [
    { text: "Learn signals", done: true },
    { text: "Build an app",  done: false },
  ],
});

effect(() => console.log(JSON.stringify(snapshot(state), null, 2)));

state.todos.push({ text: "Ship it", done: false });
state.todos[0].done = false;`,
  html: `import { reactive, html } from "vanillakit";

const state = reactive({
  count: 0,
  items: ["Alpha", "Bravo"],
});

document.body.append(html\`
  <div>
    <div style="display:flex; gap:8px; align-items:center; margin-bottom:10px;">
      <button onclick=\${() => state.count++}>+1</button>
      <button onclick=\${() => state.count--}>-1</button>
      <span style="font-family:monospace;">count = \${() => state.count}</span>
    </div>
    <div style="display:flex; gap:8px; margin-bottom:8px;">
      <button onclick=\${() => state.items.push("Item " + (state.items.length + 1))}>Add</button>
      <button onclick=\${() => state.items.pop()}>Remove last</button>
    </div>
    <ul style="margin:0; padding-left:18px;">
      \${() => state.items.map(item => html\`<li>\${item}</li>\`)}
    </ul>
  </div>
\`);`,
  vkml: `import { reactive, vkml } from "vanillakit";

const { div, button, span, ul, li } = vkml;

const state = reactive({
  count: 0,
  items: ["Alpha", "Bravo"],
});

document.body.append(div(
  div({ style: "display:flex; gap:8px; align-items:center; margin-bottom:10px;" },
    button({ onclick: () => state.count++ }, "+1"),
    button({ onclick: () => state.count-- }, "-1"),
    span({ style: "font-family:monospace;" }, "count = ", () => state.count)
  ),
  div({ style: "display:flex; gap:8px; margin-bottom:8px;" },
    button({ onclick: () => state.items.push("Item " + (state.items.length + 1)) }, "Add"),
    button({ onclick: () => state.items.pop() }, "Remove last")
  ),
  ul({ style: "margin:0; padding-left:18px;" },
    () => state.items.map(item => li(item))
  )
));`,
};

export const EXAMPLES_SNIPPET_2 = {
  html: `import { html, css, globalCss, createRouter, navLink } from "vanillakit";

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
\`);`,
  vkml: `import { div, h1, nav, css, globalCss, createRouter, navLink } from "vanillakit";

globalCss\`body { margin: 0; font-family: system-ui; }\`;

const page = css\`padding: 24px;\`;
const active = css\`color: gold; font-weight: 700;\`;
const base = css\`color: gray; text-decoration: none;\`;

const Router = createRouter({
  "/":      () => div({ class: page }, h1("Home")),
  "/about": () => div({ class: page }, h1("About")),
  "*":      () => div({ class: page }, h1("404")),
});

document.body.append(
  nav(
    navLink("/", "Home", active, base),
    navLink("/about", "About", active, base)
  ),
  Router()
);`,
};

export const EXAMPLES_SNIPPET_3 = `// Deep reactive proxy — mutate normally, changes propagate
const state = reactive({
  user: {
    name: "Ada Lovelace",
    settings: {
      theme: "dark",
      notifications: { email: true, push: false, frequency: "daily" },
    },
    scores: [95, 87, 92],
  },
});

// Computed snapshot for display — auto-updates
const jsonView = computed(() => JSON.stringify(snapshot(state), null, 2));

// Direct mutation triggers effects
state.user.name = "Grace Hopper";
state.user.scores.push(99);

// Scoped CSS with nesting, pseudo-classes, @media
const card = css\`
  padding: 20px;
  border: 2px solid var(--vk-color-border);
  &:hover { border-color: var(--vk-color-accent); }
  & > .title { font-weight: 700; }
  @media (max-width: 600px) { padding: 12px; }
\`;

// cx() merges class names, skipping falsy values
const classes = cx(
  statusBase,
  statusMap[status()],
  rounded() && propRounded,
  shadow() && propShadow,
);`;

export const EXAMPLES_SNIPPET_4 = {
  html: `// each() reuses DOM nodes by key across mutations
const items = signal(Array.from({ length: 8 }, randItem));

// Render — each item gets a Signal<T> and ReadonlySignal<number>
html\`<div>
  \${each(items, item => item.id, (itemSig, indexSig) =>
    html\`<div>
      <span>\${() => indexSig()}</span>
      <span>\${() => itemSig().name}</span>
      <span>\${() => itemSig().score}</span>
      <input placeholder="type here…" />
    </div>\`
  )}
</div>\`;

// Mutations — DOM nodes with matching keys are reused, not recreated.
// Text typed into inputs persists across shuffle/reverse/sort.
items(shuffle);                              // reorder
items(l => [...l].reverse());                // reverse
items(l => [...l, randItem()]);              // append
items(l => l.filter(x => x.id !== target));  // remove
items(l => [...l].sort((a, b) =>             // sort
  a.name.localeCompare(b.name)
));`,
  vkml: `// each() reuses DOM nodes by key across mutations
const items = signal(Array.from({ length: 8 }, randItem));

// Render — each item gets a Signal<T> and ReadonlySignal<number>
div(
  () => each(items, item => item.id, (itemSig, indexSig) =>
    div(
      span(() => indexSig()),
      span(() => itemSig().name),
      span(() => itemSig().score),
      input({ placeholder: "type here…" })
    )
  )
);

// Mutations — DOM nodes with matching keys are reused, not recreated.
// Text typed into inputs persists across shuffle/reverse/sort.
items(shuffle);                              // reorder
items(l => [...l].reverse());                // reverse
items(l => [...l, randItem()]);              // append
items(l => l.filter(x => x.id !== target));  // remove
items(l => [...l].sort((a, b) =>             // sort
  a.name.localeCompare(b.name)
));`,
};

export const EXAMPLES_SNIPPET_5 = {
  html: `// Reactive state
const todos = signal([]);
const filter = signal("all");
const filteredTodos = computed(() => {
  const f = filter();
  const l = todos();
  return f === "active" ? l.filter(t => !t.done)
       : f === "done"   ? l.filter(t => t.done)
       : l;
});
const stats = computed(() => {
  const l = todos();
  return {
    total: l.length,
    done: l.filter(t => t.done).length,
    active: l.filter(t => !t.done).length,
  };
});

// Keyed list rendering — DOM nodes reused by id
html\`<div>
  \${each(filteredTodos, t => t.id, (itemSig) => TodoItem(itemSig))}
</div>\`;

// Adding a todo — just push to the signal
function add() {
  todos(l => [...l, { id: nextId++, text: text().trim(), done: false, priority: priority() }]);
}

// TodoItem reads from itemSig — updates when that item changes
function TodoItem(itemSig) {
  const todo = itemSig();
  const toggle = () => todos(l => l.map(t =>
    t.id === todo.id ? { ...t, done: !t.done } : t
  ));
  return html\`<div>
    <input type="checkbox" checked=\${todo.done} onclick=\${toggle} />
    <span>\${todo.text}</span>
  </div>\`;
}`,
  vkml: `// Reactive state
const todos = signal([]);
const filter = signal("all");
const filteredTodos = computed(() => {
  const f = filter();
  const l = todos();
  return f === "active" ? l.filter(t => !t.done)
       : f === "done"   ? l.filter(t => t.done)
       : l;
});
const stats = computed(() => {
  const l = todos();
  return {
    total: l.length,
    done: l.filter(t => t.done).length,
    active: l.filter(t => !t.done).length,
  };
});

// Keyed list rendering — DOM nodes reused by id
div(
  () => each(filteredTodos, t => t.id, (itemSig) => TodoItem(itemSig))
);

// Adding a todo — just push to the signal
function add() {
  todos(l => [...l, { id: nextId++, text: text().trim(), done: false, priority: priority() }]);
}

// TodoItem reads from itemSig — updates when that item changes
function TodoItem(itemSig) {
  const todo = itemSig();
  const toggle = () => todos(l => l.map(t =>
    t.id === todo.id ? { ...t, done: !t.done } : t
  ));
  return div(
    input({ type: "checkbox", checked: todo.done, onclick: toggle }),
    span(todo.text)
  );
}`,
};

// ── Snippets for two-way binding demo ─────────────────────────────────────────
export const TWO_WAY_BINDING = {
  html: `import { signal, html } from "vanillakit";

const name = signal("world");

document.body.append(html\`
  <div>
    <p style="font-size:1.2rem; font-weight:700;">Hello, \${name}!</p>
    <input value=\${() => name()} oninput=\${(e) => name(e.target.value)}
      style="max-width:240px;" />
  </div>
\`);`,
  vkml: `import { signal, vkml } from "vanillakit";

const { div, p, input } = vkml;
const name = signal("world");

document.body.append(div(
  p({ style: "font-size:1.2rem; font-weight:700;" }, "Hello, ", name, "!"),
  input({ value: () => name(), oninput: (e) => name(e.target.value),
    style: "max-width:240px;" })
));`,
};

// ── Snippets for derived state demo ───────────────────────────────────────────
export const DERIVED_STATE = {
  html: `import { signal, computed, html } from "vanillakit";

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
  vkml: `import { signal, computed, vkml } from "vanillakit";

const { div, label, input, span } = vkml;
const price    = signal(10);
const quantity = signal(3);
const total    = computed(() => price() * quantity());

document.body.append(div(
  { style: "display:flex; align-items:center; gap:14px; flex-wrap:wrap;" },
  label("Price: ",
    input({ type: "number", value: () => price(),
      oninput: (e) => price(+e.target.value), style: "width:80px;" })
  ),
  label("Qty: ",
    input({ type: "number", value: () => quantity(),
      oninput: (e) => quantity(+e.target.value), style: "width:80px;" })
  ),
  span({ style: "font-weight:700;" }, "Total: $", total)
));`,
};

// ── Snippets for conditional rendering ────────────────────────────────────────
export const CONDITIONAL_SNIPPET_1 = {
  html: `import { signal, html } from "vanillakit";

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
  vkml: `import { signal, vkml } from "vanillakit";

const { div, span, button } = vkml;
const loggedIn = signal(false);

document.body.append(div(
  () => loggedIn()
    ? div({ style: "display:flex; align-items:center; gap:12px;" },
        span({ style: "color:gold; font-weight:600;" }, "Welcome back!"),
        button({ onclick: () => loggedIn(false) }, "Log out")
      )
    : button({ onclick: () => loggedIn(true) }, "Log in")
));`,
};

export const CONDITIONAL_SNIPPET_2 = {
  html: `import { signal, html } from "vanillakit";

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
  vkml: `import { signal, vkml } from "vanillakit";

const { div, span, button } = vkml;
const status = signal("idle"); // "idle" | "loading" | "error" | "done"

document.body.append(div(
  div({ style: "display:flex; gap:8px; margin-bottom:12px;" },
    button({ onclick: () => status("idle") }, "Idle"),
    button({ onclick: () => status("loading") }, "Loading"),
    button({ onclick: () => status("error") }, "Error"),
    button({ onclick: () => status("done") }, "Done")
  ),
  div({ style: "font-size:1rem; font-weight:600;" },
    () => {
      switch (status()) {
        case "loading": return span("Loading...");
        case "error":   return span({ style: "color:red;" }, "Error!");
        case "done":    return span({ style: "color:green;" }, "Done ✓");
        default:        return span("Ready.");
      }
    }
  )
));`,
};

// ── Snippet for keyed list demo ────────────────────────────────────────────────
export const LISTS_LIVE_SNIPPET = {
  html: `import { signal, each, html, css } from "vanillakit";

let nextId = 4;
const items = signal([
  { id: 1, label: "Alpha" },
  { id: 2, label: "Bravo" },
  { id: 3, label: "Charlie" },
]);

const itemStyle = css\`
  display: flex; align-items: center; gap: 8px;
  padding: 6px 10px; border-radius: 6px;
  background: var(--vk-color-bg); border: 1px solid var(--vk-color-border);
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
  vkml: `import { signal, each, vkml, css } from "vanillakit";

const { div, span, button } = vkml;
let nextId = 4;
const items = signal([
  { id: 1, label: "Alpha" },
  { id: 2, label: "Bravo" },
  { id: 3, label: "Charlie" },
]);

const itemStyle = css\`
  display: flex; align-items: center; gap: 8px;
  padding: 6px 10px; border-radius: 6px;
  background: var(--vk-color-bg); border: 1px solid var(--vk-color-border);
  font-size: 0.85rem; font-family: monospace;
\`;

const names = ["Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India"];

document.body.append(div(
  div({ style: "display:flex; gap:8px; margin-bottom:12px;" },
    button({ onclick: () => items(l =>
      [...l, { id: nextId++, label: names[(nextId - 5) % names.length] }]
    ) }, "Add item"),
    button({ onclick: () => items(l => [...l].reverse()) }, "Reverse"),
    button({ onclick: () => items(l => l.slice(0, -1)) }, "Remove last")
  ),
  div({ style: "display:flex; flex-direction:column; gap:6px;" },
    each(items, i => i.id, (itemSig, indexSig) =>
      div({ class: itemStyle },
        span({ style: "color:gray;" }, "#", indexSig),
        span(() => itemSig().label),
        button({
          style: "margin-left:auto; background:none; border:none; color:gray; cursor:pointer;",
          onclick: () => items(l => l.filter(i => i.id !== itemSig().id))
        }, "✕")
      )
    )
  )
));`,
};

// ── Snippets for forms demos ───────────────────────────────────────────────────
export const FORMS_TEXT_SNIPPET = {
  html: `import { signal, html } from "vanillakit";

const name = signal("");

document.body.append(html\`
  <div>
    <input value=\${() => name()} oninput=\${(e) => name(e.target.value)}
      placeholder="Your name" style="max-width:240px; margin-bottom:10px;" />
    <p style="font-size:1rem; font-weight:600;">Hello, \${() => name() || "…"}!</p>
  </div>
\`);`,
  vkml: `import { signal, vkml } from "vanillakit";

const { div, input, p } = vkml;
const name = signal("");

document.body.append(div(
  input({ value: () => name(), oninput: (e) => name(e.target.value),
    placeholder: "Your name", style: "max-width:240px; margin-bottom:10px;" }),
  p({ style: "font-size:1rem; font-weight:600;" },
    "Hello, ", () => name() || "…", "!")
));`,
};

export const FORMS_CHECKBOX_SNIPPET = {
  html: `import { signal, html } from "vanillakit";

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
  vkml: `import { signal, vkml } from "vanillakit";

const { div, label, input, button } = vkml;
const agreed = signal(false);

document.body.append(div(
  { style: "display:flex; align-items:center; gap:14px; flex-wrap:wrap;" },
  label({ style: "display:flex; align-items:center; gap:6px; cursor:pointer;" },
    input({ type: "checkbox", checked: () => agreed(),
      onchange: (e) => agreed(e.target.checked) }),
    "I agree to the terms"
  ),
  button({
    disabled: () => !agreed(),
    style: () => !agreed() ? "opacity:0.4; cursor:not-allowed;" : ""
  }, "Submit")
));`,
};

export const FORMS_SELECT_SNIPPET = {
  html: `import { signal, html } from "vanillakit";

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
  vkml: `import { signal, vkml } from "vanillakit";

const { div, select, option, span } = vkml;
const color = signal("blue");
const colorMap = { red: "#e45", blue: "#48f", green: "#4c8" };

document.body.append(div(
  { style: "display:flex; align-items:center; gap:14px;" },
  select({ onchange: (e) => color(e.target.value) },
    option({ value: "red" }, "Red"),
    option({ value: "blue", selected: true }, "Blue"),
    option({ value: "green" }, "Green")
  ),
  span({ style: () => \`font-weight:700; color:\${colorMap[color()]};\` },
    "Chosen: ", color)
));`,
};

// ── Snippets for reactivity demos ─────────────────────────────────────────────
export const REACTIVITY_LIVE_1 = {
  html: `import { signal, effect, html } from "vanillakit";

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
  vkml: `import { signal, effect, vkml } from "vanillakit";

const { div, button, span } = vkml;
const count = signal(0);
const log = signal([]);

effect(() => {
  const v = count();
  log(l => [...l.slice(-4), \`count is \${v}\`]);
});

document.body.append(div(
  div({ style: "display:flex; align-items:center; gap:12px; margin-bottom:12px;" },
    button({ onclick: () => count(n => n + 1) }, "+1"),
    button({ onclick: () => count(0) }, "Reset"),
    span({ style: "font-family:monospace;" }, "count = ", count)
  ),
  div({ style: "font-family:monospace; font-size:0.8rem; color:gray; line-height:1.6;" },
    () => log().map(l => div("→ ", l))
  )
));`,
};

export const REACTIVITY_LIVE_2 = {
  html: `import { signal, computed, html } from "vanillakit";

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
  vkml: `import { signal, computed, vkml } from "vanillakit";

const { div, label, input, span } = vkml;
const price = signal(10);
const qty = signal(3);
const total = computed(() => price() * qty());

document.body.append(div(
  { style: "display:flex; align-items:center; gap:14px; flex-wrap:wrap;" },
  label("Price: ",
    input({ type: "number", value: () => price(),
      oninput: (e) => price(+e.target.value), style: "width:80px;" })
  ),
  label("Qty: ",
    input({ type: "number", value: () => qty(),
      oninput: (e) => qty(+e.target.value), style: "width:80px;" })
  ),
  span({ style: "font-weight:700;" }, "Total: $", total)
));`,
};

export const REACTIVITY_LIVE_3 = {
  html: `import { signal, computed, batch, html } from "vanillakit";

const x = signal(1), y = signal(2);
const runCount = signal(0);
const sum = computed(() => { runCount(n => n + 1); return x() + y(); });

document.body.append(html\`
  <div>
    <div style="margin-bottom:10px; font-family:monospace;">
      x=\${x} y=\${y} sum=\${sum} (computed ran \${runCount}×)
    </div>
    <button onclick=\${() => { x(n => n + 1); y(n => n + 1); }}>
      x++ y++ (no batch, 2 runs)
    </button>
    <button onclick=\${() => batch(() => { x(n => n + 1); y(n => n + 1); })}>
      x++ y++ (batched, 1 run)
    </button>
    <button onclick=\${() => { x(1); y(2); runCount(0); }}>Reset</button>
  </div>
\`);`,
  vkml: `import { signal, computed, batch, vkml } from "vanillakit";

const { div, button, span } = vkml;
const x = signal(1), y = signal(2);
const runCount = signal(0);
const sum = computed(() => { runCount(n => n + 1); return x() + y(); });

document.body.append(div(
  div({ style: "margin-bottom:10px; font-family:monospace;" },
    "x=", x, " y=", y, " sum=", sum,
    " (computed ran ", runCount, "×)"
  ),
  button({ onclick: () => { x(n => n + 1); y(n => n + 1); } },
    "x++ y++ (no batch, 2 runs)"),
  " ",
  button({ onclick: () => batch(() => { x(n => n + 1); y(n => n + 1); }) },
    "x++ y++ (batched, 1 run)"),
  " ",
  button({ onclick: () => { x(1); y(2); runCount(0); } }, "Reset")
));`,
};

// ── Snippet for sandbox / playground demo ─────────────────────────────────────
export const SANDBOX_SNIPPET = {
  html: `import { signal, computed, html, css } from "vanillakit";

const count = signal(0);
const double = computed(() => count() * 2);

const badge = css\`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-family: monospace;
  font-weight: 600;
  background: var(--vk-color-accent-dim);
  color: var(--vk-color-accent);
\`;

document.body.append(html\`
  <div>
    <h3>Counter: \${count}</h3>
    <p>Double: <span class=\${badge}>\${double}</span></p>
    <div style="display:flex; gap:8px; margin-top:12px;">
      <button onclick=\${() => count(n => n + 1)}>+1</button>
      <button onclick=\${() => count(n => n - 1)}>-1</button>
      <button onclick=\${() => count(0)}>Reset</button>
    </div>
  </div>
\`);`,
  vkml: `import { signal, computed, vkml, css } from "vanillakit";

const { div, h3, p, span, button } = vkml;
const count = signal(0);
const double = computed(() => count() * 2);

const badge = css\`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-family: monospace;
  font-weight: 600;
  background: var(--vk-color-accent-dim);
  color: var(--vk-color-accent);
\`;

document.body.append(div(
  h3("Counter: ", count),
  p("Double: ", span({ class: badge }, double)),
  div({ style: "display:flex; gap:8px; margin-top:12px;" },
    button({ onclick: () => count(n => n + 1) }, "+1"),
    button({ onclick: () => count(n => n - 1) }, "-1"),
    button({ onclick: () => count(0) }, "Reset")
  )
));`,
};

// ── UI Component Snippets ────────────────────────────────────

export const UI_CARD_BASIC = `
import { Card, CardContent, CardTitle } from "@vanillakit/ui";

document.body.append(
  Card(
    CardTitle("Simple Card"),
    CardContent("This card uses VanillaCSS tokens for padding, border, and shadow."),
  )
);
`;

export const UI_CARD_COMPOSED = `
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@vanillakit/ui";
import { Button } from "@vanillakit/ui";

document.body.append(
  Card(
    CardHeader(
      CardTitle("Project Update"),
      CardDescription("Deploy your project with one click."),
    ),
    CardContent("Your project is ready to deploy. All checks have passed and the build succeeded."),
    CardFooter(
      Button({ variant: "default" }, "Deploy"),
      Button({ variant: "outline" }, "Cancel"),
    ),
  )
);
`;

export const UI_CARD_EXTEND = `
import { Card, CardHeader, CardTitle, CardContent } from "@vanillakit/ui";

document.body.append(
  Card({ "s-cn": [{ "s-max-width": "400px", "s-border-color": "var(--vk-color-accent)" }] },
    CardHeader(
      CardTitle("Custom Card"),
    ),
    CardContent("Extended with cn() — extra style attributes override the defaults."),
  )
);
`;

export const UI_BUTTON_VARIANTS = `
import { Button } from "@vanillakit/ui";

document.body.append(
  div({ style: "display:flex; flex-wrap:wrap; gap:8px; align-items:center;" },
    Button({ variant: "default" }, "Default"),
    Button({ variant: "outline" }, "Outline"),
    Button({ variant: "ghost" }, "Ghost"),
    Button({ variant: "danger" }, "Danger"),
  )
);
`;

export const UI_BUTTON_SIZES = `
import { Button } from "@vanillakit/ui";

document.body.append(
  div({ style: "display:flex; flex-wrap:wrap; gap:8px; align-items:center;" },
    Button({ size: "sm" }, "Small"),
    Button({ size: "md" }, "Medium"),
    Button({ size: "lg" }, "Large"),
  )
);
`;

export const UI_BUTTON_DISABLED = `
import { Button } from "@vanillakit/ui";

document.body.append(
  div({ style: "display:flex; flex-wrap:wrap; gap:8px; align-items:center;" },
    Button({ variant: "default", disabled: true }, "Disabled"),
    Button({ variant: "outline", disabled: true }, "Disabled"),
    Button({ variant: "danger", disabled: true }, "Disabled"),
  )
);
`;

export const UI_BUTTON_INTERACTIVE = `
import { Button } from "@vanillakit/ui";
import { signal } from "@vanillakit/signal";

const count = signal(0);

document.body.append(
  div({ style: "display:flex; flex-direction:column; gap:12px; align-items:flex-start;" },
    div({ style: "font-size:var(--vk-font-size-lg);" }, () => "Clicked: " + count() + " times"),
    div({ style: "display:flex; gap:8px;" },
      Button({ variant: "default", onclick: () => count(n => n + 1) }, "+1"),
      Button({ variant: "outline", onclick: () => count(n => n - 1) }, "-1"),
      Button({ variant: "ghost", onclick: () => count(0) }, "Reset"),
    ),
  )
);
`;

export const UI_BADGE_VARIANTS = `
import { Badge } from "@vanillakit/ui";

document.body.append(
  div({ style: "display:flex; flex-wrap:wrap; gap:8px; align-items:center;" },
    Badge({ variant: "default" }, "Default"),
    Badge({ variant: "outline" }, "Outline"),
    Badge({ variant: "danger" }, "Danger"),
    Badge({ variant: "success" }, "Success"),
    Badge({ variant: "warning" }, "Warning"),
    Badge({ variant: "info" }, "Info"),
  )
);
`;

export const UI_BADGE_INTERACTIVE = `
import { Badge, Button, Card, CardHeader, CardTitle, CardContent } from "@vanillakit/ui";
import { signal } from "@vanillakit/signal";

const status = signal("idle");

document.body.append(
  Card(
    CardHeader(
      CardTitle("Deployment Status"),
    ),
    CardContent(
      div({ style: "display:flex; gap:8px; align-items:center; margin-bottom:12px;" },
        () => {
          const s = status();
          const variant = s === "success" ? "success" : s === "error" ? "danger" : s === "building" ? "warning" : "default";
          return Badge({ variant }, s);
        },
      ),
      div({ style: "display:flex; gap:8px;" },
        Button({ variant: "default", size: "sm", onclick: () => status("building") }, "Build"),
        Button({ variant: "outline", size: "sm", onclick: () => status("success") }, "Pass"),
        Button({ variant: "danger", size: "sm", onclick: () => status("error") }, "Fail"),
        Button({ variant: "ghost", size: "sm", onclick: () => status("idle") }, "Reset"),
      ),
    ),
  )
);
`;
