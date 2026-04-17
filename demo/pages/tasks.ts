import { signal, computed, each, html, css, cx } from "../../src/index.js";
import type { Signal } from "../../src/signal.js";
import {
  pageClass, headingClass, subtitleClass,
  btnBase, btnPrimary, btnDanger,
  inputClass, selectClass, badgeClass,
  detailsSummary,
} from "../styles.ts";
import { code } from "../highlight.ts";

const checkboxClass = css`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
  position: relative;
  &:checked {
    background: var(--accent);
    border-color: var(--accent);
  }
  &:checked::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--bg);
    font-size: 12px;
    font-weight: 700;
  }
  &:hover {
    border-color: var(--accent);
  }
`;

const todoItemClass = css`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 8px;
  transition: all 0.15s ease;
  &:hover {
    border-color: var(--text-muted);
  }
`;
const todoTextClass = css`
  flex: 1;
  font-size: 0.95rem;
  transition: all 0.15s;
`;
const todoTextDoneClass = css`
  flex: 1;
  font-size: 0.95rem;
  text-decoration: line-through;
  opacity: 0.45;
`;
const filterBarClass = css`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  background: var(--surface);
  border-radius: var(--radius);
  padding: 4px;
  border: 1px solid var(--border);
`;
const filterBtnOff = css`
  font-family: var(--font);
  font-size: 0.8rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  padding: 7px 16px;
  cursor: pointer;
  background: transparent;
  color: var(--text-muted);
  transition: all 0.12s;
  flex: 1;
  &:hover {
    color: var(--text);
  }
`;
const filterBtnOn = css`
  font-family: var(--font);
  font-size: 0.8rem;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  padding: 7px 16px;
  cursor: pointer;
  background: var(--surface-3);
  color: var(--text);
  flex: 1;
`;
const statsGridClass = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 28px;
  border: 1px solid var(--border);
`;
const statBoxClass = css`
  background: var(--surface);
  text-align: center;
  padding: 20px;
  span {
    display: block;
  }
`;
const statNum = css`
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--mono);
  letter-spacing: -0.04em;
`;
const statLbl = css`
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const priorityColors = {
  high: "var(--danger)",
  medium: "var(--accent)",
  low: "var(--success)",
};

let nextId = 4;
const todos = signal<Todo[]>([
  { id: 1, text: "Build signal-based reactivity", done: true, priority: "high" },
  { id: 2, text: "Implement tagged template DOM engine", done: true, priority: "high" },
  { id: 3, text: "Add keyed list reconciliation", done: false, priority: "medium" },
]);
const filter = signal("all");
const filteredTodos = computed(() => {
  const f = filter();
  const l = todos();
  return f === "active"
    ? l.filter((t) => !t.done)
    : f === "done"
      ? l.filter((t) => t.done)
      : l;
});
const stats = computed(() => {
  const l = todos();
  return {
    total: l.length,
    done: l.filter((t) => t.done).length,
    active: l.filter((t) => !t.done).length,
  };
});

interface Todo {
  id: number;
  text: string;
  done: boolean;
  priority: keyof typeof priorityColors;
}

function TodoItem(itemSig: Signal<Todo>) {
  const todo = itemSig();
  const toggle = () =>
    todos((l) =>
      l.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t)),
    );
  const remove = () => todos((l) => l.filter((t) => t.id !== todo.id));
  return html`<div class=${todoItemClass}>
    <input
      type="checkbox"
      class=${checkboxClass}
      checked=${todo.done}
      onclick=${toggle}
    />
    <span class=${todo.done ? todoTextDoneClass : todoTextClass}
      >${todo.text}</span
    >
    <span
      class=${badgeClass}
      style=${`background: ${priorityColors[todo.priority]}20; color: ${priorityColors[todo.priority]}`}
      >${todo.priority}</span
    >
    <button
      class=${cx(btnBase, btnDanger)}
      onclick=${remove}
      style="padding: 4px 10px; font-size: 0.75rem;"
    >
      ✕
    </button>
  </div>`;
}

function AddTodo() {
  const text = signal("");
  const priority = signal<Todo["priority"]>("medium");
  const add = () => {
    const t = text().trim();
    if (!t) return;
    todos((l) => [
      ...l,
      { id: nextId++, text: t, done: false, priority: priority() },
    ]);
    text("");
  };
  return html`<div style="display:flex;gap:8px;margin-bottom:24px;">
    <input
      class=${inputClass}
      placeholder="What needs doing?"
      value=${() => text()}
      oninput=${(e: Event) => text((e.target as HTMLInputElement).value)}
      onkeydown=${(e: KeyboardEvent) => {
      if (e.key === "Enter") add();
    }}
    />
    <select
      class=${selectClass}
      onchange=${(e: Event) => priority((e.target as HTMLSelectElement).value as Todo["priority"])}
    >
      <option value="low">Low</option>
      <option value="medium" selected>Med</option>
      <option value="high">High</option>
    </select>
    <button class=${cx(btnBase, btnPrimary)} onclick=${add}>Add</button>
  </div>`;
}

function FilterBar() {
  return html`<div class=${filterBarClass}>
    ${["all", "active", "done"].map(
    (f) =>
      html`<button
          class=${() => (filter() === f ? filterBtnOn : filterBtnOff)}
          onclick=${() => filter(f)}
        >
          ${f[0].toUpperCase() + f.slice(1)}
          ${() => {
          const s = stats();
          return `(${f === "all" ? s.total : f === "active" ? s.active : s.done})`;
        }}
        </button>`,
  )}
  </div>`;
}

export function TasksPage() {
  return html`<div class=${pageClass}>
    <h1 class=${headingClass}>Tasks</h1>
    <p class=${subtitleClass}>
      A fully reactive todo app — signals, computed, each().
    </p>
    <div class=${statsGridClass}>
      <div class=${statBoxClass}>
        <span class=${statNum} style="color:var(--text)"
          >${() => stats().total}</span
        ><span class=${statLbl}>Total</span>
      </div>
      <div class=${statBoxClass}>
        <span class=${statNum} style="color:var(--accent)"
          >${() => stats().active}</span
        ><span class=${statLbl}>Active</span>
      </div>
      <div class=${statBoxClass}>
        <span class=${statNum} style="color:var(--success)"
          >${() => stats().done}</span
        ><span class=${statLbl}>Done</span>
      </div>
    </div>
    ${AddTodo()} ${FilterBar()}
    <div>
      ${each(
    filteredTodos,
    (t) => t.id,
    (itemSig) => TodoItem(itemSig),
  )}
      ${() =>
      filteredTodos().length === 0
        ? html`<div
              style="text-align:center;padding:48px 20px;color:var(--text-muted);font-style:italic;"
            >
              No tasks match this filter.
            </div>`
        : null}
    </div>
    <details>
      <summary class=${detailsSummary}>View source — signals, computed, each()</summary>
      ${code(`// Reactive state
const todos = signal([...]);
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
}`)}
    </details>
  </div>`;
}
