import { html } from '@vanillakit/vanillakit';
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import {
  STYLING_LIVE_1,
  STYLING_LIVE_2,
  STYLING_LIVE_3,
  STYLING_SNIPPET_1,
  STYLING_SNIPPET_2,
  STYLING_SNIPPET_3,
} from "../../snippets.js";

export function StylingSection() {
  return html`<section>
    <h2>Styling</h2>
    <p>
      vanillakit includes a CSS-in-JS engine. <code>css\`\`</code> generates
      scoped class names, <code>keyframes\`\`</code> creates animations, and
      <code>globalCss\`\`</code> injects global styles. You can also use
      external CSS, Tailwind, or any other approach.
    </p>

    <h3>Scoped styles</h3>
    ${LiveEditor({
      sourceVariants: STYLING_LIVE_1,
      label: "Scoped CSS — hover the card",
    })}

    <h3>Dynamic styles</h3>
    <p>
      For styles that change based on signals, use a reactive
      <code>class</code> attribute or inline <code>style</code>:
    </p>
    ${LiveEditor({
      sourceVariants: STYLING_SNIPPET_1,
      label: "Reactive class and inline style",
    })}
    ${LiveEditor({
      sourceVariants: STYLING_LIVE_2,
      label: "Dynamic styles — drag the slider",
    })}

    <h3>Animations</h3>
    ${code(STYLING_SNIPPET_2)}
    ${LiveEditor({
      sourceVariants: STYLING_LIVE_3,
      label: "Keyframes animation",
    })}

    <h3>Combining class names</h3>
    <p><code>cx()</code> joins class names, filtering out falsy values:</p>
    ${code(STYLING_SNIPPET_3)}

    <h3>vs. React / Vue</h3>
    <p>
      React uses CSS modules, styled-components, or Tailwind. Vue has
      <code>&lt;style scoped&gt;</code>. vanillakit's <code>css\`\`</code> is
      closest to styled-components but returns a class name string instead of
      wrapping components.
    </p>
  </section>`;
}
