import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";

export function StylingSection() {
  return html`<section>
    <h2>Styling</h2>
    <p>
      vanillakit includes a CSS-in-JS engine. <code>css\`\`</code> generates
      scoped class names, <code>keyframes\`\`</code> creates animations, and
      <code>globalCss\`\`</code> injects global styles. You can also use
      external CSS, Tailwind, or any other approach.
    </p>

    <h3>Scoped styles</h3>
    ${LiveEditor({
      source: `import { css, html } from "vanillakit";

const card = css\`
  padding: 16px; background: var(--vk-color-bg);
  border: 1px solid var(--vk-color-border); border-radius: 8px;
  transition: border-color 0.15s ease;
  &:hover { border-color: var(--vk-color-accent); }
  & .title { font-weight: 700; color: var(--vk-color-accent); }
  & .desc { font-size: 0.85rem; color: gray; margin-top: 4px; }
\`;

document.body.append(html\`
  <div class=\${card}>
    <span class="title">Styled card</span>
    <div class="desc">Hover me — the border changes color.</div>
  </div>
\`);`,
      label: "Scoped CSS — hover the card",
    })}

    <h3>Dynamic styles</h3>
    <p>
      For styles that change based on signals, use a reactive
      <code>class</code> attribute or inline <code>style</code>:
    </p>
    ${code(`import { signal, html, css } from "vanillakit";

const active = signal(false);

const base = css\`padding: 8px; border-radius: 6px;\`;
const highlight = css\`background: gold; color: #111;\`;

// Reactive class
html\`<div class=\${() => active() ? cx(base, highlight) : base}>Click me</div>\`;

// Reactive inline style
const size = signal(16);
html\`<p style=\${() => \`font-size: \${size()}px\`}>Resizable text</p>\`;`)} ${LiveEditor(
      {
        source: `import { signal, html } from "vanillakit";

const size = signal(16);

document.body.append(html\`
  <div>
    <input type="range" min="10" max="40" value=\${() => size()}
      oninput=\${(e) => size(+e.target.value)}
      style="width:200px; margin-bottom:10px;" />
    <span style="font-family:monospace; font-size:0.8rem; margin-left:8px;">
      \${size}px
    </span>
    <p style=\${() => \`font-size: \${size()}px; font-weight: 600; transition: font-size 0.1s;\`}>
      Resizable text
    </p>
  </div>
\`);`,
        label: "Dynamic styles — drag the slider",
      },
    )}

    <h3>Animations</h3>
    ${code(`import { css, keyframes } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;

const spinner = css\`animation: \${spin} 1s linear infinite;\`;`)} ${LiveEditor(
      {
        source: `import { css, keyframes, html } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;

const spinner = css\`
  display: inline-block; width: 24px; height: 24px;
  border: 3px solid var(--vk-color-border); border-top-color: var(--vk-color-accent);
  border-radius: 50%; animation: \${spin} 0.8s linear infinite;
\`;

document.body.append(html\`
  <div style="display:flex; align-items:center; gap:12px;">
    <div class=\${spinner}></div>
    <span style="font-size:0.85rem; color:gray;">Spinning via keyframes\\\`\\\`</span>
  </div>
\`);`,
        label: "Keyframes animation",
      },
    )}

    <h3>Combining class names</h3>
    <p><code>cx()</code> joins class names, filtering out falsy values:</p>
    ${code(`import { cx, css } from "vanillakit";

const base = css\`padding: 8px;\`;
const active = css\`color: gold;\`;
const disabled = false;

cx(base, isActive && active, disabled && "disabled");
// falsy values are skipped`)}

    <h3>vs. React / Vue</h3>
    <p>
      React uses CSS modules, styled-components, or Tailwind. Vue has
      <code>&lt;style scoped&gt;</code>. vanillakit's <code>css\`\`</code> is
      closest to styled-components but returns a class name string instead of
      wrapping components.
    </p>
  </section>`;
}
