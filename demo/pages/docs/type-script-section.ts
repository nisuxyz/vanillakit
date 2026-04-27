import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import { COUNTER, TYPE_SCRIPT_SNIPPET_1, TYPE_SCRIPT_SNIPPET_2, TYPE_SCRIPT_SNIPPET_3, TYPE_SCRIPT_SNIPPET_4 } from "../../snippets";

// ── Section renderers ──────────────────────────────────────
export function TypeScriptSection() {
  return html`<section>
    <h2>TypeScript &amp; Tooling</h2>

    <h3>TypeScript</h3>
    <p>
      The source is plain JS with JSDoc type annotations, so it works out of the
      box with TypeScript — no <code>@types</code> package needed. Import the
      types directly:
    </p>
    ${LiveEditor({
      sourceVariants: COUNTER,
      label: "Counter component with TypeScript types",
    })}
    ${code(TYPE_SCRIPT_SNIPPET_1, "typescript")}

    <p>
      If you're writing <code>.ts</code> files, make sure your
      <code>tsconfig.json</code> has
      <code>"moduleResolution": "bundler"</code> and
      <code>"allowImportingTsExtensions": true</code> (already the default with
      Vite).
    </p>
    ${code(TYPE_SCRIPT_SNIPPET_2, "javascript")}

    <h3>HMR with Vite</h3>
    <p>A minimal <code>vite.config.js</code>:</p>
    ${code(TYPE_SCRIPT_SNIPPET_3)}

    <h3>Production builds</h3>
    <p>
      <code>vite build</code> produces a single minified JS bundle. The entire
      library plus this full demo app compiles to ~25 KB gzipped.
    </p>
    ${code(TYPE_SCRIPT_SNIPPET_4, "bash")}
  </section>`;
}
