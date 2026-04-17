import { html, css, cx, createRouter, navLink } from "../src/index.js";
import {
  headerClass, logoClass, navClass,
  navLinkBase, navLinkActive,
  pageClass, headingClass, subtitleClass,
} from "./styles.ts";
import { HomePage } from "./pages/home.ts";
import { TasksPage } from "./pages/tasks.ts";
import { ListStressPage } from "./pages/stress.ts";
import { PlaygroundPage } from "./pages/playground.ts";
import { AboutPage } from "./pages/about.ts";
import { DocsPage } from "./pages/docs.ts";
import { IntegrationsPage } from "./pages/integrations.ts";

const RouterView = createRouter({
  "/": HomePage,
  "/tasks": TasksPage,
  "/stress": ListStressPage,
  "/playground": PlaygroundPage,
  "/docs": DocsPage,
  "/integrations": IntegrationsPage,
  "/about": AboutPage,
  "*": () =>
    html`<div class=${pageClass}>
      <h1 class=${headingClass}>404</h1>
      <p class=${subtitleClass}>Not found.</p>
    </div>`,
});

export function App() {
  return html`
    <header class=${headerClass}>
      <span class=${logoClass}>vanillakit_</span>
      <nav class=${navClass}>
        ${navLink("/", "Home", navLinkActive, navLinkBase)}
        ${navLink("/docs", "Docs", navLinkActive, navLinkBase)}
        ${navLink("/tasks", "Tasks", navLinkActive, navLinkBase)}
        ${navLink("/playground", "Playground", navLinkActive, navLinkBase)}
        ${navLink("/stress", "Stress", navLinkActive, navLinkBase)}
        ${navLink("/integrations", "Integrations", navLinkActive, navLinkBase)}
        ${navLink("/about", "About", navLinkActive, navLinkBase)}
      </nav>
    </header>
    <main>${RouterView()}</main>
    <footer
      style="text-align:center;padding:48px 0 32px;color:var(--text-muted);font-size:0.78rem;letter-spacing:0.03em;"
    >
      Built with <span style="color:var(--accent);">vanillakit</span> —
      zero deps, ~760 lines of JS
    </footer>
  `;
}
