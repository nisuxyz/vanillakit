import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { CONDITIONAL_SNIPPET_1, CONDITIONAL_SNIPPET_2 } from "../../snippets";

export function ConditionalSection() {
  return html`<section>
    <h2>Conditional Rendering</h2>
    <p>
      Use a function that returns different nodes (or
      <code>null</code>) based on signal values. The DOM updates surgically when
      conditions change. Works identically with <code>html</code> and
      <code>vkml</code> — switch tabs below to compare.
    </p>

    <h3>Show / hide</h3>
    ${LiveEditor({
      sourceVariants: CONDITIONAL_SNIPPET_1,
      label: "Show/hide — toggle login state",
    })}

    <h3>Multiple conditions</h3>
    ${LiveEditor({
      sourceVariants: CONDITIONAL_SNIPPET_2,
      label: "Switch — click buttons to change status",
    })}

    <h3>vs. React / Vue</h3>
    <p>
      React uses JSX ternaries or early returns. Vue uses <code>v-if</code> /
      <code>v-else</code>. vanillakit uses plain JS functions — return a DOM
      node or <code>null</code>. There's no template syntax to learn.
    </p>
  </section>`;
}
