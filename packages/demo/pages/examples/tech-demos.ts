import { css } from "@vanillakit/vanillakit";
import { div, h1, h2, p } from "@vanillakit/vanillakit";
import { HtmxSection, TailwindSection } from "../integrations.ts";
import { SandboxSection } from "./sandbox-section.ts";
import { SnippetsSection } from "./snippets-section.ts";
import { StressSection } from "./stress-section.ts";
import { VkmlTestSection } from "./vkml-section.ts";

const pageClass = css`
  max-width: 72rem;
  margin-inline: auto;
  padding: var(--vk-space-xl) var(--vk-space-lg);
  overflow-y: auto;
  height: 100%;
`;

export function TechDemosPage() {
  return div(
    { class: `${pageClass} animate-in` },
    h1("Technical Demos"),
    p(
      { style: "color:var(--vk-color-text-muted);margin-bottom:var(--vk-space-xl);" },
      "Low-level demos that exercise the reactive engine, template compiler, VKML syntax, and CSS integrations.",
    ),
    h2("Snippets"),
    SnippetsSection(),
    h2("Sandbox"),
    SandboxSection(),
    h2("Stress Test"),
    StressSection(),
    h2("VKML"),
    VkmlTestSection(),
    h2("Integrations"),
    HtmxSection(),
    TailwindSection(),
  );
}
