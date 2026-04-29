import { html } from '@vanillakit/vanillakit';
import { code } from "../../highlight";
import { HTML_MODULE_SNIPPET_1, HTML_MODULE_SNIPPET_2 } from "../../snippets";

export function HtmlModuleSection() {
  return html`<section>
    <h2>html.js</h2>
    <p>
      Tagged template producing live DOM nodes with reactive bindings. No
      virtual DOM.
    </p>
    <p style="font-size:0.875rem; color:var(--vk-color-text-muted);">
      Prefer function-call syntax? See <strong>vkml.js</strong> in the API
      Reference. For a full comparison of both styles see
      <strong>Choosing a Syntax</strong> in Concepts.
    </p>

    <p>
      Returns a <code>Node</code> or <code>DocumentFragment</code>. For SVG
      support or when you need a guaranteed single <code>Element</code>, use
      <strong>vkml.js</strong> instead.
    </p>

    <h3>html\`...\`</h3>
    <p>
      Interpolations can be static values, signals, or functions. Functions are
      wrapped in effects.
    </p>
    ${code(HTML_MODULE_SNIPPET_1.html)}

    <p>Supported attribute bindings:</p>
    <ul
      style="color:var(--vk-color-text-muted);font-size:0.88rem;margin-bottom:10px;padding-left:20px;line-height:1.8;"
    >
      <li><code>class</code> — sets className</li>
      <li><code>style</code> — string or object</li>
      <li>
        <code>checked</code>, <code>value</code> — synced to DOM properties
      </li>
      <li><code>on*</code> — event listeners</li>
      <li><code>ref</code> — called with the element</li>
    </ul>

    <h3>each(listFn, keyFn, renderFn)</h3>
    <p>Keyed list reconciliation. Each item is passed as a signal.</p>
    ${code(HTML_MODULE_SNIPPET_2.html)}
  </section>`;
}
