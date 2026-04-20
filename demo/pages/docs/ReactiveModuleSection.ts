import { html } from "../../../src";
import { code } from "../../highlight";

export function ReactiveModuleSection() {
  return html`<section>
    <h2>reactive.js</h2>
    <p>
      Deep reactive proxies backed by signals. Mutate normally — changes
      propagate automatically.
    </p>

    <h3>reactive(target)</h3>
    <p>Wraps a plain object/array in a deep reactive proxy.</p>
    ${code(`import { reactive, effect } from "vanillakit";

const state = reactive({
  user: { name: "Ada", scores: [95, 87] },
});

effect(() => console.log(state.user.name)); // "Ada"
state.user.name = "Grace";                  // "Grace"
state.user.scores.push(92);                 // tracked`)}

    <h3>snapshot(obj)</h3>
    <p>Returns a deep plain-object copy. Useful for serialization.</p>

    <h3>toRaw(obj) / isReactive(obj)</h3>
    <p>Get the underlying raw object, or check if an object is reactive.</p>
  </section>`;
}
