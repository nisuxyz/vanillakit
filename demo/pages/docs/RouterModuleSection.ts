import { html } from "../../../src";
import { code } from "../../highlight";

export function RouterModuleSection() {
  return html`<section>
    <h2>router.js</h2>
    <p>
      SPA router supporting both hash and History API modes. Routes are
      functions returning DOM nodes.
    </p>

    <h3>initRouter(config)</h3>
    <p>
      Configures the routing mode. Call once before rendering. Defaults to
      <code>"hash"</code> mode if not called.
    </p>
    ${code(`import { initRouter } from "vanillakit";

// Hash mode (default): URLs like /#/about
initRouter({ mode: "hash" });

// History mode: URLs like /about (requires server-side fallback)
initRouter({ mode: "history" });`)}

    <h3>createRouter(routeMap)</h3>
    <p>
      Maps path patterns to handlers. Supports <code>:param</code> and
      <code>*</code> catch-all.
    </p>
    ${code(`import { createRouter, html } from "vanillakit";

const Router = createRouter({
  "/":         () => html\`<h1>Home</h1>\`,
  "/user/:id": () => html\`<h1>User page</h1>\`,
  "*":         () => html\`<h1>404</h1>\`,
});
document.body.append(Router());`)}

    <h3>navigate(path)</h3>
    <p>Programmatic navigation.</p>

    <h3>currentPath / routeParams</h3>
    <p>
      Signals holding the current hash path and extracted
      <code>:param</code> values.
    </p>

    <h3>navLink(path, text, activeClass, baseClass)</h3>
    <p>
      Creates an <code>&lt;a&gt;</code> that swaps classes based on the current
      route.
    </p>
    ${code(`import { navLink, css } from "vanillakit";

const active = css\`color: gold; font-weight: 700;\`;
const base   = css\`color: gray;\`;

document.body.append(navLink("/about", "About", active, base));`)}
  </section>`;
}
