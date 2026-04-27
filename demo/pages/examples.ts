import { signal, vkml } from "../../src/index.js";
import {
  subtitleClass,
  sidebarGroupClass,
  sidebarLinkClass,
} from "../styles.ts";
import { HtmxSection, TailwindSection } from "./integrations.ts";
import { TasksSection } from "./examples/tasks-section.ts";
import { StressSection } from "./examples/stress-section.ts";
import { PlaygroundSection } from "./examples/playground-section.ts";
import { SnippetsSection } from "./examples/snippets-section.ts";
import { SandboxSection } from "./examples/sandbox-section.ts";
import { VkmlTestSection } from "./examples/vkml-section.ts";

// ── Section definitions ────────────────────────────────────
type SectionId =
  | "snippets"
  | "todo"
  | "playground"
  | "stress"
  | "sandbox"
  | "vkml"
  | "htmx"
  | "tailwind";

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
      { id: "vkml", label: "VKML" },
    ],
  },
  {
    label: "Integrations",
    items: [
      { id: "htmx", label: "htmx" },
      { id: "tailwind", label: "Tailwind CSS" },
    ],
  },
];

// ── Section map ────────────────────────────────────────────
const sections: Record<SectionId, () => Node> = {
  snippets: SnippetsSection,
  sandbox: SandboxSection,
  todo: TasksSection,
  playground: PlaygroundSection,
  stress: StressSection,
  vkml: VkmlTestSection,
  htmx: HtmxSection,
  tailwind: TailwindSection,
};

// ── Main examples page ─────────────────────────────────────
export function ExamplesPage() {
  const activeSection = signal<SectionId>("snippets");

  const { div, h1, p, aside, nav, a } = vkml;

  return div(
    { class: "animate-in" },
    h1("Examples"),
    p(
      { class: subtitleClass },
      "Interactive demos, code snippets, and stress tests.",
    ),
    div(
      { "data-layout": "sidebar" },
      aside(
        nav(
          sidebarGroups.map((group) =>
            div(
              { class: sidebarGroupClass },
              div({ class: "group-label" }, group.label),
              group.items.map((item) =>
                a(
                  {
                    class: sidebarLinkClass,
                    "aria-current": () =>
                      activeSection() === item.id ? "page" : null,
                    onclick: (e: Event) => {
                      e.preventDefault();
                      activeSection(item.id);
                    },
                    href: "#",
                  },
                  item.label,
                ),
              ),
            ),
          ),
        ),
      ),
      div(() => sections[activeSection()]()),
    ),
  );
}
