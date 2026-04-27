import { vkml } from "../../../src/index.js";
import { LiveEditor } from "../../components/LiveEditor.ts";
import { COUNTER, HTML_MODULE_SNIPPET_1 } from "../../snippets.ts";

export function HtmlVsVkmlSection() {
  return vkml.section(
    vkml.h2("Choosing a Syntax"),
    vkml.p(
      "vanillakit ships two authoring styles — ",
      vkml.code("html``"),
      " and ",
      vkml.code("vkml"),
      " — that compile to the same reactive DOM operations. Both share signals, ",
      vkml.code("each()"),
      ", CSS-in-JS, and the router. Pick the style that fits your project.",
    ),

    vkml.h3("html`` — tagged template literals"),
    vkml.p(
      "Write HTML as a template string. Interpolate signals, functions, or static values directly. Returns a ",
      vkml.code("Node"),
      " or ",
      vkml.code("DocumentFragment"),
      " — the same shape you get from ",
      vkml.code("innerHTML"),
      " parsing, but live.",
    ),
    vkml.pre(
      vkml.code(
        `import { signal, html } from "vanillakit";

const count = signal(0);
const el = html\`<button onclick=\${() => count(n => n + 1)}>Clicks: \${count}</button>\`;
document.body.append(el);`,
      ),
    ),

    vkml.h3("vkml — function call syntax"),
    vkml.p(
      "Build the DOM tree with function calls through the ",
      vkml.code("vkml"),
      " Proxy. Every property access returns a tag builder: ",
      vkml.code("vkml.div(props?, ...children)"),
      ". Always returns a single ",
      vkml.code("Element"),
      " — no fragments.",
    ),
    vkml.pre(
      vkml.code(
        `import { signal, vkml } from "vanillakit";

const count = signal(0);
const el = vkml.button({ onclick: () => count(n => n + 1) }, "Clicks: ", count);
document.body.append(el);`,
      ),
    ),

    vkml.h3("Side by side"),
    vkml.p(
      "Both snippets below produce identical output. Use the tabs to switch.",
    ),
    LiveEditor({
      sourceVariants: { html: COUNTER.html, vkml: COUNTER.vkml },
      label: "Counter — html vs vkml",
    }),

    vkml.h3("Key differences"),
    vkml.div(
      {
        style: "overflow-x:auto; margin: 1rem 0;",
      },
      vkml.table(
        { style: "width:100%; border-collapse:collapse; font-size:0.875rem;" },
        vkml.thead(
          vkml.tr(
            vkml.th(
              {
                style:
                  "text-align:left; padding:8px 12px; border-bottom:2px solid var(--vk-color-border); color:var(--vk-color-text-muted);",
              },
              "",
            ),
            vkml.th(
              {
                style:
                  "text-align:left; padding:8px 12px; border-bottom:2px solid var(--vk-color-border); color:var(--vk-color-text-muted);",
              },
              "html``",
            ),
            vkml.th(
              {
                style:
                  "text-align:left; padding:8px 12px; border-bottom:2px solid var(--vk-color-border); color:var(--vk-color-text-muted);",
              },
              "vkml",
            ),
          ),
        ),
        vkml.tbody(
          ...[
            ["Authoring style", "Template string", "Function calls"],
            [
              "Return type",
              "Node | DocumentFragment",
              "Element (always single)",
            ],
            ["SVG support", "No", "Yes — createElementNS"],
            [
              "Parsing overhead",
              "innerHTML + TreeWalker",
              "None — direct createElement",
            ],
            [
              "TypeScript props",
              "Untyped string interpolations",
              "Typed object literal",
            ],
            ["Reserved words", "n/a", "vkml.variable → <var>"],
            [
              "Named imports",
              "import { html } from …",
              "import { div, span, … } from …",
            ],
          ].map(([label, htmlVal, vkmlVal], i) =>
            vkml.tr(
              {
                style:
                  i % 2 === 0
                    ? "background:var(--vk-color-bg-alt, transparent);"
                    : "",
              },
              vkml.td(
                {
                  style:
                    "padding:8px 12px; border-bottom:1px solid var(--vk-color-border); font-weight:600; white-space:nowrap;",
                },
                label,
              ),
              vkml.td(
                {
                  style:
                    "padding:8px 12px; border-bottom:1px solid var(--vk-color-border); font-family:monospace;",
                },
                htmlVal,
              ),
              vkml.td(
                {
                  style:
                    "padding:8px 12px; border-bottom:1px solid var(--vk-color-border); font-family:monospace;",
                },
                vkmlVal,
              ),
            ),
          ),
        ),
      ),
    ),

    vkml.h3("Named exports"),
    vkml.p(
      "Every HTML and SVG tag is also available as a named export for cleaner imports:",
    ),
    vkml.pre(
      vkml.code(
        `import { signal, div, button, span, svg, circle } from "vanillakit";

// html variant
import { html } from "vanillakit";
const el = html\`<div><button>Click</button></div>\`;

// vkml equivalent — same result, no parsing
const el2 = div(button("Click"));`,
      ),
    ),

    vkml.h3("Reactive bindings — same rules, different syntax"),
    vkml.p(
      "Attribute bindings work identically in both. Pass a function to make an attribute reactive:",
    ),
    LiveEditor({
      sourceVariants: {
        html: HTML_MODULE_SNIPPET_1.html,
        vkml: HTML_MODULE_SNIPPET_1.vkml,
      },
      label: "Reactive bindings",
    }),

    vkml.h3("When to use html``"),
    vkml.ul(
      vkml.li(
        "Porting existing HTML quickly — paste markup directly into the template.",
      ),
      vkml.li("Templates with lots of static markup and minimal JS logic."),
      vkml.li("Prefer visual structure over function signatures."),
    ),

    vkml.h3("When to use vkml"),
    vkml.ul(
      vkml.li("SVG — vkml is the only option that supports SVG tags."),
      vkml.li(
        "TypeScript-first projects — prop objects get full type inference.",
      ),
      vkml.li(
        "Component libraries — function composition is easier to abstract.",
      ),
      vkml.li("Performance-critical code — no template parse step."),
    ),

    vkml.p(
      {
        style:
          "color:var(--vk-color-text-muted); font-size:0.875rem; margin-top:1.5rem;",
      },
      "See ",
      vkml.strong("html.js"),
      " and ",
      vkml.strong("vkml.js"),
      " in the API Reference for the full function signatures.",
    ),
  );
}
