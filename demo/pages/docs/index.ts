import { signal, html } from "../../../src/index.js";
import {
  subtitleClass,
  sidebarGroupClass,
  sidebarLinkClass,
} from "../../styles.ts";
import {
  HtmxSection,
  TailwindSection,
  HonoSection,
  FastAPISection,
} from "../integrations.ts";
import { GettingStartedSection } from "./GettingStartedSection.ts";
import { TypeScriptSection } from "./TypeScriptSection.ts";
import { ComponentsSection } from "./ComponentsSection.ts";
import { ReactivitySection } from "./ReactivitySection.ts";
import { DataFetchingSection } from "./DataFetchingSection.ts";
import { ConditionalSection } from "./ConditionalSection.ts";
import { ListsSection } from "./ListsSection.ts";
import { FormsSection } from "./FormsSection.ts";
import { StylingSection } from "./StylingSection.ts";
import { RoutingConceptsSection } from "./RoutingConceptsSection.ts";
import { VanillaCssSection } from "./VanillaCssSection.ts";
import { VanillaCssThemeSection } from "./VanillaCssThemeSection.ts";
import { VanillaCssComponentsSection } from "./VanillaCssComponentsSection.ts";
import { VanillaCssTokensSection } from "./VanillaCssTokensSection.ts";
import { SignalSection } from "./SignalSection.ts";
import { ReactiveModuleSection } from "./ReactiveModuleSection.ts";
import { HtmlModuleSection } from "./HtmlModuleSection.ts";
import { CssModuleSection } from "./CssModuleSection.ts";
import { RouterModuleSection } from "./RouterModuleSection.ts";

// ── Section definitions ────────────────────────────────────
type SectionId =
  | "getting-started"
  | "typescript"
  | "components"
  | "reactivity"
  | "data-fetching"
  | "conditional"
  | "lists"
  | "forms"
  | "styling"
  | "routing-concepts"
  | "vanillacss"
  | "vanillacss-theming"
  | "vanillacss-components"
  | "vanillacss-tokens"
  | "htmx"
  | "tailwind"
  | "hono"
  | "fastapi"
  | "signal"
  | "reactive"
  | "html-module"
  | "css-module"
  | "router";

interface SidebarGroup {
  label: string;
  items: { id: SectionId; label: string }[];
}

const sidebarGroups: SidebarGroup[] = [
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
    label: "VanillaCSS",
    items: [
      { id: "vanillacss", label: "Overview" },
      { id: "vanillacss-theming", label: "Theming" },
      { id: "vanillacss-components", label: "Components" },
      { id: "vanillacss-tokens", label: "Token Reference" },
    ],
  },
  {
    label: "Integrations",
    items: [
      { id: "htmx", label: "htmx" },
      { id: "tailwind", label: "Tailwind CSS" },
      { id: "hono", label: "Hono" },
      { id: "fastapi", label: "FastAPI" },
    ],
  },
  {
    label: "API Reference",
    items: [
      { id: "signal", label: "signal.js" },
      { id: "reactive", label: "reactive.js" },
      { id: "html-module", label: "html.js" },
      { id: "css-module", label: "css.js" },
      { id: "router", label: "router.js" },
    ],
  },
];

// ── Section map ────────────────────────────────────────────
const sections: Record<SectionId, () => Node> = {
  "getting-started": GettingStartedSection,
  typescript: TypeScriptSection,
  vanillacss: VanillaCssSection,
  "vanillacss-theming": VanillaCssThemeSection,
  "vanillacss-components": VanillaCssComponentsSection,
  "vanillacss-tokens": VanillaCssTokensSection,
  components: ComponentsSection,
  reactivity: ReactivitySection,
  "data-fetching": DataFetchingSection,
  conditional: ConditionalSection,
  lists: ListsSection,
  forms: FormsSection,
  styling: StylingSection,
  "routing-concepts": RoutingConceptsSection,
  htmx: HtmxSection,
  tailwind: TailwindSection,
  hono: HonoSection,
  fastapi: FastAPISection,
  signal: SignalSection,
  reactive: ReactiveModuleSection,
  "html-module": HtmlModuleSection,
  "css-module": CssModuleSection,
  router: RouterModuleSection,
};

// ── Main docs page ─────────────────────────────────────────
export function DocsPage() {
  const activeSection = signal<SectionId>("getting-started");

  return html`<div class="animate-in">
    <h1>Docs</h1>
    <p class=${subtitleClass}>API reference, concepts, and guides.</p>

    <div data-layout="sidebar">
      <aside>
        <nav>
          ${sidebarGroups.map(
            (group) => html`
              <div class=${sidebarGroupClass}>
                <div class="group-label">${group.label}</div>
                ${group.items.map(
                  (item) => html`
                    <a
                      class=${sidebarLinkClass}
                      aria-current=${() =>
                        activeSection() === item.id ? "page" : null}
                      onclick=${(e: Event) => {
                        e.preventDefault();
                        activeSection(item.id);
                      }}
                      href="#"
                      >${item.label}</a
                    >
                  `,
                )}
              </div>
            `,
          )}
        </nav>
      </aside>

      <div>${() => sections[activeSection()]()}</div>
    </div>
  </div>`;
}
