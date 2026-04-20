import { signal, html } from "../../src/index.js";
import {
  subtitleClass,
  sidebarGroupClass,
  sidebarLinkClass,
} from "../styles.ts";
import { code } from "../highlight.ts";
import { LiveEditor } from "../components/LiveEditor.ts";
import { TasksSection } from "./tasks.ts";
import { StressSection } from "./stress.ts";
import { PlaygroundSection } from "./playground.ts";

// ── Section definitions ────────────────────────────────────
type SectionId = "snippets" | "todo" | "playground" | "stress" | "sandbox";

interface SidebarGroup {
  label: string;
  items: { id: SectionId; label: string }[];
}

const sidebarGroups: SidebarGroup[] = [
  {
    label: "Demos",
    items: [
      { id: "snippets", label: "Code Examples" },
      { id: "sandbox", label: "Playground" },
      { id: "todo", label: "Todo App" },
      { id: "playground", label: "Reactive Demos" },
      { id: "stress", label: "Stress Test" },
    ],
  },
];

// ── Snippets section (moved from docs ExamplesSection) ─────
function SnippetsSection() {
  return html`<section>
    <h2>Code Examples</h2>

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
  </section>`;
}

// ── Sandbox section ────────────────────────────────────────
function SandboxSection() {
  return html`<section>
    <h2>Playground</h2>
    <p>
      Write vanillakit code and see results live. Edit the code below — output
      updates instantly.
    </p>

    ${LiveEditor({
      source: `import { signal, computed, html, css } from "vanillakit";

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
      label: "Sandbox — edit freely",
    })}
  </section>`;
}

// ── Section map ────────────────────────────────────────────
const sections: Record<SectionId, () => Node> = {
  snippets: SnippetsSection,
  sandbox: SandboxSection,
  todo: TasksSection,
  playground: PlaygroundSection,
  stress: StressSection,
};

// ── Main examples page ─────────────────────────────────────
export function ExamplesPage() {
  const activeSection = signal<SectionId>("snippets");

  return html`<div class="animate-in">
    <h1>Examples</h1>
    <p class=${subtitleClass}>
      Interactive demos, code snippets, and stress tests.
    </p>

    <div data-layout="sidebar">
      <aside>
        <nav>
          ${sidebarGroups.map(
            (group) => html`
              <div class=${sidebarGroupClass}>
                <div class="group-label">${group.label}</div>
                ${group.items.map(
                  (item) => html`
                    <a
                      class=${sidebarLinkClass}
                      aria-current=${() =>
                        activeSection() === item.id ? "page" : null}
                      onclick=${(e: Event) => {
                        e.preventDefault();
                        activeSection(item.id);
                      }}
                      href="#"
                      >${item.label}</a
                    >
                  `,
                )}
              </div>
            `,
          )}
        </nav>
      </aside>

      <div>${() => sections[activeSection()]()}</div>
    </div>
  </div>`;
}
