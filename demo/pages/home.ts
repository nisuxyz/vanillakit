import { signal, computed, html, css, cx, keyframes } from "../../src/index.js";
import {
  pageClass, headingClass, subtitleClass,
  btnBase, btnPrimary, btnGhost,
  cardClass,
} from "../styles.ts";
import { code } from "../highlight.ts";

// ── Hero styles ─────────────────────────────────────────────
const heroClass = css`
  text-align: center;
  padding: 48px 0 40px;
`;

const heroTitle = css`
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.15;
  margin-bottom: 16px;
  & span { color: var(--accent); }
`;

const heroSub = css`
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 520px;
  margin: 0 auto 28px;
  line-height: 1.6;
`;

const heroBtns = css`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const statsRow = css`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
  flex-wrap: wrap;
`;

const statItem = css`
  text-align: center;
  & .num {
    font-family: var(--mono);
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: -0.03em;
  }
  & .lbl {
    font-size: 0.75rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 2px;
  }
`;

// ── Feature cards ───────────────────────────────────────────
const featureGridClass = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin: 36px 0;
`;

const featureCardClass = css`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  transition: all 0.15s ease;
  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }
  & .icon {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
  & h3 {
    font-family: var(--mono);
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--text);
  }
  & p {
    font-size: 0.82rem;
    color: var(--text-muted);
    line-height: 1.5;
  }
`;

// ── Live demo ───────────────────────────────────────────────
const liveDemoBox = css`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  margin: 16px 0 36px;
`;

const demoLabelClass = css`
  font-family: var(--mono);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  &::before { content: "▶"; font-size: 0.6rem; }
`;

const sectionLabel = css`
  font-family: var(--mono);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--accent);
  margin: 36px 0 8px;
  letter-spacing: -0.02em;
`;

const sectionDesc = css`
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 16px;
  line-height: 1.6;
`;

// ── Live counter demo ───────────────────────────────────────
function LiveCounterDemo() {
  const count = signal(0);

  return html`
    <div class=${liveDemoBox}>
      <div class=${demoLabelClass}>Live demo — signals + html\`\`</div>
      <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
        <button
          class=${cx(btnBase, btnPrimary)}
          onclick=${() => count(n => n + 1)}
        >Increment</button>
        <button
          class=${cx(btnBase, btnGhost)}
          onclick=${() => count(0)}
        >Reset</button>
        <span style="font-family:var(--mono); font-size:1.2rem; font-weight:700;">
          ${count}
        </span>
      </div>
    </div>
  `;
}

// ── Main page ───────────────────────────────────────────────
export function HomePage() {
  return html`<div class=${pageClass}>
    <div class=${heroClass}>
      <h1 class=${heroTitle}>
        Build UIs with <span>plain JavaScript.</span>
      </h1>
      <p class=${heroSub}>
        Signals, reactive proxies, tagged-template DOM, CSS-in-JS, and a router —
        ~760 lines, zero dependencies, no build step required.
      </p>
      <div class=${heroBtns}>
        <a href="#/docs" class=${cx(btnBase, btnPrimary)} style="text-decoration:none;">
          Get started
        </a>
        <a href="https://github.com/nisuxyz/vanillakit" target="_blank" class=${cx(btnBase, btnGhost)} style="text-decoration:none;">
          GitHub ↗
        </a>
      </div>
      <div class=${statsRow}>
        <div class=${statItem}>
          <div class="num">~760</div>
          <div class="lbl">Lines of code</div>
        </div>
        <div class=${statItem}>
          <div class="num">0</div>
          <div class="lbl">Dependencies</div>
        </div>
        <div class=${statItem}>
          <div class="num">5</div>
          <div class="lbl">Modules</div>
        </div>
      </div>
    </div>

    <div class=${featureGridClass}>
      <div class=${featureCardClass}>
        <div class="icon">⚡</div>
        <h3>signal.js</h3>
        <p>Fine-grained reactivity — signal, computed, effect, batch. Everything else builds on this.</p>
      </div>
      <div class=${featureCardClass}>
        <div class="icon">🔄</div>
        <h3>reactive.js</h3>
        <p>Deep reactive proxies via Proxy. Mutate objects and arrays normally — changes propagate automatically.</p>
      </div>
      <div class=${featureCardClass}>
        <div class="icon">📝</div>
        <h3>html.js</h3>
        <p>Tagged templates producing live DOM nodes. Reactive bindings, event handlers, keyed lists — no virtual DOM.</p>
      </div>
      <div class=${featureCardClass}>
        <div class="icon">🎨</div>
        <h3>css.js</h3>
        <p>Scoped CSS-in-JS using CSSStyleSheet. Supports nesting, @keyframes, @media, and cx() for composition.</p>
      </div>
      <div class=${featureCardClass}>
        <div class="icon">🧭</div>
        <h3>router.js</h3>
        <p>Hash-based SPA router. Pattern matching with :params, navLink with active classes, zero config.</p>
      </div>
      <div class=${featureCardClass}>
        <div class="icon">📦</div>
        <h3>No build step</h3>
        <p>Works with a plain &lt;script type="module"&gt;. Use a bundler if you want — but you don't have to.</p>
      </div>
    </div>

    <div class=${sectionLabel}>Quick example</div>
    <p class=${sectionDesc}>
      A counter in 10 lines. The signal drives the DOM — no re-renders, no diffing.
    </p>
    ${code(`import { signal, html, css } from "vanillakit";

const count = signal(0);

const btn = css\`
  padding: 8px 20px; border: none; border-radius: 6px;
  background: gold; color: #111; font-weight: 600; cursor: pointer;
\`;

document.body.append(html\`
  <div>
    <h1>Count: \${count}</h1>
    <button class=\${btn} onclick=\${() => count(n => n + 1)}>+1</button>
  </div>
\`);`)}

    ${LiveCounterDemo()}

    <div class=${sectionLabel}>See it in action</div>
    <p class=${sectionDesc}>
      Check out the interactive demos — a full todo app, reactive object explorer,
      and stress tests for signals and keyed lists.
    </p>
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:24px;">
      <a href="#/tasks" class=${cx(btnBase, btnPrimary)} style="text-decoration:none;">
        Todo app
      </a>
      <a href="#/playground" class=${cx(btnBase, btnGhost)} style="text-decoration:none;">
        Playground
      </a>
      <a href="#/stress" class=${cx(btnBase, btnGhost)} style="text-decoration:none;">
        Stress test
      </a>
    </div>
  </div>`;
}
