import { html } from '@vanillakit/vanillakit';
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import { LISTS_LIVE_SNIPPET,LISTS_SNIPPET_1 } from "../../snippets";

export function ListsSection() {
  return html`<section>
    <h2>Lists &amp; Keys</h2>
    <p>
      Use <code>each()</code> for keyed list rendering. DOM nodes are reused by
      key across updates — input state, scroll position, and focus are
      preserved. Switch tabs to see the <code>html</code> and <code>vkml</code>
      equivalents.
    </p>

    <h3>Basic list</h3>
    ${LiveEditor({
      sourceVariants: LISTS_LIVE_SNIPPET,
      label: "Keyed list — add, remove, reverse",
    })}

    <h3>Adding, removing, reordering</h3>
    <p>
      Mutate the signal array — <code>each()</code> diffs by key and
      moves/creates/removes DOM nodes efficiently.
    </p>
    ${code(LISTS_SNIPPET_1)}

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
