import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-css-extras";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-js-templates";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-python";

import { globalCss } from "../src/index.js";
import { sourceBlock } from "./styles.ts";
import Prism from "prismjs";

// Prism theme — uses CSS custom properties for theme-awareness
globalCss`
  .token.comment, .token.prolog, .token.doctype, .token.cdata {
    color: var(--code-comment, #6a6a7a);
  }
  .token.punctuation {
    color: var(--vk-color-text-muted);
  }
  .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted {
    color: var(--vk-color-danger);
  }
  .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
    color: var(--vk-color-success);
  }
  .token.operator, .token.entity, .token.url {
    color: var(--vk-color-accent);
  }
  .token.atrule, .token.attr-value, .token.keyword {
    color: var(--vk-color-info);
  }
  .token.function, .token.class-name {
    color: var(--vk-color-accent);
  }
  .token.regex, .token.important, .token.variable {
    color: var(--vk-color-accent);
  }
  .token.template-string .token.interpolation {
    color: var(--vk-color-accent);
  }
  .token.template-string .token.string {
    color: var(--vk-color-success);
  }
`;

export function code(src: string, lang = "typescript") {
  const trimmed = src.trim();
  const highlighted = Prism.highlight(
    trimmed,
    Prism.languages[lang as keyof typeof Prism.languages] ||
      /// @ts-ignore
      Prism.languages.typescript,
    lang,
  );
  const pre = document.createElement("pre");
  pre.className = sourceBlock;
  pre.innerHTML = highlighted;
  return pre;
}
