import { html } from '@vanillakit/vanillakit';
import { code } from "../../highlight";
import {
  CSS_MODULE_SNIPPET_1,
  STYLING_SNIPPET_2,
  STYLING_SNIPPET_3,
} from "../../snippets";

export function CssModuleSection() {
  return html`<section>
    <h2>css.js</h2>
    <p>
      Scoped CSS-in-JS using <code>CSSStyleSheet</code>. Supports nesting,
      <code>@media</code>, <code>@keyframes</code>.
    </p>

    <h3>css\`...\`</h3>
    <p>
      Returns a unique class name. <code>&amp;</code> is replaced by the
      generated selector.
    </p>
    ${code(CSS_MODULE_SNIPPET_1)}

    <h3>keyframes\`...\`</h3>
    <p>Creates a scoped <code>@keyframes</code> rule.</p>
    ${code(STYLING_SNIPPET_2)}

    <h3>globalCss\`...\` / cx(...classes)</h3>
    <p>Inject unscoped CSS or join class names (filtering falsy values).</p>
    ${code(STYLING_SNIPPET_3)}
  </section>`;
}
