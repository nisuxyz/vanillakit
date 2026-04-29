import { computed, css, signal } from "@vanillakit/vanillakit";
import {
  button, div, h2, h3, input, p, span, table,
  tbody, td, th, thead, tr,
} from "@vanillakit/vanillakit";

/* ---- Types ---- */
type TimeRange = "Last 3 months" | "Last 30 days" | "Last 7 days";
type SectionTab = "Outline" | "Past Performance" | "Key Personnel" | "Focus Documents";

/* ---- Styles ---- */
const appClass = css`
  display: flex;
  height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  position: relative;
  font-size: var(--vk-font-size-sm);
`;

const sidebarClass = css`
  width: 220px;
  flex-shrink: 0;
  border-right: 1px solid var(--vk-color-border);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: var(--vk-space-md) 0;
  background: var(--vk-color-bg);
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

const mainClass = css`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: var(--vk-color-bg);
  min-width: 0;
`;

const topBarClass = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--vk-space-sm) var(--vk-space-xl);
  border-bottom: 1px solid var(--vk-color-border);
  flex-shrink: 0;
  gap: var(--vk-space-sm);
  @media (max-width: 48rem) {
    padding: var(--vk-space-sm) var(--vk-space-md);
  }
`;

const contentClass = css`
  padding: var(--vk-space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-lg);
  @media (max-width: 48rem) {
    padding: var(--vk-space-md);
  }
`;

const sidebarLogoClass = css`
  display: flex;
  align-items: center;
  gap: var(--vk-space-sm);
  padding: var(--vk-space-xs) var(--vk-space-md);
  margin-bottom: var(--vk-space-sm);
  font-weight: 700;
  font-size: var(--vk-font-size-sm);
`;

const sidebarGroupClass = css`
  padding: var(--vk-space-xs) var(--vk-space-md);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vk-color-text-muted);
  margin-top: var(--vk-space-sm);
`;

const sidebarLinkClass = css`
  display: flex;
  align-items: center;
  gap: var(--vk-space-sm);
  padding: 5px var(--vk-space-md);
  color: var(--vk-color-text-muted);
  text-decoration: none;
  font-size: var(--vk-font-size-sm);
  cursor: pointer;
  transition: color var(--vk-transition-speed), background var(--vk-transition-speed);
  &:hover { color: var(--vk-color-text); background: var(--vk-color-surface); }
`;

const sidebarLinkActiveClass = css`
  color: var(--vk-color-text);
  background: var(--vk-color-surface);
  font-weight: 600;
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

const chartHeaderClass = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--vk-space-md);
  gap: var(--vk-space-sm);
  flex-wrap: wrap;
`;

const tableTabsBarClass = css`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--vk-color-border);
  margin-bottom: var(--vk-space-md);
  gap: 0;
  overflow-x: auto;
  flex-wrap: nowrap;
`;

const kpiGridClass = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--vk-space-md);
  @media (max-width: 64rem) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 32rem) { grid-template-columns: 1fr; }
`;

const statCardClass = css`
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-radius: var(--vk-radius-md);
  padding: var(--vk-space-md) var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const chartCardClass = css`
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-radius: var(--vk-radius-md);
  padding: var(--vk-space-lg);
`;

const tabBtnClass = css`
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  padding: 6px var(--vk-space-md);
  font-size: var(--vk-font-size-sm);
  color: var(--vk-color-text-muted);
  cursor: pointer;
  white-space: nowrap;
  transform: none !important;
  filter: none !important;
  box-shadow: none !important;
  &:hover { color: var(--vk-color-text); background: none; }
`;

const tabBtnActiveClass = css`
  color: var(--vk-color-text) !important;
  font-weight: 600;
  border-bottom-color: var(--vk-color-accent) !important;
`;

/* ---- Data ---- */
const kpiData: Record<TimeRange, { label: string; value: string; change: string; up: boolean }[]> = {
  "Last 3 months": [
    { label: "Total Revenue", value: "$1,250.00", change: "+12.5%", up: true },
    { label: "New Customers", value: "1,234", change: "-20%", up: false },
    { label: "Active Accounts", value: "45,678", change: "+12.5%", up: true },
    { label: "Growth Rate", value: "4.5%", change: "+4.5%", up: true },
  ],
  "Last 30 days": [
    { label: "Total Revenue", value: "$287k", change: "+8.2%", up: true },
    { label: "New Customers", value: "412", change: "+5.1%", up: true },
    { label: "Active Accounts", value: "22,340", change: "+3.7%", up: true },
    { label: "Growth Rate", value: "3.2%", change: "+1.1%", up: true },
  ],
  "Last 7 days": [
    { label: "Total Revenue", value: "$42.6k", change: "+2.1%", up: true },
    { label: "New Customers", value: "98", change: "-4%", up: false },
    { label: "Active Accounts", value: "18,300", change: "+1.8%", up: true },
    { label: "Growth Rate", value: "1.4%", change: "-0.2%", up: false },
  ],
};

const tableRows = [
  { title: "Outline", type: "Section", status: "Active", target: "Q2 2026", limit: "—", reviewer: "Maya" },
  { title: "Past Performance", type: "Analysis", status: "In Review", target: "Q1 2026", limit: "100K", reviewer: "Ari" },
  { title: "Key Personnel", type: "Team", status: "Active", target: "Ongoing", limit: "—", reviewer: "Noah" },
  { title: "Focus Documents", type: "Data", status: "Pending", target: "Q2 2026", limit: "50K", reviewer: "Jules" },
  { title: "Financial Models", type: "Analysis", status: "Archived", target: "Q4 2025", limit: "—", reviewer: "Rina" },
  { title: "Market Research", type: "Data", status: "Active", target: "Q3 2026", limit: "200K", reviewer: "Sam" },
];

const sectionTabs: SectionTab[] = ["Outline", "Past Performance", "Key Personnel", "Focus Documents"];

const sidebarNav = [
  {
    group: "Home",
    items: [
      { label: "Dashboard", icon: "⊞", active: true },
      { label: "Lifecycle", icon: "◈", active: false },
      { label: "Analytics", icon: "▦", active: false },
      { label: "Projects", icon: "◻", active: false },
      { label: "Team", icon: "◎", active: false },
    ],
  },
  {
    group: "Documents",
    items: [
      { label: "Data Library", icon: "◧", active: false },
      { label: "Reports", icon: "≡", active: false },
      { label: "Word Assistant", icon: "◻", active: false },
      { label: "··· More", icon: "", active: false },
    ],
  },
];

/* ---- Chart ---- */
function SparklineChart(range: TimeRange) {
  const barsMap: Record<TimeRange, number[]> = {
    "Last 3 months": [18, 32, 28, 42, 38, 55, 48, 65, 58, 72, 60, 78, 68, 88],
    "Last 30 days": [30, 48, 42, 68, 55, 72, 60, 80],
    "Last 7 days": [22, 35, 28, 50, 44, 62, 55],
  };
  const labelsMap: Record<TimeRange, string[]> = {
    "Last 3 months": ["Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29"],
    "Last 30 days": ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
    "Last 7 days": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  };
  const bars = barsMap[range];
  const labels = labelsMap[range];
  return div(
    { style: "display:flex;flex-direction:column;gap:var(--vk-space-sm);" },
    div(
      { style: "display:flex;align-items:flex-end;gap:4px;height:100px;" },
      bars.map((h) =>
        div({
          style: `background:var(--vk-color-accent);opacity:0.65;flex:1;border-radius:3px 3px 0 0;height:${h}%;transition:height 0.25s ease;`,
        }),
      ),
    ),
    div(
      { style: "display:flex;gap:4px;" },
      labels.map((lbl) =>
        div({ style: "flex:1;text-align:center;font-size:0.6rem;color:var(--vk-color-text-muted);" }, lbl),
      ),
    ),
  );
}

export function DashboardAppPage() {
  const activeRange = signal<TimeRange>("Last 3 months");
  const activeTab = signal<SectionTab>("Outline");
  const kpis = computed(() => kpiData[activeRange()]);
  const sidebarOpen = signal(false);

  return div(
    { class: `${appClass} animate-in` },

    /* Mobile overlay */
    () => sidebarOpen() ? div({ class: overlayClass, onclick: () => sidebarOpen(false) }) : null,

    /* Sidebar */
    div(
      { class: () => sidebarOpen() ? `${sidebarClass} ${sidebarOpenClass}` : sidebarClass },
      div(
        { class: sidebarLogoClass },
        span({ style: "width:18px;height:18px;border-radius:4px;background:var(--vk-color-accent);display:inline-block;flex-shrink:0;" }),
        "Acme Inc.",
      ),
      sidebarNav.map((group) => [
        div({ class: sidebarGroupClass }, group.group),
        ...group.items.map((item) =>
          div(
            { class: item.active ? `${sidebarLinkClass} ${sidebarLinkActiveClass}` : sidebarLinkClass },
            item.icon ? span({ style: "width:14px;text-align:center;opacity:0.7;flex-shrink:0;" }, item.icon) : null,
            item.label,
          ),
        ),
      ]),
    ),

    /* Main */
    div(
      { class: mainClass },
      div(
        { class: topBarClass },
        button({ class: mobileTriggerClass, onclick: () => sidebarOpen((v) => !v) }, "☰"),
        h2({ style: "font-size:var(--vk-font-size-lg);margin:0;" }, "Documents"),
        button({ "data-color-variant": "primary", "data-size": "sm" }, "⊕ Quick Create"),
      ),
      div(
        { class: contentClass },

        /* KPI grid */
        div(
          { class: kpiGridClass },
          () =>
            kpis().map((kpi) =>
              div(
                { class: statCardClass },
                div(
                  { style: "display:flex;align-items:center;justify-content:space-between;" },
                  span({ style: "color:var(--vk-color-text-muted);font-size:0.75rem;" }, kpi.label),
                  span(
                    { style: `font-size:0.7rem;color:${kpi.up ? "var(--vk-color-success)" : "var(--vk-color-danger)"};` },
                    (kpi.up ? "↑ " : "↓ ") + kpi.change,
                  ),
                ),
                div({ style: "font-size:1.6rem;font-weight:700;line-height:1.2;" }, kpi.value),
                div(
                  { style: "font-size:0.7rem;color:var(--vk-color-text-muted);" },
                  kpi.up ? "Trending up this month" : "Down this period",
                ),
              ),
            ),
        ),

        /* Chart */
        div(
          { class: chartCardClass },
          div(
            { class: chartHeaderClass },
            div(
              h3({ style: "margin:0 0 2px;font-size:var(--vk-font-size-base);" }, "Total Visitors"),
              p({ style: "color:var(--vk-color-text-muted);margin:0;font-size:0.72rem;" }, "Total for the selected period"),
            ),
            div(
              { style: "display:flex;gap:4px;flex-wrap:wrap;" },
              (["Last 3 months", "Last 30 days", "Last 7 days"] as TimeRange[]).map((r) =>
                button(
                  {
                    class: () => activeRange() === r ? `${tabBtnClass} ${tabBtnActiveClass}` : tabBtnClass,
                    onclick: () => activeRange(r),
                  },
                  r,
                ),
              ),
            ),
          ),
          () => SparklineChart(activeRange()),
        ),

        /* Table with tabs */
        div(
          div(
            { class: tableTabsBarClass },
            sectionTabs.map((tab) =>
              button(
                {
                  class: () => activeTab() === tab ? `${tabBtnClass} ${tabBtnActiveClass}` : tabBtnClass,
                  onclick: () => activeTab(tab),
                },
                tab,
              ),
            ),
            div({ style: "flex:1;" }),
            button({ "data-style-variant": "outline", "data-size": "sm" }, "⊞ Customize Columns"),
            button({ "data-style-variant": "outline", "data-size": "sm", style: "margin-left:6px;" }, "+ Add Section"),
          ),
          div(
            { style: "overflow-x:auto;" },
            table(
              { style: "width:100%;font-size:var(--vk-font-size-sm);" },
              thead(
                tr(
                  th({ style: "text-align:left;padding:8px 12px;color:var(--vk-color-text-muted);font-weight:500;width:40px;" },
                    input({ type: "checkbox", style: "width:14px;height:14px;" }),
                  ),
                  th({ style: "text-align:left;padding:8px 12px;color:var(--vk-color-text-muted);font-weight:500;" }, "Header ↑"),
                  th({ style: "text-align:left;padding:8px 12px;color:var(--vk-color-text-muted);font-weight:500;" }, "Section Type"),
                  th({ style: "text-align:left;padding:8px 12px;color:var(--vk-color-text-muted);font-weight:500;" }, "Status"),
                  th({ style: "text-align:left;padding:8px 12px;color:var(--vk-color-text-muted);font-weight:500;" }, "Target"),
                  th({ style: "text-align:left;padding:8px 12px;color:var(--vk-color-text-muted);font-weight:500;" }, "Limit"),
                  th({ style: "text-align:left;padding:8px 12px;color:var(--vk-color-text-muted);font-weight:500;" }, "Reviewer"),
                ),
              ),
              tbody(
                tableRows.map((row) =>
                  tr(
                    { style: "border-bottom:1px solid var(--vk-color-border);" },
                    td({ style: "padding:10px 12px;" }, input({ type: "checkbox", style: "width:14px;height:14px;" })),
                    td({ style: "padding:10px 12px;font-weight:500;" }, row.title),
                    td({ style: "padding:10px 12px;color:var(--vk-color-text-muted);" }, row.type),
                    td(
                      { style: "padding:10px 12px;" },
                      span(
                        {
                          "data-badge": true,
                          "data-color-variant": row.status === "Active" ? "success" : row.status === "Archived" ? undefined : "warning",
                        },
                        row.status,
                      ),
                    ),
                    td({ style: "padding:10px 12px;color:var(--vk-color-text-muted);" }, row.target),
                    td({ style: "padding:10px 12px;color:var(--vk-color-text-muted);" }, row.limit),
                    td({ style: "padding:10px 12px;color:var(--vk-color-text-muted);" }, row.reviewer),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}
