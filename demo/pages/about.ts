import { html, css, cx } from "../../src/index.js";
import {
  pageClass, headingClass, subtitleClass, cardClass,
} from "../styles.ts";

const moduleCardClass = css`
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 10px;
`;
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
const moduleInfo = css`
  flex: 1;
  strong {
    display: block;
    font-family: var(--mono);
    font-size: 0.9rem;
    margin-bottom: 2px;
  }
  span {
    font-size: 0.82rem;
    color: var(--text-muted);
  }
`;
const moduleSizeClass = css`
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--surface-2);
  padding: 3px 10px;
  border-radius: 20px;
`;

const modules = [
  {
    name: "signal.js",
    icon: "⚡",
    color: "var(--accent)",
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
    color: "var(--success)",
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
  return html`<div class=${pageClass}>
    <h1 class=${headingClass}>Architecture</h1>
    <p class=${subtitleClass}>
      Six standalone modules. ~760 lines total. Zero dependencies.
    </p>
    <div class=${cardClass}>
      <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:8px;">
        Design Principles
      </h3>
      <div
        style="color:var(--text-muted);font-size:0.88rem;line-height:1.8;"
      >
        <p style="margin-bottom:8px;">
          → Functions are components. No classes, no magic strings.
        </p>
        <p style="margin-bottom:8px;">
          →
          <code
            style="font-family:var(--mono);background:var(--surface-2);padding:2px 6px;border-radius:4px;"
            >() =></code
          >
          means reactive. Everything else is static. That's the only rule.
        </p>
        <p style="margin-bottom:8px;">
          → Fine-grained updates. Each reactive expression updates exactly
          one DOM node.
        </p>
        <p>
          → Modules are independent. Only
          <code
            style="font-family:var(--mono);background:var(--surface-2);padding:2px 6px;border-radius:4px;"
            >signal.js</code
          >
          is shared.
        </p>
      </div>
    </div>
    <div>
      ${modules.map(
    (m) =>
      html`<div class=${moduleCardClass}>
            <div
              class=${moduleIcon}
              style=${`background: ${m.color}20; color: ${m.color};`}
            >
              ${m.icon}
            </div>
            <div class=${moduleInfo}>
              <strong>${m.name}</strong><span>${m.desc}</span>
            </div>
            <span class=${moduleSizeClass}>${m.lines}</span>
          </div>`,
  )}
    </div>
  </div>`;
}
