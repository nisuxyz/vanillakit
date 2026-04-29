import type { SidebarGroup } from "../../../src/index.js";
import { signal, vkml } from "../../../src/index.js";
import {
  sidebarGroupClass,
  sidebarLinkClass,
  subtitleClass,
} from "../../styles.ts";
import { FastAPISection,HonoSection } from "../integrations.ts";
import { ComponentsSection } from "./components-section.ts";
import { ConditionalSection } from "./conditional-section.ts";
import { CssModuleSection } from "./css-module-section.ts";
import { DataFetchingSection } from "./data-fetching-section.ts";
import { FormsSection } from "./forms-section.ts";
import { GettingStartedSection } from "./getting-started-section.ts";
import { HtmlModuleSection } from "./html-module-section.ts";
import { HtmlVsVkmlSection } from "./html-vs-vkml-section.ts";
import { ListsSection } from "./lists-section.ts";
import { ReactiveModuleSection } from "./reactive-module-section.ts";
import { ReactivitySection } from "./reactivity-section.ts";
import { RouterModuleSection } from "./router-module-section.ts";
import { RoutingConceptsSection } from "./routing-concepts-section.ts";
import { SignalSection } from "./signal-section.ts";
import { StylingSection } from "./styling-section.ts";
import { TypeScriptSection } from "./type-script-section.ts";
import { VkmlModuleSection } from "./vkml-module-section.ts";

// ── Section definitions ────────────────────────────────────
type SectionId =
  | "getting-started"
  | "typescript"
  | "html-vs-vkml"
  | "components"
  | "reactivity"
  | "data-fetching"
  | "conditional"
  | "lists"
  | "forms"
  | "styling"
  | "routing-concepts"
  | "hono"
  | "fastapi"
  | "signal"
  | "reactive"
  | "html-module"
  | "vkml-module"
  | "css-module"
  | "router";

const sidebarGroups: SidebarGroup<SectionId>[] = [
  {
    label: "Guide",
    items: [
      { id: "getting-started", label: "Getting Started" },
      { id: "typescript", label: "TypeScript & Tooling" },
    ],
  },
  {
    label: "Concepts",
    items: [
      { id: "html-vs-vkml", label: "Choosing a Syntax" },
      { id: "components", label: "Components" },
      { id: "reactivity", label: "Reactivity" },
      { id: "data-fetching", label: "Data Fetching" },
      { id: "conditional", label: "Conditional Rendering" },
      { id: "lists", label: "Lists & Keys" },
      { id: "forms", label: "Forms" },
      { id: "styling", label: "Styling" },
      { id: "routing-concepts", label: "Routing" },
    ],
  },
  {
    label: "API Reference",
    items: [
      { id: "signal", label: "signal.js" },
      { id: "reactive", label: "reactive.js" },
      { id: "html-module", label: "html.js" },
      { id: "vkml-module", label: "vkml.js" },
      { id: "css-module", label: "css.js" },
      { id: "router", label: "router.js" },
    ],
  },
];

// ── Section map ────────────────────────────────────────────
const sections: Record<SectionId, () => Node> = {
  "getting-started": GettingStartedSection,
  typescript: TypeScriptSection,
  "html-vs-vkml": HtmlVsVkmlSection,
  components: ComponentsSection,
  reactivity: ReactivitySection,
  "data-fetching": DataFetchingSection,
  conditional: ConditionalSection,
  lists: ListsSection,
  forms: FormsSection,
  styling: StylingSection,
  "routing-concepts": RoutingConceptsSection,
  hono: HonoSection,
  fastapi: FastAPISection,
  signal: SignalSection,
  reactive: ReactiveModuleSection,
  "html-module": HtmlModuleSection,
  "vkml-module": VkmlModuleSection,
  "css-module": CssModuleSection,
  router: RouterModuleSection,
};

// ── Main docs page ─────────────────────────────────────────
export function DocsPage() {
  const activeSection = signal<SectionId>("getting-started");

  return vkml.div(
    { class: "animate-in" },
    vkml.h1("Docs"),
    vkml.p({ class: subtitleClass }, "API reference, concepts, and guides."),
    vkml.div(
      { "data-layout": "sidebar" },
      vkml.aside(
        vkml.nav(
          sidebarGroups.map((group) =>
            vkml.div(
              { class: sidebarGroupClass },
              vkml.div({ class: "group-label" }, group.label),
              group.items.map((item) =>
                vkml.a(
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
      vkml.div(() => sections[activeSection()]()),
    ),
  );
}
