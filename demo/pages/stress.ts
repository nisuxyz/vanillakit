import { signal, each, html, css, cx } from "../../src/index.js";
import type { Signal, ReadonlySignal } from "../../src/signal.js";
import {
  pageClass, headingClass, subtitleClass,
  btnBase, btnPrimary, btnGhost, btnDanger, btnInfo, btnSuccess,
  inputClass, badgeClass,
  detailsSummary,
} from "../styles.ts";
import { code } from "../highlight.ts";

const stressItemClass = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 6px;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;
  &:hover {
    border-color: var(--accent);
  }
  .idx {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--text-muted);
    min-width: 24px;
  }
  .name {
    flex: 1;
    font-weight: 500;
  }
  .score {
    font-family: var(--mono);
    font-size: 0.9rem;
  }
  input {
    width: 60px;
  }
`;
const btnRow = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
`;
const logClass = css`
  font-family: var(--mono);
  font-size: 0.72rem;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px;
  max-height: 200px;
  overflow-y: auto;
  color: var(--text-muted);
  line-height: 1.8;
`;

const stressLog = signal<string[]>([]);
function log(msg: string) {
  stressLog((l) => [
    `${performance.now().toFixed(1)}ms — ${msg}`,
    ...l.slice(0, 19),
  ]);
}

let stressNextId = 1;
const NAMES = [
  "Alice", "Bob", "Carol", "Dan", "Eve", "Frank",
  "Grace", "Hank", "Iris", "Jack", "Kara", "Leo",
  "Mia", "Nico", "Olga", "Pete",
];
function randItem() {
  return {
    id: stressNextId++,
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
    score: Math.floor(Math.random() * 100),
  };
}

const stressItems = signal(Array.from({ length: 8 }, randItem));

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function StressItem(itemSig: Signal<{ id: number; name: string; score: number }>, indexSig: ReadonlySignal<number>) {
  return html`<div class=${stressItemClass}>
    <span class="idx">${() => indexSig()}</span>
    <span class="name">${() => itemSig().name}</span>
    <span
      class="score"
      style=${() =>
      `color: ${itemSig().score > 70 ? "var(--success)" : itemSig().score > 40 ? "var(--accent)" : "var(--danger)"}`}
      >${() => itemSig().score}</span
    >
    <input
      class=${inputClass}
      style="width:80px;padding:6px 8px;font-size:0.8rem;"
      placeholder="type here…"
    />
    <button
      class=${cx(btnBase, btnDanger)}
      style="padding:4px 8px;font-size:0.7rem;"
      onclick=${() =>
      stressItems((l) => l.filter((x) => x.id !== itemSig().id))}
    >
      ✕
    </button>
  </div>`;
}

export function ListStressPage() {
  return html`<div class=${pageClass}>
    <h1 class=${headingClass}>List Stress Test</h1>
    <p class=${subtitleClass}>
      Exercises keyed reconciliation: shuffle, reverse, add, remove. Type
      in the inputs to verify DOM preservation.
    </p>

    <div class=${btnRow}>
      <button
        class=${cx(btnBase, btnPrimary)}
        onclick=${() => {
      stressItems(shuffle);
      log("Shuffled");
    }}
      >
        Shuffle
      </button>
      <button
        class=${cx(btnBase, btnInfo)}
        onclick=${() => {
      stressItems((l) => [...l].reverse());
      log("Reversed");
    }}
      >
        Reverse
      </button>
      <button
        class=${cx(btnBase, btnSuccess)}
        onclick=${() => {
      stressItems((l) => [...l, randItem()]);
      log("Added 1");
    }}
      >
        + Add 1
      </button>
      <button
        class=${cx(btnBase, btnSuccess)}
        onclick=${() => {
      const n = Array.from({ length: 5 }, randItem);
      stressItems((l) => [...l, ...n]);
      log("Added 5");
    }}
      >
        + Add 5
      </button>
      <button
        class=${cx(btnBase, btnDanger)}
        onclick=${() => {
      stressItems((l) => {
        if (!l.length) return l;
        const i = Math.floor(Math.random() * l.length);
        return l.filter((_, j) => j !== i);
      });
      log("Removed random");
    }}
      >
        - Remove random
      </button>
      <button
        class=${cx(btnBase, btnGhost)}
        onclick=${() => {
      stressItems((l) =>
        l.map((x) => ({ ...x, score: Math.floor(Math.random() * 100) })),
      );
      log("Randomized scores");
    }}
      >
        Randomize scores
      </button>
      <button
        class=${cx(btnBase, btnGhost)}
        onclick=${() => {
      stressItems((l) =>
        [...l].sort((a, b) => a.name.localeCompare(b.name)),
      );
      log("Sorted by name");
    }}
      >
        Sort A→Z
      </button>
      <button
        class=${cx(btnBase, btnGhost)}
        onclick=${() => {
      stressItems((l) => [...l].sort((a, b) => b.score - a.score));
      log("Sorted by score");
    }}
      >
        Sort by score
      </button>
      <button
        class=${cx(btnBase, btnDanger)}
        onclick=${() => {
      stressItems([]);
      log("Cleared all");
    }}
      >
        Clear
      </button>
      <button
        class=${cx(btnBase, btnPrimary)}
        onclick=${() => {
      stressItems(Array.from({ length: 50 }, randItem));
      log("Reset to 50 items");
    }}
      >
        Reset 50
      </button>
    </div>

    <div
      style="display:flex;gap:8px;margin-bottom:16px;align-items:center;"
    >
      <span
        class=${badgeClass}
        style="background:var(--accent-dim);color:var(--accent);"
        >${() => stressItems().length} items</span
      >
      <span style="font-size:0.8rem;color:var(--text-muted);"
        >Type in any input, then shuffle — your text stays because each()
        reuses DOM nodes by key.</span
      >
    </div>

    <div style="margin-bottom: 24px;">
      ${each(stressItems, (item) => item.id, StressItem)}
      ${() =>
      stressItems().length === 0
        ? html`<div
              style="text-align:center;padding:32px;color:var(--text-muted);font-style:italic;"
            >
              List is empty. Add some items!
            </div>`
        : null}
    </div>

    <h3 style="font-size:0.9rem;font-weight:600;margin-bottom:8px;">
      Operation Log
    </h3>
    <div class=${logClass}>
      ${() =>
      stressLog().length === 0
        ? "No operations yet…"
        : stressLog().join("\n")}
    </div>
    <details>
      <summary class=${detailsSummary}>View source — each() keyed reconciliation</summary>
      ${code(`// each() reuses DOM nodes by key across mutations
const items = signal(Array.from({ length: 8 }, randItem));

// Render — each item gets a Signal<T> and ReadonlySignal<number>
html\`<div>
  \${each(items, item => item.id, (itemSig, indexSig) =>
    html\`<div>
      <span>\${() => indexSig()}</span>
      <span>\${() => itemSig().name}</span>
      <span>\${() => itemSig().score}</span>
      <input placeholder="type here…" />
    </div>\`
  )}
</div>\`;

// Mutations — DOM nodes with matching keys are reused, not recreated.
// Text typed into inputs persists across shuffle/reverse/sort.
items(shuffle);                              // reorder
items(l => [...l].reverse());                // reverse
items(l => [...l, randItem()]);              // append
items(l => l.filter(x => x.id !== target));  // remove
items(l => [...l].sort((a, b) =>             // sort
  a.name.localeCompare(b.name)
));`)}
    </details>
  </div>`;
}
