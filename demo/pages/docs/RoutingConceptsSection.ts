import { html } from "../../../src";
import { code } from "../../highlight";

export function RoutingConceptsSection() {
  return html`<section>
    <h2>Routing</h2>
    <p>
      vanillakit includes a hash-based SPA router. Routes map path patterns to
      functions that return DOM nodes. The router swaps content reactively when
      the hash changes.
    </p>

    <h3>Basic setup</h3>
    ${code(`import { html, createRouter, navLink, css } from "vanillakit";

const Router = createRouter({
  "/":      () => html\`<h1>Home</h1>\`,
  "/about": () => html\`<h1>About</h1>\`,
  "*":      () => html\`<h1>404</h1>\`,
});

const active = css\`color: gold;\`;
const base = css\`color: gray;\`;

document.body.append(html\`
  <nav>
    \${navLink("/", "Home", active, base)}
    \${navLink("/about", "About", active, base)}
  </nav>
  \${Router()}
\`);`)}

    <h3>Route parameters</h3>
    ${code(`import { createRouter, routeParams, html } from "vanillakit";

const Router = createRouter({
  "/user/:id": () => html\`
    <div>
      <h1>User \${() => routeParams().id}</h1>
    </div>
  \`,
});`)}

    <h3>Programmatic navigation</h3>
    ${code(`import { navigate } from "vanillakit";

// Navigate from code
navigate("/user/42");

// In a click handler
html\`<button onclick=\${() => navigate("/settings")}>Settings</button>\`;`)}

    <h3>vs. React Router / Vue Router</h3>
    <p>
      React Router uses <code>&lt;Route&gt;</code> components and hooks. Vue
      Router uses a plugin and <code>&lt;router-view&gt;</code>. vanillakit's
      router is ~60 lines: a plain object mapping paths to functions. No
      providers, no hooks, no wrapping — just call
      <code>createRouter()</code> and drop the result into the DOM.
    </p>
  </section>`;
}
