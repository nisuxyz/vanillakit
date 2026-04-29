import { computed, css, reactive, signal, snapshot } from "../../../../src/index.js";
import {
  button, div, h2, h3, hr, input, li, option, p, pre, progress, select, span, textarea, ul,
} from "../../../../src/index.js";

interface ChecklistItem { id: number; label: string; done: boolean; }

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
  width: 260px;
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

const kpiRowClass = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--vk-space-md);
  @media (max-width: 36rem) { grid-template-columns: 1fr; }
`;

const twoColClass = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--vk-space-md);
  @media (max-width: 48rem) { grid-template-columns: 1fr; }
`;

const mainClass = css`
  flex: 1;
  overflow-y: auto;
  padding: var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-lg);
  min-width: 0;
  @media (max-width: 48rem) {
    padding: var(--vk-space-md);
  }
`;

const cardClass = css`
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-radius: var(--vk-radius-lg);
  padding: var(--vk-space-lg);
`;

export function PlaygroundAppPage() {
  const workspace = reactive({
    release: {
      name: "April launch",
      owner: "Ava",
      environment: "Staging",
      traffic: 40,
      notes: "QA is green. Waiting on the billing migration window.",
    },
    notifications: { email: true, slack: true, digest: "Daily" },
    checklist: [
      { id: 1, label: "Smoke test core flows", done: true },
      { id: 2, label: "Review rollback plan", done: true },
      { id: 3, label: "Confirm pricing copy", done: false },
      { id: 4, label: "Schedule stakeholder update", done: false },
    ] as ChecklistItem[],
    experiments: ["Guided onboarding", "In-app checklist", "Pricing comparison"],
  });

  const draftExperiment = signal("");
  const viewMode = signal<"Compact" | "Expanded">("Expanded");
  const jsonView = computed(() => JSON.stringify(snapshot(workspace), null, 2));
  const completedChecklist = computed(() => workspace.checklist.filter((i) => i.done).length);
  const releaseReady = computed(() => workspace.checklist.every((i) => i.done) && workspace.release.traffic >= 80);

  const sidebarOpen = signal(false);

  function addExperiment() {
    const v = draftExperiment().trim();
    if (!v) return;
    workspace.experiments = [...workspace.experiments, v];
    draftExperiment("");
  }

  return div(
    { class: appClass },

    /* Mobile overlay */
    () => sidebarOpen() ? div({ class: overlayClass, onclick: () => sidebarOpen(false) }) : null,

    /* ---- Sidebar ---- */
    div(
      { class: () => sidebarOpen() ? `${sidebarClass} ${sidebarOpenClass}` : sidebarClass },

      /* Release Controls */
      div(
        h3({ style: "margin:0 0 var(--vk-space-sm);" }, "Release Controls"),
        div(
          { style: "display:flex;flex-direction:column;gap:var(--vk-space-sm);" },
          div(
            div({ style: "font-size:0.72rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "Launch name"),
            input({ value: () => workspace.release.name, oninput: (e: Event) => { workspace.release.name = (e.target as HTMLInputElement).value; } }),
          ),
          div(
            div({ style: "font-size:0.72rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "Owner"),
            select({ value: () => workspace.release.owner, onchange: (e: Event) => { workspace.release.owner = (e.target as HTMLSelectElement).value; } },
              ["Ava", "Mika", "Jules", "Rina"].map((o) => option({ value: o }, o)),
            ),
          ),
          div(
            div({ style: "font-size:0.72rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "Environment"),
            select({ value: () => workspace.release.environment, onchange: (e: Event) => { workspace.release.environment = (e.target as HTMLSelectElement).value; } },
              ["Local", "Staging", "Canary", "Production"].map((e) => option({ value: e }, e)),
            ),
          ),
          div(
            div({ style: "font-size:0.72rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "Traffic rollout"),
            input({ type: "range", min: "0", max: "100", value: () => String(workspace.release.traffic), oninput: (e: Event) => { workspace.release.traffic = Number((e.target as HTMLInputElement).value); } }),
            p({ style: "margin:2px 0 0;font-size:0.72rem;color:var(--vk-color-text-muted);" }, () => `${workspace.release.traffic}%`),
          ),
          div(
            div({ style: "font-size:0.72rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "View mode"),
            select({ value: () => viewMode(), onchange: (e: Event) => viewMode((e.target as HTMLSelectElement).value as "Compact" | "Expanded") },
              ["Compact", "Expanded"].map((m) => option({ value: m }, m)),
            ),
          ),
        ),
      ),

      /* Notifications */
      div(
        h3({ style: "margin:0 0 var(--vk-space-sm);" }, "Notifications"),
        div(
          { style: "display:flex;flex-direction:column;gap:var(--vk-space-sm);" },
          div({ style: "display:flex;align-items:center;gap:8px;" },
            input({ type: "checkbox", style: "width:14px;height:14px;", checked: () => workspace.notifications.email, onclick: () => { workspace.notifications.email = !workspace.notifications.email; } }),
            span("Email updates"),
          ),
          div({ style: "display:flex;align-items:center;gap:8px;" },
            input({ type: "checkbox", style: "width:14px;height:14px;", checked: () => workspace.notifications.slack, onclick: () => { workspace.notifications.slack = !workspace.notifications.slack; } }),
            span("Slack alerts"),
          ),
          div(
            div({ style: "font-size:0.72rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "Digest cadence"),
            select({ value: () => workspace.notifications.digest, onchange: (e: Event) => { workspace.notifications.digest = (e.target as HTMLSelectElement).value; } },
              ["Off", "Daily", "Twice daily", "Hourly"].map((d) => option({ value: d }, d)),
            ),
          ),
        ),
      ),
    ),

    /* ---- Main ---- */
    div(
      { class: mainClass },
      div(
        { style: "display:flex;align-items:center;gap:var(--vk-space-sm);" },
        button({ class: mobileTriggerClass, onclick: () => sidebarOpen((v) => !v) }, "☰"),
        h2({ style: "margin:0;" }, "Release Playground"),
      ),

      /* KPI row */
      div(
        { class: kpiRowClass },
        div({ style: "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-lg);padding:var(--vk-space-md);" },
          div({ style: "font-size:1.5rem;font-weight:700;" }, () => `${completedChecklist()}`),
          div({ style: "font-size:0.75rem;color:var(--vk-color-text-muted);" }, "Checklist done"),
        ),
        div({ style: "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-lg);padding:var(--vk-space-md);" },
          div({ style: "font-size:1.5rem;font-weight:700;" }, () => `${workspace.experiments.length}`),
          div({ style: "font-size:0.75rem;color:var(--vk-color-text-muted);" }, "Experiments"),
        ),
        div({ style: "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-lg);padding:var(--vk-space-md);" },
          div({
            style: () => `font-size:1.1rem;font-weight:700;color:${releaseReady() ? "var(--vk-color-success)" : "var(--vk-color-danger)"};`,
          }, () => releaseReady() ? "Ready ✓" : "Needs work"),
          div({ style: "font-size:0.75rem;color:var(--vk-color-text-muted);" }, "Release status"),
        ),
      ),

      /* 2-column row */
      div(
          { class: twoColClass },
        div(
          { class: cardClass },
          h3({ style: "margin:0 0 var(--vk-space-sm);" }, "Launch Summary"),
          p({ style: "margin:0 0 6px;" }, () => `${workspace.release.name} is owned by ${workspace.release.owner}.`),
          p({ style: "margin:0 0 6px;color:var(--vk-color-text-muted);" }, () => `Environment: ${workspace.release.environment}`),
          progress({ style: "width:100%;margin-bottom:4px;", max: "100", value: () => String(workspace.release.traffic) }),
          p({ style: "margin:0 0 var(--vk-space-sm);font-size:0.78rem;color:var(--vk-color-text-muted);" }, () => `${workspace.release.traffic}% rollout target`),
          div({ style: "font-size:0.72rem;color:var(--vk-color-text-muted);margin-bottom:4px;" }, "Release notes"),
          textarea({
            rows: "4",
            style: "width:100%;resize:none;",
            value: () => workspace.release.notes,
            oninput: (e: Event) => { workspace.release.notes = (e.target as HTMLTextAreaElement).value; },
          }),
        ),

        /* Checklist + Experiments */
        div(
          { class: cardClass },
          h3({ style: "margin:0 0 var(--vk-space-sm);" }, "Checklist"),
          div(
            { style: "display:flex;flex-direction:column;gap:var(--vk-space-sm);margin-bottom:var(--vk-space-md);" },
            () =>
              workspace.checklist.map((item) =>
                div(
                  { style: "display:flex;align-items:center;gap:8px;" },
                  input({
                    type: "checkbox",
                    style: "width:14px;height:14px;",
                    checked: () => item.done,
                    onclick: () => { item.done = !item.done; },
                  }),
                  span({ style: () => item.done ? "text-decoration:line-through;color:var(--vk-color-text-muted);" : "" }, item.label),
                ),
              ),
          ),
          hr({ style: "border:none;border-top:1px solid var(--vk-color-border);margin:0 0 var(--vk-space-sm);" }),
          h3({ style: "margin:0 0 var(--vk-space-sm);" }, "Experiments"),
          div(
            { style: "display:flex;gap:var(--vk-space-sm);margin-bottom:var(--vk-space-sm);" },
            input({
              placeholder: "Name a new experiment",
              style: "flex:1;",
              value: () => draftExperiment(),
              oninput: (e: Event) => draftExperiment((e.target as HTMLInputElement).value),
              onkeydown: (e: KeyboardEvent) => { if (e.key === "Enter") addExperiment(); },
            }),
            button({ "data-size": "sm", "data-color-variant": "primary", onclick: addExperiment }, "Add"),
          ),
          () =>
            workspace.experiments.length > 0
              ? ul(
                  { style: "margin:0;padding-left:var(--vk-space-md);display:flex;flex-direction:column;gap:4px;" },
                  workspace.experiments.map((exp) => li({ style: "font-size:0.82rem;" }, exp)),
                )
              : null,
        ),
      ),

      /* JSON snapshot */
      div(
        { class: cardClass },
        h3({ style: "margin:0 0 var(--vk-space-sm);" }, () => `State Snapshot — ${viewMode()}`),
        pre({ style: "margin:0;overflow:auto;max-height:220px;font-size:0.72rem;" }, () => jsonView()),
      ),
    ),
  );
}
