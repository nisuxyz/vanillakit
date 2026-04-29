import {
  computed,
  createRouter,
  css,
  currentPath,
  html,
  initRouter,
  navigate,
  navLink,
  themeToggle,
} from "@vanillakit/vanillakit";
import { AboutPage } from "./pages/about.ts";
import { DocsPage } from "./pages/docs/index.ts";
import { ExamplesLayout } from "./pages/examples.ts";
import { HomePage } from "./pages/home.ts";
import { UIPage } from "./pages/ui/index.ts";
import { VanillaCssPage } from "./pages/vanilla-css.ts";
import { logoClass } from "./styles.ts";
export { initStyleAttrs } from '@vanillakit/vss';

initRouter({
  mode: "history",
  base: (import.meta as any).env?.BASE_URL || "/",
});

const { theme, toggle } = themeToggle();

const themeToggleBtn = css`
  background: none;
  border: 1px solid var(--vk-color-border);
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  transition: all 0.15s ease;
  color: var(--vk-color-text-muted);
  &:hover {
    color: var(--vk-color-accent);
    border-color: var(--vk-color-accent);
    transform: none;
    filter: none;
  }
`;

const RouterView = createRouter({
  "/": HomePage,
  "/docs": DocsPage,
  "/vanillacss": VanillaCssPage,
  "/ui": UIPage,
  "/about": AboutPage,
  "*": () =>
    html`<div class="animate-in">
      <h1>404</h1>
      <p>Not found.</p>
    </div>`,
});

const onExamples = computed(() => currentPath().startsWith("/examples"));

export function App() {
  return html`
    <header class="container">
      <a
        class=${logoClass}
        href="/"
        onclick=${(e: Event) => {
          e.preventDefault();
          navigate("/");
        }}
        >vanillakit_</a
      >
      <div style="display:flex;align-items:center;gap:8px;">
        <nav>
          ${navLink("/", "Home")} ${navLink("/docs", "Docs")}
          ${navLink("/vanillacss", "VanillaCSS")}
          ${navLink("/ui", "UI")}
          ${navLink("/examples", "Examples")} ${navLink("/about", "About")}
        </nav>
        <button class=${themeToggleBtn} onclick=${toggle} title="Toggle theme">
          ${() => (theme() === "dark" ? "☀️" : "🌙")}
        </button>
      </div>
    </header>
    ${() =>
      onExamples()
        ? ExamplesLayout()
        : html`<main>${RouterView()}</main>
            <footer class="container">
              Built with <span class="text-accent">vanillakit</span> — zero
              deps, ~760 lines of JS
            </footer>`}
  `;
}
