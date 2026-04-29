import { html } from "@vanillakit/vanillakit";
import * as UI from "@vanillakit/ui";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import {
  UI_BUTTON_VARIANTS,
  UI_BUTTON_SIZES,
  UI_BUTTON_DISABLED,
  UI_BUTTON_INTERACTIVE,
} from "../../snippets";

export function ButtonSection() {
  return html`<section>
    <h2>Button</h2>
    <p>
      A semantic <code>&lt;button&gt;</code> component with variant and size
      props. Styled with VanillaCSS tokens and composed with
      <code>cn()</code>.
    </p>

    <h3>Import</h3>
    ${code(
      `import { Button } from "@vanillakit/ui";`,
      "typescript",
    )}

    <h3>Variants</h3>
    <p>
      Four visual variants: <code>default</code> (accent fill),
      <code>outline</code> (border only), <code>ghost</code> (no border),
      and <code>danger</code> (destructive action).
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: UI_BUTTON_VARIANTS },
      label: "Button variants",
      sandboxEnv: { "@vanillakit/ui": UI },
    })}

    <h3>Sizes</h3>
    <p>
      Three sizes: <code>sm</code>, <code>md</code> (default), and
      <code>lg</code>. Padding and font-size scale with VanillaCSS spacing
      and typography tokens.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: UI_BUTTON_SIZES },
      label: "Button sizes",
      sandboxEnv: { "@vanillakit/ui": UI },
    })}

    <h3>Disabled</h3>
    <p>
      Set <code>disabled</code> to reduce opacity and prevent interaction.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: UI_BUTTON_DISABLED },
      label: "Disabled button",
      sandboxEnv: { "@vanillakit/ui": UI },
    })}

    <h3>Interactive</h3>
    <p>
      Pass <code>onclick</code> for click handling. Buttons use VanillaCSS
      transition tokens for smooth hover/active feedback.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: UI_BUTTON_INTERACTIVE },
      label: "Interactive button",
      sandboxEnv: { "@vanillakit/ui": UI },
    })}
  </section>`;
}