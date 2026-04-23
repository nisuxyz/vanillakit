import { html, css } from "../../src/index.js";
import { subtitleClass } from "../styles.ts";

const moduleIcon = css`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const modules = [
  {
    name: "signal.js",
    icon: "⚡",
    color: "var(--vk-color-accent)",
    lines: "~90",
    desc: "signal, computed, effect, batch, untrack",
  },
  {
    name: "reactive.js",
    icon: "🔮",
    color: "#a78bfa",
    lines: "~130",
    desc: "Proxy-based deep reactivity, identity cache, array methods",
  },
  {
    name: "html.js",
    icon: "🧩",
    color: "#60a5fa",
    lines: "~210",
    desc: "Tagged templates → live DOM, keyed each() reconciliation",
  },
  {
    name: "component.js",
    icon: "📦",
    color: "var(--vk-color-success)",
    lines: "~95",
    desc: "mount, onMount, onCleanup, provide/inject",
  },
  {
    name: "router.js",
    icon: "🧭",
    color: "#f472b6",
    lines: "~105",
    desc: "History-based SPA routing, reactive params",
  },
  {
    name: "css.js",
    icon: "🎨",
    color: "#fb923c",
    lines: "~130",
    desc: "Scoped CSS-in-JS with deep nesting, @media, combinators",
  },
];

export function AboutPage() {
  return html`<div class="animate-in">
    <h1>Architecture</h1>
    <p class=${subtitleClass}>
      Six standalone modules. ~760 lines total. Zero dependencies.
    </p>
    <article>
      <h3>Design Principles</h3>
      <ul>
        <li>Functions are components. No classes, no magic strings.</li>
        <li>
          <code>() =></code> means reactive. Everything else is static. That's
          the only rule.
        </li>
        <li>
          Fine-grained updates. Each reactive expression updates exactly one DOM
          node.
        </li>
        <li>Modules are independent. Only <code>signal.js</code> is shared.</li>
      </ul>
    </article>
    <div>
      ${modules.map(
        (m) =>
          html`<article data-card style="margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:16px;">
              <div
                class=${moduleIcon}
                style=${`background: ${m.color}20; color: ${m.color};`}
              >
                ${m.icon}
              </div>
              <div style="flex:1;display:flex;flex-direction:column;gap:2px;">
                <strong style="font-family:var(--vk-font-mono);font-size:0.9rem;"
                  >${m.name}</strong
                >
                <small>${m.desc}</small>
              </div>
              <span data-badge>${m.lines}</span>
            </div>
          </article>`,
      )}
    </div>
  </div>`;
}
