import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import {
  VANILLA_CSS_THEME_SNIPPET_1,
  VANILLA_CSS_THEME_SNIPPET_2,
  VANILLA_CSS_THEME_SNIPPET_3,
  VANILLA_CSS_THEME_SNIPPET_4,
  VANILLA_CSS_THEME_SNIPPET_5,
  VANILLA_CSS_THEME_SNIPPET_6,
} from "../../snippets.js";

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
    ${code(VANILLA_CSS_THEME_SNIPPET_1, "css")}

    <h3>Manual override</h3>
    <p>
      Force a specific theme by setting <code>data-theme</code> on
      <code>&lt;html&gt;</code> or any ancestor element. This overrides the
      system preference.
    </p>
    ${code(VANILLA_CSS_THEME_SNIPPET_2, "markup")}

    <h3>themeToggle() — with vanillakit</h3>
    <p>
      <code>themeToggle()</code> returns a reactive signal bound to
      <code>document.documentElement.dataset.theme</code>. It reads from
      <code>localStorage</code> on init, falls back to the system preference,
      and persists every user choice.
    </p>
    ${LiveEditor({
      sourceVariants: VANILLA_CSS_THEME_SNIPPET_3,
      label: "themeToggle() — reactive dark/light toggle",
    })}

    <h3>Customizing the accent color</h3>
    <p>
      Override <code>--vk-color-accent</code> and
      <code>--vk-color-accent-dim</code> to rebrand the framework to any color.
      Add it to your own stylesheet — unlayered declarations beat
      <code>@layer vanillacss.tokens</code> at equal specificity.
    </p>
    ${code(VANILLA_CSS_THEME_SNIPPET_4, "css")}

    <p>For separate light and dark accents:</p>
    ${code(VANILLA_CSS_THEME_SNIPPET_5, "css")}

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

    ${code(VANILLA_CSS_THEME_SNIPPET_6, "css")}
  </section>`;
}
