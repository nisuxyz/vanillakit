// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

/**
 * VKML-friendly ESLint flat config.
 *
 * VKML writes UI as nested function calls that mirror HTML:
 *   div({ class: "card" }, h1("Title"), p("Body"))
 *
 * Standard JS lint rules fight this style. This config relaxes
 * rules that conflict with VKML's compact, HTML-like patterns
 * while keeping meaningful checks for logic and correctness.
 *
 * Key accommodations:
 * - PascalCase component names (HomePage, EmphasisCard, etc.)
 * - UPPER_CASE constants (COUNTER, SVG_TAGS, etc.)
 * - Short HTML tag names as imports (a, p, dl, dd, dt, br, hr)
 * - Quoted kebab-case props (data-*, aria-*, font-size, etc.)
 * - Mixed quoted/unquoted props ({ class, "data-card": true })
 * - Internal __v_* properties (framework convention)
 * - Long lines from nested VKML calls
 */

// HTML tag names used as VKML function imports
const VKML_TAGS = new Set([
  "a", "abbr", "address", "area", "article", "aside", "audio",
  "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button",
  "canvas", "caption", "cite", "code", "col", "colgroup",
  "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt",
  "em", "embed",
  "fieldset", "figcaption", "figure", "footer", "form",
  "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr",
  "i", "iframe", "img", "input", "ins",
  "kbd",
  "label", "legend", "li", "link",
  "main", "map", "mark", "menu", "meta", "meter",
  "nav", "noscript",
  "object", "ol", "optgroup", "option", "output",
  "p", "picture", "pre", "progress",
  "q",
  "rp", "rt", "ruby",
  "s", "samp", "script", "section", "select", "small", "source", "span",
  "strong", "style", "sub", "summary", "sup",
  "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead",
  "time", "title", "tr", "track",
  "u", "ul",
  "variable", "video",
  "wbr",
  // SVG tags
  "circle", "clipPath", "defs", "ellipse", "g", "image", "line",
  "linearGradient", "mask", "path", "pattern", "polygon", "polyline",
  "radialGradient", "rect", "stop", "svg", "text", "use",
]);

export default tseslint.config(
  // ── Global ignores ────────────────────────────────────────
  {
    ignores: [
      "dist/**",
      "docs/**",
      "node_modules/**",
    ],
  },

  // ── Base: recommended JS + TypeScript ─────────────────────
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // ── Source & demo files: VKML-friendly rules ─────────────
  {
    files: ["src/**/*.ts", "demo/**/*.ts"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      // ── Import sorting & cleanup ────────────────────────────

      // Sort imports: side-effect → external → internal → parent → sibling → type
      "simple-import-sort/imports": ["error", {
        groups: [
          // Side-effect imports (e.g. import 'styles.css')
          ["^\\u0000"],
          // External packages (e.g. react, lodash)
          ["^\\u0000(?!(?:\\.{1,2}/|@vanillakit))"],
          // Internal aliases / package imports
          ["^\\u0000@vanillakit"],
          // Parent imports (../)
          ["^\\u0000\\.\\.(?!.*\\.css)"],
          // Sibling imports (./)
          ["^\\u0000\\.(?!.*\\.css)"],
          // CSS/style imports
          ["\\.css$"],
          // Type-only imports (sorted after value imports)
          ["^type"],
        ],
      }],
      // Sort re-exports the same way
      "simple-import-sort/exports": "error",

      // Remove unused imports automatically with lint:fix
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      }],

      // ── Formatting ──────────────────────────────────────────

      // VKML nests deeply — long lines are natural and expected
      "max-len": "off",

      // VKML naturally mixes quoted ("data-card") and unquoted (class) props
      "quote-props": "off",

      // ── Naming conventions ──────────────────────────────────

      // HTML tag names (a, p, dl, dd, dt, br, hr, etc.) are
      // the canonical VKML API — allow short identifiers
      "id-length": ["error", {
        min: 1,
        exceptions: Array.from(VKML_TAGS),
        properties: "never",
      }],

      // Comprehensive naming convention that accommodates VKML patterns:
      // - PascalCase component functions (HomePage, EmphasisCard)
      // - UPPER_CASE constants (COUNTER, SVG_TAGS)
      // - Short HTML tag imports (a, p, dl)
      // - Quoted kebab-case props (data-*, aria-*, font-size)
      // - Internal __v_* properties (framework convention)
      "@typescript-eslint/naming-convention": [
        "error",
        // Default: camelCase, UPPER_CASE, or PascalCase
        {
          selector: "default",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        // Variables: allow camelCase, UPPER_CASE, PascalCase (components)
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        // Functions: allow camelCase and PascalCase (VKML components)
        // Also allow leading underscore for internal helpers (_isProps, _createElement)
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
        // Parameters: camelCase with underscore prefix allowed
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        // Type names: PascalCase
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        // Enum members: PascalCase or UPPER_CASE
        {
          selector: "enumMember",
          format: ["PascalCase", "UPPER_CASE"],
        },
        // Object literal properties: allow any format for kebab-case keys
        // This covers data-*, aria-*, font-size, text-anchor, etc.
        // Also covers keys with spaces like "Last 3 months" (computed enum-style keys)
        {
          selector: "property",
          format: null,
          filter: {
            regex: "^(data-|aria-|font-|text-|pointer-|__v_|\\d+|/|.*-.*|.*\\s.*)",
            match: true,
          },
        },
        // Object literal method names: allow any format for kebab-case keys
        {
          selector: "method",
          format: null,
          filter: {
            regex: "^(data-|aria-|font-|text-|pointer-|.*-.*|\\*)",
            match: true,
          },
        },
        // Type/member properties: allow __v_* internal convention
        {
          selector: "memberLike",
          format: null,
          filter: {
            regex: "^__v_",
            match: true,
          },
        },
      ],

      // ── Function call patterns ──────────────────────────────

      // VKML calls naturally have many arguments (children)
      "function-call-argument-newline": "off",
      "function-paren-newline": "off",

      // ── Ternaries & conditionals ─────────────────────────────

      // Conditional rendering uses ternaries: condition ? node : null
      "no-nested-ternary": "off",
      "no-unneeded-ternary": "off",

      // ── Object patterns ───────────────────────────────────────

      // Spread for conditional props is idiomatic in VKML
      "prefer-object-spread": "off",

      // ── Expressions ──────────────────────────────────────────

      // Tagged template expressions (css`...`, html`...`) and
      // VKML function calls as expressions are valid patterns
      "@typescript-eslint/no-unused-expressions": ["error", {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      }],

      // ── TypeScript-specific ──────────────────────────────────

      // Allow `any` in demo/example code where flexibility is needed
      "@typescript-eslint/no-explicit-any": "off",

      // Non-null assertions are common when working with DOM
      "@typescript-eslint/no-non-null-assertion": "off",

      // Empty object types are fine for VKML prop bags
      "@typescript-eslint/no-empty-object-type": "off",

      // Empty function bodies are fine for stubs
      "@typescript-eslint/no-empty-function": "off",

      // Allow @ts-ignore (sometimes needed for complex generic inference)
      "@typescript-eslint/ban-ts-comment": "off",

      // Empty blocks are fine in demo code (catch blocks, etc.)
      "no-empty": "off",

      // Unnecessary escapes are code quality, not style — warn only
      "no-useless-escape": "warn",
    },
  },

  // ── Config files: relaxed ───────────────────────────────────
  {
    files: ["vite.config.js", "vite.config.dist.js", "eslint.config.js"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  // ── Test files: browser globals + relaxed ──────────────────
  {
    files: ["test/**/*.js", "test/**/*.ts"],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        Event: "readonly",
        CustomEvent: "readonly",
        HTMLElement: "readonly",
        HTMLDivElement: "readonly",
        HTMLAnchorElement: "readonly",
        HTMLInputElement: "readonly",
        HTMLSelectElement: "readonly",
        HTMLButtonElement: "readonly",
        Node: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        PopStateEvent: "readonly",
        location: "readonly",
        history: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-undef": "off",
      "no-empty": "off",
      "no-unused-expressions": "off",
    },
  },
);