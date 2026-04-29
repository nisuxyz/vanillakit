import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import {
  EXAMPLES_SNIPPET_1,
  REACTIVITY_LIVE_1,
  REACTIVITY_LIVE_2,
  REACTIVITY_LIVE_3,
  REACTIVITY_SNIPPET_1,
  REACTIVITY_SNIPPET_2,
  SIGNAL_SNIPPET_4,
} from "../../snippets";

export function ReactivitySection() {
  return html`<section>
    <h2>Reactivity</h2>
    <p>
      Reactivity in vanillakit is built on signals — tiny observable values that
      automatically track which effects and computations depend on them.
    </p>

    <h3>Signals</h3>
    <p>
      A signal holds a value. Read it by calling with no args (and subscribe to
      changes). Write by calling with a value or updater function.
    </p>
    ${code(REACTIVITY_SNIPPET_1)}
    ${LiveEditor({
      sourceVariants: REACTIVITY_LIVE_1,
      label: "Signal — click to update, watch the effect log",
    })}

    <h3>Computed values</h3>
    <p>
      <code>computed</code> derives a read-only signal from others. It only
      recalculates when its dependencies change.
    </p>
    ${code(REACTIVITY_SNIPPET_2)}
    ${LiveEditor({
      sourceVariants: REACTIVITY_LIVE_2,
      label: "Computed — derived value updates automatically",
    })}

    <h3>Batching</h3>
    <p>
      Multiple signal writes inside <code>batch()</code> are grouped — effects
      run once at the end, not after each write.
    </p>
    ${code(SIGNAL_SNIPPET_4)}
    ${LiveEditor({
      sourceVariants: REACTIVITY_LIVE_3,
      label: "Batch — grouped writes, single recomputation",
    })}

    <h3>Reactive proxies</h3>
    <p>
      For complex state, <code>reactive()</code> wraps objects in deep proxies.
      Mutate normally — changes propagate automatically.
    </p>
    ${code(EXAMPLES_SNIPPET_1.typescript)}

    <h3>vs. React / Vue / Solid</h3>
    <p>
      If you're coming from React, signals replace <code>useState</code> and
      <code>useMemo</code>. From Vue, they replace <code>ref</code> and
      <code>computed</code>. The key difference: signals are standalone values,
      not tied to a component lifecycle. They work anywhere — module scope,
      inside functions, in event handlers.
    </p>
  </section>`;
}
