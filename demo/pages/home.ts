import { each, html, signal } from "../../src/index.js";
import { LiveEditor } from "../components/LiveEditor.ts";
import { COUNTER } from "../snippets.ts";

const EmphasisCard = (props = { dd: "1 billion", dt: "That's big!" }) =>
  html` <article data-card style="text-align:center;">
    <dl>
      <dd class="text-accent">${props.dd}</dd>
      <dt>${props.dt}</dt>
    </dl>
  </article>`;

const EMPHASES = signal([
  { dd: "5.55", dt: "kB (brotli)" },
  { dd: "0", dt: "Deps" },
  { dd: "5", dt: "Modules" },
]);

const DialogTest = () => {
  const openDialog = () =>
    document.querySelector<HTMLDialogElement>("#dialogTest")?.showModal();
  const closeDialog = () =>
    document.querySelector<HTMLDialogElement>("#dialogTest")?.close();

  return html`
    <dialog id="dialogTest">
      <header><h4>Confirm delete</h4></header>
      <p>
        This will permanently delete the item. This action cannot be undone.
      </p>
      <footer>
        <button data-style-variant="ghost" onclick=${closeDialog}>
          Cancel
        </button>
        <button data-color-variant="danger" onclick=${closeDialog}>
          Delete
        </button>
      </footer>
    </dialog>

    <button onclick=${openDialog}>Open</button>
  `;
};

// ── Main page ───────────────────────────────────────────────
export function HomePage() {
  return html`<div class="animate-in">
    <section data-hero>
      <h1>Build UIs with <span class="text-accent">plain JavaScript.</span></h1>
      <p>
        Minimal and expressive utilities that complement vanilla JS to build
        modern, reactive websites. Typescript-friendly, zero dependencies, no
        build step required.
      </p>
      <div>
        <a href="#/docs" role="button" data-color-variant="primary">
          Get started
        </a>
        <a
          href="https://github.com/nisuxyz/vanillakit"
          target="_blank"
          role="button"
          data-style-variant="outline"
        >
          GitHub ↗
        </a>
      </div>
    </section>

    <hr />
    <h4 class="text-accent">See it in action</h4>
    <p>
      Check out the interactive demos — a full todo app, reactive object
      explorer, and stress tests for signals and keyed lists.
    </p>
    <div data-grid data-cols="3">
      <a href="#/tasks" role="button" data-style-variant="outline">
        Todo app
      </a>
      <a href="#/playground" role="button" data-style-variant="outline">
        Playground
      </a>
      <a href="#/stress" role="button" data-style-variant="outline">
        Stress test
      </a>
    </div>

    <hr />

    <div data-grid data-cols="3">
      ${each(
        EMPHASES,
        (item) => item.dd,
        (item) => EmphasisCard(item()),
      )}
    </div>
    <br />
    <div data-grid>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">⚡ signal.js</h5>
        <p>
          Fine-grained reactivity — signal, computed, effect, batch. Everything
          else builds on this.
        </p>
      </article>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">🔄 reactive.js</h5>
        <p>
          Deep reactive proxies via Proxy. Mutate objects and arrays normally —
          changes propagate automatically.
        </p>
      </article>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">📝 html.js</h5>
        <p>
          Tagged templates producing live DOM nodes. Reactive bindings, event
          handlers, keyed lists — no virtual DOM.
        </p>
      </article>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">🎨 css.js</h5>
        <p>
          Scoped CSS-in-JS using CSSStyleSheet. Supports nesting, @keyframes,
          @media, and cx() for composition.
        </p>
      </article>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">🧭 router.js</h5>
        <p>
          Hash-based SPA router. Pattern matching with :params, navLink with
          active classes, zero config.
        </p>
      </article>
    </div>
    <hr />
    <h4 class="text-accent">Quick example</h4>
    <p>A counter in 9 lines. Driven by signals — no re-renders or diffing.</p>
    ${LiveEditor({
      source: COUNTER,
      label: "Try editing the code!",
    })}
  </div>`;
}
