import {
  html,
  css,
  initRouter,
  createRouter,
  navLink,
  navigate,
  themeToggle,
} from "../src/index.ts";
import { logoClass } from "./styles.ts";
import { HomePage } from "./pages/home.ts";
import { ExamplesPage } from "./pages/examples.ts";
import { AboutPage } from "./pages/about.ts";
import { DocsPage } from "./pages/docs/index.ts";

initRouter({ mode: "history", base: import.meta.env.BASE_URL });

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
  "/examples": ExamplesPage,
  "/docs": DocsPage,
  "/about": AboutPage,
  "*": () =>
    html`<div class="animate-in">
      <h1>404</h1>
      <p>Not found.</p>
    </div>`,
});

export function App() {
  return html`
    <header>
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
          ${navLink("/examples", "Examples")} ${navLink("/about", "About")}
        </nav>
        <button class=${themeToggleBtn} onclick=${toggle} title="Toggle theme">
          ${() => (theme() === "dark" ? "☀️" : "🌙")}
        </button>
      </div>
    </header>
    <main>${RouterView()}</main>
    <footer>
      Built with <span class="text-accent">vanillakit</span> — zero deps, ~760
      lines of JS
    </footer>
  `;
}
