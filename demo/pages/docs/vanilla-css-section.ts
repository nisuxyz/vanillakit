import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import {
  VANILLA_CSS_SNIPPET_1,
  VANILLA_CSS_SNIPPET_2,
  VANILLA_CSS_SNIPPET_3,
  VANILLA_CSS_SNIPPET_4,
  VANILLA_CSS_SNIPPET_5,
} from "../../snippets.js";

export function VanillaCssSection() {
  return html`<section>
    <h2>VanillaCSS</h2>
    <p>
      VanillaCSS is a classless CSS framework included with vanillakit. It
      styles semantic HTML automatically — no class names needed. Use optional
      <code>data-*</code> attributes and ARIA roles to access components,
      variants, and interactive patterns.
    </p>
    <p>
      VanillaCSS ships as plain CSS files. You can use it with or without the
      vanillakit JavaScript library.
    </p>

    <h3>With vanillakit</h3>
    <p>
      Call <code>initVanillaCss()</code> once at app startup. It injects the CSS
      into the page via an adopted stylesheet.
    </p>
    ${LiveEditor({
      sourceVariants: VANILLA_CSS_SNIPPET_1,
      label: "initVanillaCss + themeToggle",
    })}

    <h3>Standalone — no JavaScript required</h3>
    <p>
      Copy <code>src/vanillacss/</code> to your project and link
      <code>vanilla.css</code>. The entire framework is plain CSS — no build
      step, no JavaScript dependency.
    </p>
    ${code(VANILLA_CSS_SNIPPET_2, "markup")}

    <p>Or import in your own CSS:</p>
    ${code(VANILLA_CSS_SNIPPET_3, "css")}

    <h3>Layer architecture</h3>
    <p>
      Every VanillaCSS rule lives inside a named <code>@layer</code> sub-layer.
      Your own styles — even ones with low specificity — automatically override
      VanillaCSS because unlayered declarations beat layered ones at equal
      specificity. No <code>!important</code>, no specificity fights.
    </p>
    ${code(VANILLA_CSS_SNIPPET_4, "css")}

    <p>Override any individual layer precisely:</p>
    ${code(VANILLA_CSS_SNIPPET_5, "css")}
  </section>`;
}
