import { vkml } from "@vanillakit/vanillakit";
import { code } from "../../highlight.ts";
import {
  HTML_MODULE_SNIPPET_1,
  HTML_MODULE_SNIPPET_2,
} from "../../snippets.ts";

export function VkmlModuleSection() {
  return vkml.section(
    vkml.h2("vkml.js"),
    vkml.p(
      "Function-call DOM builder. Every tag is available as a function via the ",
      vkml.code("vkml"),
      " Proxy and as named exports. Returns a real ",
      vkml.code("Element"),
      " — no virtual DOM, no parsing.",
    ),
    vkml.p(
      { style: "font-size:0.875rem; color:var(--vk-color-text-muted);" },
      "Looking for the template-string API? See ",
      vkml.strong("html.js"),
      ". For a side-by-side comparison see ",
      vkml.strong("Choosing a Syntax"),
      " in the Concepts section.",
    ),

    vkml.h3("Tag builder — vkml.tagName(props?, ...children)"),
    vkml.p(
      "Access any tag through the ",
      vkml.code("vkml"),
      " Proxy. The first argument is treated as a props object if it is a plain object (not a Node, not an array, not an ",
      vkml.code("each()"),
      " descriptor). Any other first argument is a child.",
    ),
    code(`import { vkml } from "vanillakit";

// props + children
vkml.div({ class: "card", style: "padding:16px;" }, "Hello");

// children only (no props object)
vkml.p("Plain text child");

// reactive prop — function is wrapped in an effect
const isOpen = signal(false);
vkml.div({ hidden: () => !isOpen() }, "Panel");

// reactive child
const count = signal(0);
vkml.span(count);           // reads signal; updates on change
vkml.span(() => count());   // same — function child`),

    vkml.h3("Named exports"),
    vkml.p(
      "Every HTML and SVG tag is also a named export — no ",
      vkml.code("vkml."),
      " prefix needed:",
    ),
    code(HTML_MODULE_SNIPPET_1.vkml),

    vkml.h3("Supported prop bindings"),
    vkml.ul(
      {
        style:
          "color:var(--vk-color-text-muted);font-size:0.88rem;margin-bottom:10px;padding-left:20px;line-height:1.8;",
      },
      vkml.li(
        vkml.code("class"),
        " / ",
        vkml.code("className"),
        " — sets className (setAttribute on SVGElement)",
      ),
      vkml.li(
        vkml.code("style"),
        " — string or object (Object.assign to el.style)",
      ),
      vkml.li(
        vkml.code("checked"),
        ", ",
        vkml.code("value"),
        " — synced to DOM properties",
      ),
      vkml.li(
        vkml.code("disabled"),
        ", ",
        vkml.code("readonly"),
        ", ",
        vkml.code("hidden"),
        " — presence attributes",
      ),
      vkml.li(
        vkml.code("on*"),
        " — addEventListener (e.g. ",
        vkml.code("onclick"),
        ", ",
        vkml.code("oninput"),
        ")",
      ),
      vkml.li(vkml.code("ref"), " — called with the element reference"),
    ),

    vkml.h3("each(listFn, keyFn, renderFn)"),
    vkml.p(
      "Pass an ",
      vkml.code("each()"),
      " descriptor directly as a child. Do not wrap it in a function — the descriptor itself carries the reactive list function.",
    ),
    code(HTML_MODULE_SNIPPET_2.vkml),

    vkml.h3("SVG support"),
    vkml.p(
      "SVG tags are created with ",
      vkml.code("createElementNS"),
      " automatically. Use named exports or ",
      vkml.code("vkml.svg"),
      ", ",
      vkml.code("vkml.circle"),
      " etc.:",
    ),
    code(`import { signal, svg, circle } from "vanillakit";

const r = signal(30);

document.body.append(
  svg({ viewBox: "0 0 100 100", width: "100", height: "100" },
    circle({
      cx: "50", cy: "50",
      r: () => String(r()),
      fill: "var(--vk-color-accent)",
    })
  )
);`),
    vkml.p(
      { style: "font-size:0.875rem; color:var(--vk-color-text-muted);" },
      "Supported SVG tags: ",
      vkml.code(
        "svg path circle rect line polyline polygon text g defs use image clipPath mask pattern linearGradient radialGradient stop ellipse",
      ),
      ".",
    ),

    vkml.h3("Reserved word — variable"),
    vkml.p(
      vkml.code("var"),
      " is a reserved word in JavaScript. Use ",
      vkml.code("vkml.variable"),
      " (or the named export ",
      vkml.code("variable"),
      ") to render a ",
      vkml.code("<var>"),
      " element:",
    ),
    code(`import { variable } from "vanillakit";

const el = variable("x");  // renders <var>x</var>`),

    vkml.h3("Disposal"),
    vkml.p(
      "Elements created by vkml carry a ",
      vkml.code("__v_dispose()"),
      " method when they have reactive bindings. Call it to stop all effects and clean up event listeners when removing the element from the DOM.",
    ),
  );
}
