import type { SidebarGroup } from "@vanillakit/vanillakit";
import { signal, vkml } from "@vanillakit/vanillakit";
import {
  sidebarGroupClass,
  sidebarLinkClass,
  subtitleClass,
} from "../../styles.ts";
import { BadgeSection } from "./badge-section.ts";
import { ButtonSection } from "./button-section.ts";
import { CardSection } from "./card-section.ts";

// ── Section definitions ────────────────────────────────────
type SectionId = "card" | "button" | "badge";

const sidebarGroups: SidebarGroup<SectionId>[] = [
  {
    label: "Components",
    items: [
      { id: "card", label: "Card" },
      { id: "button", label: "Button" },
      { id: "badge", label: "Badge" },
    ],
  },
];

const sections: Record<SectionId, () => Node> = {
  card: CardSection,
  button: ButtonSection,
  badge: BadgeSection,
};

export function UIPage() {
  const activeSection = signal<SectionId>("card");

  return vkml.div(
    { class: "animate-in" },
    vkml.h1("UI Components"),
    vkml.p(
      { class: subtitleClass },
      "Pre-built components styled with VanillaCSS tokens and composed with cn().",
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