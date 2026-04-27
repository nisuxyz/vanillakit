import { each, vkml, signal } from "../../src/index.js";
import { LiveEditor } from "../components/LiveEditor.ts";
import { COUNTER } from "../snippets.ts";

const EmphasisCard = (props = { dd: "1 billion", dt: "That's big!" }) =>
  vkml.article(
    { "data-card": true, style: "text-align:center;" },
    vkml.dl(vkml.dd({ class: "text-accent" }, props.dd), vkml.dt(props.dt)),
  );

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

  return vkml.div(
    vkml.dialog(
      { id: "dialogTest" },
      vkml.header(vkml.h4("Confirm delete")),
      vkml.p(
        "This will permanently delete the item. This action cannot be undone.",
      ),
      vkml.footer(
        vkml.button(
          { "data-style-variant": "ghost", onclick: closeDialog },
          "Cancel",
        ),
        vkml.button(
          { "data-color-variant": "danger", onclick: closeDialog },
          "Delete",
        ),
      ),
    ),
    vkml.button({ onclick: openDialog }, "Open"),
  );
};

// ── Main page ───────────────────────────────────────────────
export function HomePage() {
  return vkml.div(
    { class: "animate-in" },
    vkml.section(
      { "data-hero": true },
      vkml.h1(
        "Build UIs with ",
        vkml.span({ class: "text-accent" }, "plain JavaScript."),
      ),
      vkml.p(
        "Minimal and expressive utilities that complement vanilla JS to build modern, reactive websites. Typescript-friendly, zero dependencies, no build step required.",
      ),
      vkml.div(
        vkml.a(
          { href: "#/docs", role: "button", "data-color-variant": "primary" },
          "Get started",
        ),
        vkml.a(
          {
            href: "https://github.com/nisuxyz/vanillakit",
            target: "_blank",
            role: "button",
            "data-style-variant": "outline",
          },
          "GitHub ↗",
        ),
      ),
    ),

    vkml.hr(),
    vkml.h4({ class: "text-accent" }, "See it in action"),
    vkml.p(
      "Check out the interactive demos — a full todo app, reactive object explorer, and stress tests for signals and keyed lists.",
    ),
    vkml.div(
      { "data-grid": true, "data-cols": "3" },
      vkml.a(
        { href: "#/tasks", role: "button", "data-style-variant": "outline" },
        "Todo app",
      ),
      vkml.a(
        {
          href: "#/playground",
          role: "button",
          "data-style-variant": "outline",
        },
        "Playground",
      ),
      vkml.a(
        { href: "#/stress", role: "button", "data-style-variant": "outline" },
        "Stress test",
      ),
    ),

    vkml.hr(),

    vkml.div(
      { "data-grid": true, "data-cols": "3" },
      each(
        EMPHASES,
        (item) => item.dd,
        (item) => EmphasisCard(item()),
      ),
    ),
    vkml.br(),
    vkml.div(
      { "data-grid": true },
      vkml.article(
        { "data-card": true, "data-hover": "glow" },
        vkml.h5({ style: "font-family:var(--vk-font-mono);" }, "⚡ signal.js"),
        vkml.p(
          "Fine-grained reactivity — signal, computed, effect, batch. Everything else builds on this.",
        ),
      ),
      vkml.article(
        { "data-card": true, "data-hover": "glow" },
        vkml.h5(
          { style: "font-family:var(--vk-font-mono);" },
          "🔄 reactive.js",
        ),
        vkml.p(
          "Deep reactive proxies via Proxy. Mutate objects and arrays normally — changes propagate automatically.",
        ),
      ),
      vkml.article(
        { "data-card": true, "data-hover": "glow" },
        vkml.h5({ style: "font-family:var(--vk-font-mono);" }, "📝 html.js"),
        vkml.p(
          "Tagged templates producing live DOM nodes. Reactive bindings, event handlers, keyed lists — no virtual DOM.",
        ),
      ),
      vkml.article(
        { "data-card": true, "data-hover": "glow" },
        vkml.h5({ style: "font-family:var(--vk-font-mono);" }, "🎨 css.js"),
        vkml.p(
          "Scoped CSS-in-JS using CSSStyleSheet. Supports nesting, @keyframes, @media, and cx() for composition.",
        ),
      ),
      vkml.article(
        { "data-card": true, "data-hover": "glow" },
        vkml.h5({ style: "font-family:var(--vk-font-mono);" }, "🧭 router.js"),
        vkml.p(
          "Hash-based SPA router. Pattern matching with :params, navLink with active classes, zero config.",
        ),
      ),
    ),
    vkml.hr(),
    vkml.h4({ class: "text-accent" }, "Quick example"),
    vkml.p(
      "A counter in 9 lines. Driven by signals — no re-renders or diffing.",
    ),
    LiveEditor({
      sourceVariants: COUNTER,
      label: "Try editing the code!",
    }),
  );
}
