import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import { COUNTER } from "../../snippets";

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
    ${code(
      `# clone the repo
git clone https://github.com/nisuxyz/vanillakit.git
cp -r vanillakit/src ./vanillakit`,
      "bash",
    )}

    <p>Or import straight from a CDN — no install needed:</p>
    ${code(
      `<script type="module">
  import { signal, html, css } from "https://esm.sh/gh/nisuxyz/vanillakit/src/index.js";

  // ready to go
</script>`,
      "markup",
    )}

    <h3>Quick setup</h3>
    <p>Create an <code>index.html</code> and a module entry point:</p>
    ${code(
      `<!doctype html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="./app.js"></script>
  </body>
</html>`,
      "markup",
    )}
    ${LiveEditor({
      source: `// app.js${COUNTER}`,
      label: "app.js",
    })}

    <h3>Project structure</h3>
    <p>There's no required structure. The library is five files:</p>
    ${code(
      `src/
  signal.js    — signal, computed, effect, batch, untrack
  reactive.js  — reactive, toRaw, isReactive, snapshot
  html.js      — html, each
  css.js       — css, keyframes, globalCss, cx
  router.js    — createRouter, navigate, navLink, currentPath, routeParams
  index.js     — re-exports everything`,
      "bash",
    )}

    <p>
      Import what you need. Each module (except <code>reactive.js</code> and
      <code>html.js</code>) only depends on <code>signal.js</code>.
    </p>
  </section>`;
}
