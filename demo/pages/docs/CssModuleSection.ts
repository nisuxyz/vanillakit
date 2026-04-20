import { html } from "../../../src";
import { code } from "../../highlight";

export function CssModuleSection() {
  return html`<section>
    <h2>css.js</h2>
    <p>
      Scoped CSS-in-JS using <code>CSSStyleSheet</code>. Supports nesting,
      <code>@media</code>, <code>@keyframes</code>.
    </p>

    <h3>css\`...\`</h3>
    <p>
      Returns a unique class name. <code>&amp;</code> is replaced by the
      generated selector.
    </p>
    ${code(`import { css } from "vanillakit";

const card = css\`
  padding: 16px;
  background: #1a1a1a;
  &:hover { border-color: gold; }
  & .title { font-weight: 700; }
  @media (max-width: 600px) { padding: 8px; }
\`;`)}

    <h3>keyframes\`...\`</h3>
    <p>Creates a scoped <code>@keyframes</code> rule.</p>
    ${code(`import { css, keyframes } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;
const spinner = css\`animation: \${spin} 1s linear infinite;\`;`)}

    <h3>globalCss\`...\` / cx(...classes)</h3>
    <p>Inject unscoped CSS or join class names (filtering falsy values).</p>
    ${code(`import { globalCss, cx, css } from "vanillakit";

globalCss\`body { margin: 0; }\`;

const base = css\`padding: 8px;\`;
const active = css\`color: gold;\`;
cx(base, isActive && active); // falsy values skipped`)}
  </section>`;
}
