import { html } from "../../../src";
import { code } from "../../highlight";

export function VanillaCssSection() {
  return html`<section>
    <h2>VanillaCSS</h2>
    <p>
      VanillaCSS is a classless CSS framework included with vanillakit. It
      styles semantic HTML automatically — no class names needed. Use optional
      <code>data-*</code> attributes and ARIA roles to access components,
      variants, and interactive patterns.
    </p>
    <p>
      VanillaCSS ships as plain CSS files. You can use it with or without the
      vanillakit JavaScript library.
    </p>

    <h3>With vanillakit</h3>
    <p>
      Call <code>initVanillaCss()</code> once at app startup. It injects the CSS
      into the page via an adopted stylesheet.
    </p>
    ${code(
      `import { initVanillaCss, themeToggle } from "vanillakit";
import { html } from "vanillakit";

initVanillaCss();  // inject VanillaCSS

// Optional: reactive dark/light toggle
const { theme, toggle } = themeToggle();

document.body.append(html\`
  <button onclick=\${toggle}>
    \${() => theme() === "dark" ? "☀️ Light" : "🌙 Dark"}
  </button>
\`);`,
      "typescript",
    )}

    <h3>Standalone — no JavaScript required</h3>
    <p>
      Copy <code>src/vanillacss/</code> to your project and link
      <code>vanilla.css</code>. The entire framework is plain CSS — no build
      step, no JavaScript dependency.
    </p>
    ${code(
      `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./vanillacss/vanilla.css" />
  </head>
  <body>
    <header>
      <a href="/">MySite</a>
      <nav>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
      </nav>
    </header>
    <main>
      <h1>Hello</h1>
      <p>Styled automatically — no class names needed.</p>
      <button data-color-variant="primary">Get started</button>
    </main>
  </body>
</html>`,
      "markup",
    )}

    <p>Or import in your own CSS:</p>
    ${code(
      `/* styles.css */
@import "./vanillacss/vanilla.css";

/* Your styles here — unlayered rules always beat @layer rules */
:root {
  --vk-color-accent: hsl(220 80% 60%);  /* swap to blue */
}`,
      "css",
    )}

    <h3>Layer architecture</h3>
    <p>
      Every VanillaCSS rule lives inside a named <code>@layer</code> sub-layer.
      Your own styles — even ones with low specificity — automatically override
      VanillaCSS because unlayered declarations beat layered ones at equal
      specificity. No <code>!important</code>, no specificity fights.
    </p>
    ${code(
      `/* Sub-layer cascade order — lowest to highest priority */
@layer vanillacss.reset,       /* minireset.css foundation      */
       vanillacss.tokens,      /* custom properties & theme     */
       vanillacss.base,        /* html, body, img, input reset  */
       vanillacss.typography,  /* headings, links, lists, code  */
       vanillacss.layout,      /* main, header, cards, grid     */
       vanillacss.nav,         /* nav, breadcrumb, pagination   */
       vanillacss.buttons,     /* buttons, hover effects        */
       vanillacss.forms,       /* inputs, checkbox, switch      */
       vanillacss.feedback,    /* alerts, progress, toast       */
       vanillacss.data,        /* tables, tags, avatars         */
       vanillacss.components,  /* dialog, tabs, accordion       */
       vanillacss.utilities;   /* badges, sr-only, keyframes    */`,
      "css",
    )}

    <p>Override any individual layer precisely:</p>
    ${code(
      `/* Any selector outside a @layer beats everything inside one */
:root {
  --vk-color-accent: hsl(220 80% 60%);
}

/* Or target a specific sub-layer */
@layer vanillacss.typography {
  h1 { letter-spacing: -0.05em; }
}`,
      "css",
    )}
  </section>`;
}
