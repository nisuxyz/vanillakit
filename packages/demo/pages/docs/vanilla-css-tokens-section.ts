import { html } from '@vanillakit/vanillakit';
import { code } from "../../highlight";
import { VANILLA_CSS_TOKENS_SNIPPET_1 } from "../../snippets.js";

function row(variable: string, defaultVal: string, description: string): Node {
  return html`<tr>
    <td><code>${variable}</code></td>
    <td><code>${defaultVal}</code></td>
    <td>${description}</td>
  </tr>`;
}

export function VanillaCssTokensSection() {
  return html`<section>
    <h2>Token Reference</h2>
    <p>
      All <code>--vk-*</code> custom properties. Override any token in your own
      stylesheet — unlayered declarations automatically beat
      <code>@layer vanillacss.tokens</code>.
    </p>
    ${code(VANILLA_CSS_TOKENS_SNIPPET_1, "css")}

    <h3>Palette</h3>
    <p>
      Raw HSL channels — use with <code>hsl(var(--vk-*)).</code> This lets you
      apply arbitrary opacity: <code>hsl(var(--vk-gold) / 0.5)</code>.
    </p>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${row("--vk-gray-0", "36 10% 98%", "Near-white warm gray")}
        ${row("--vk-gray-1", "36 8% 94%", "Light surface")}
        ${row("--vk-gray-2", "240 6% 85%", "Borders (light)")}
        ${row("--vk-gray-3", "240 4% 70%", "Muted surface")}
        ${row("--vk-gray-4", "255 2% 55%", "Muted text")}
        ${row("--vk-gray-5", "240 4% 35%", "Mid gray")}
        ${row("--vk-gray-6", "240 8% 22%", "Dark surface")}
        ${row("--vk-gray-7", "240 8% 14%", "Deeper surface")}
        ${row("--vk-gray-8", "240 8% 10%", "Near-black (body text, light)")}
        ${row("--vk-gray-9", "240 8% 5%", "True dark background")}
        ${row("--vk-gold", "47 78% 59%", "Default accent hue")}
        ${row("--vk-green", "151 76% 62%", "Success hue")}
        ${row("--vk-yellow", "45 90% 58%", "Warning hue")}
        ${row("--vk-red", "0 76% 62%", "Danger hue")}
        ${row("--vk-blue", "225 76% 62%", "Info hue")}
        ${row("--vk-purple", "270 60% 62%", "Purple hue")}
      </tbody>
    </table>

    <h3>Semantic colors</h3>
    <p>
      These are the values you should override for theming. They are aliased
      from the palette and switch automatically between dark and light mode.
    </p>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Light default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${row("--vk-color-bg", "hsl(--vk-gray-0)", "Page background")}
        ${row(
          "--vk-color-surface",
          "hsl(--vk-gray-1)",
          "Card / panel background",
        )}
        ${row(
          "--vk-color-surface-2",
          "hsl(--vk-gray-2)",
          "Nested surface, code block bg",
        )}
        ${row(
          "--vk-color-surface-3",
          "hsl(--vk-gray-3)",
          "kbd, switch track, deep nested",
        )}
        ${row("--vk-color-border", "hsl(--vk-gray-2)", "All borders")}
        ${row("--vk-color-text", "hsl(--vk-gray-8)", "Body text")}
        ${row(
          "--vk-color-text-muted",
          "hsl(--vk-gray-4)",
          "Subtext, placeholders, labels",
        )}
        ${row(
          "--vk-color-link",
          "hsl(--vk-gold)",
          "Link color (alias of accent)",
        )}
        ${row(
          "--vk-color-accent",
          "hsl(--vk-gold)",
          "Primary accent — links, active states, focus rings",
        )}
        ${row(
          "--vk-color-accent-dim",
          "hsl(--vk-gold / 0.18)",
          "Accent tint for backgrounds",
        )}
        ${row("--vk-color-danger", "hsl(--vk-red)", "Error / destructive")}
        ${row("--vk-color-danger-dim", "hsl(--vk-red / 0.12)", "Danger tint")}
        ${row("--vk-color-success", "hsl(--vk-green)", "Positive / confirmed")}
        ${row(
          "--vk-color-success-dim",
          "hsl(--vk-green / 0.12)",
          "Success tint",
        )}
        ${row(
          "--vk-color-warning",
          "hsl(--vk-yellow)",
          "Caution / in-progress",
        )}
        ${row(
          "--vk-color-warning-dim",
          "hsl(--vk-yellow / 0.12)",
          "Warning tint",
        )}
        ${row("--vk-color-info", "hsl(--vk-blue)", "Neutral informational")}
        ${row("--vk-color-info-dim", "hsl(--vk-blue / 0.12)", "Info tint")}
      </tbody>
    </table>

    <h3>Typography</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${row(
          "--vk-font-body",
          "system-ui, -apple-system, 'Segoe UI', sans-serif",
          "Body font stack",
        )}
        ${row(
          "--vk-font-mono",
          "ui-monospace, 'Cascadia Code', 'Fira Code', monospace",
          "Code / mono font stack",
        )}
        ${row("--vk-font-size-sm", "0.875rem", "Small text, labels, nav")}
        ${row("--vk-font-size-base", "1rem", "Body text")}
        ${row("--vk-font-size-lg", "1.125rem", "Large text, hero subtitle")}
        ${row("--vk-font-size-xl", "1.25rem", "h4")}
        ${row("--vk-font-size-2xl", "1.5rem", "h3")}
        ${row("--vk-font-size-3xl", "2rem", "h2, card stat dd")}
        ${row("--vk-font-size-4xl", "2.5rem", "h1")}
        ${row("--vk-line-height", "1.6", "Body line height")}
        ${row("--vk-line-height-tight", "1.2", "Heading line height")}
      </tbody>
    </table>

    <h3>Spacing</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${row("--vk-space-xs", "0.25rem", "Tight gaps, marker margins")}
        ${row("--vk-space-sm", "0.5rem", "Component inner padding")}
        ${row("--vk-space-md", "1rem", "Standard spacing, paragraph margin")}
        ${row("--vk-space-lg", "1.5rem", "Section padding, card padding")}
        ${row("--vk-space-xl", "2.5rem", "Section margin, header block")}
        ${row("--vk-space-2xl", "4rem", "Hero padding, top-level gaps")}
      </tbody>
    </table>

    <h3>Radii</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${row(
          "--vk-radius-sm",
          "4px",
          "Tags, badges, marks, kbd, small inputs",
        )}
        ${row("--vk-radius-md", "8px", "Buttons, inputs, cards, dialogs")}
        ${row("--vk-radius-lg", "12px", "Dialog, large surfaces")}
        ${row(
          "--vk-radius-full",
          "9999px",
          "Pill buttons, switches, avatars, progress",
        )}
      </tbody>
    </table>

    <h3>Shadows</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${row(
          "--vk-shadow-sm",
          "0 1px 3px hsl(0 0% 0% / 0.08)",
          "Subtle elevation — range thumb",
        )}
        ${row(
          "--vk-shadow-md",
          "0 4px 12px hsl(0 0% 0% / 0.1)",
          "Dropdowns, popovers, lifted cards",
        )}
        ${row(
          "--vk-shadow-lg",
          "0 8px 30px hsl(0 0% 0% / 0.12)",
          "Dialogs, toasts",
        )}
      </tbody>
    </table>

    <h3>Easing</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${row(
          "--vk-ease-default",
          "cubic-bezier(0.4, 0, 0.2, 1)",
          "Standard motion — all transitions",
        )}
        ${row(
          "--vk-ease-bounce",
          "cubic-bezier(0.34, 1.56, 0.64, 1)",
          "Playful entrance — available for custom use",
        )}
      </tbody>
    </table>

    <h3>Z-index scale</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${row("--vk-z-dropdown", "100", "Dropdown menus, tooltips")}
        ${row("--vk-z-sticky", "200", "Sticky headers, floating elements")}
        ${row("--vk-z-modal", "300", "Modals, overlays")}
        ${row("--vk-z-toast", "400", "Toast notifications — always on top")}
      </tbody>
    </table>

    <h3>Config</h3>
    <p>
      Config variables propagate globally — changing one updates every component
      that uses it.
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
        ${row(
          "--vk-font-size-root",
          "100%",
          "font-size on <html> — scales all rem values across the page",
        )}
        ${row(
          "--vk-transition-speed",
          "0.15s",
          "All hover, focus, and color transitions",
        )}
        ${row(
          "--vk-transition-speed-slow",
          "0.2s",
          "Switch toggle slide, progress bar fill, accordion icon rotation",
        )}
        ${row(
          "--vk-animation-speed",
          "0.2s",
          "Dialog and overlay entrance keyframe duration",
        )}
        ${row("--vk-container-max-width", "72rem", "<main> max-width")}
        ${row(
          "--vk-sidebar-width",
          "200px",
          '[data-layout="sidebar"] first column width',
        )}
      </tbody>
    </table>
  </section>`;
}
