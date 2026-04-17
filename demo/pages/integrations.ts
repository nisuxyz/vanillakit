import { signal, html, css, cx, keyframes, effect } from "../../src/index.js";
import {
  pageClass, headingClass, subtitleClass,
  docSectionClass, cardClass, btnBase, btnPrimary, btnGhost,
  inputClass, badgeClass,
} from "../styles.ts";
import { code } from "../highlight.ts";

// ── Tab styles ──────────────────────────────────────────────
const tabBarClass = css`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 28px;
  overflow-x: auto;
`;

const tabBtnBase = css`
  font-family: var(--mono);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 10px 18px;
  border: none;
  background: none;
  color: var(--text-muted);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.15s ease;
  white-space: nowrap;
  &:hover {
    color: var(--text);
    background: var(--surface);
  }
`;

const tabBtnActive = css`
  color: var(--accent);
  border-bottom-color: var(--accent);
  font-weight: 600;
`;

const tabFadeIn = keyframes`from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); }`;
const tabPanelClass = css`
  animation: ${tabFadeIn} 0.2s ease-out;
`;

// ── Demo container styles ───────────────────────────────────
const demoBoxClass = css`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  margin: 16px 0;
`;

const demoLabelClass = css`
  font-family: var(--mono);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  &::before {
    content: "▶";
    font-size: 0.6rem;
  }
`;

const demoDescClass = css`
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-bottom: 12px;
`;

// ── htmx interactive demo ───────────────────────────────────
function HtmxDemo() {
  // Real fetch of a partial HTML file, then mount a vanillakit island inside it
  const serverContent = signal<string | null>(null);
  const loading = signal(false);
  const counterCount = signal(0);
  const islandMounted = signal(false);

  function doHtmxSwap() {
    loading(true);
    islandMounted(false);
    counterCount(0);
    fetch("./partials/dashboard.html")
      .then(r => { if (!r.ok) throw new Error(r.statusText); return r.text(); })
      .then(htmlText => {
        serverContent(htmlText);
        loading(false);
        islandMounted(true);
      })
      .catch(() => {
        serverContent(`<div class="server-row" style="color:#e45;">Failed to fetch partial — build &amp; serve first</div>`);
        loading(false);
      });
  }

  const serverHtmlBox = css`
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 16px;
    margin: 12px 0;
    font-family: var(--mono);
    font-size: 0.82rem;
    line-height: 1.8;
    & .server-row {
      padding: 4px 0;
      color: var(--text-muted);
      border-bottom: 1px solid var(--border);
      &:last-of-type { border-bottom: none; }
      & strong { color: var(--text); }
      & em { color: var(--accent); font-style: normal; }
    }
    & .island-slot {
      margin-top: 12px;
      padding: 10px;
      border: 1px dashed var(--accent);
      border-radius: 6px;
      color: var(--accent);
      text-align: center;
    }
  `;

  const islandBox = css`
    margin-top: 12px;
    padding: 16px;
    background: var(--accent-dim);
    border: 1px solid var(--accent);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  `;

  const counterBtnClass = css`
    font-family: var(--font);
    font-size: 0.85rem;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    cursor: pointer;
    background: var(--accent);
    color: var(--bg);
    transition: all 0.12s ease;
    &:hover { filter: brightness(1.1); transform: translateY(-1px); }
    &:active { transform: translateY(0); }
  `;

  const spin = keyframes`to { transform: rotate(360deg); }`;
  const spinnerClass = css`
    display: inline-block;
    width: 16px; height: 16px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: ${spin} 0.6s linear infinite;
  `;

  const stepIndicator = css`
    display: flex;
    gap: 8px;
    margin: 16px 0;
    flex-wrap: wrap;
  `;

  const stepBadge = (active: boolean) => css`
    font-family: var(--mono);
    font-size: 0.72rem;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
    background: ${active ? "var(--accent-dim)" : "var(--surface-2)"};
    color: ${active ? "var(--accent)" : "var(--text-muted)"};
    border: 1px solid ${active ? "var(--accent)" : "var(--border)"};
  `;

  return html`<div>
    <div class=${demoBoxClass}>
      <div class=${demoLabelClass}>Live demo</div>
      <p class=${demoDescClass}>
        Fetches a real HTML partial from <code>partials/dashboard.html</code>, swaps it in, then mounts a vanillakit reactive island inside.
      </p>

      <div class=${stepIndicator}>
        <span class=${() => stepBadge(serverContent() === null && !loading())}>1. Click load</span>
        <span class=${() => stepBadge(loading())}>2. Fetching partial</span>
        <span class=${() => stepBadge(serverContent() !== null && !loading())}>3. HTML swapped</span>
        <span class=${() => stepBadge(islandMounted())}>4. Island mounted</span>
      </div>

      <button class=${cx(btnBase, btnPrimary)} onclick=${doHtmxSwap}>
        ${() => loading()
      ? html`<span class=${spinnerClass}></span>`
      : serverContent() !== null ? "Reload from server" : "hx-get=\"/partials/dashboard.html\""}
      </button>

      ${(() => {
      const contentDiv = document.createElement("div");
      contentDiv.className = serverHtmlBox;
      contentDiv.style.display = "none";
      effect(() => {
        const content = serverContent();
        if (content === null) {
          contentDiv.style.display = "none";
          contentDiv.innerHTML = "";
        } else {
          contentDiv.innerHTML = content;
          contentDiv.style.display = "";
        }
      });
      return contentDiv;
    })()}

      <div style=${() => islandMounted() ? "" : "display:none;"}>
        <div class=${islandBox}>
          <span style="font-size:0.82rem; color:var(--accent); font-family:var(--mono);">
            vanillakit island →
          </span>
          <button class=${counterBtnClass} onclick=${() => counterCount(n => n + 1)}>
            Clicked ${counterCount} times
          </button>
        </div>
      </div>
    </div>

    <div class=${docSectionClass}>
      <h3>The partial</h3>
      <p>
        A plain HTML file served as a static asset — on GitHub Pages, a CDN, or any server.
        It contains a <code>[data-vanillakit]</code> mount point for the reactive island.
      </p>
      ${code(`<!-- partials/dashboard.html -->
<div class="server-row"><strong>Dashboard</strong> — loaded via htmx</div>
<div class="server-row">User: <em>Ada Lovelace</em> | Role: Admin</div>
<div class="server-row">Last login: <span id="login-time"></span></div>
<div data-vanillakit="counter"></div>
<script>
  document.getElementById("login-time").textContent = new Date().toLocaleTimeString();
</script>`, "markup")}

      <h3>Setup</h3>
      ${code(`<!doctype html>
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
</html>`, "markup")}

      <h3>Reactive islands inside swapped content</h3>
      <p>
        After htmx swaps in HTML, mount vanillakit components on <code>[data-vanillakit]</code> elements.
      </p>
      ${code(`import { signal, html, css } from "vanillakit";

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
});`)}
    </div>
  </div>`;
}

// ── Tailwind interactive demo ───────────────────────────────
function TailwindDemo() {
  const panelOpen = signal(false);
  const glowOn = signal(false);
  const selectedColor = signal("blue");

  const colors: Record<string, { bg: string; hover: string; glow: string }> = {
    blue: { bg: "#3b82f6", hover: "#2563eb", glow: "rgba(59,130,246,0.5)" },
    green: { bg: "#22c55e", hover: "#16a34a", glow: "rgba(34,197,94,0.5)" },
    purple: { bg: "#a855f7", hover: "#9333ea", glow: "rgba(168,85,247,0.5)" },
    red: { bg: "#ef4444", hover: "#dc2626", glow: "rgba(239,68,68,0.5)" },
  };

  // Simulated "Tailwind-style" utility classes using css``
  const twBtn = () => {
    const c = colors[selectedColor()];
    return css`
      background: ${c.bg};
      color: #fff;
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      font-family: var(--font);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
      &:hover { background: ${c.hover}; transform: translateY(-1px); }
      &:active { transform: translateY(0); }
    `;
  };

  const twPanel = () => {
    const c = colors[selectedColor()];
    return css`
      margin-top: 12px;
      padding: 16px;
      background: var(--surface-2);
      border-radius: 8px;
      border: 1px solid var(--border);
      transition: all 0.2s ease;
      ${glowOn() ? `box-shadow: 0 0 30px ${c.glow};` : ""}
    `;
  };

  const colorPickerClass = css`
    display: flex;
    gap: 6px;
    margin: 16px 0;
    align-items: center;
  `;

  const swatchBtn = (color: string, hex: string) => css`
    width: 28px; height: 28px;
    border-radius: 50%;
    border: 2px solid ${selectedColor() === color ? "var(--text)" : "transparent"};
    background: ${hex};
    cursor: pointer;
    transition: all 0.15s ease;
    &:hover { transform: scale(1.15); }
  `;

  const checkboxRow = css`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
    font-size: 0.85rem;
    color: var(--text-muted);
    & input { accent-color: var(--accent); }
  `;

  return html`<div>
    <div class=${demoBoxClass}>
      <div class=${demoLabelClass}>Interactive demo</div>
      <p class=${demoDescClass}>
        Demonstrates reactive class switching — the pattern you'd use with Tailwind utilities.
        Colors and effects update reactively via signals.
      </p>

      <div class=${colorPickerClass}>
        <span style="font-size:0.82rem; font-family:var(--mono); color:var(--text-muted);">Theme:</span>
        ${Object.entries(colors).map(([name, c]) =>
    html`<button class=${() => swatchBtn(name, c.bg)} onclick=${() => selectedColor(name)}></button>`
  )}
      </div>

      <label class=${checkboxRow}>
        <input type="checkbox" checked=${() => glowOn()} onchange=${(e: Event) => glowOn((e.target as HTMLInputElement).checked)} />
        Glow effect (css\`\` scoped style)
      </label>

      <div style="margin-top:16px; display:flex; gap:8px; flex-wrap:wrap;">
        <button class=${() => twBtn()} onclick=${() => panelOpen(v => !v)}>
          ${() => panelOpen() ? "Hide panel" : "Show panel"}
        </button>
      </div>

      <div style=${() => panelOpen() ? "" : "display:none;"}>
        <div class=${() => twPanel()}>
          <p style="color:var(--text); margin-bottom:8px; font-weight:600;">Reactive panel</p>
          <p style="color:var(--text-muted); font-size:0.85rem;">
            This panel is reactively shown/hidden. The button color, glow effect, and panel
            styles all change dynamically — the same pattern as toggling Tailwind classes with signals.
          </p>
        </div>
      </div>
    </div>

    <div class=${docSectionClass}>
      <h3>Using Tailwind classes directly</h3>
      <p>
        Since <code>html\`\`</code> produces real DOM nodes, Tailwind utilities work as-is.
        Use signal-derived class strings for reactive styles.
      </p>
      ${code(`import { signal, html } from "vanillakit";

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
\`);`)}

      <h3>Mixing Tailwind + css\`\`</h3>
      <p>
        Use <code>cx()</code> to combine Tailwind utility classes with scoped styles.
      </p>
      ${code(`import { html, css, cx } from "vanillakit";

const glowEffect = css\`
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  transition: box-shadow 0.3s ease;
  &:hover { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
\`;

document.body.append(html\`
  <div class=\${cx("p-6 rounded-lg bg-gray-900 border border-gray-700", glowEffect)}>
    Best of both worlds.
  </div>
\`);`)}

      <h3>Tailwind config</h3>
      ${code(`// tailwind.config.js
export default {
  content: [
    "./demo/**/*.{html,ts,js}",
    "./src/**/*.js",
  ],
};`)}
    </div>
  </div>`;
}

// ── Hono tab ────────────────────────────────────────────────
function HonoTab() {
  return html`<div class=${docSectionClass}>
    <p>
      Hono is a fast, lightweight web framework for Bun, Deno, Cloudflare Workers, and Node.
      Serve a vanillakit frontend as static files and use Hono for the API layer.
    </p>

    <h3>API server + static frontend</h3>
    ${code(`// server.ts (Hono on Bun)
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

export default app;`, "typescript")}

    <h3>Fetching data into signals</h3>
    ${code(`import { signal, html } from "vanillakit";

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
\`);`)}
  </div>`;
}

// ── FastAPI tab ─────────────────────────────────────────────
function FastAPITab() {
  return html`<div class=${docSectionClass}>
    <p>
      FastAPI serves as a Python backend. Build the vanillakit app with Vite,
      then serve the static output from FastAPI or use it purely as a JSON API.
    </p>

    <h3>Project layout</h3>
    ${code(`project/
  backend/
    main.py
    requirements.txt
  frontend/
    demo/
      index.html
      app.ts
    src/        # vanillakit source
    vite.config.js`, "bash")}

    <h3>FastAPI backend</h3>
    ${code(`# backend/main.py
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

app.mount("/", StaticFiles(directory="../frontend/docs", html=True))`, "python")}

    <h3>Frontend fetching</h3>
    ${code(`import { signal, html, each } from "vanillakit";

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
\`);`)}
  </div>`;
}

// ── Main page ───────────────────────────────────────────────
const tabs = [
  { id: "htmx", label: "htmx" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "hono", label: "Hono" },
  { id: "fastapi", label: "FastAPI" },
] as const;

type TabId = typeof tabs[number]["id"];

export function IntegrationsPage() {
  const activeTab = signal<TabId>("htmx");

  const tabContent: Record<TabId, () => HTMLElement | DocumentFragment> = {
    htmx: HtmxDemo,
    tailwind: TailwindDemo,
    hono: HonoTab,
    fastapi: FastAPITab,
  };

  return html`<div class=${pageClass}>
    <h1 class=${headingClass}>Integrations</h1>
    <p class=${subtitleClass}>
      vanillakit plays well with other tools. It's just DOM nodes, signals, and plain JS —
      no framework lock-in. Pick a tab to explore.
    </p>

    <div class=${tabBarClass}>
      ${tabs.map(t => html`
        <button
          class=${() => cx(tabBtnBase, activeTab() === t.id ? tabBtnActive : "")}
          onclick=${() => activeTab(t.id)}
        >${t.label}</button>
      `)}
    </div>

    <div class=${tabPanelClass}>
      ${() => tabContent[activeTab()]()}
    </div>
  </div>`;
}
