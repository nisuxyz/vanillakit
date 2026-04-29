// vss.ts — Apply `s-*` attributes as inline styles
// Zero dependencies.
//
// Usage:
//   import { initStyleAttrs } from './vss.js';
//   initStyleAttrs(); // scan document.body + watch for changes
//   // Returns a cleanup function that disconnects the observer.
//
// HTML:
//   <div s-padding-inline="1rem" s-display="flex">...</div>
//
// The attribute name after `s-` is resolved as a CSS property:
//   Verbatim:  s-padding-inline      → padding-inline
//   Shorthand: s-mt                  → margin-top  (via PROPERTY_MAP)
//   Vendor:    s--webkit-appearance  → -webkit-appearance
//   Custom:   s---my-var            → --my-var     (CSS custom property)
//
// Values containing `--token` are auto-wrapped in var():
//   s-gap="--vk-space-md"           → gap: var(--vk-space-md)
//   s-margin="1rem --vk-space-md"   → margin: 1rem var(--vk-space-md)
//   s-gap="var(--vk-space-md)"      → gap: var(--vk-space-md)  (no double-wrap)
//
// Config:
//   initStyleAttrs(document.body, {
//     propertyMap: new Map([['z', 'z-index']])  // merge/override defaults
//   });
//
// Works automatically with dynamically added elements via MutationObserver.
// Reactive attributes from html`` templates work too — when the value changes,
// the inline style updates because attribute mutations are observed.
//
// `el.style.setProperty()` writes to the element's inline style, so s-*
// attributes get inline-style specificity by default. They cleanly override
// stylesheet rules without needing !important.

// ── Prefix ──────────────────────────────────────────────────
const PREFIX = 's-';
const PREFIX_LEN = PREFIX.length;

// ── Property shorthand map ──────────────────────────────────
// Maps short aliases to full CSS property names.
// Use Map for O(1) lookup. Users can extend via initStyleAttrs({ propertyMap }).
export const PROPERTY_MAP: ReadonlyMap<string, string> = new Map([
  // Layout
  ['d', 'display'],
  ['pos', 'position'],
  ['t', 'top'],
  ['r', 'right'],
  ['b', 'bottom'],
  ['l', 'left'],
  ['z', 'z-index'],
  ['fl', 'float'],
  ['cl', 'clear'],

  // Flexbox
  ['fd', 'flex-direction'],
  ['fwr', 'flex-wrap'],
  ['fb', 'flex-basis'],
  ['fg', 'flex-grow'],
  ['fsh', 'flex-shrink'],
  ['f', 'flex'],
  ['jc', 'justify-content'],
  ['ji', 'justify-items'],
  ['js', 'justify-self'],
  ['ai', 'align-items'],
  ['ac', 'align-content'],
  ['as', 'align-self'],

  // Grid
  ['g', 'gap'],
  ['gr', 'grid'],
  ['grt', 'grid-template'],
  ['grtc', 'grid-template-columns'],
  ['grtr', 'grid-template-rows'],
  ['gra', 'grid-area'],
  ['grc', 'grid-column'],
  ['grr', 'grid-row'],
  ['gc', 'grid-column'],
  ['grs', 'grid-row-start'],
  ['gre', 'grid-row-end'],

  // Spacing
  ['m', 'margin'],
  ['mt', 'margin-top'],
  ['mr', 'margin-right'],
  ['mb', 'margin-bottom'],
  ['ml', 'margin-left'],
  ['mi', 'margin-inline'],
  ['mis', 'margin-inline-start'],
  ['mie', 'margin-inline-end'],
  ['mbl', 'margin-block'],
  ['mbs', 'margin-block-start'],
  ['mbe', 'margin-block-end'],
  ['p', 'padding'],
  ['pt', 'padding-top'],
  ['pr', 'padding-right'],
  ['pb', 'padding-bottom'],
  ['pl', 'padding-left'],
  ['pi', 'padding-inline'],
  ['pis', 'padding-inline-start'],
  ['pie', 'padding-inline-end'],
  ['pbk', 'padding-block'],
  ['pbs', 'padding-block-start'],
  ['pbe', 'padding-block-end'],

  // Sizing
  ['w', 'width'],
  ['h', 'height'],
  ['mw', 'max-width'],
  ['mh', 'max-height'],
  ['miw', 'min-width'],
  ['mih', 'min-height'],
  ['ar', 'aspect-ratio'],

  // Typography
  ['ff', 'font-family'],
  ['fz', 'font-size'],
  ['fst', 'font-style'],
  ['fv', 'font-variant'],
  ['fw', 'font-weight'],
  ['lh', 'line-height'],
  ['ls', 'letter-spacing'],
  ['ta', 'text-align'],
  ['td', 'text-decoration'],
  ['ti', 'text-indent'],
  ['to', 'text-overflow'],
  ['tt', 'text-transform'],
  ['ws', 'white-space'],
  ['wb', 'word-break'],
  ['ww', 'word-wrap'],
  ['va', 'vertical-align'],

  // Colors & backgrounds
  ['c', 'color'],
  ['bg', 'background'],
  ['bgc', 'background-color'],
  ['bgi', 'background-image'],
  ['bgp', 'background-position'],
  ['bgs', 'background-size'],
  ['bgr', 'background-repeat'],
  ['bga', 'background-attachment'],
  ['op', 'opacity'],

  // Borders
  ['bd', 'border'],
  ['bdw', 'border-width'],
  ['bds', 'border-style'],
  ['bdc', 'border-color'],
  ['br', 'border-radius'],
  ['brt', 'border-top-left-radius'],
  ['ol', 'outline'],
  ['olw', 'outline-width'],
  ['ols', 'outline-style'],
  ['olc', 'outline-color'],
  ['olo', 'outline-offset'],

  // Overflow
  ['of', 'overflow'],
  ['ox', 'overflow-x'],
  ['oy', 'overflow-y'],

  // Visibility & cursor
  ['vis', 'visibility'],
  ['cur', 'cursor'],

  // Transitions & animations
  ['tr', 'transition'],
  ['trp', 'transition-property'],
  ['trd', 'transition-duration'],
  ['trf', 'transform'],
  ['an', 'animation'],

  // Box model
  ['bx', 'box-sizing'],
  ['bs', 'box-shadow'],

  // Pointer events
  ['pe', 'pointer-events'],
  ['us', 'user-select'],

  // Table
  ['bcs', 'border-collapse'],

  // Content
  ['ct', 'content'],
]);

// ── Active map (defaults + user overrides) ───────────────────
let activeMap: Map<string, string> = new Map(PROPERTY_MAP);

// ── var() expansion regex ───────────────────────────────────
// Matches --token patterns that are NOT already inside var(...).
// Strategy: match --[\w-]+ that is NOT preceded by var( and not already wrapped.
// We use a two-pass approach: first check if the value contains var(, and if so,
// skip tokens that are inside var(...) calls. For the common case (no var()),
// a simple global replace suffices.
const VAR_TOKEN_RE = /--[\w-]+/g;

function expandVars(value: string): string {
  // Fast path: if no -- tokens, return as-is
  if (!value.includes('--')) return value;
  // If the value already contains var(, we need to avoid double-wrapping.
  // Strategy: replace --tokens that are NOT immediately preceded by 'var('
  if (value.includes('var(')) {
    // Use a regex that matches --tokens NOT preceded by 'var('
    // Negative lookbehind for 'var(' — but since lookbehind can be tricky with
    // variable-length, we use a simpler approach: match --[\w-]+ that is NOT
    // inside var(...).
    // Simplest correct approach: split on var(...) segments, only expand outside them.
    return expandVarsCarefully(value);
  }
  return value.replace(VAR_TOKEN_RE, 'var($&)');
}

// Careful expansion: only expand --tokens that are NOT inside var(...).
// We match var(--token) as a unit and leave it alone; expand bare --tokens.
const VAR_ALREADY_WRAPPED_RE = /var\((--[\w-]+)\)/g;
const VAR_BARE_TOKEN_RE = /--[\w-]+/g;

function expandVarsCarefully(value: string): string {
  // Replace var(--token) with a placeholder, expand bare --tokens, then restore.
  // Use a unique placeholder that won't appear in CSS values.
  const placeholders: string[] = [];
  let result = value.replace(VAR_ALREADY_WRAPPED_RE, (_match, token: string) => {
    const idx = placeholders.length;
    placeholders.push(`var(${token})`);
    return `\u200B\u200B${idx}\u200B\u200B`; // zero-width spaces as delimiters
  });
  // Now expand remaining bare --tokens
  result = result.replace(VAR_BARE_TOKEN_RE, 'var($&)');
  // Restore placeholders
  result = result.replace(/\u200B\u200B(\d+)\u200B\u200B/g, (_match, idx: string) => {
    return placeholders[parseInt(idx, 10)];
  });
  return result;
}

// ── Core logic ─────────────────────────────────────────────

function applyAttr(el: HTMLElement, attrName: string, value: string | null) {
  const raw = attrName.slice(PREFIX_LEN);
  if (!raw) return;

  // Resolve property name: check map first, then use raw name verbatim.
  // Custom properties (starting with -- after the s- prefix, i.e. s---)
  // should NOT be looked up in the map.
  const prop = raw.startsWith('--') ? raw : (activeMap.get(raw) ?? raw);

  if (value == null) {
    el.style.removeProperty(prop);
  } else {
    el.style.setProperty(prop, expandVars(value));
  }
}

function processElement(el: HTMLElement) {
  if (!el.attributes) return;
  for (const attr of el.attributes) {
    if (attr.name.startsWith(PREFIX)) {
      applyAttr(el, attr.name, attr.value);
    }
  }
}

function processTree(root: HTMLElement | Node) {
  if (root.nodeType === 1) processElement(root as HTMLElement);
  if ((root as HTMLElement).querySelectorAll) {
    for (const el of (root as HTMLElement).querySelectorAll<HTMLElement>('*')) processElement(el);
  }
}

// ── Config type ─────────────────────────────────────────────

export interface StyleAttrsConfig {
  /** Custom property abbreviations to merge/override the defaults. */
  propertyMap?: Map<string, string> | Record<string, string>;
}

// ── Public API ─────────────────────────────────────────────

export function initStyleAttrs(root?: HTMLElement | null, config?: StyleAttrsConfig) {
  // Always reset activeMap to defaults, then merge user overrides if any
  activeMap = new Map(PROPERTY_MAP);
  if (config?.propertyMap) {
    const userMap = config.propertyMap;
    if (userMap instanceof Map) {
      for (const [k, v] of userMap) activeMap.set(k, v);
    } else {
      for (const [k, v] of Object.entries(userMap)) activeMap.set(k, v);
    }
  }

  // Default to document.body, but handle case where body isn't ready yet
  if (root === undefined) root = document.body;
  if (!root) {
    if (document.readyState === 'loading') {
      const handler = () => initStyleAttrs(document.body);
      document.addEventListener('DOMContentLoaded', handler, { once: true });
      return () => document.removeEventListener('DOMContentLoaded', handler);
    }
    return () => {};
  }

  // Initial pass: apply all existing s-* attributes
  processTree(root);

  // Watch for new elements and attribute changes
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'childList') {
        for (const node of m.addedNodes) {
          if (node.nodeType === 1) processTree(node);
        }
      } else if (m.type === 'attributes') {
        const name = m.attributeName;
        if (name && name.startsWith(PREFIX)) {
          applyAttr(m.target as HTMLElement, name, (m.target as HTMLElement).getAttribute(name));
        }
      }
    }
  });

  observer.observe(root, {
    childList: true,
    subtree: true,
    attributes: true,
  });

  return () => observer.disconnect();
}

// Manually apply s-* attributes on a single element.
// Useful for elements you've created but haven't yet attached to the DOM,
// where the global observer won't have fired yet.
export function applyStyleAttrs(el: HTMLElement) {
  processElement(el);
}

// ── cn() — Merge class strings + s-* style attrs ───────────
//
// Combines multiple inputs into a single props object suitable for
// spreading into vkml tag functions:
//
//   const props = cn('btn btn-primary', { s_display: 'flex', s_gap: '1rem' });
//   div(props, 'Hello');
//
// Rules:
//   - String inputs are treated as class names (concatenated with spaces)
//   - Object inputs are treated as props (last-wins for conflicts)
//   - false, null, undefined are skipped
//   - Object values that are false/null/undefined are removed from the result
//   - Function values (e.g. onclick) are passed through for vkml event binding
//   - Returns { class: string, ...props } suitable for vkml tag functions

export type CnValue = string | false | null | undefined | ((...args: any[]) => any);
export type CnInput = string | false | null | undefined | Record<string, CnValue>;

export function cn(...inputs: CnInput[]): Record<string, CnValue> {
  const classes: string[] = [];
  const attrs: Record<string, CnValue> = {};

  for (const input of inputs) {
    if (input == null || input === false) continue;

    if (typeof input === 'string') {
      const trimmed = input.trim();
      if (trimmed) classes.push(trimmed);
      continue;
    }

    // Object input: merge props, last-wins
    for (const [key, value] of Object.entries(input)) {
      if (value == null || value === false) {
        delete attrs[key];
      } else {
        attrs[key] = value;
      }
    }
  }

  const result: Record<string, CnValue> = {};
  if (classes.length > 0) {
    result.class = classes.join(' ');
  }
  Object.assign(result, attrs);
  return result;
}