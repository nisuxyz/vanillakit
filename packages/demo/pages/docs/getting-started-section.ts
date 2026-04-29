import { html } from '@vanillakit/vanillakit';
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import {
  COUNTER,
  GETTING_STARTED_SNIPPET_1,
  GETTING_STARTED_SNIPPET_2,
  GETTING_STARTED_SNIPPET_3,
  GETTING_STARTED_SNIPPET_4,
} from "../../snippets";

export function GettingStartedSection() {
  return html`<section>
    <h2>Getting Started</h2>
    <p>
      vanillakit is a collection of standalone ES modules. No build step
      required — import from source and go. Works with any bundler (Vite,
      esbuild, etc.) or direct
      <code>&lt;script type="module"&gt;</code>.
    </p>

    <h3>Install</h3>
    <p>
      Grab the source from GitHub directly, or use a CDN like jsDelivr or
      esm.sh:
    </p>
    ${code(GETTING_STARTED_SNIPPET_1, "bash")}

    <p>Or import straight from a CDN — no install needed:</p>
    ${code(GETTING_STARTED_SNIPPET_2, "markup")}

    <h3>Quick setup</h3>
    <p>Create an <code>index.html</code> and a module entry point:</p>
    ${code(GETTING_STARTED_SNIPPET_3, "markup")}
    ${LiveEditor({
      sourceVariants: {
        html: `// app.js${COUNTER.html}`,
        vkml: `// app.js${COUNTER.vkml}`,
      },
      label: "app.js",
    })}
    <p style="font-size:0.875rem; color:var(--vk-color-text-muted);">
      Both <code>html</code> and <code>vkml</code> produce the same result. See
      <strong>Choosing a Syntax</strong> in the Concepts section for a full
      comparison.
    </p>

    <h3>Project structure</h3>
    <p>There's no required structure. The library is five files:</p>
    ${code(GETTING_STARTED_SNIPPET_4, "bash")}

    <p>
      Import what you need. Each module (except <code>reactive.js</code> and
      <code>html.js</code>) only depends on <code>signal.js</code>.
    </p>
  </section>`;
}
