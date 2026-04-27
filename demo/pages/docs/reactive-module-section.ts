import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import { EXAMPLES_SNIPPET_1 } from "../../snippets";

export function ReactiveModuleSection() {
  return html`<section>
    <h2>reactive.js</h2>
    <p>
      Deep reactive proxies backed by signals. Mutate normally — changes
      propagate automatically.
    </p>

    <h3>reactive(target)</h3>
    <p>Wraps a plain object/array in a deep reactive proxy.</p>
    ${LiveEditor({
      sourceVariants: EXAMPLES_SNIPPET_1,
      label: "Reactive object — mutate properties and arrays naturally",
    })}

    <h3>snapshot(obj)</h3>
    <p>Returns a deep plain-object copy. Useful for serialization.</p>

    <h3>toRaw(obj) / isReactive(obj)</h3>
    <p>Get the underlying raw object, or check if an object is reactive.</p>
  </section>`;
}
