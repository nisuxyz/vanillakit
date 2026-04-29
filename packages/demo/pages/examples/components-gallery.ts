import { css, signal } from "@vanillakit/vanillakit";
import {
  button, div, h2, h3, input, label, li, ol, p, span, strong, table,
  tbody, td, th, thead, tr, ul,
} from "@vanillakit/vanillakit";

const galleryClass = css`
  height: 100%;
  overflow-y: auto;
  background: var(--vk-color-bg);
`;

const innerClass = css`
  max-width: 72rem;
  margin-inline: auto;
  padding: var(--vk-space-xl) var(--vk-space-lg);
`;

const mosaicClass = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--vk-color-border);
  border: 1px solid var(--vk-color-border);
  border-radius: var(--vk-radius-lg);
  overflow: hidden;

  @media (max-width: 56rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 36rem) {
    grid-template-columns: 1fr;
  }
`;

const tileClass = css`
  background: var(--vk-color-bg);
  padding: var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-md);
  min-height: 260px;
  overflow: hidden;
`;

const tileLabelClass = css`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vk-color-text-muted);
  margin-bottom: var(--vk-space-xs);
`;

/* ---- Tile 1: Payment Form ---- */
function PaymentTile() {
  return div(
    { class: tileClass },
    div(
      span({ class: tileLabelClass }, "Payment Method"),
      div(
        { style: "display:flex;flex-direction:column;gap:var(--vk-space-sm);" },
        div(
          strong({ style: "font-size:var(--vk-font-size-sm)" }, "Name on Card"),
          input({ placeholder: "John Doe", style: "width:100%" }),
        ),
        div(
          { style: "display:flex;gap:var(--vk-space-sm);" },
          div(
            { style: "flex:2" },
            strong({ style: "font-size:var(--vk-font-size-sm)" }, "Card Number"),
            input({ placeholder: "1234 5678 9012 3456", style: "width:100%" }),
          ),
          div(
            { style: "flex:1" },
            strong({ style: "font-size:var(--vk-font-size-sm)" }, "CVV"),
            input({ placeholder: "123", style: "width:100%" }),
          ),
        ),
        div(
          { style: "display:flex;gap:var(--vk-space-sm);" },
          div(
            { style: "flex:1" },
            strong({ style: "font-size:var(--vk-font-size-sm)" }, "Month"),
            input({ placeholder: "MM", style: "width:100%" }),
          ),
          div(
            { style: "flex:1" },
            strong({ style: "font-size:var(--vk-font-size-sm)" }, "Year"),
            input({ placeholder: "YYYY", style: "width:100%" }),
          ),
        ),
        div(
          { style: "display:flex;gap:var(--vk-space-sm);padding-top:var(--vk-space-xs);" },
          button({ "data-color-variant": "primary", style: "flex:1" }, "Submit"),
          button({ "data-style-variant": "outline" }, "Cancel"),
        ),
      ),
    ),
  );
}

/* ---- Tile 2: Data Table ---- */
const tableRows = [
  { id: "INV-001", name: "Acme Corp", amount: "$1,200", status: "Paid" },
  { id: "INV-002", name: "Northstar Health", amount: "$840", status: "Pending" },
  { id: "INV-003", name: "Canvas Labs", amount: "$3,550", status: "Overdue" },
  { id: "INV-004", name: "Harbor Wave", amount: "$620", status: "Paid" },
];

function statusVariant(s: string) {
  if (s === "Paid") return "success";
  if (s === "Pending") return "warning";
  return "danger";
}

function DataTableTile() {
  return div(
    { class: tileClass },
    span({ class: tileLabelClass }, "Invoices"),
    table(
      { style: "width:100%;font-size:var(--vk-font-size-sm);" },
      thead(
        tr(
          th({ style: "text-align:left;padding:4px 8px;color:var(--vk-color-text-muted);" }, "Invoice"),
          th({ style: "text-align:left;padding:4px 8px;color:var(--vk-color-text-muted);" }, "Client"),
          th({ style: "text-align:right;padding:4px 8px;color:var(--vk-color-text-muted);" }, "Amount"),
          th({ style: "text-align:left;padding:4px 8px;color:var(--vk-color-text-muted);" }, "Status"),
        ),
      ),
      tbody(
        tableRows.map((row) =>
          tr(
            td({ style: "padding:4px 8px;font-family:var(--vk-font-mono);font-size:0.75rem;" }, row.id),
            td({ style: "padding:4px 8px;" }, row.name),
            td({ style: "padding:4px 8px;text-align:right;" }, row.amount),
            td(
              { style: "padding:4px 8px;" },
              span({ "data-badge": true, "data-color-variant": statusVariant(row.status) }, row.status),
            ),
          ),
        ),
      ),
    ),
  );
}

/* ---- Tile 3: Team Members ---- */
const members = [
  { name: "Ari Chen", role: "Infrastructure", initials: "AC" },
  { name: "Maya Romero", role: "Design", initials: "MR" },
  { name: "Noah Kim", role: "Support", initials: "NK" },
  { name: "Lena Park", role: "Growth", initials: "LP" },
];

function TeamTile() {
  return div(
    { class: tileClass },
    div(
      { style: "display:flex;align-items:center;justify-content:space-between;" },
      span({ class: tileLabelClass }, "Team Members"),
      p({
        style: "font-size:var(--vk-font-size-sm);color:var(--vk-color-text-muted);margin:0;",
      }, "No Team Members"),
    ),
    p({
      style: "font-size:var(--vk-font-size-sm);color:var(--vk-color-text-muted);text-align:center;margin:0;",
    }, "Invite your team to collaborate on this project."),
    div(
      { style: "text-align:center;" },
      button({ "data-style-variant": "outline", style: "font-size:var(--vk-font-size-sm);" }, "+ Invite Members"),
    ),
    ul(
      { style: "list-style:none;display:flex;flex-direction:column;gap:6px;padding:0;" },
      members.map((m) =>
        li(
          {
            style: "display:flex;align-items:center;gap:var(--vk-space-sm);font-size:var(--vk-font-size-sm);",
          },
          span({
            style: "width:28px;height:28px;border-radius:50%;background:var(--vk-color-surface-2);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:700;flex-shrink:0;",
          }, m.initials),
          div(
            div({ style: "font-weight:500;line-height:1.2;" }, m.name),
            div({ style: "color:var(--vk-color-text-muted);font-size:0.72rem;" }, m.role),
          ),
        ),
      ),
    ),
  );
}

/* ---- Tile 4: Auth Form ---- */
function AuthTile() {
  return div(
    {
      class: tileClass,
      style: "align-items:center;justify-content:center;",
    },
    div(
      { style: "width:100%;max-width:280px;display:flex;flex-direction:column;gap:var(--vk-space-md);" },
      div(
        { style: "text-align:center;" },
        h3({ style: "font-size:var(--vk-font-size-lg);margin-bottom:4px;" }, "Create an account"),
        p({
          style: "font-size:var(--vk-font-size-sm);color:var(--vk-color-text-muted);margin:0;",
        }, "Enter your email below to create your account"),
      ),
      input({ type: "email", placeholder: "name@example.com", style: "width:100%" }),
      button({ "data-color-variant": "primary", style: "width:100%" }, "Sign In with Email"),
      div(
        { style: "display:flex;align-items:center;gap:var(--vk-space-sm);" },
        div({ style: "flex:1;height:1px;background:var(--vk-color-border);" }),
        span({ style: "font-size:0.72rem;color:var(--vk-color-text-muted);white-space:nowrap;" }, "Or continue with"),
        div({ style: "flex:1;height:1px;background:var(--vk-color-border);" }),
      ),
      button({ "data-style-variant": "outline", style: "width:100%" }, "⬡ GitHub"),
    ),
  );
}

/* ---- Tile 5: Stats Cards ---- */
const statsData = [
  { label: "Total Revenue", value: "$1,250.00", change: "+12.5%", up: true },
  { label: "New Customers", value: "1,234", change: "-20%", up: false },
  { label: "Active Accounts", value: "45,678", change: "+12.5%", up: true },
  { label: "Growth Rate", value: "4.5%", change: "+4.5%", up: true },
];

function StatsTile() {
  return div(
    { class: tileClass },
    span({ class: tileLabelClass }, "Key Metrics"),
    div(
      { style: "display:grid;grid-template-columns:1fr 1fr;gap:var(--vk-space-sm);flex:1;" },
      statsData.map((s) =>
        div(
          {
            style: "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-md);padding:var(--vk-space-sm) var(--vk-space-md);",
          },
          div(
            { style: "font-size:0.7rem;color:var(--vk-color-text-muted);margin-bottom:2px;" },
            s.label,
          ),
          div({ style: "font-size:var(--vk-font-size-xl);font-weight:700;line-height:1.2;" }, s.value),
          span(
            {
              style: `font-size:0.7rem;color:${s.up ? "var(--vk-color-success)" : "var(--vk-color-danger)"};`,
            },
            (s.up ? "↑ " : "↓ ") + s.change,
          ),
        ),
      ),
    ),
  );
}

/* ---- Tile 6: Settings Panel ---- */
function SettingsTile() {
  const emailToggle = signal(true);

  return div(
    { class: tileClass },
    div(
      { style: "display:flex;align-items:center;justify-content:space-between;" },
      span({ class: tileLabelClass }, "Notifications"),
      span({ style: "font-size:0.72rem;color:var(--vk-color-text-muted);" }, "Appearance Settings"),
    ),
    div(
      { style: "display:flex;flex-direction:column;gap:var(--vk-space-sm);font-size:var(--vk-font-size-sm);" },
      div(
        {
          style: "display:flex;align-items:center;justify-content:space-between;padding:var(--vk-space-sm) var(--vk-space-md);background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-md);",
        },
        div(
          strong("Two-factor authentication"),
          p({ style: "color:var(--vk-color-text-muted);margin:0;font-size:0.72rem;" }, "Verify via email or phone number."),
        ),
        button({ "data-style-variant": "outline", "data-size": "sm" }, "Enable"),
      ),
      div(
        {
          style: "display:flex;align-items:center;justify-content:space-between;padding:var(--vk-space-sm) var(--vk-space-md);background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-md);",
        },
        span("Wallpaper Tinting"),
        label(
          { style: "display:flex;align-items:center;gap:4px;margin:0;" },
          input({
            type: "checkbox",
            role: "switch",
            checked: () => emailToggle(),
            onchange: () => emailToggle(!emailToggle()),
          }),
        ),
      ),
      div(
        {
          style: "display:flex;align-items:center;justify-content:space-between;padding:var(--vk-space-xs) var(--vk-space-md);color:var(--vk-color-text-muted);",
        },
        span("Your profile has been verified."),
        span({ style: "font-size:0.7rem;" }, "›"),
      ),
    ),
  );
}

/* ---- Tile 7: Kanban Column ---- */
const kanbanCards = [
  { title: "Draft pricing page FAQ", owner: "Maya", priority: "Medium" },
  { title: "Refactor billing webhook", owner: "Ari", priority: "High", blocked: true },
  { title: "Publish onboarding survey", owner: "Rina", priority: "Medium" },
];

function KanbanTile() {
  return div(
    { class: tileClass },
    div(
      { style: "display:flex;align-items:center;gap:var(--vk-space-sm);" },
      span({ class: tileLabelClass }, "In Progress"),
      span({ "data-badge": true }, String(kanbanCards.length)),
    ),
    div(
      { style: "display:flex;flex-direction:column;gap:var(--vk-space-sm);flex:1;" },
      kanbanCards.map((card) =>
        div(
          {
            style: "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-md);padding:var(--vk-space-sm) var(--vk-space-md);font-size:var(--vk-font-size-sm);",
          },
          div({ style: "font-weight:500;margin-bottom:4px;" }, card.title),
          div(
            { style: "display:flex;align-items:center;gap:var(--vk-space-xs);" },
            span({
              "data-badge": true,
              "data-color-variant": card.priority === "High" ? "danger" : "warning",
            }, card.priority),
            ...(card.blocked ? [span({ "data-badge": true, "data-color-variant": "danger" }, "Blocked")] : []),
            span({ style: "margin-left:auto;color:var(--vk-color-text-muted);" }, card.owner),
          ),
        ),
      ),
    ),
  );
}

/* ---- Tile 8: Activity Timeline ---- */
const timelineItems = [
  { time: "09:10", title: "Release 1.8 deployed", detail: "Rolled out to 50% of users." },
  { time: "10:40", title: "Hiring sync completed", detail: "Panel feedback submitted." },
  { time: "12:05", title: "Advisory board confirmed", detail: "Seven of eight accepted." },
  { time: "14:22", title: "Billing sync fixed", detail: "Migration window confirmed." },
];

function TimelineTile() {
  return div(
    { class: tileClass },
    span({ class: tileLabelClass }, "Activity"),
    ol(
      { "data-timeline": true },
      timelineItems.map((item) =>
        li(
          div(
            { style: "display:flex;align-items:baseline;gap:var(--vk-space-sm);" },
            span({
              style: "font-size:0.7rem;color:var(--vk-color-text-muted);font-family:var(--vk-font-mono);white-space:nowrap;",
            }, item.time),
            strong({ style: "font-size:var(--vk-font-size-sm);" }, item.title),
          ),
          p({
            style: "font-size:0.72rem;color:var(--vk-color-text-muted);margin:2px 0 0;",
          }, item.detail),
        ),
      ),
    ),
  );
}

/* ---- Tile 9: Thread Inbox ---- */
const threads = [
  { customer: "Nadia Patel", company: "Northstar Health", preview: "Finance export is missing yesterday's invoices.", unread: 2, status: "Open" },
  { customer: "Chris Morgan", company: "Canvas Labs", preview: "Can you confirm SSO provisioning with subteams?", unread: 0, status: "Pending" },
  { customer: "Sam Ortiz", company: "Harbor Wave", preview: "We need a bulk export for last quarter reports.", unread: 1, status: "Open" },
];

function InboxTile() {
  return div(
    { class: tileClass },
    div(
      { style: "display:flex;align-items:center;justify-content:space-between;" },
      span({ class: tileLabelClass }, "Support Inbox"),
      div(
        { style: "display:flex;gap:4px;" },
        span({ "data-badge": true, "data-color-variant": "danger" }, "2 open"),
        span({ "data-badge": true }, "1 pending"),
      ),
    ),
    div(
      { style: "display:flex;flex-direction:column;gap:1px;background:var(--vk-color-border);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-md);overflow:hidden;flex:1;" },
      threads.map((t) =>
        div(
          {
            style: "background:var(--vk-color-bg);padding:var(--vk-space-sm) var(--vk-space-md);font-size:var(--vk-font-size-sm);cursor:default;",
          },
          div(
            { style: "display:flex;align-items:center;gap:var(--vk-space-xs);margin-bottom:2px;" },
            strong({ style: "flex:1" }, t.customer),
            t.unread > 0
              ? span({
                  style: "background:var(--vk-color-accent);color:var(--vk-color-bg);border-radius:9999px;padding:1px 6px;font-size:0.65rem;font-weight:700;",
                }, String(t.unread))
              : null,
            span({ "data-badge": true, "data-color-variant": t.status === "Open" ? "success" : "warning" }, t.status),
          ),
          div({ style: "color:var(--vk-color-text-muted);font-size:0.72rem;" }, t.company),
          div({
            style: "color:var(--vk-color-text-muted);font-size:0.72rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",
          }, t.preview),
        ),
      ),
    ),
  );
}

export function ComponentsGallery() {
  return div(
    { class: `${galleryClass} animate-in` },
    div(
      { class: innerClass },
      h2({ style: "margin-bottom:var(--vk-space-xs);" }, "Components"),
      p(
        { style: "color:var(--vk-color-text-muted);margin-bottom:var(--vk-space-xl);" },
        "Beautifully designed components built with VanillaCSS. Copy, adapt, and ship.",
      ),
      div(
        { class: mosaicClass },
        PaymentTile(),
        DataTableTile(),
        TeamTile(),
        AuthTile(),
        StatsTile(),
        SettingsTile(),
        KanbanTile(),
        TimelineTile(),
        InboxTile(),
      ),
    ),
  );
}
