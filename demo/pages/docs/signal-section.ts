import { html } from "../../../src";
import { code } from "../../highlight";
import { SIGNAL_SNIPPET_1, SIGNAL_SNIPPET_2, SIGNAL_SNIPPET_3, SIGNAL_SNIPPET_4, SIGNAL_SNIPPET_5 } from "../../snippets.js";

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
    ${code(SIGNAL_SNIPPET_1)}

    <h3>computed(fn)</h3>
    <p>
      Derives a read-only signal. Re-evaluates only when dependencies change.
    </p>
    ${code(SIGNAL_SNIPPET_2)}

    <h3>effect(fn)</h3>
    <p>
      Runs a side effect whenever dependencies change. Returns a dispose
      function.
    </p>
    ${code(SIGNAL_SNIPPET_3)}

    <h3>batch(fn)</h3>
    <p>Groups writes — effects run once at the end.</p>
    ${code(SIGNAL_SNIPPET_4)}

    <h3>untrack(fn)</h3>
    <p>Reads signals inside <code>fn</code> without creating a dependency.</p>
    ${code(SIGNAL_SNIPPET_5)}
  </section>`;
}
