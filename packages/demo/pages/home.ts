import { a, computed, dd, div, dl, dt, Each, h1, h4, h5, hr, navigate, p, section, signal, span, VanillaChild } from "@vanillakit/vanillakit";
import { Card, CardHeader } from "../components/Card.ts";
import { LiveEditor } from "../components/LiveEditor";
import { COUNTER } from "../snippets.ts";

const EmphasisCard = (props = signal({ dd: "1 billion", dt: "That's big!" })) =>
  Card({ centered: true, hoverEffect: "lift" },
    dl(dd({ 's-color': "--vk-color-accent" }, props().dd), dt(props().dt))
  );

const MODULES = signal([
  { name: "⚡ signal.js", size: "0.76", description: "Fine-grained reactivity with signals, computed, effect, batch" },
  { name: "🔄 reactive.js", size: "1.63", description: "Deep reactive proxies via Proxy, mutate objects/arrays normally" },
  { name: "🧱 vkml.js", size: "2.93", description: "Hyperscript-style API for working with vanilla DOM nodes directly" },
  { name: "📝 html.js", size: "2.44", description: "Tagged template DOM engine with reactive bindings and keyed lists" },
  { name: "🎨 vss.js", size: "1.76", description: "Utility attribute-based styling, works on any DOM node" },
  { name: "🎨 css.js", size: "1.31", description: "Scoped CSS-in-JS with nesting, @media, @keyframes" },
  { name: "🧭 router.js", size: "1.51", description: "SPA router with hash/history modes, pattern matching, navLink" },
]);

const EMPHASES = computed(() => [
  { dd: "8.72", dt: "kB (brotli)" },
  { dd: "0", dt: "Deps" },
  { dd: `${MODULES().length}`, dt: "Modules" },
]);

const GlowCard = (...children: VanillaChild[]) => Card({ hoverEffect: "glow" }, ...children);

const AppButton = (
  path: string | URL,
  label: string,
  variant: "outline" | "ghost" | "primary" = "outline",
) =>
  a({
    href: path.toString(),
    role: "button",
    ...(variant === "primary"
      ? { "data-color-variant": "primary" }
      : { "data-style-variant": variant }),
    onclick: (event: Event) => {
      if (path.toString().startsWith("http")) {
        // External link - allow default behavior
        return;
      }
      event.preventDefault();
      navigate(path.toString());
    },
  },
    label,
  );

// ── Main page ───────────────────────────────────────────────
export const HomePage = () => div({ class: "animate-in" },
  section({ "data-hero": true },
    h1(
      "Build UIs with ",
      span({ class: "text-accent" }, "plain JavaScript."),
    ),
    p(
      "Minimal and expressive utilities that complement vanilla JS to build modern, reactive websites. Typescript-friendly, zero dependencies, no build step required.",
    ),
    div({ "data-grid": true, "data-cols": "3" },
      Each({ list: EMPHASES, key: (item) => item.dd },
        EmphasisCard
      ),
    ),
    div({ 's-d': 'flex', 's-g': '--vk-space-md', 's-fwr': 'wrap', 's-mt': '--vk-space-lg', 's-jc': 'center' },
      AppButton("/docs", "Get started", "primary"),
      AppButton("https://github.com/nisuxyz/vanillakit", "GitHub ↗", "outline"),
    ),
  ),

  hr(),
  div({ "data-grid": true },
    Each({ list: MODULES, key: (item) => item.name }, (module) =>
      GlowCard(
        CardHeader(
          h5({ 's-ff': "--vk-font-mono" }, module().name),
          span({ 'data-badge': true }, `${module().size} kB`),
        ),
        p(module().description)
      )
    ),
  ),
  hr(),
  h4({ class: "text-accent" }, "Quick example"),
  p(
    "A counter in 9 lines. Driven by signals — no re-renders or diffing.",
  ),
  LiveEditor({
    sourceVariants: COUNTER,
    label: "Try editing the code!",
  }),
);