import { html } from "../../../src";
import { code } from "../../highlight";

// ── API reference sections ─────────────────────────────────
export function SignalSection() {
  return html`<section>
    <h2>signal.js</h2>
    <p>
      Fine-grained reactivity primitives. Every other module builds on this.
    </p>

    <h3>signal(initial)</h3>
    <p>
      Creates a read/write signal. Call with no args to read (and track), call
      with a value to write.
    </p>
    ${code(`import { signal } from "vanillakit";

const count = signal(0);
count();           // read → 0
count(5);          // write → 5
count(n => n + 1); // update via function → 6
count.peek();      // read without tracking`)}

    <h3>computed(fn)</h3>
    <p>
      Derives a read-only signal. Re-evaluates only when dependencies change.
    </p>
    ${code(`import { signal, computed } from "vanillakit";

const a = signal(2), b = signal(3);
const sum = computed(() => a() + b());
sum(); // 5
a(10);
sum(); // 13`)}

    <h3>effect(fn)</h3>
    <p>
      Runs a side effect whenever dependencies change. Returns a dispose
      function.
    </p>
    ${code(`import { signal, effect } from "vanillakit";

const name = signal("world");
const dispose = effect(() => console.log("Hello, " + name() + "!"));
// logs: Hello, world!
name("vanillakit");
// logs: Hello, vanillakit!
dispose(); // stops tracking`)}

    <h3>batch(fn)</h3>
    <p>Groups writes — effects run once at the end.</p>
    ${code(`import { signal, effect, batch } from "vanillakit";

const a = signal(1), b = signal(2);
effect(() => console.log(a() + b())); // 3
batch(() => { a(10); b(20); });       // 30 (once)`)}

    <h3>untrack(fn)</h3>
    <p>Reads signals inside <code>fn</code> without creating a dependency.</p>
    ${code(`import { signal, effect, untrack } from "vanillakit";

const a = signal(1), b = signal(2);
effect(() => console.log(a() + untrack(() => b())));
b(99); // does NOT re-run
a(10); // re-runs, reads b's current value`)}
  </section>`;
}
