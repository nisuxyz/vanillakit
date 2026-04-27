import { signal, each, html, css } from "../../../src/index.js";
import type { Signal, ReadonlySignal } from "../../../src/signal.js";
import { subtitleClass } from "../../styles.ts";
import { code } from "../../highlight.ts";
import { EXAMPLES_SNIPPET_4 } from "../../snippets.ts";
import { LiveEditor } from "../../components/LiveEditor.ts";

const stressItemClass = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-radius: 8px;
  margin-bottom: 6px;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;
  &:hover {
    border-color: var(--vk-color-accent);
  }
  .idx {
    font-family: var(--vk-font-mono);
    font-size: 0.75rem;
    color: var(--vk-color-text-muted);
    min-width: 24px;
  }
  .name {
    flex: 1;
    font-weight: 500;
  }
  .score {
    font-family: var(--vk-font-mono);
    font-size: 0.9rem;
  }
  input {
    width: 60px;
  }
`;
const logClass = css`
  font-family: var(--vk-font-mono);
  font-size: 0.72rem;
  background: var(--vk-color-surface-2);
  border: 1px solid var(--vk-color-border);
  border-radius: 8px;
  padding: 12px;
  max-height: 200px;
  overflow-y: auto;
  color: var(--vk-color-text-muted);
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
  "Alice",
  "Bob",
  "Carol",
  "Dan",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
  "Iris",
  "Jack",
  "Kara",
  "Leo",
  "Mia",
  "Nico",
  "Olga",
  "Pete",
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

function StressItem(
  itemSig: Signal<{ id: number; name: string; score: number }>,
  indexSig: ReadonlySignal<number>,
) {
  return html`<li class=${stressItemClass}>
    <span class="idx">${() => indexSig()}</span>
    <span class="name">${() => itemSig().name}</span>
    <span
      class="score"
      style=${() =>
        `color: ${itemSig().score > 70 ? "var(--vk-color-success)" : itemSig().score > 40 ? "var(--vk-color-accent)" : "var(--vk-color-danger)"}`}
      >${() => itemSig().score}</span
    >
    <input data-size="sm" style="width:80px;" placeholder="type here…" />
    <button
      data-variant="danger"
      data-size="sm"
      onclick=${() =>
        stressItems((l) => l.filter((x) => x.id !== itemSig().id))}
    >
      ✕
    </button>
  </li>`;
}

export function StressSection() {
  return html`<section>
    <h2>List Stress Test</h2>
    <p class=${subtitleClass}>
      Exercises keyed reconciliation: shuffle, reverse, add, remove. Type in the
      inputs to verify DOM preservation.
    </p>

    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
      <button
        onclick=${() => {
          stressItems(shuffle);
          log("Shuffled");
        }}
      >
        Shuffle
      </button>
      <button
        data-variant="info"
        onclick=${() => {
          stressItems((l) => [...l].reverse());
          log("Reversed");
        }}
      >
        Reverse
      </button>
      <button
        data-variant="success"
        onclick=${() => {
          stressItems((l) => [...l, randItem()]);
          log("Added 1");
        }}
      >
        + Add 1
      </button>
      <button
        data-variant="success"
        onclick=${() => {
          const n = Array.from({ length: 5 }, randItem);
          stressItems((l) => [...l, ...n]);
          log("Added 5");
        }}
      >
        + Add 5
      </button>
      <button
        data-variant="danger"
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
        data-ghost
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
        data-ghost
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
        data-ghost
        onclick=${() => {
          stressItems((l) => [...l].sort((a, b) => b.score - a.score));
          log("Sorted by score");
        }}
      >
        Sort by score
      </button>
      <button
        data-variant="danger"
        onclick=${() => {
          stressItems([]);
          log("Cleared all");
        }}
      >
        Clear
      </button>
      <button
        onclick=${() => {
          stressItems(Array.from({ length: 50 }, randItem));
          log("Reset to 50 items");
        }}
      >
        Reset 50
      </button>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;align-items:center;">
      <span data-badge data-variant="primary"
        >${() => stressItems().length} items</span
      >
      <small
        >Type in any input, then shuffle — your text stays because each() reuses
        DOM nodes by key.</small
      >
    </div>

    <ul style="list-style:none;padding:0;margin-bottom:24px;">
      ${each(stressItems, (item) => item.id, StressItem)}
      ${() =>
        stressItems().length === 0
          ? html`<div data-empty>List is empty. Add some items!</div>`
          : null}
    </ul>

    <h3>Operation Log</h3>
    <div class=${logClass}>
      ${() =>
        stressLog().length === 0
          ? "No operations yet…"
          : stressLog().join("\n")}
    </div>
    <details>
      <summary>View source — each() keyed reconciliation</summary>
      ${LiveEditor({ sourceVariants: EXAMPLES_SNIPPET_4 })}
    </details>
  </section>`;
}
