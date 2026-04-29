import { computed, css,Each, html, signal } from "../../../src/index.js";
import type { Signal } from "../../../src/signal.js";
import { LiveEditor } from "../../components/LiveEditor.ts";
import { EXAMPLES_SNIPPET_5 } from "../../snippets.ts";
import { subtitleClass } from "../../styles.ts";

const todoItemClass = css`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-radius: var(--vk-radius-md);
  margin-bottom: 8px;
  transition: all 0.15s ease;
  &:hover {
    border-color: var(--vk-color-text-muted);
  }
`;
const todoTextDoneClass = css`
  flex: 1;
  text-decoration: line-through;
  opacity: 0.45;
`;

const priorityVariant: Record<string, string> = {
  high: "danger",
  medium: "primary",
  low: "success",
};

let nextId = 4;
const todos = signal<Todo[]>([
  {
    id: 1,
    text: "Build signal-based reactivity",
    done: true,
    priority: "high",
  },
  {
    id: 2,
    text: "Implement tagged template DOM engine",
    done: true,
    priority: "high",
  },
  {
    id: 3,
    text: "Add keyed list reconciliation",
    done: false,
    priority: "medium",
  },
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
  priority: keyof typeof priorityVariant;
}

function TodoItem(itemSig: Signal<Todo>) {
  const todo = itemSig();
  const toggle = () =>
    todos((l) =>
      l.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t)),
    );
  const remove = () => todos((l) => l.filter((t) => t.id !== todo.id));
  return html`<li class=${todoItemClass}>
    <input type="checkbox" checked=${todo.done} onclick=${toggle} />
    <span class=${todo.done ? todoTextDoneClass : ""} style="flex:1;"
      >${todo.text}</span
    >
    <span data-badge data-variant=${priorityVariant[todo.priority]}
      >${todo.priority}</span
    >
    <button data-variant="danger" data-size="sm" onclick=${remove}>✕</button>
  </li>`;
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
      placeholder="What needs doing?"
      value=${() => text()}
      oninput=${(e: Event) => text((e.target as HTMLInputElement).value)}
      onkeydown=${(e: KeyboardEvent) => {
        if (e.key === "Enter") add();
      }}
    />
    <select
      onchange=${(e: Event) =>
        priority((e.target as HTMLSelectElement).value as Todo["priority"])}
    >
      <option value="low">Low</option>
      <option value="medium" selected>Med</option>
      <option value="high">High</option>
    </select>
    <button onclick=${add}>Add</button>
  </div>`;
}

function FilterBar() {
  return html`<div role="group" style="margin-bottom:20px;">
    ${["all", "active", "done"].map(
      (f) =>
        html`<button
          aria-pressed=${() => (filter() === f ? "true" : "false")}
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

export function TasksSection() {
  return html`<section>
    <h2>Todo App</h2>
    <p class=${subtitleClass}>
      A fully reactive todo app — signals, computed, each().
    </p>
    <div data-grid data-cols="3" style="margin-bottom:28px;">
      <article data-card style="text-align:center;">
        <dl>
          <dd>${() => stats().total}</dd>
          <dt>Total</dt>
        </dl>
      </article>
      <article data-card style="text-align:center;">
        <dl>
          <dd class="text-accent">${() => stats().active}</dd>
          <dt>Active</dt>
        </dl>
      </article>
      <article data-card style="text-align:center;">
        <dl>
          <dd class="text-success">${() => stats().done}</dd>
          <dt>Done</dt>
        </dl>
      </article>
    </div>
    ${AddTodo()} ${FilterBar()}
    <ul style="list-style:none;padding:0;">
      ${Each({ list: filteredTodos, key: (t) => t.id },
        TodoItem
      )}
      ${() =>
        filteredTodos().length === 0
          ? html`<div data-empty>No tasks match this filter.</div>`
          : null}
    </ul>
    <details>
      <summary>View source — signals, computed, each()</summary>
      ${LiveEditor({
        sourceVariants: EXAMPLES_SNIPPET_5,
        label: "Task app — signals, computed, each()",
      })}
    </details>
  </section>`;
}
