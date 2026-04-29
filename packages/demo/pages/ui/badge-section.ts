import { html } from "@vanillakit/vanillakit";
import * as UI from "@vanillakit/ui";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import { UI_BADGE_VARIANTS, UI_BADGE_INTERACTIVE } from "../../snippets";

export function BadgeSection() {
  return html`<section>
    <h2>Badge</h2>
    <p>
      A small inline status indicator with six semantic variants. Built with
      <code>cn()</code> and VanillaCSS color tokens for consistent theming.
    </p>

    <h3>Import</h3>
    ${code(
      `import { Badge } from "@vanillakit/ui";`,
      "typescript",
    )}

    <h3>Variants</h3>
    <p>
      Six variants: <code>default</code> (accent), <code>outline</code>,
      <code>danger</code>, <code>success</code>, <code>warning</code>, and
      <code>info</code>. Each uses the corresponding VanillaCSS color token
      pair (dim background + vivid text + matching border).
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: UI_BADGE_VARIANTS },
      label: "Badge variants",
      sandboxEnv: { "@vanillakit/ui": UI },
    })}

    <h3>Interactive</h3>
    <p>
      Combine badges with signals for dynamic status labels. Extend with
      <code>cn()</code> for custom spacing or overrides.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: UI_BADGE_INTERACTIVE },
      label: "Interactive badges",
      sandboxEnv: { "@vanillakit/ui": UI },
    })}
  </section>`;
}