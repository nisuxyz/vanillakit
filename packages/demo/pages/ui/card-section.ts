import { html } from "@vanillakit/vanillakit";
import * as UI from "@vanillakit/ui";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import { UI_CARD_BASIC, UI_CARD_COMPOSED, UI_CARD_EXTEND } from "../../snippets";

export function CardSection() {
  return html`<section>
    <h2>Card</h2>
    <p>
      A flexible card container built with <code>cn()</code> and VanillaCSS
      tokens. Composes from sub-components: <code>Card</code>,
      <code>CardHeader</code>, <code>CardTitle</code>,
      <code>CardDescription</code>, <code>CardContent</code>, and
      <code>CardFooter</code>.
    </p>

    <h3>Import</h3>
    ${code(
      `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@vanillakit/ui";`,
      "typescript",
    )}

    <h3>Basic Card</h3>
    <p>
      A simple card with a title and content. All styling comes from
      VanillaCSS tokens via <code>cn()</code> — no CSS classes needed.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: UI_CARD_BASIC },
      label: "Basic Card",
      sandboxEnv: { "@vanillakit/ui": UI },
    })}

    <h3>Composed Card</h3>
    <p>
      Combine <code>CardHeader</code>, <code>CardTitle</code>,
      <code>CardDescription</code>, <code>CardContent</code>, and
      <code>CardFooter</code> for structured layouts.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: UI_CARD_COMPOSED },
      label: "Composed Card",
      sandboxEnv: { "@vanillakit/ui": UI },
    })}

    <h3>Extending with cn()</h3>
    <p>
      Pass additional <code>s-*</code> style attributes via the
      <code>s-cn</code> prop to customize any card sub-component.
      The <code>s-cn</code> prop accepts an array of <code>cn()</code> inputs
      that get merged with the component's default styles.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: UI_CARD_EXTEND },
      label: "Extended Card",
      sandboxEnv: { "@vanillakit/ui": UI },
    })}
  </section>`;
}