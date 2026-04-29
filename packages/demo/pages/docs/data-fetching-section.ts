import { html } from '@vanillakit/vanillakit';
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import {
  DATA_FETCHING_SNIPPET_1,
  DATA_FETCHING_SNIPPET_2,
  DATA_FETCHING_SNIPPET_3,
} from "../../snippets";

export function DataFetchingSection() {
  return html`<section>
    <h2>Data Fetching</h2>
    <p>
      There's no special data fetching API. Use <code>fetch</code> (or any HTTP
      client) and store results in signals. Effects react to loading/error/data
      state changes.
    </p>

    <h3>Basic fetch</h3>
    ${LiveEditor({
      sourceVariants: DATA_FETCHING_SNIPPET_1,
      label: "Basic fetch — load and display data",
    })}

    <h3>Reusable fetch helper</h3>
    <p>
      Wrap fetch logic in a function that returns signals — the vanillakit
      equivalent of a custom hook.
    </p>
    ${LiveEditor({
      sourceVariants: DATA_FETCHING_SNIPPET_2,
      label: "Reusable useFetch helper",
    })}

    <h3>Reactive refetch</h3>
    <p>Use <code>effect</code> to refetch when a signal changes:</p>
    ${code(DATA_FETCHING_SNIPPET_3)}
  </section>`;
}
