import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";

export function ListsSection() {
  return html`<section>
    <h2>Lists &amp; Keys</h2>
    <p>
      Use <code>each()</code> for keyed list rendering. DOM nodes are reused by
      key across updates — input state, scroll position, and focus are
      preserved.
    </p>

    <h3>Basic list</h3>
    ${LiveEditor({
      source: `import { signal, each, html, css } from "vanillakit";

let nextId = 4;
const items = signal([
  { id: 1, label: "Alpha" },
  { id: 2, label: "Bravo" },
  { id: 3, label: "Charlie" },
]);

const itemStyle = css\`
  display: flex; align-items: center; gap: 8px;
  padding: 6px 10px; border-radius: 6px;
  background: var(--vk-color-bg); border: 1px solid var(--vk-color-border);
  font-size: 0.85rem; font-family: monospace;
\`;

const names = ["Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India"];

document.body.append(html\`
  <div>
    <div style="display:flex; gap:8px; margin-bottom:12px;">
      <button onclick=\${() => items(l =>
        [...l, { id: nextId++, label: names[(nextId - 5) % names.length] }]
      )}>Add item</button>
      <button onclick=\${() => items(l => [...l].reverse())}>Reverse</button>
      <button onclick=\${() => items(l => l.slice(0, -1))}>Remove last</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:6px;">
      \${each(items, i => i.id, (itemSig, indexSig) =>
        html\`<div class=\${itemStyle}>
          <span style="color:gray;">#\${indexSig}</span>
          <span>\${() => itemSig().label}</span>
          <button style="margin-left:auto; background:none; border:none; color:gray; cursor:pointer;"
            onclick=\${() => items(l => l.filter(i => i.id !== itemSig().id))}>✕</button>
        </div>\`,
      )}
    </div>
  </div>
\`);`,
      label: "Keyed list — add, remove, reverse",
    })}

    <h3>Adding, removing, reordering</h3>
    <p>
      Mutate the signal array — <code>each()</code> diffs by key and
      moves/creates/removes DOM nodes efficiently.
    </p>
    ${code(`// Add
items(list => [...list, { id: 4, label: "Delta" }]);

// Remove
items(list => list.filter(i => i.id !== 2));

// Reorder (DOM nodes are moved, not recreated)
items(list => [...list].reverse());

// Update an item (the itemSig in the render function updates)
items(list => list.map(i =>
  i.id === 1 ? { ...i, label: "Updated" } : i
));`)}

    <h3>Why keys matter</h3>
    <p>
      Without keys, reordering a list destroys and recreates every DOM node.
      With keys, <code>each()</code> matches old and new items by key and reuses
      existing nodes — preserving input values, focus, animations, etc.
    </p>

    <h3>vs. React / Vue</h3>
    <p>
      React's <code>key</code> prop on <code>map()</code> and Vue's
      <code>:key</code> on <code>v-for</code> serve the same purpose.
      <code>each()</code> combines the list rendering and key matching into one
      call. Each item is passed as a signal, so individual item updates don't
      re-run the render for other items.
    </p>
  </section>`;
}
