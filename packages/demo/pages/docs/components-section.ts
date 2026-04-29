import { html } from '@vanillakit/vanillakit';
import { LiveEditor } from "../../components/LiveEditor";
import {
  COUNTER,
  DIRECT_CHILDREN,
  PROPS,
  PROPS_CHILDREN,
  SIGNAL_PROPS,
} from "../../snippets";

// ── Concept sections ───────────────────────────────────────
export function ComponentsSection() {
  return html`<section>
    <h2>Components</h2>
    <p>
      There's no special component API. A component is just a function that
      returns a DOM node. Call it, get a node, append it wherever you want.
    </p>

    ${LiveEditor({
      sourceVariants: COUNTER,
      label: "Counter component",
    })}

    <h3>Passing data (props)</h3>
    <p>
      Props are just function arguments. Pass signals for reactive data, or
      plain values for static data.
    </p>

    ${LiveEditor({
      sourceVariants: PROPS,
      label: "UserCard component",
    })}

    <h3>Reactive props</h3>
    <p>
      Pass signals as props for reactive data flow. The child component updates
      automatically when the parent signal changes — no re-rendering, no prop
      diffing.
    </p>

    ${LiveEditor({
      sourceVariants: SIGNAL_PROPS,
      label: "Reactive props — type a name or pick a color",
    })}

    <h3>Children / composition</h3>
    <p>
      Since components return DOM nodes, compose them by nesting in
      <code>html\`\`</code>:
    </p>

    ${LiveEditor({
      sourceVariants: DIRECT_CHILDREN,
      label: "Layout component with children",
    })}

    <p>Or pass children as arguments:</p>

    ${LiveEditor({
      sourceVariants: PROPS_CHILDREN,
      label: "Direct children via arguments",
    })}
  </section>`;
}
