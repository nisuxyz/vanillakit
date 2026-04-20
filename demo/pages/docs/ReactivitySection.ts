import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";

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
    ${code(`import { signal, effect } from "vanillakit";

const count = signal(0);

// Reading inside an effect creates a subscription
effect(() => {
  console.log("count is", count());
});

count(1);          // effect re-runs → "count is 1"
count(n => n + 1); // effect re-runs → "count is 2"`)} ${LiveEditor({
      source: `import { signal, effect, html, css, cx } from "vanillakit";

const count = signal(0);
const log = signal([]);

effect(() => {
  const v = count();
  log(l => [...l.slice(-4), \`count is \${v}\`]);
});

document.body.append(html\`
  <div>
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
      <button onclick=\${() => count(n => n + 1)}>+1</button>
      <button onclick=\${() => count(0)}>Reset</button>
      <span style="font-family:monospace;">count = \${count}</span>
    </div>
    <div style="font-family:monospace; font-size:0.8rem; color:gray; line-height:1.6;">
      \${() => log().map(l => html\`<div>→ \${l}</div>\`)}
    </div>
  </div>
\`);`,
      label: "Signal — click to update, watch the effect log",
    })}

    <h3>Computed values</h3>
    <p>
      <code>computed</code> derives a read-only signal from others. It only
      recalculates when its dependencies change.
    </p>
    ${code(`import { signal, computed } from "vanillakit";

const price = signal(10);
const qty = signal(3);
const total = computed(() => price() * qty());

total(); // 30
qty(5);
total(); // 50`)} ${LiveEditor({
      source: `import { signal, computed, html } from "vanillakit";

const price = signal(10);
const qty = signal(3);
const total = computed(() => price() * qty());

document.body.append(html\`
  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
    <label>Price:
      <input type="number" value=\${() => price()}
        oninput=\${(e) => price(+e.target.value)} style="width:80px;" />
    </label>
    <label>Qty:
      <input type="number" value=\${() => qty()}
        oninput=\${(e) => qty(+e.target.value)} style="width:80px;" />
    </label>
    <span style="font-weight:700;">Total: $\${total}</span>
  </div>
\`);`,
      label: "Computed — derived value updates automatically",
    })}

    <h3>Batching</h3>
    <p>
      Multiple signal writes inside <code>batch()</code> are grouped — effects
      run once at the end, not after each write.
    </p>
    ${code(`import { signal, effect, batch } from "vanillakit";

const a = signal(1), b = signal(2);
effect(() => console.log(a() + b()));
// logs: 3

batch(() => { a(10); b(20); });
// logs: 30 (once, not twice)`)} ${LiveEditor({
      source: `import { signal, computed, batch, html } from "vanillakit";

const a = signal(1), b = signal(2);
const runCount = signal(0);
const sum = computed(() => { runCount(n => n + 1); return a() + b(); });

document.body.append(html\`
  <div>
    <div style="margin-bottom:10px; font-family:monospace;">
      a=\${a} b=\${b} sum=\${sum} (computed ran \${runCount}×)
    </div>
    <button onclick=\${() => { a(n => n + 1); b(n => n + 1); }}>
      a++ b++ (no batch, 2 runs)
    </button>
    <button onclick=\${() => batch(() => { a(n => n + 1); b(n => n + 1); })}>
      a++ b++ (batched, 1 run)
    </button>
    <button onclick=\${() => { a(1); b(2); runCount(0); }}>Reset</button>
  </div>
\`);`,
      label: "Batch — grouped writes, single recomputation",
    })}

    <h3>Reactive proxies</h3>
    <p>
      For complex state, <code>reactive()</code> wraps objects in deep proxies.
      Mutate normally — changes propagate automatically.
    </p>
    ${code(`import { reactive, effect, snapshot } from "vanillakit";

const state = reactive({
  user: { name: "Ada", scores: [95, 87] },
});

effect(() => console.log(state.user.name));
// logs: "Ada"

state.user.name = "Grace";
// logs: "Grace"

state.user.scores.push(92); // also tracked`)}

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
