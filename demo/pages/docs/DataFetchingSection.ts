import { html } from "../../../src";
import { code } from "../../highlight";

export function DataFetchingSection() {
  return html`<section>
    <h2>Data Fetching</h2>
    <p>
      There's no special data fetching API. Use <code>fetch</code> (or any HTTP
      client) and store results in signals. Effects react to loading/error/data
      state changes.
    </p>

    <h3>Basic fetch</h3>
    ${code(`import { signal, html } from "vanillakit";

const users = signal([]);
const loading = signal(true);
const error = signal(null);

fetch("/api/users")
  .then(r => r.json())
  .then(data => { users(data); loading(false); })
  .catch(err => { error(err.message); loading(false); });

document.body.append(html\`
  <div>
    \${() => {
      if (loading()) return html\`<p>Loading...</p>\`;
      if (error()) return html\`<p style="color:red">\${error()}</p>\`;
      return html\`<ul>\${() => users().map(u => html\`<li>\${u.name}</li>\`)}</ul>\`;
    }}
  </div>
\`);`)}

    <h3>Reusable fetch helper</h3>
    <p>
      Wrap fetch logic in a function that returns signals — the vanillakit
      equivalent of a custom hook.
    </p>
    ${code(`function useFetch(url) {
  const data = signal(null);
  const loading = signal(true);
  const error = signal(null);

  fetch(url)
    .then(r => r.json())
    .then(d => { data(d); loading(false); })
    .catch(e => { error(e.message); loading(false); });

  return { data, loading, error };
}

// Use it anywhere
const { data: todos, loading } = useFetch("/api/todos");

document.body.append(html\`
  <div>
    \${() => loading()
      ? html\`<p>Loading...</p>\`
      : html\`<ul>
          \${() => todos().map(t => html\`<li>\${t.text}</li>\`)}
        </ul>\`
    }
  </div>
\`);`)}

    <h3>Reactive refetch</h3>
    <p>Use <code>effect</code> to refetch when a signal changes:</p>
    ${code(`import { signal, effect } from "vanillakit";

const page = signal(1);
const items = signal([]);

effect(() => {
  const p = page();
  fetch(\`/api/items?page=\${p}\`)
    .then(r => r.json())
    .then(data => items(data));
});

// Changing page triggers a refetch
page(2);`)}
  </section>`;
}
