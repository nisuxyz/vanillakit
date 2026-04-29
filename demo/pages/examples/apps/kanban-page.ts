import { computed, css, signal } from "../../../../src/index.js";
import {
  button,
  div,
  h2,
  h3,
  input,
  option,
  p,
  select,
  span,
} from "../../../../src/index.js";

type Lane = "Ideas" | "In Progress" | "Review" | "Done";
type Priority = "High" | "Medium" | "Low";

interface BoardTask {
  id: number;
  title: string;
  owner: string;
  lane: Lane;
  priority: Priority;
  due: string;
  blocked: boolean;
}

const lanes: Lane[] = ["Ideas", "In Progress", "Review", "Done"];
const priorities: Priority[] = ["High", "Medium", "Low"];

const seededBoard: BoardTask[] = [
  {
    id: 1,
    title: "Draft pricing page FAQ",
    owner: "Maya",
    lane: "Ideas",
    priority: "Medium",
    due: "2026-05-06",
    blocked: false,
  },
  {
    id: 2,
    title: "Refactor billing webhook retries",
    owner: "Ari",
    lane: "In Progress",
    priority: "High",
    due: "2026-05-01",
    blocked: true,
  },
  {
    id: 3,
    title: "Publish onboarding survey",
    owner: "Rina",
    lane: "Review",
    priority: "Medium",
    due: "2026-05-02",
    blocked: false,
  },
  {
    id: 4,
    title: "Merge launch checklist copy",
    owner: "Jules",
    lane: "Done",
    priority: "Low",
    due: "2026-04-28",
    blocked: false,
  },
  {
    id: 5,
    title: "Confirm webinar follow-up flow",
    owner: "Noah",
    lane: "In Progress",
    priority: "High",
    due: "2026-05-03",
    blocked: false,
  },
];

let nextBoardId = 6;

function priorityVariant(priority: Priority) {
  if (priority === "High") return "danger";
  if (priority === "Medium") return "warning";
  return "success";
}

/* ---- Styles ---- */
const appClass = css`
  display: flex;
  height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  position: relative;
  background: var(--vk-color-bg);
  font-size: var(--vk-font-size-sm);
`;

const sidebarClass = css`
  width: 240px;
  flex-shrink: 0;
  border-right: 1px solid var(--vk-color-border);
  overflow-y: auto;
  padding: var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-lg);
  @media (max-width: 48rem) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 50;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    box-shadow: 4px 0 16px rgba(0, 0, 0, 0.15);
  }
`;

const sidebarOpenClass = css`
  @media (max-width: 48rem) {
    transform: translateX(0) !important;
  }
`;

const mobileTriggerClass = css`
  display: none;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px 6px;
  line-height: 1;
  color: var(--vk-color-text);
  flex-shrink: 0;
  @media (max-width: 48rem) {
    display: flex;
    align-items: center;
  }
`;

const overlayClass = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 40;
  @media (min-width: 48.0625rem) { display: none; }
`;

const mainClass = css`
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  padding: var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const boardClass = css`
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: var(--vk-space-md);
  height: 100%;
  overflow-y: auto;
`;

const columnClass = css`
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-radius: var(--vk-radius-lg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const cardClass = css`
  padding: var(--vk-space-md);
  border-bottom: 1px solid var(--vk-color-border);
  background: var(--vk-color-bg);
  border-radius: 0;
`;

export function KanbanAppPage() {
  const tasks = signal<BoardTask[]>(seededBoard);
  const search = signal("");
  const ownerFilter = signal("All owners");
  const draftTitle = signal("");
  const draftOwner = signal("Maya");
  const draftLane = signal<Lane>("Ideas");
  const draftPriority = signal<Priority>("Medium");
  const draftDue = signal("2026-05-08");

  const owners = computed(() => [
    "All owners",
    ...new Set(tasks().map((t) => t.owner)),
  ]);

  const visibleTasks = computed(() => {
    const term = search().trim().toLowerCase();
    return tasks().filter((t) => {
      if (ownerFilter() !== "All owners" && t.owner !== ownerFilter())
        return false;
      if (!term) return true;
      return [t.title, t.owner, t.priority, t.lane]
        .join(" ")
        .toLowerCase()
        .includes(term);
    });
  });

  const summary = computed(() => ({
    total: tasks().length,
    blocked: tasks().filter((t) => t.blocked).length,
    done: tasks().filter((t) => t.lane === "Done").length,
  }));

  function updateTask(id: number, updater: (t: BoardTask) => BoardTask) {
    tasks((list) => list.map((t) => (t.id === id ? updater(t) : t)));
  }

  function addTask() {
    const title = draftTitle().trim();
    if (!title) return;
    tasks((list) => [
      ...list,
      {
        id: nextBoardId++,
        title,
        owner: draftOwner(),
        lane: draftLane(),
        priority: draftPriority(),
        due: draftDue(),
        blocked: false,
      },
    ]);
    draftTitle("");
  }

  function moveTask(task: BoardTask, direction: -1 | 1) {
    const idx = lanes.indexOf(task.lane);
    const next = lanes[idx + direction];
    if (!next) return;
    updateTask(task.id, (t) => ({ ...t, lane: next }));
  }

  function tasksForLane(lane: Lane) {
    return visibleTasks().filter((t) => t.lane === lane);
  }

  const sidebarOpen = signal(false);

  return div(
    { class: appClass },

    /* Mobile overlay */
    () => sidebarOpen() ? div({ class: overlayClass, onclick: () => sidebarOpen(false) }) : null,

    /* ---- Sidebar ---- */
    div(
      { class: () => sidebarOpen() ? `${sidebarClass} ${sidebarOpenClass}` : sidebarClass },
      div(
        h3({ style: "margin:0 0 var(--vk-space-sm);" }, "Quick Add"),
        div(
          {
            style: "display:flex;flex-direction:column;gap:var(--vk-space-sm);",
          },
          input({
            placeholder: "Describe the work item",
            value: () => draftTitle(),
            oninput: (e: Event) =>
              draftTitle((e.target as HTMLInputElement).value),
            onkeydown: (e: KeyboardEvent) => {
              if (e.key === "Enter") addTask();
            },
          }),
          select(
            {
              value: () => draftOwner(),
              onchange: (e: Event) =>
                draftOwner((e.target as HTMLSelectElement).value),
            },
            ["Maya", "Ari", "Jules", "Noah", "Rina"].map((o) =>
              option({ value: o }, o),
            ),
          ),
          select(
            {
              value: () => draftLane(),
              onchange: (e: Event) =>
                draftLane((e.target as HTMLSelectElement).value as Lane),
            },
            lanes.map((l) => option({ value: l }, l)),
          ),
          select(
            {
              value: () => draftPriority(),
              onchange: (e: Event) =>
                draftPriority(
                  (e.target as HTMLSelectElement).value as Priority,
                ),
            },
            priorities.map((pr) => option({ value: pr }, pr)),
          ),
          input({
            type: "date",
            value: () => draftDue(),
            oninput: (e: Event) =>
              draftDue((e.target as HTMLInputElement).value),
          }),
          button(
            { "data-color-variant": "primary", onclick: addTask },
            "Add card",
          ),
        ),
      ),
      div(
        h3({ style: "margin:0 0 var(--vk-space-sm);" }, "Filters"),
        div(
          {
            style: "display:flex;flex-direction:column;gap:var(--vk-space-sm);",
          },
          input({
            placeholder: "Find cards...",
            value: () => search(),
            oninput: (e: Event) => search((e.target as HTMLInputElement).value),
          }),
          select(
            {
              value: () => ownerFilter(),
              onchange: (e: Event) =>
                ownerFilter((e.target as HTMLSelectElement).value),
            },
            () => owners().map((o) => option({ value: o }, o)),
          ),
        ),
      ),
      div(
        { style: "display:flex;flex-direction:column;gap:6px;" },
        div(
          {
            style:
              "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-sm);padding:8px;",
          },
          div(
            { style: "font-size:1.25rem;font-weight:700;" },
            () => `${summary().total}`,
          ),
          div(
            { style: "font-size:0.7rem;color:var(--vk-color-text-muted);" },
            "Total",
          ),
        ),
        div(
          {
            style:
              "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-sm);padding:8px;",
          },
          div(
            {
              style:
                "font-size:1.25rem;font-weight:700;color:var(--vk-color-danger);",
            },
            () => `${summary().blocked}`,
          ),
          div(
            { style: "font-size:0.7rem;color:var(--vk-color-text-muted);" },
            "Blocked",
          ),
        ),
        div(
          {
            style:
              "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-sm);padding:8px;",
          },
          div(
            {
              style:
                "font-size:1.25rem;font-weight:700;color:var(--vk-color-success);",
            },
            () => `${summary().done}`,
          ),
          div(
            { style: "font-size:0.7rem;color:var(--vk-color-text-muted);" },
            "Done",
          ),
        ),
      ),
    ),

    /* ---- Board ---- */
    div(
      { class: mainClass },
      div(
        { style: "margin-bottom:var(--vk-space-md);flex-shrink:0;display:flex;align-items:center;gap:var(--vk-space-sm);" },
        button({ class: mobileTriggerClass, onclick: () => sidebarOpen((v) => !v) }, "☰"),
        h2({ style: "margin:0;" }, "Kanban Board"),
      ),
      div(
        { class: boardClass },
        lanes.map((lane) =>
          div(
            { class: columnClass },
            div(
              {
                style:
                  "padding:var(--vk-space-md);border-bottom:1px solid var(--vk-color-border);flex-shrink:0;",
              },
              div(
                {
                  style:
                    "display:flex;align-items:center;justify-content:space-between;",
                },
                h3({ style: "margin:0;font-size:0.9rem;" }, lane),
                span(
                  {
                    style:
                      "font-size:0.75rem;color:var(--vk-color-text-muted);",
                  },
                  () => `${tasksForLane(lane).length}`,
                ),
              ),
            ),
            div(
              {
                style:
                  "flex:1;overflow-y:auto;padding:var(--vk-space-sm);display:flex;flex-direction:column;gap:var(--vk-space-sm);",
              },
              () => {
                const laneTasks = tasksForLane(lane);
                if (laneTasks.length === 0) {
                  return p(
                    {
                      style:
                        "text-align:center;color:var(--vk-color-text-muted);font-size:0.8rem;padding:var(--vk-space-md) 0;",
                    },
                    "No cards",
                  );
                }
                return laneTasks.map((task) =>
                  div(
                    {
                      class: cardClass,
                      style:
                        "border-radius:var(--vk-radius-sm);border:1px solid var(--vk-color-border);",
                    },
                    div(
                      {
                        style:
                          "display:flex;align-items:flex-start;justify-content:space-between;gap:6px;margin-bottom:6px;",
                      },
                      p(
                        {
                          style:
                            "margin:0;font-size:0.82rem;font-weight:500;line-height:1.4;",
                        },
                        task.title,
                      ),
                      span(
                        {
                          "data-badge": true,
                          "data-color-variant": priorityVariant(task.priority),
                        },
                        task.priority,
                      ),
                    ),
                    p(
                      {
                        style:
                          "margin:0 0 6px;font-size:0.72rem;color:var(--vk-color-text-muted);",
                      },
                      `${task.owner} · due ${task.due}`,
                    ),
                    div(
                      {
                        style:
                          "display:flex;align-items:center;gap:4px;flex-wrap:wrap;",
                      },
                      task.blocked
                        ? span(
                            {
                              "data-badge": true,
                              "data-color-variant": "danger",
                            },
                            "Blocked",
                          )
                        : span(
                            {
                              "data-badge": true,
                              "data-color-variant": "success",
                            },
                            "On track",
                          ),
                      button(
                        {
                          "data-size": "sm",
                          "data-style-variant": "ghost",
                          style: "padding:2px 5px;",
                          disabled: lanes.indexOf(task.lane) === 0,
                          onclick: () => moveTask(task, -1),
                        },
                        "←",
                      ),
                      button(
                        {
                          "data-size": "sm",
                          "data-style-variant": "ghost",
                          style: "padding:2px 5px;",
                          disabled:
                            lanes.indexOf(task.lane) === lanes.length - 1,
                          onclick: () => moveTask(task, 1),
                        },
                        "→",
                      ),
                      button(
                        {
                          "data-size": "sm",
                          "data-style-variant": "ghost",
                          style: "padding:2px 5px;",
                          onclick: () =>
                            updateTask(task.id, (t) => ({
                              ...t,
                              blocked: !t.blocked,
                            })),
                        },
                        task.blocked ? "Unblock" : "Block",
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
        ),
      ),
    ),
  );
}
