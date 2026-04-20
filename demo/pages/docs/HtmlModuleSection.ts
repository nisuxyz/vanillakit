import { html } from "../../../src";
import { code } from "../../highlight";

export function HtmlModuleSection() {
  return html`<section>
    <h2>html.js</h2>
    <p>
      Tagged template producing live DOM nodes with reactive bindings. No
      virtual DOM.
    </p>

    <h3>html\`...\`</h3>
    <p>
      Interpolations can be static values, signals, or functions. Functions are
      wrapped in effects.
    </p>
    ${code(`import { signal, html } from "vanillakit";

const name = signal("world");

const el = html\`
  <div>
    <h1>Hello, \${name}!</h1>
    <input value=\${() => name()} oninput=\${(e) => name(e.target.value)} />
  </div>
\`;
document.body.append(el);`)}

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
    ${code(`import { signal, each, html } from "vanillakit";

const items = signal([{ id: 1, text: "first" }, { id: 2, text: "second" }]);

html\`<ul>
  \${each(items, i => i.id, (itemSig) => html\`<li>\${() => itemSig().text}</li>\`)}
</ul>\`;`)}
  </section>`;
}
