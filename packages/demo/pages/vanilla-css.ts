import type { SidebarGroup } from "@vanillakit/vanillakit";
import { signal, vkml } from "@vanillakit/vanillakit";
import {
  sidebarGroupClass,
  sidebarLinkClass,
  subtitleClass,
} from "../styles.ts";
import { VanillaCssComponentsSection } from "./docs/vanilla-css-components-section.ts";
import { VanillaCssSection } from "./docs/vanilla-css-section.ts";
import { VanillaCssThemeSection } from "./docs/vanilla-css-theme-section.ts";
import { VanillaCssTokensSection } from "./docs/vanilla-css-tokens-section.ts";

type SectionId = "overview" | "theming" | "components" | "tokens";

const sidebarGroups: SidebarGroup<SectionId>[] = [
  {
    label: "VanillaCSS",
    items: [
      { id: "overview", label: "Overview" },
      { id: "theming", label: "Theming" },
      { id: "components", label: "Components" },
      { id: "tokens", label: "Token Reference" },
    ],
  },
];

const sections: Record<SectionId, () => Node> = {
  overview: VanillaCssSection,
  theming: VanillaCssThemeSection,
  components: VanillaCssComponentsSection,
  tokens: VanillaCssTokensSection,
};

export function VanillaCssPage() {
  const activeSection = signal<SectionId>("overview");

  return vkml.div(
    { class: "animate-in" },
    vkml.h1("VanillaCSS"),
    vkml.p(
      { class: subtitleClass },
      "Classless styling, theming, tokens, and semantic component patterns.",
    ),
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