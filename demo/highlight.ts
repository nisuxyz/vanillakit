import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-bash";
import { html } from "../src/index.js";
import { globalCss } from "../src/index.js";
import { sourceBlock } from "./styles.ts";

// Prism theme — dark, matching the demo's color palette
globalCss`
  .token.comment, .token.prolog, .token.doctype, .token.cdata {
    color: #6a6a7a;
  }
  .token.punctuation {
    color: #8b8a8e;
  }
  .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted {
    color: #e85454;
  }
  .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
    color: #54e8a0;
  }
  .token.operator, .token.entity, .token.url {
    color: #e8c547;
  }
  .token.atrule, .token.attr-value, .token.keyword {
    color: #5478e8;
  }
  .token.function, .token.class-name {
    color: #e8c547;
  }
  .token.regex, .token.important, .token.variable {
    color: #e8c547;
  }
  .token.template-string .token.interpolation {
    color: #e8c547;
  }
  .token.template-string .token.string {
    color: #54e8a0;
  }
`;

export function code(src: string, lang = "javascript") {
  const trimmed = src.trim();
  const highlighted = Prism.highlight(trimmed, Prism.languages[lang] || Prism.languages.javascript, lang);
  const pre = document.createElement("pre");
  pre.className = sourceBlock;
  pre.innerHTML = highlighted;
  return pre;
}
