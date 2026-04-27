import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import {
  ROUTER_MODULE_SNIPPET_1,
  ROUTER_MODULE_SNIPPET_2,
  ROUTING_CONCEPTS_SNIPPET_3,
  ROUTING_CONCEPTS_SNIPPET_4,
} from "../../snippets";

export function RoutingConceptsSection() {
  return html`<section>
    <h2>Routing</h2>
    <p>
      vanillakit includes an SPA router with two modes: <strong>hash</strong>{"
      "} (default, e.g. <code>/#/about</code>) and
      <strong>history</strong> (clean URLs via the History API, e.g.
      <code>/about</code>). Routes map path patterns to functions that return
      DOM nodes. The router swaps content reactively when the location changes.
    </p>

    <h3>Choosing a mode</h3>
    <p>
      Call <code>initRouter</code> once at startup before rendering. Omit it to
      use the default hash mode.
    </p>
    ${code(ROUTER_MODULE_SNIPPET_1)}

    <h3>Basic setup</h3>
    ${LiveEditor({
      sourceVariants: ROUTER_MODULE_SNIPPET_2,
      label: "Basic router setup",
    })}

    <h3>Route parameters</h3>
    ${LiveEditor({
      sourceVariants: ROUTING_CONCEPTS_SNIPPET_3,
      label: "Route parameters — :param capture",
    })}

    <h3>Programmatic navigation</h3>
    ${LiveEditor({
      sourceVariants: ROUTING_CONCEPTS_SNIPPET_4,
      label: "Programmatic navigation",
    })}

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
