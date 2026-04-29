import type { Tab } from "../../src/index.js";
import { computed, css, currentPath, navigate } from "../../src/index.js";
import { button,div, nav } from "../../src/index.js";
import { AuthAppPage } from "./examples/apps/auth-page.ts";
import { ChatAppPage } from "./examples/apps/chat-page.ts";
import { DashboardAppPage } from "./examples/apps/dashboard-page.ts";
import { KanbanAppPage } from "./examples/apps/kanban-page.ts";
import { MusicAppPage } from "./examples/apps/music-page.ts";
import { PlaygroundAppPage } from "./examples/apps/playground-page.ts";
import { SocialAppPage } from "./examples/apps/social-page.ts";
import { TodoAppPage } from "./examples/apps/todo-page.ts";
import { ComponentsGallery } from "./examples/components-gallery.ts";
import { TechDemosPage } from "./examples/tech-demos.ts";

const subNavClass = css`
  display: flex;
  align-items: center;
  gap: 0;
  border-bottom: 1px solid var(--vk-color-border);
  background: var(--vk-color-bg);
  padding: 0 var(--vk-space-lg);
  overflow-x: auto;
  flex-shrink: 0;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const tabClass = css`
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  padding: var(--vk-space-sm) var(--vk-space-md);
  font-size: var(--vk-font-size-sm);
  font-weight: 500;
  color: var(--vk-color-text-muted);
  cursor: pointer;
  white-space: nowrap;
  transition: color var(--vk-transition-speed), border-color var(--vk-transition-speed);
  transform: none !important;
  filter: none !important;
  box-shadow: none !important;
  &:hover {
    color: var(--vk-color-text);
    background: none;
  }
`;

const tabActiveClass = css`
  color: var(--vk-color-text) !important;
  font-weight: 600;
  border-bottom-color: var(--vk-color-accent) !important;
`;

const contentClass = css`
  flex: 1;
  overflow: hidden;
  min-height: 0;
`;

const tabs: Tab[] = [
  { label: "Components", path: "/examples" },
  { label: "Dashboard", path: "/examples/dashboard" },
  { label: "Tasks", path: "/examples/todo" },
  { label: "Chat", path: "/examples/chat" },
  { label: "Social", path: "/examples/social" },
  { label: "Kanban", path: "/examples/kanban" },
  { label: "Music", path: "/examples/music" },
  { label: "Playground", path: "/examples/playground" },
  { label: "Auth", path: "/examples/auth" },
  { label: "Demos", path: "/examples/demos" },
];

function activeTab(path: string) {
  const p = currentPath();
  if (path === "/examples") return p === "/examples";
  return p === path || p.startsWith(path + "/");
}

function renderApp(path: string) {
  if (path === "/examples") return ComponentsGallery();
  if (path === "/examples/dashboard") return DashboardAppPage();
  if (path === "/examples/todo") return TodoAppPage();
  if (path === "/examples/chat") return ChatAppPage();
  if (path === "/examples/social") return SocialAppPage();
  if (path === "/examples/kanban") return KanbanAppPage();
  if (path === "/examples/music") return MusicAppPage();
  if (path === "/examples/playground") return PlaygroundAppPage();
  if (path === "/examples/auth") return AuthAppPage();
  if (path === "/examples/demos") return TechDemosPage();
  return ComponentsGallery();
}

export function ExamplesLayout() {
  const currentTab = computed(() =>
    tabs.find((t) =>
      t.path === "/examples"
        ? currentPath() === "/examples"
        : currentPath() === t.path || currentPath().startsWith(t.path + "/"),
    )?.path ?? "/examples",
  );

  return div(
    // { class: wrapperClass },
    { class: 'container' },
    nav(
      { class: subNavClass },
      tabs.map((tab) =>
        button(
          {
            class: () =>
              activeTab(tab.path)
                ? `${tabClass} ${tabActiveClass}`
                : tabClass,
            onclick: () => navigate(tab.path),
          },
          tab.label,
        ),
      ),
    ),
    div(
      { class: contentClass },
      () => renderApp(currentTab()),
    ),
  );
}
