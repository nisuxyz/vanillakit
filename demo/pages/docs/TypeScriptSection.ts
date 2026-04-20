import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import { TYPED_COUNTER } from "../../snippets";

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
      source: TYPED_COUNTER,
      label: "Counter component with TypeScript types",
    })}
    ${code(
      `import { signal } from "vanillakit";
import type { Signal, ReadonlySignal } from "vanillakit/signal.js";

const count: Signal<number> = signal(0);`,
      "typescript",
    )}

    <p>
      If you're writing <code>.ts</code> files, make sure your
      <code>tsconfig.json</code> has
      <code>"moduleResolution": "bundler"</code> and
      <code>"allowImportingTsExtensions": true</code> (already the default with
      Vite).
    </p>
    ${code(
      `{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowJs": true,
    "checkJs": true,
    "noEmit": true,
    "allowImportingTsExtensions": true,
    "strict": true,
    "lib": ["ESNext", "DOM", "DOM.Iterable"]
  }
}`,
      "javascript",
    )}

    <h3>HMR with Vite</h3>
    <p>A minimal <code>vite.config.js</code>:</p>
    ${code(`import { defineConfig } from "vite";

export default defineConfig({
  root: "demo",
  base: "./",
});`)}

    <h3>Production builds</h3>
    <p>
      <code>vite build</code> produces a single minified JS bundle. The entire
      library plus this full demo app compiles to ~25 KB gzipped.
    </p>
    ${code(
      `npx vite build
# output in dist/ (or wherever outDir points)`,
      "bash",
    )}
  </section>`;
}
