import { signal, computed, reactive, snapshot, html, css, cx } from "../../src/index.js";
import {
  pageClass, headingClass, subtitleClass, cardClass, codeBlock, monoSmall,
  btnBase, btnPrimary, btnGhost, btnDanger, btnSuccess,
  inputClass, selectClass,
  detailsSummary,
} from "../styles.ts";
import { code } from "../highlight.ts";

export function PlaygroundPage() {
  // ---- Deeply nested reactive object ----
  const state = reactive({
    user: {
      name: "Ada Lovelace",
      settings: {
        theme: "dark",
        notifications: {
          email: true,
          push: false,
          frequency: "daily",
        },
      },
      scores: [95, 87, 92],
    },
  });

  const jsonView = computed(() => JSON.stringify(snapshot(state), null, 2));

  // ---- CSS stress test styles ----
  const cssStressClass = css`
    padding: 20px;
    border: 2px solid var(--border);
    border-radius: var(--radius);
    margin-bottom: 16px;

    &:hover {
      border-color: var(--accent);
    }

    & > .title {
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 12px;
      color: var(--accent);
    }

    & .nested-box {
      background: var(--surface-2);
      padding: 12px;
      border-radius: 6px;
      margin-bottom: 8px;
    }

    & .nested-box > .inner {
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    &::before {
      content: "✦";
      margin-right: 8px;
      color: var(--accent);
    }

    & .tag {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    & .tag.green {
      background: var(--success-dim);
      color: var(--success);
    }

    & .tag.yellow {
      background: var(--accent-dim);
      color: var(--accent);
    }

    &:hover,
    &:focus-within {
      box-shadow: 0 0 0 2px var(--accent-dim);
    }

    @media (max-width: 600px) {
      padding: 12px;

      & > .title {
        font-size: 0.9rem;
      }
    }
  `;

  const deepNestClass = css`
    padding: 16px;

    & .level1 {
      border-left: 3px solid var(--danger);
      padding-left: 12px;
      margin-bottom: 8px;

      & .level2 {
        border-left: 3px solid var(--accent);
        padding-left: 12px;
        margin-bottom: 8px;

        & .level3 {
          border-left: 3px solid var(--success);
          padding-left: 12px;
          font-family: var(--mono);
          font-size: 0.8rem;
        }
      }
    }
  `;

  const combinatorClass = css`
    & .item + .item {
      margin-top: 8px;
      border-top: 1px dashed var(--border);
      padding-top: 8px;
    }

    & .item:first-child {
      color: var(--accent);
      font-weight: 600;
    }

    & .item:last-child {
      color: var(--success);
    }

    & .item:nth-child(even) {
      opacity: 0.7;
    }
  `;

  const sliderClass = css`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: var(--surface-3);
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--accent);
      cursor: pointer;
    }
  `;

  const statusBase = css`
    padding: 16px 20px;
    border-radius: var(--radius);
    border: 2px solid var(--border);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;

    & .icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }

    & .text {
      flex: 1;
    }

    & .label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 600;
      opacity: 0.8;
    }

    & .message {
      font-size: 0.92rem;
      margin-top: 2px;
    }
  `;

  const statusSuccess = css`
    border-color: var(--success);
    background: var(--success-dim);
    color: var(--success);
    & .icon {
      background: var(--success);
      color: var(--bg);
    }
  `;
  const statusWarning = css`
    border-color: var(--accent);
    background: var(--accent-dim);
    color: var(--accent);
    & .icon {
      background: var(--accent);
      color: var(--bg);
    }
  `;
  const statusError = css`
    border-color: var(--danger);
    background: var(--danger-dim);
    color: var(--danger);
    & .icon {
      background: var(--danger);
      color: var(--bg);
    }
  `;
  const statusInfo = css`
    border-color: var(--info);
    background: var(--info-dim);
    color: var(--info);
    & .icon {
      background: var(--info);
      color: var(--bg);
    }
  `;

  const statusMap = { success: statusSuccess, warning: statusWarning, error: statusError, info: statusInfo };
  const statusIcons = { success: "✓", warning: "!", error: "✕", info: "i" };
  const statusMessages = {
    success: "All systems operational. Deployment completed.",
    warning: "High memory usage detected. Consider scaling.",
    error: "Connection lost. Retrying in 5 seconds…",
    info: "New version available. Update when ready.",
  };

  const propRounded = css`
    border-radius: 24px !important;
    & .icon { border-radius: 12px; }
  `;
  const propShadow = css`
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 2px 8px rgba(0, 0, 0, 0.3);
  `;
  const propBorder = css`
    border-width: 3px;
    border-style: dashed;
  `;
  const propScale = css`
    transform: scale(1.02);
  `;
  const propGlow = css`
    box-shadow:
      0 0 20px currentColor,
      0 0 40px currentColor;
    &:hover {
      box-shadow:
        0 0 30px currentColor,
        0 0 60px currentColor;
    }
  `;

  const status = signal<"success" | "warning" | "error" | "info">("success");
  const rounded = signal(false);
  const shadow = signal(false);
  const dashed = signal(false);
  const scaled = signal(false);
  const glow = signal(false);

  const sizeScale = signal(100);
  const borderRadius = signal(10);
  const opacity = signal(100);

  const toggleChipOff = css`
    font-family: var(--font);
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 6px 14px;
    cursor: pointer;
    background: var(--surface-2);
    color: var(--text-muted);
    transition: all 0.15s ease;
    user-select: none;
    &:hover {
      border-color: var(--text-muted);
      color: var(--text);
    }
  `;
  const toggleChipOn = css`
    font-family: var(--font);
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid var(--accent);
    border-radius: 20px;
    padding: 6px 14px;
    cursor: pointer;
    background: var(--accent-dim);
    color: var(--accent);
    transition: all 0.15s ease;
    user-select: none;
    &:hover {
      filter: brightness(1.15);
    }
  `;
  const previewBoxClass = css`
    width: 100%;
    background: var(--surface-2);
    border: 2px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--mono);
    font-weight: 600;
    transition: all 0.3s ease;
    overflow: hidden;
    color: var(--text);
  `;

  return html`<div class=${pageClass}>
    <h1 class=${headingClass}>Playground</h1>
    <p class=${subtitleClass}>
      Deeply nested reactive objects, complex CSS selectors, and signal
      chains.
    </p>

    <div
      style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;"
    >
      <div class=${cardClass}>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:16px;">
          Deep Reactive Object
        </h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <label style="font-size:0.85rem;color:var(--text-muted);">
            user.name
            <input
              class=${inputClass}
              style="margin-top:4px;"
              value=${() => state.user.name}
              oninput=${(e: Event) => {
      state.user.name = (e.target as HTMLInputElement).value;
    }}
            />
          </label>
          <label style="font-size:0.85rem;color:var(--text-muted);">
            user.settings.theme
            <select
              class=${selectClass}
              style="width:100%;margin-top:4px;"
              onchange=${(e: Event) => {
      state.user.settings.theme = (e.target as HTMLSelectElement).value;
    }}
            >
              <option value="dark" selected>dark</option>
              <option value="light">light</option>
              <option value="auto">auto</option>
            </select>
          </label>
          <div style="display:flex;gap:12px;align-items:center;">
            <label
              style="font-size:0.85rem;color:var(--text-muted);display:flex;gap:6px;align-items:center;"
            >
              <input
                type="checkbox"
                checked=${() => state.user.settings.notifications.email}
                onclick=${() => {
      state.user.settings.notifications.email =
        !state.user.settings.notifications.email;
    }}
              />
              email
            </label>
            <label
              style="font-size:0.85rem;color:var(--text-muted);display:flex;gap:6px;align-items:center;"
            >
              <input
                type="checkbox"
                checked=${() => state.user.settings.notifications.push}
                onclick=${() => {
      state.user.settings.notifications.push =
        !state.user.settings.notifications.push;
    }}
              />
              push
            </label>
          </div>
          <label style="font-size:0.85rem;color:var(--text-muted);">
            user.settings.notifications.frequency
            <select
              class=${selectClass}
              style="width:100%;margin-top:4px;"
              onchange=${(e: Event) => {
      state.user.settings.notifications.frequency =
        (e.target as HTMLSelectElement).value;
    }}
            >
              <option value="daily" selected>daily</option>
              <option value="weekly">weekly</option>
              <option value="never">never</option>
            </select>
          </label>
          <div style="display:flex;gap:6px;margin-top:4px;">
            <button
              class=${cx(btnBase, btnSuccess)}
              style="font-size:0.75rem;padding:6px 10px;"
              onclick=${() => {
      state.user.scores.push(Math.floor(Math.random() * 100));
    }}
            >
              Push score
            </button>
            <button
              class=${cx(btnBase, btnDanger)}
              style="font-size:0.75rem;padding:6px 10px;"
              onclick=${() => {
      if (state.user.scores.length) state.user.scores.pop();
    }}
            >
              Pop score
            </button>
          </div>
        </div>
      </div>

      <div class=${cardClass}>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:16px;">
          Live State (auto-updates)
        </h3>
        <div
          class=${codeBlock}
          style="font-size:0.75rem;max-height:320px;overflow-y:auto;"
        >
          ${() => jsonView()}
        </div>
      </div>
    </div>

    <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">
      Conditional Styling
    </h2>

    <div
      style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;"
    >
      <div class=${cardClass}>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:14px;">
          Status Variant + Property Toggles
        </h3>
        <p
          style="font-size:0.82rem;color:var(--text-muted);margin-bottom:14px;"
        >
          Entire class swapped via
          <code
            style="font-family:var(--mono);background:var(--surface-2);padding:1px 5px;border-radius:3px;"
            >class=${"${"}() => statusMap[status()]}</code
          >, extras layered with
          <code
            style="font-family:var(--mono);background:var(--surface-2);padding:1px 5px;border-radius:3px;"
            >cx()</code
          >.
        </p>

        <div style="display:flex;gap:6px;margin-bottom:14px;">
          ${(["success", "warning", "error", "info"] as const).map(
      (s) => html`
              <button
                class=${() =>
          status() === s
            ? cx(btnBase, btnPrimary)
            : cx(btnBase, btnGhost)}
                style="font-size:0.75rem;padding:6px 12px;flex:1;"
                onclick=${() => status(s)}
              >
                ${s}
              </button>
            `,
    )}
        </div>

        <div
          style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;"
        >
          <button
            class=${() => (rounded() ? toggleChipOn : toggleChipOff)}
            onclick=${() => rounded((v) => !v)}
          >
            rounded
          </button>
          <button
            class=${() => (shadow() ? toggleChipOn : toggleChipOff)}
            onclick=${() => shadow((v) => !v)}
          >
            shadow
          </button>
          <button
            class=${() => (dashed() ? toggleChipOn : toggleChipOff)}
            onclick=${() => dashed((v) => !v)}
          >
            dashed
          </button>
          <button
            class=${() => (scaled() ? toggleChipOn : toggleChipOff)}
            onclick=${() => scaled((v) => !v)}
          >
            scale
          </button>
          <button
            class=${() => (glow() ? toggleChipOn : toggleChipOff)}
            onclick=${() => glow((v) => !v)}
          >
            glow
          </button>
        </div>

        <div
          class=${() =>
      cx(
        statusBase,
        statusMap[status()],
        rounded() && propRounded,
        shadow() && propShadow,
        dashed() && propBorder,
        scaled() && propScale,
        glow() && propGlow,
      )}
        >
          <div class="icon">${() => statusIcons[status()]}</div>
          <div class="text">
            <div class="label">${() => status()}</div>
            <div class="message">${() => statusMessages[status()]}</div>
          </div>
        </div>

        <div
          class=${codeBlock}
          style="margin-top:12px;font-size:0.7rem;line-height:1.6;"
        >
          cx(statusBase,
          <strong
            >${() =>
      "status" +
      status()[0].toUpperCase() +
      status().slice(1)}</strong
          >${() => (rounded() ? ", propRounded" : "")}${() =>
      shadow() ? ", propShadow" : ""}${() =>
        dashed() ? ", propBorder" : ""}${() =>
          scaled() ? ", propScale" : ""}${() =>
            glow() ? ", propGlow" : ""})
        </div>
      </div>

      <div class=${cardClass}>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:14px;">
          Reactive Inline Styles
        </h3>
        <p
          style="font-size:0.82rem;color:var(--text-muted);margin-bottom:14px;"
        >
          Computed
          <code
            style="font-family:var(--mono);background:var(--surface-2);padding:1px 5px;border-radius:3px;"
            >style=${"${"}() => string}</code
          >
          bound to signals. Each slider updates exactly one CSS property —
          no re-renders.
        </p>

        <div
          style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;"
        >
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--text-muted);"
          >
            <span style="min-width:60px;">Size</span>
            <input
              type="range"
              class=${sliderClass}
              min="50"
              max="200"
              value=${() => sizeScale()}
              oninput=${(e: Event) => sizeScale(+(e.target as HTMLInputElement).value)}
            />
            <span class=${monoSmall} style="min-width:38px;"
              >${() => sizeScale()}%</span
            >
          </label>
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--text-muted);"
          >
            <span style="min-width:60px;">Radius</span>
            <input
              type="range"
              class=${sliderClass}
              min="0"
              max="50"
              value=${() => borderRadius()}
              oninput=${(e: Event) => borderRadius(+(e.target as HTMLInputElement).value)}
            />
            <span class=${monoSmall} style="min-width:38px;"
              >${() => borderRadius()}px</span
            >
          </label>
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--text-muted);"
          >
            <span style="min-width:60px;">Opacity</span>
            <input
              type="range"
              class=${sliderClass}
              min="10"
              max="100"
              value=${() => opacity()}
              oninput=${(e: Event) => opacity(+(e.target as HTMLInputElement).value)}
            />
            <span class=${monoSmall} style="min-width:38px;"
              >${() => opacity()}%</span
            >
          </label>
        </div>

        <div style="display:flex;justify-content:center;padding:20px 0;">
          <div
            class=${previewBoxClass}
            style=${() =>
      `height: ${sizeScale()}px; border-radius: ${borderRadius()}px; opacity: ${opacity() / 100}; font-size: ${Math.max(10, sizeScale() * 0.14)}px;`}
          >
            ${() => `${sizeScale()}% · ${borderRadius()}px · ${opacity()}%`}
          </div>
        </div>

        <div class=${codeBlock} style="font-size:0.7rem;line-height:1.6;">
          style=${"${"}() => ${"`"} height:
          <strong>${() => sizeScale()}px</strong>; border-radius:
          <strong>${() => borderRadius()}px</strong>; opacity:
          <strong>${() => (opacity() / 100).toFixed(2)}</strong>; ${"`"}}
        </div>
      </div>
    </div>

    <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">
      CSS Stress Tests
    </h2>

    <div class=${cssStressClass}>
      <div class="title">Complex Selectors Test</div>
      <div class="nested-box">
        <div class="inner">
          This is nested-box > inner (descendant combinator)
        </div>
      </div>
      <span class="tag green">Green Tag</span>
      <span class="tag yellow">Yellow Tag</span>
      <input
        class=${inputClass}
        style="margin-top:12px;width:200px;"
        placeholder="Focus me for :focus-within"
      />
    </div>

    <div class=${cx(cardClass, deepNestClass)}>
      <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:12px;">
        Three-Level CSS Nesting
      </h3>
      <div class="level1">
        Level 1 (red border)
        <div class="level2">
          Level 2 (yellow border)
          <div class="level3">Level 3 (green border, mono font)</div>
        </div>
      </div>
      <div class="level1">
        Another Level 1
        <div class="level2">
          Another Level 2
          <div class="level3">Another Level 3</div>
        </div>
      </div>
    </div>

    <div class=${cx(cardClass, combinatorClass)}>
      <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:12px;">
        Combinator Selectors (+, :first-child, :last-child, :nth-child)
      </h3>
      <div class="item">First item (accent, bold — :first-child)</div>
      <div class="item">Second item (dimmed — :nth-child(even))</div>
      <div class="item">Third item</div>
      <div class="item">Fourth item (dimmed — :nth-child(even))</div>
      <div class="item">Fifth item (green — :last-child)</div>
    </div>
    <details>
      <summary class=${detailsSummary}>View source — reactive(), css\`\`, cx()</summary>
      ${code(`// Deep reactive proxy — mutate normally, changes propagate
const state = reactive({
  user: {
    name: "Ada Lovelace",
    settings: {
      theme: "dark",
      notifications: { email: true, push: false, frequency: "daily" },
    },
    scores: [95, 87, 92],
  },
});

// Computed snapshot for display — auto-updates
const jsonView = computed(() => JSON.stringify(snapshot(state), null, 2));

// Direct mutation triggers effects
state.user.name = "Grace Hopper";
state.user.scores.push(99);

// Scoped CSS with nesting, pseudo-classes, @media
const card = css\`
  padding: 20px;
  border: 2px solid var(--border);
  &:hover { border-color: var(--accent); }
  & > .title { font-weight: 700; }
  @media (max-width: 600px) { padding: 12px; }
\`;

// cx() merges class names, skipping falsy values
const classes = cx(
  statusBase,
  statusMap[status()],
  rounded() && propRounded,
  shadow() && propShadow,
);`)}
    </details>
  </div>`;
}
