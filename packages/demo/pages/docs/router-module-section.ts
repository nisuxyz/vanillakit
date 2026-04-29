import { html } from '@vanillakit/vanillakit';
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import {
  ROUTER_MODULE_SNIPPET_1,
  ROUTER_MODULE_SNIPPET_2,
  ROUTER_MODULE_SNIPPET_3,
} from "../../snippets";

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
    ${code(ROUTER_MODULE_SNIPPET_1)}

    <h3>createRouter(routeMap)</h3>
    <p>
      Maps path patterns to handlers. Supports <code>:param</code> and
      <code>*</code> catch-all.
    </p>
    ${LiveEditor({
      sourceVariants: ROUTER_MODULE_SNIPPET_2,
      label: "createRouter — define routes",
    })}

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
    ${code(ROUTER_MODULE_SNIPPET_3)}
  </section>`;
}
