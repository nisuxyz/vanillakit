import { computed, css, Each, effect, signal } from "../../../../src/index.js";
import {
  button, div, h1, input, option,
p, select, span, strong, table,
  tbody, td, th, thead, tr, } from "../../../../src/index.js";

type TaskStatus = "Backlog" | "In Progress" | "Blocked" | "Done" | "Todo" | "Cancelled";
type TaskPriority = "High" | "Medium" | "Low";
type TaskType = "Feature" | "Bug" | "Documentation";

interface Task {
  id: number;
  taskId: string;
  title: string;
  type: TaskType;
  status: TaskStatus;
  priority: TaskPriority;
  project: string;
  assignee: string;
}

const TODO_STORAGE_KEY = "vanillakit.examples.todo.v2";

const seededTasks: Task[] = [
  { id: 1, taskId: "TASK-8782", title: "You can't compress the program without quantifying the open-source SSD feed!", type: "Documentation", status: "In Progress", priority: "Medium", project: "Website", assignee: "Maya" },
  { id: 2, taskId: "TASK-7878", title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!", type: "Documentation", status: "Backlog", priority: "Medium", project: "Growth", assignee: "Jonah" },
  { id: 3, taskId: "TASK-7839", title: "We need to bypass the neural TCP card!", type: "Bug", status: "Todo", priority: "High", project: "Platform", assignee: "Ari" },
  { id: 4, taskId: "TASK-5562", title: "The SAS interface is down, bypass the open-source pixel so we can back up the SSL feed!", type: "Feature", status: "Backlog", priority: "Medium", project: "Platform", assignee: "Ari" },
  { id: 5, taskId: "TASK-8686", title: "I'll parse the wireless SSL protocol, that should driver the API panel!", type: "Feature", status: "Cancelled", priority: "Medium", project: "Growth", assignee: "Lena" },
  { id: 6, taskId: "TASK-1280", title: "Use the digital TLS panel, then you can transmit the haptic system!", type: "Bug", status: "Done", priority: "High", project: "Platform", assignee: "Ari" },
  { id: 7, taskId: "TASK-7262", title: "The UTF8 application is down, parse the neural bandwidth so we can back up the SSL feed!", type: "Feature", status: "Done", priority: "High", project: "Platform", assignee: "Jules" },
  { id: 8, taskId: "TASK-1138", title: "Generating the driver won't do anything, we need to quantify the 1080p SM...", type: "Feature", status: "In Progress", priority: "Medium", project: "Website", assignee: "Maya" },
  { id: 9, taskId: "TASK-7184", title: "We need to program the back-end THX pixel!", type: "Feature", status: "Todo", priority: "Low", project: "Operations", assignee: "Noah" },
  { id: 10, taskId: "TASK-5160", title: "Calculating the bus won't do anything, we need to navigate the back-end J...", type: "Documentation", status: "In Progress", priority: "High", project: "Support", assignee: "Lena" },
  { id: 11, taskId: "TASK-5618", title: "Generating the driver won't do anything, we need to index the online SSL a...", type: "Documentation", status: "Done", priority: "Medium", project: "Growth", assignee: "Rina" },
  { id: 12, taskId: "TASK-6699", title: "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD fe...", type: "Documentation", status: "Backlog", priority: "Medium", project: "Website", assignee: "Jules" },
];

let nextId = seededTasks.length + 1;

function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(TODO_STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Task[];
  } catch {}
  return seededTasks;
}

function saveTasks(tasks: Task[]) {
  try { localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tasks)); } catch {}
}

/* ---- Status helpers ---- */
function statusIcon(s: TaskStatus) {
  if (s === "Done") return "✓";
  if (s === "In Progress") return "⊙";
  if (s === "Backlog") return "⋯";
  if (s === "Blocked") return "⊘";
  if (s === "Cancelled") return "⊘";
  return "○";
}

function statusColor(s: string) {
  if (s === "Done") return "var(--vk-color-success)";
  if (s === "In Progress") return "var(--vk-color-accent)";
  if (s === "Blocked" || s === "Cancelled") return "var(--vk-color-danger)";
  return "var(--vk-color-text-muted)";
}

function priorityIcon(p: TaskPriority) {
  if (p === "High") return "↑";
  if (p === "Low") return "↓";
  return "→";
}

function priorityColor(p: TaskPriority) {
  if (p === "High") return "var(--vk-color-danger)";
  if (p === "Low") return "var(--vk-color-success)";
  return "var(--vk-color-text-muted)";
}

function typeVariant(t: TaskType): string {
  if (t === "Bug") return "danger";
  if (t === "Feature") return "info";
  return "primary";
}

/* ---- Styles ---- */
const appClass = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: var(--vk-color-bg);
  font-size: var(--vk-font-size-sm);
`;

const headerClass = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--vk-space-xl) var(--vk-space-xl) var(--vk-space-md);
  flex-shrink: 0;
  @media (max-width: 48rem) {
    padding: var(--vk-space-md) var(--vk-space-md) var(--vk-space-sm);
  }
`;

const filterBarClass = css`
  display: flex;
  align-items: center;
  gap: var(--vk-space-sm);
  padding: 0 var(--vk-space-xl) var(--vk-space-md);
  flex-shrink: 0;
  flex-wrap: wrap;
  @media (max-width: 48rem) {
    padding: 0 var(--vk-space-md) var(--vk-space-sm);
  }
`;

const tableWrapClass = css`
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  padding: 0 var(--vk-space-xl) var(--vk-space-xl);
  @media (max-width: 48rem) {
    padding: 0 var(--vk-space-md) var(--vk-space-md);
  }
`;

export function TodoAppPage() {
  const tasks = signal<Task[]>(loadTasks());
  const filterText = signal("");
  const filterStatus = signal<TaskStatus | "All">("All");
  const filterPriority = signal<TaskPriority | "All">("All");
  const addDialogOpen = signal(false);
  const newTitle = signal("");
  const newType = signal<TaskType>("Feature");
  const newStatus = signal<TaskStatus>("Backlog");
  const newPriority = signal<TaskPriority>("Medium");

  effect(() => saveTasks(tasks()));

  const filtered = computed(() => {
    const q = filterText().toLowerCase();
    const st = filterStatus();
    const pr = filterPriority();
    return tasks().filter((t) => {
      if (q && !t.title.toLowerCase().includes(q) && !t.taskId.toLowerCase().includes(q)) return false;
      if (st !== "All" && t.status !== st) return false;
      if (pr !== "All" && t.priority !== pr) return false;
      return true;
    });
  });

  function addTask() {
    const title = newTitle().trim();
    if (!title) return;
    const task: Task = {
      id: nextId++,
      taskId: `TASK-${Math.floor(1000 + Math.random() * 8999)}`,
      title,
      type: newType(),
      status: newStatus(),
      priority: newPriority(),
      project: "General",
      assignee: "You",
    };
    tasks([...tasks(), task]);
    newTitle("");
    addDialogOpen(false);
  }

  return div(
    { class: `${appClass} animate-in` },

    /* Header */
    div(
      { class: headerClass },
      div(
        h1({ style: "margin:0 0 4px;font-size:1.75rem;" }, "Welcome back!"),
        p({ style: "color:var(--vk-color-text-muted);margin:0;" }, "Here's a list of your tasks for this month."),
      ),
      div(
        { style: "width:32px;height:32px;border-radius:50%;background:var(--vk-color-surface-2);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;" },
        "👤",
      ),
    ),

    /* Filter bar */
    div(
      { class: filterBarClass },
      input({
        placeholder: "Filter tasks...",
        style: "width:220px;",
        value: () => filterText(),
        oninput: (e: Event) => filterText((e.target as HTMLInputElement).value),
      }),
      div(
        { style: "display:flex;gap:4px;" },
        button(
          {
            "data-style-variant": "outline",
            "data-size": "sm",
            onclick: () => filterStatus(filterStatus() === "All" ? "In Progress" : "All"),
          },
          () => `⊕ Status${filterStatus() !== "All" ? `: ${filterStatus()}` : ""}`,
        ),
        button(
          {
            "data-style-variant": "outline",
            "data-size": "sm",
            onclick: () => filterPriority(filterPriority() === "All" ? "High" : "All"),
          },
          () => `⊕ Priority${filterPriority() !== "All" ? `: ${filterPriority()}` : ""}`,
        ),
      ),
      div({ style: "flex:1;" }),
      button(
        { "data-style-variant": "outline", "data-size": "sm" },
        "⊞ View",
      ),
      button(
        {
          "data-color-variant": "primary",
          "data-size": "sm",
          onclick: () => addDialogOpen(true),
        },
        "Add Task",
      ),
    ),

    /* Add Task inline form */
    () =>
      addDialogOpen()
        ? div(
            {
              style: "padding:0 var(--vk-space-xl) var(--vk-space-md);display:flex;gap:var(--vk-space-sm);align-items:flex-end;flex-wrap:wrap;background:var(--vk-color-surface);border-bottom:1px solid var(--vk-color-border);",
            },
            div(
              { style: "flex:1;min-width:200px;" },
              div({ style: "font-size:0.7rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "Title"),
              input({
                placeholder: "Task title...",
                style: "width:100%",
                value: () => newTitle(),
                oninput: (e: Event) => newTitle((e.target as HTMLInputElement).value),
              }),
            ),
            div(
              { style: "width:120px;" },
              div({ style: "font-size:0.7rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "Type"),
              select(
                { value: () => newType(), onchange: (e: Event) => newType((e.target as HTMLSelectElement).value as TaskType) },
                ["Feature", "Bug", "Documentation"].map((v) => option({ value: v }, v)),
              ),
            ),
            div(
              { style: "width:130px;" },
              div({ style: "font-size:0.7rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "Status"),
              select(
                { value: () => newStatus(), onchange: (e: Event) => newStatus((e.target as HTMLSelectElement).value as TaskStatus) },
                ["Backlog", "In Progress", "Blocked", "Done"].map((v) => option({ value: v }, v)),
              ),
            ),
            div(
              { style: "width:110px;" },
              div({ style: "font-size:0.7rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "Priority"),
              select(
                { value: () => newPriority(), onchange: (e: Event) => newPriority((e.target as HTMLSelectElement).value as TaskPriority) },
                ["High", "Medium", "Low"].map((v) => option({ value: v }, v)),
              ),
            ),
            div(
              { style: "display:flex;gap:4px;padding-bottom:1px;" },
              button({ "data-color-variant": "primary", "data-size": "sm", onclick: addTask }, "Add"),
              button({ "data-style-variant": "outline", "data-size": "sm", onclick: () => addDialogOpen(false) }, "Cancel"),
            ),
          )
        : null,

    /* Table */
    div(
      { class: tableWrapClass },
      table(
        { style: "width:100%;" },
        thead(
          tr(
            { style: "border-bottom:1px solid var(--vk-color-border);" },
            th({ style: "padding:8px 12px;text-align:left;width:40px;" },
              input({ type: "checkbox", style: "width:14px;height:14px;" }),
            ),
            th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;width:110px;" }, "Task"),
            th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;" }, "Title ↑"),
            th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;width:140px;" }, "Status ↑"),
            th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;width:120px;" }, "Priority ↑"),
            th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;width:40px;" }),
          ),
        ),
        tbody(
          Each(
            {
              list: filtered, key: (t) => t.id, render: (task) => tr(
                { style: "border-bottom:1px solid var(--vk-color-border);" },
                td({ style: "padding:10px 12px;" },
                  input({ type: "checkbox", style: "width:14px;height:14px;" })
                ),
                td({
                  style: "padding:10px 12px;font-family:var(--vk-font-mono);font-size:0.72rem;color:var(--vk-color-text-muted);white-space:nowrap;",
                }, () => task().taskId),
                td({ style: "padding:10px 12px;max-width:0;overflow:hidden;" },
                  div(
                    { style: "display:flex;align-items:center;gap:var(--vk-space-xs);" },
                    span(
                      { "data-badge": true, "data-color-variant": typeVariant(task().type) },
                      () => task().type
                    ),
                    span({
                      style: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",
                    }, () => task().title)
                  )
                ),
                td({ style: "padding:10px 12px;white-space:nowrap;" },
                  div(
                    { style: "display:flex;align-items:center;gap:6px;" },
                    span({
                      style: () => `color:${statusColor(task().status)};font-size:0.9rem;`,
                    }, () => statusIcon(task().status)),
                    span({ style: "color:var(--vk-color-text-muted);" }, () => task().status)
                  )
                ),
                td({ style: "padding:10px 12px;white-space:nowrap;" },
                  div(
                    { style: "display:flex;align-items:center;gap:6px;" },
                    span({
                      style: () => `color:${priorityColor(task().priority)};font-weight:700;`,
                    }, () => priorityIcon(task().priority)),
                    span({ style: "color:var(--vk-color-text-muted);" }, () => task().priority)
                  )
                ),
                td({ style: "padding:10px 12px;" },
                  button(
                    {
                      "data-style-variant": "ghost",
                      "data-size": "sm",
                      style: "padding:4px 6px;",
                    },
                    "···"
                  )
                )
              )
            },
          ),
        ),
      ),
      () =>
        filtered().length === 0
          ? div(
              { "data-empty": true },
              strong("No tasks match your filters."),
              p({ style: "margin-top:4px;" }, "Try clearing the search or filter."),
            )
          : null,
    ),
  );
}
