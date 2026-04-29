import { css,vkml } from "../../src/index.js";
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
  return vkml.div(
    { class: "animate-in" },
    vkml.h1("Architecture"),
    vkml.p(
      { class: subtitleClass },
      "Six standalone modules. ~760 lines total. Zero dependencies.",
    ),
    vkml.article(
      vkml.h3("Design Principles"),
      vkml.ul(
        vkml.li("Functions are components. No classes, no magic strings."),
        vkml.li(
          vkml.code("() =>"),
          " means reactive. Everything else is static. That's the only rule.",
        ),
        vkml.li(
          "Fine-grained updates. Each reactive expression updates exactly one DOM node.",
        ),
        vkml.li(
          "Modules are independent. Only ",
          vkml.code("signal.js"),
          " is shared.",
        ),
      ),
    ),
    vkml.div(
      modules.map((m) =>
        vkml.article(
          { "data-card": true, style: "margin-bottom:10px;" },
          vkml.div(
            { style: "display:flex;align-items:center;gap:16px;" },
            vkml.div(
              {
                class: moduleIcon,
                style: `background: ${m.color}20; color: ${m.color};`,
              },
              m.icon,
            ),
            vkml.div(
              { style: "flex:1;display:flex;flex-direction:column;gap:2px;" },
              vkml.strong(
                { style: "font-family:var(--vk-font-mono);font-size:0.9rem;" },
                m.name,
              ),
              vkml.small(m.desc),
            ),
            vkml.span({ "data-badge": true }, m.lines),
          ),
        ),
      ),
    ),
  );
}
