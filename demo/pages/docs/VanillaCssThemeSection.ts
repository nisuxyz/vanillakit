import { html } from "../../../src";
import { code } from "../../highlight";

export function VanillaCssThemeSection() {
  return html`<section>
    <h2>Theming</h2>
    <p>
      VanillaCSS ships with a complete dark and light theme built from CSS
      custom properties. It auto-selects based on
      <code>prefers-color-scheme</code> and can be overridden manually or
      toggled at runtime with the vanillakit <code>themeToggle()</code> helper.
    </p>

    <h3>Automatic dark mode</h3>
    <p>
      No setup required. VanillaCSS detects the OS preference via a media query
      inside <code>@layer vanillacss.tokens</code>:
    </p>
    ${code(
      `@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --vk-color-bg:      hsl(var(--vk-gray-9));
    --vk-color-surface: hsl(var(--vk-gray-8));
    --vk-color-text:    hsl(var(--vk-gray-0));
    color-scheme: dark;
  }
}`,
      "css",
    )}

    <h3>Manual override</h3>
    <p>
      Force a specific theme by setting <code>data-theme</code> on
      <code>&lt;html&gt;</code> or any ancestor element. This overrides the
      system preference.
    </p>
    ${code(
      `<!-- Force dark -->
<html data-theme="dark">

<!-- Force light -->
<html data-theme="light">

<!-- Scope dark to a specific section -->
<div data-theme="dark">
  <article data-card>Always dark card</article>
</div>`,
      "markup",
    )}

    <h3>themeToggle() — with vanillakit</h3>
    <p>
      <code>themeToggle()</code> returns a reactive signal bound to
      <code>document.documentElement.dataset.theme</code>. It reads from
      <code>localStorage</code> on init, falls back to the system preference,
      and persists every user choice.
    </p>
    ${code(
      `import { initVanillaCss, themeToggle } from "vanillakit";
import { html } from "vanillakit";

initVanillaCss();

const { theme, toggle, set } = themeToggle();

// theme()  → "dark" | "light"   (reactive signal)
// toggle() → switch dark ↔ light, persist to localStorage
// set()    → explicit control

const btn = html\`
  <button onclick=\${toggle}>
    \${() => theme() === "dark" ? "☀️ Switch to light" : "🌙 Switch to dark"}
  </button>
\`;

// Explicit control
set("dark");   // force dark — saved to localStorage
set("light");  // force light — saved to localStorage
set("auto");   // follow system — clears localStorage`,
      "typescript",
    )}

    <h3>Customizing the accent color</h3>
    <p>
      Override <code>--vk-color-accent</code> and
      <code>--vk-color-accent-dim</code> to rebrand the framework to any color.
      Add it to your own stylesheet — unlayered declarations beat
      <code>@layer vanillacss.tokens</code> at equal specificity.
    </p>
    ${code(
      `/* styles.css — swap gold accent for indigo */
:root {
  --vk-color-accent:     hsl(240 60% 60%);
  --vk-color-accent-dim: hsl(240 60% 60% / 0.15);
}`,
      "css",
    )}

    <p>For separate light and dark accents:</p>
    ${code(
      `/* Light mode accent */
:root {
  --vk-color-accent:     hsl(240 60% 55%);
  --vk-color-accent-dim: hsl(240 60% 55% / 0.12);
}

/* Dark mode accent */
[data-theme="dark"],
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --vk-color-accent:     hsl(240 80% 70%);
    --vk-color-accent-dim: hsl(240 80% 70% / 0.18);
  }
}`,
      "css",
    )}

    <h3>Config variables</h3>
    <p>
      These variables propagate through the entire framework. Change one to
      update every component that uses it.
    </p>

    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--vk-font-size-root</code></td>
          <td><code>100%</code></td>
          <td>
            <code>font-size</code> on <code>&lt;html&gt;</code> — scales all
            <code>rem</code> values
          </td>
        </tr>
        <tr>
          <td><code>--vk-transition-speed</code></td>
          <td><code>0.15s</code></td>
          <td>All hover and focus transitions</td>
        </tr>
        <tr>
          <td><code>--vk-transition-speed-slow</code></td>
          <td><code>0.2s</code></td>
          <td>Switch toggle, progress bar, accordion icon</td>
        </tr>
        <tr>
          <td><code>--vk-animation-speed</code></td>
          <td><code>0.2s</code></td>
          <td>Dialog and overlay entrance animations</td>
        </tr>
        <tr>
          <td><code>--vk-container-max-width</code></td>
          <td><code>72rem</code></td>
          <td><code>&lt;main&gt;</code> element max-width</td>
        </tr>
        <tr>
          <td><code>--vk-sidebar-width</code></td>
          <td><code>200px</code></td>
          <td><code>[data-layout="sidebar"]</code> first column width</td>
        </tr>
      </tbody>
    </table>

    ${code(
      `/* Tighten transitions, widen container, adjust rem base */
:root {
  --vk-transition-speed: 0.1s;
  --vk-container-max-width: 80rem;
  --vk-font-size-root: 112.5%;  /* 18px base → scales all rem values */
}`,
      "css",
    )}
  </section>`;
}
