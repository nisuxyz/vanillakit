import { signal, html, css, keyframes, effect } from "../../src/index.js";
import { LiveEditor } from "../components/LiveEditor.ts";
import { code } from "../highlight.ts";
import {
  HTMX_PARTIAL,
  HTMX_SETUP,
  HTMX_ISLANDS,
  TAILWIND_DIRECT,
  TAILWIND_MIX,
  TAILWIND_CONFIG,
  HONO_SERVER,
  HONO_FETCH,
  FASTAPI_LAYOUT,
  FASTAPI_BACKEND,
  FASTAPI_FETCH,
} from "../snippets.ts";

// ── htmx interactive demo ───────────────────────────────────
export function HtmxSection() {
  // Real fetch of a partial HTML file, then mount a vanillakit island inside it
  const serverContent = signal<string | null>(null);
  const loading = signal(false);
  const counterCount = signal(0);
  const islandMounted = signal(false);

  function doHtmxSwap() {
    loading(true);
    islandMounted(false);
    counterCount(0);
    fetch("./partials/dashboard.html")
      .then((r) => {
        if (!r.ok) throw new Error(r.statusText);
        return r.text();
      })
      .then((htmlText) => {
        serverContent(htmlText);
        loading(false);
        islandMounted(true);
      })
      .catch(() => {
        serverContent(
          `<div class="server-row" style="color:#e45;">Failed to fetch partial — build &amp; serve first</div>`,
        );
        loading(false);
      });
  }

  const serverHtmlBox = css`
    background: var(--vk-color-surface-2);
    border: 1px solid var(--vk-color-border);
    border-radius: 8px;
    padding: 16px;
    margin: 12px 0;
    font-family: var(--vk-font-mono);
    font-size: 0.82rem;
    line-height: 1.8;
    & .server-row {
      padding: 4px 0;
      color: var(--vk-color-text-muted);
      border-bottom: 1px solid var(--vk-color-border);
      &:last-of-type {
        border-bottom: none;
      }
      & strong {
        color: var(--vk-color-text);
      }
      & em {
        color: var(--vk-color-accent);
        font-style: normal;
      }
    }
    & .island-slot {
      margin-top: 12px;
      padding: 10px;
      border: 1px dashed var(--vk-color-accent);
      border-radius: 6px;
      color: var(--vk-color-accent);
      text-align: center;
    }
  `;

  const islandBox = css`
    margin-top: 12px;
    padding: 16px;
    background: var(--vk-color-accent-dim);
    border: 1px solid var(--vk-color-accent);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  `;

  const spin = keyframes`to { transform: rotate(360deg); }`;
  const spinnerClass = css`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid var(--vk-color-border);
    border-top-color: var(--vk-color-accent);
    border-radius: 50%;
    animation: ${spin} 0.6s linear infinite;
  `;

  return html`<section>
    <h2>htmx</h2>
    <p>
      Fetch HTML partials and mount vanillakit reactive islands inside swapped
      content.
    </p>

    <article data-card>
      <h6 class="text-accent">Live demo</h6>
      <p>
        Fetches a real HTML partial from <code>partials/dashboard.html</code>,
        swaps it in, then mounts a vanillakit reactive island inside.
      </p>

      <div style="display:flex;gap:8px;margin:16px 0;flex-wrap:wrap;">
        <span
          data-badge
          ${() =>
            serverContent() === null && !loading()
              ? 'data-variant="primary"'
              : ""}
          >1. Click load</span
        >
        <span data-badge ${() => (loading() ? 'data-variant="primary"' : "")}
          >2. Fetching partial</span
        >
        <span
          data-badge
          ${() =>
            serverContent() !== null && !loading()
              ? 'data-variant="primary"'
              : ""}
          >3. HTML swapped</span
        >
        <span
          data-badge
          ${() => (islandMounted() ? 'data-variant="primary"' : "")}
          >4. Island mounted</span
        >
      </div>

      <button onclick=${doHtmxSwap}>
        ${() =>
          loading()
            ? html`<span class=${spinnerClass}></span>`
            : serverContent() !== null
              ? "Reload from server"
              : 'hx-get="/partials/dashboard.html"'}
      </button>

      ${(() => {
        const contentDiv = document.createElement("div");
        contentDiv.className = serverHtmlBox;
        contentDiv.style.display = "none";
        effect(() => {
          const content = serverContent();
          if (content === null) {
            contentDiv.style.display = "none";
            contentDiv.innerHTML = "";
          } else {
            contentDiv.innerHTML = content;
            contentDiv.style.display = "";
          }
        });
        return contentDiv;
      })()}

      <div style=${() => (islandMounted() ? "" : "display:none;")}>
        <div class=${islandBox}>
          <span
            style="font-size:0.82rem; color:var(--vk-color-accent); font-family:var(--vk-font-mono);"
          >
            vanillakit island →
          </span>
          <button
            data-variant="primary"
            onclick=${() => counterCount((n) => n + 1)}
          >
            Clicked ${counterCount} times
          </button>
        </div>
      </div>
    </article>

    <section>
      <h3>The partial</h3>
      <p>
        A plain HTML file served as a static asset — on GitHub Pages, a CDN, or
        any server. It contains a <code>[data-vanillakit]</code> mount point for
        the reactive island.
      </p>
      ${code(HTMX_PARTIAL, "markup")}

      <h3>Setup</h3>
      ${code(HTMX_SETUP, "markup")}

      <h3>Reactive islands inside swapped content</h3>
      <p>
        After htmx swaps in HTML, mount vanillakit components on
        <code>[data-vanillakit]</code> elements.
      </p>
      ${LiveEditor({
        sourceVariants: HTMX_ISLANDS,
        label: "Reactive island — mounted after htmx swap",
      })}
    </section>
  </section>`;
}

// ── Tailwind section ────────────────────────────────────────
export function TailwindSection() {
  const panelOpen = signal(false);
  const glowOn = signal(false);
  const selectedColor = signal("blue");

  const colors: Record<string, { bg: string; hover: string; glow: string }> = {
    blue: { bg: "#3b82f6", hover: "#2563eb", glow: "rgba(59,130,246,0.5)" },
    green: { bg: "#22c55e", hover: "#16a34a", glow: "rgba(34,197,94,0.5)" },
    purple: { bg: "#a855f7", hover: "#9333ea", glow: "rgba(168,85,247,0.5)" },
    red: { bg: "#ef4444", hover: "#dc2626", glow: "rgba(239,68,68,0.5)" },
  };

  // Simulated "Tailwind-style" utility classes using css``
  const twBtn = () => {
    const c = colors[selectedColor()];
    return css`
      background: ${c.bg};
      color: #fff;
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      font-family: var(--vk-font-body);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
      &:hover {
        background: ${c.hover};
        transform: translateY(-1px);
      }
      &:active {
        transform: translateY(0);
      }
    `;
  };

  const twPanel = () => {
    const c = colors[selectedColor()];
    return css`
      margin-top: 12px;
      padding: 16px;
      background: var(--vk-color-surface-2);
      border-radius: 8px;
      border: 1px solid var(--vk-color-border);
      transition: all 0.2s ease;
      ${glowOn() ? `box-shadow: 0 0 30px ${c.glow};` : ""}
    `;
  };

  const colorPickerClass = css`
    display: flex;
    gap: 6px;
    margin: 16px 0;
    align-items: center;
  `;

  const swatchBtn = (color: string, hex: string) => css`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid
      ${selectedColor() === color ? "var(--vk-color-text)" : "transparent"};
    background: ${hex};
    cursor: pointer;
    transition: all 0.15s ease;
    &:hover {
      transform: scale(1.15);
    }
  `;

  const checkboxRow = css`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
    font-size: 0.85rem;
    color: var(--vk-color-text-muted);
    & input {
      accent-color: var(--vk-color-accent);
    }
  `;

  return html`<section>
    <h2>Tailwind CSS</h2>
    <p>
      Use Tailwind utilities alongside vanillakit's reactive DOM and
      <code>css\`\`</code> scoped styles.
    </p>

    <article data-card>
      <h6 class="text-accent">Interactive demo</h6>
      <p>
        Demonstrates reactive class switching — the pattern you'd use with
        Tailwind utilities. Colors and effects update reactively via signals.
      </p>

      <div class=${colorPickerClass}>
        <span
          style="font-size:0.82rem; font-family:var(--vk-font-mono); color:var(--vk-color-text-muted);"
          >Theme:</span
        >
        ${Object.entries(colors).map(
          ([name, c]) =>
            html`<button
              class=${() => swatchBtn(name, c.bg)}
              onclick=${() => selectedColor(name)}
            ></button>`,
        )}
      </div>

      <label class=${checkboxRow}>
        <input
          type="checkbox"
          checked=${() => glowOn()}
          onchange=${(e: Event) =>
            glowOn((e.target as HTMLInputElement).checked)}
        />
        Glow effect (css\`\` scoped style)
      </label>

      <div style="margin-top:16px; display:flex; gap:8px; flex-wrap:wrap;">
        <button class=${() => twBtn()} onclick=${() => panelOpen((v) => !v)}>
          ${() => (panelOpen() ? "Hide panel" : "Show panel")}
        </button>
      </div>

      <div style=${() => (panelOpen() ? "" : "display:none;")}>
        <div class=${() => twPanel()}>
          <p
            style="color:var(--vk-color-text); margin-bottom:8px; font-weight:600;"
          >
            Reactive panel
          </p>
          <p style="color:var(--vk-color-text-muted); font-size:0.85rem;">
            This panel is reactively shown/hidden. The button color, glow
            effect, and panel styles all change dynamically — the same pattern
            as toggling Tailwind classes with signals.
          </p>
        </div>
      </div>
    </article>

    <section>
      <h3>Using Tailwind classes directly</h3>
      <p>
        Since <code>html\`\`</code> produces real DOM nodes, Tailwind utilities
        work as-is. Use signal-derived class strings for reactive styles.
      </p>
      ${LiveEditor({
        sourceVariants: TAILWIND_DIRECT,
        label: "Tailwind classes — reactive class switching",
      })}

      <h3>Mixing Tailwind + css\`\`</h3>
      <p>
        Use <code>cx()</code> to combine Tailwind utility classes with scoped
        styles.
      </p>
      ${LiveEditor({
        sourceVariants: TAILWIND_MIX,
        label: "Mixing Tailwind + css\`\` scoped styles",
      })}

      <h3>Tailwind config</h3>
      ${code(TAILWIND_CONFIG)}
    </section>
  </section>`;
}

// ── Hono section ────────────────────────────────────────────
export function HonoSection() {
  return html`<section>
    <h2>Hono</h2>
    <p>
      Hono is a fast, lightweight web framework for Bun, Deno, Cloudflare
      Workers, and Node. Serve a vanillakit frontend as static files and use
      Hono for the API layer.
    </p>

    <h3>API server + static frontend</h3>
    ${code(HONO_SERVER, "typescript")}

    <h3>Fetching data into signals</h3>
    ${LiveEditor({
      sourceVariants: HONO_FETCH,
      label: "Fetching data — Hono API + signals",
    })}
  </section>`;
}

// ── FastAPI section ─────────────────────────────────────────
export function FastAPISection() {
  return html`<section>
    <h2>FastAPI</h2>
    <p>
      FastAPI serves as a Python backend. Build the vanillakit app with Vite,
      then serve the static output from FastAPI or use it purely as a JSON API.
    </p>

    <h3>Project layout</h3>
    ${code(FASTAPI_LAYOUT, "bash")}

    <h3>FastAPI backend</h3>
    ${code(FASTAPI_BACKEND, "python")}

    <h3>Frontend fetching</h3>
    ${LiveEditor({
      sourceVariants: FASTAPI_FETCH,
      label: "Fetching data — FastAPI + signals",
    })}
  </section>`;
}
