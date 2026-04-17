import { html, css, cx, createRouter, navLink } from "../src/index.js";
import {
  headerClass, logoClass, navClass,
  navLinkBase, navLinkActive,
  pageClass, headingClass, subtitleClass,
} from "./styles.ts";
import { HomePage } from "./pages/home.ts";
import { ListStressPage } from "./pages/stress.ts";
import { PlaygroundPage } from "./pages/playground.ts";
import { AboutPage } from "./pages/about.ts";

const RouterView = createRouter({
  "/": HomePage,
  "/stress": ListStressPage,
  "/playground": PlaygroundPage,
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
        ${navLink("/", "Tasks", navLinkActive, navLinkBase)}
        ${navLink("/stress", "List Stress", navLinkActive, navLinkBase)}
        ${navLink("/playground", "Playground", navLinkActive, navLinkBase)}
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
