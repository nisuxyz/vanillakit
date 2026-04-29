import { html } from '@vanillakit/vanillakit';
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";
import { VANILLA_CSS_COMPONENTS_SNIPPET_1 } from "../../snippets.js";

export function VanillaCssComponentsSection() {
  return html`<section>
    <h2>Components</h2>
    <p>
      VanillaCSS styles native HTML elements and ARIA patterns automatically.
      Each example is fully editable — try changing the code!
    </p>

    <!-- ── TYPOGRAPHY ───────────────────────────────── -->
    <h3>Typography</h3>
    <p>Headings, body text, and inline elements are styled out of the box.</p>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </div>
\`);` },
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div>
    <p>
      A paragraph with <strong>bold</strong>, <em>italic</em>,
      <small>small</small>, <mark>highlighted</mark>,
      <code>inline code</code>, <kbd>Ctrl+K</kbd>,
      and <a href="#">a link</a>.
    </p>
    <blockquote>A blockquote for pull quotes and callouts.</blockquote>
  </div>
\`);` },
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div>
    <ul>
      <li>Unordered item one</li>
      <li>Unordered item two</li>
      <li>Unordered item three</li>
    </ul>
    <ol>
      <li>Ordered item one</li>
      <li>Ordered item two</li>
      <li>Ordered item three</li>
    </ol>
  </div>
\`);` },
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <pre><code>const greeting = "Hello, world!";
console.log(greeting);
// → Hello, world!</code></pre>
\`);` },
    })}

    <!-- ── BUTTONS ───────────────────────────────────── -->
    <h3>Buttons</h3>
    <p>
      Use <code>data-color-variant</code> for semantic color,
      <code>data-style-variant</code> for hollow styles,
      <code>data-size</code> for scale.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-wrap:wrap;gap:.5rem">
    <button>Default</button>
    <button data-color-variant="primary">Primary</button>
    <button data-color-variant="danger">Danger</button>
    <button data-color-variant="success">Success</button>
    <button data-color-variant="warning">Warning</button>
    <button data-color-variant="info">Info</button>
  </div>
\`);` },
      label: "Color variants",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:.5rem">
    <button data-size="sm">Small</button>
    <button>Default</button>
    <button data-size="lg">Large</button>
    <button data-size="xl">XL</button>
  </div>
\`);` },
      label: "Sizes",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-wrap:wrap;gap:.5rem">
    <button data-style-variant="ghost">Ghost</button>
    <button data-style-variant="outline">Outline</button>
  </div>
\`);` },
      label: "Style variants",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-wrap:wrap;gap:.5rem">
    <button data-style-variant="ghost" data-color-variant="primary">Ghost primary</button>
    <button data-style-variant="ghost" data-color-variant="danger">Ghost danger</button>
    <button data-style-variant="outline" data-color-variant="primary">Outline primary</button>
    <button data-style-variant="outline" data-color-variant="danger">Outline danger</button>
  </div>
\`);` },
      label: "Style + color combos",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-wrap:wrap;gap:.5rem">
    <button data-loading>Saving…</button>
    <button data-color-variant="primary" data-loading>Loading</button>
  </div>
\`);` },
      label: "Loading state",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div role="group">
    <button>Left</button>
    <button aria-pressed="true">Center</button>
    <button>Right</button>
  </div>
\`);` },
      label: "Button group",
    })}

    <p>Hover effects work on any element — cards, images, links, etc.</p>
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-wrap:wrap;gap:.5rem">
    <button data-hover="lift">Lift</button>
    <button data-hover="scale">Scale</button>
    <button data-hover="glow">Glow</button>
    <button data-hover="pop">Pop</button>
    <button data-hover="dim">Dim</button>
    <button data-hover="bright">Bright</button>
  </div>
\`);` },
      label: "Hover effects",
    })}

    <!-- ── FORMS ─────────────────────────────────────── -->
    <h3>Forms</h3>
    <p>
      All form controls are full-width by default. Wrap in a
      <code>&lt;label&gt;</code> for accessible pairing.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-direction:column;gap:.75rem;max-width:400px">
    <label>Username<input type="text" placeholder="Enter username" /></label>
    <label>Email<input type="email" placeholder="you@example.com" /></label>
    <label>Bio<textarea placeholder="Tell us about yourself"></textarea></label>
    <label>Country
      <select>
        <option>United States</option>
        <option>Canada</option>
        <option>United Kingdom</option>
      </select>
    </label>
  </div>
\`);` },
      label: "Text inputs",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">
    <input type="text" data-size="sm" placeholder="Small input" />
    <input type="text" placeholder="Default input" />
    <input type="text" data-size="lg" placeholder="Large input" />
  </div>
\`);` },
      label: "Input sizes",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-direction:column;gap:.5rem">
    <label><input type="checkbox" checked /> Remember me</label>
    <label><input type="checkbox" /> Subscribe to newsletter</label>
    <label><input type="radio" name="plan" checked /> Free</label>
    <label><input type="radio" name="plan" /> Pro</label>
  </div>
\`);` },
      label: "Checkboxes & radios",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">
    <label><input type="checkbox" role="switch" checked /> Enable notifications</label>
    <label><input type="checkbox" role="switch" /> Dark mode</label>
    <label>Volume<input type="range" min="0" max="100" value="60" /></label>
  </div>
\`);` },
      label: "Switches & ranges",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <fieldset style="max-width:400px">
    <legend>Preferences</legend>
    <label><input type="checkbox" checked /> Email notifications</label>
    <label><input type="checkbox" /> Weekly digest</label>
  </fieldset>
\`);` },
      label: "Fieldset",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">
    <label>
      Email (invalid)
      <input type="email" aria-invalid="true" value="not-an-email" />
    </label>
    <label>
      Username (disabled)
      <input type="text" disabled value="admin" />
    </label>
  </div>
\`);` },
      label: "Validation states",
    })}

    <!-- ── CARDS ─────────────────────────────────────── -->
    <h3>Cards</h3>
    <p>
      <code>article[data-card]</code> creates card layout. Add a
      <code>&lt;header&gt;</code> or <code>&lt;footer&gt;</code> for structured
      cards.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <article data-card style="max-width:280px">
    <h4>Simple card</h4>
    <p>Card content with some descriptive text goes here.</p>
    <button data-color-variant="primary">Action</button>
  </article>
\`);` },
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <article data-card style="max-width:320px">
    <header><h5>Card with header &amp; footer</h5></header>
    <p>Content area of the card. Padding is applied automatically.</p>
    <footer>
      <button data-style-variant="ghost">Cancel</button>
      <button data-color-variant="primary">Save</button>
    </footer>
  </article>
\`);` },
    })}

    <p>Use a <code>&lt;dl&gt;</code> inside a card for stat displays:</p>
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div data-grid style="max-width:420px">
    <article data-card><dl><dt>Users</dt><dd>12,048</dd></dl></article>
    <article data-card><dl><dt>Revenue</dt><dd>$4,200</dd></dl></article>
  </div>
\`);` },
      label: "Stat cards",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;gap:1rem;flex-wrap:wrap">
    <article data-card data-hover="lift" style="padding:1rem;min-width:140px">
      <h6>Lift</h6><p>Hover me</p>
    </article>
    <article data-card data-hover="glow" style="padding:1rem;min-width:140px">
      <h6>Glow</h6><p>Hover me</p>
    </article>
    <article data-card data-hover="scale" style="padding:1rem;min-width:140px">
      <h6>Scale</h6><p>Hover me</p>
    </article>
  </div>
\`);` },
      label: "Card hover effects",
    })}

    <!-- ── LAYOUT ────────────────────────────────────── -->
    <h3>Layout</h3>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div data-grid>
    <article data-card style="padding:1rem"><p>Column 1</p></article>
    <article data-card style="padding:1rem"><p>Column 2</p></article>
    <article data-card style="padding:1rem"><p>Column 3</p></article>
  </div>
\`);` },
      label: "Auto grid",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div data-grid data-cols="2">
    <article data-card style="padding:1rem"><p>Col A</p></article>
    <article data-card style="padding:1rem"><p>Col B</p></article>
  </div>
\`);` },
      label: "2-column grid",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div data-layout="sidebar" style="min-height:100px">
    <aside style="background:var(--vk-color-surface-2);padding:1rem"><p>Sidebar</p></aside>
    <main style="background:var(--vk-color-surface);padding:1rem"><p>Main content</p></main>
  </div>
\`);` },
      label: "Sidebar layout",
    })}

    <!-- ── NAVIGATION ────────────────────────────────── -->
    <h3>Navigation</h3>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <nav>
    <a href="#" aria-current="page">Home</a>
    <a href="#">Docs</a>
    <a href="#">Examples</a>
    <a href="#">About</a>
  </nav>
\`);` },
      label: "Nav bar",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <nav aria-label="breadcrumb">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Docs</a></li>
      <li><a href="#">VanillaCSS</a></li>
    </ol>
  </nav>
\`);` },
      label: "Breadcrumb",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <nav aria-label="pagination">
    <ul>
      <li><a href="#">‹</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#" aria-current="page">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">›</a></li>
    </ul>
  </nav>
\`);` },
      label: "Pagination",
    })}

    <!-- ── ALERTS & FEEDBACK ─────────────────────────── -->
    <h3>Alerts &amp; Feedback</h3>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-direction:column;gap:.5rem">
    <div role="alert">Default — informational message</div>
    <div role="alert" data-color-variant="danger">Danger: something went wrong</div>
    <div role="alert" data-color-variant="success">Success: changes saved</div>
    <div role="alert" data-color-variant="warning">Warning: action cannot be undone</div>
    <div role="alert" data-color-variant="info">Info: a new version is available</div>
    <div role="alert" data-color-variant="primary">Primary: featured announcement</div>
  </div>
\`);` },
      label: "Alert variants",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-direction:column;gap:.5rem">
    <progress value="35" max="100"></progress>
    <progress value="70" max="100"></progress>
  </div>
\`);` },
      label: "Progress bars",
    })}

    <p>Skeleton loading — apply <code>data-skeleton</code> to any element:</p>
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-direction:column;gap:.5rem">
    <p data-skeleton style="width:60%;height:1em"></p>
    <p data-skeleton style="width:40%;height:1em"></p>
    <p data-skeleton style="width:80%;height:1em"></p>
  </div>
\`);` },
      label: "Skeleton loading",
    })}

    <!-- ── BADGES & TAGS ─────────────────────────────── -->
    <h3>Badges &amp; Tags</h3>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center">
    <span data-badge>Default</span>
    <span data-badge data-color-variant="primary">Primary</span>
    <span data-badge data-color-variant="danger">Danger</span>
    <span data-badge data-color-variant="success">Success</span>
    <span data-badge data-color-variant="warning">Warning</span>
    <span data-badge data-color-variant="info">Info</span>
  </div>
\`);` },
      label: "Badge variants",
    })}
    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <ul data-tags>
    <li>TypeScript</li>
    <li>CSS</li>
    <li>Vanilla JS</li>
    <li>HTML</li>
    <li>Progressive enhancement</li>
  </ul>
\`);` },
      label: "Tags",
    })}

    <!-- ── TABLES ────────────────────────────────────── -->
    <h3>Tables</h3>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <table>
    <thead>
      <tr>
        <th aria-sort="ascending">Name</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Chen</td><td>Engineer</td>
        <td><span data-badge data-color-variant="success">Active</span></td>
      </tr>
      <tr>
        <td>Bob Smith</td><td>Designer</td>
        <td><span data-badge data-color-variant="success">Active</span></td>
      </tr>
      <tr>
        <td>Carol White</td><td>Manager</td>
        <td><span data-badge data-color-variant="warning">Away</span></td>
      </tr>
    </tbody>
  </table>
\`);` },
    })}

    <!-- ── TIMELINE ──────────────────────────────────── -->
    <h3>Timeline</h3>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <ol data-timeline>
    <li>
      <strong>Project kickoff</strong>
      <p>Team assembled, requirements defined</p>
    </li>
    <li>
      <strong>Design phase</strong>
      <p>Wireframes and prototypes completed</p>
    </li>
    <li>
      <strong>Development</strong>
      <p>Implementation in progress</p>
    </li>
  </ol>
\`);` },
    })}

    <!-- ── TABS ──────────────────────────────────────── -->
    <h3>Tabs</h3>
    <p>
      Styled via <code>role="tablist"</code> and <code>role="tab"</code>. Use
      <code>aria-selected="true"</code> on the active tab.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div>
    <div role="tablist">
      <button role="tab" aria-selected="true">Overview</button>
      <button role="tab" aria-selected="false">API</button>
      <button role="tab" aria-selected="false">Examples</button>
    </div>
    <div role="tabpanel"><p>Active panel content shown here.</p></div>
  </div>
\`);` },
    })}

    <!-- ── ACCORDION ─────────────────────────────────── -->
    <h3>Accordion</h3>
    <p>
      Uses native <code>&lt;details&gt;</code> — no JavaScript needed. Stack
      adjacently to merge borders automatically.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div>
    <details>
      <summary>What is VanillaCSS?</summary>
      <p>A classless CSS framework that styles semantic HTML without class names.</p>
    </details>
    <details open>
      <summary>How do I customize it?</summary>
      <p>Override <code>--vk-*</code> custom properties in your own stylesheet.</p>
    </details>
    <details>
      <summary>Does it need JavaScript?</summary>
      <p>No — CSS-only usage is fully functional.</p>
    </details>
  </div>
\`);` },
    })}

    <!-- ── DROPDOWN ──────────────────────────────────── -->
    <h3>Dropdown</h3>
    <p>
      Add <code>data-dropdown</code> to a <code>&lt;details&gt;</code>
      for absolute-positioned menus.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <details data-dropdown>
    <summary><button>Options ▾</button></summary>
    <ul>
      <li><a href="javascript:void(0)">Profile</a></li>
      <li><a href="javascript:void(0)">Settings</a></li>
      <li><a href="javascript:void(0)">Sign out</a></li>
    </ul>
  </details>
\`);` },
    })}

    <!-- ── DIALOG ────────────────────────────────────── -->
    <h3>Dialog</h3>
    <p>
      Styled via the native <code>&lt;dialog&gt;</code> element. Open with
      <code>dialogEl.showModal()</code> for a modal with backdrop, or
      <code>.show()</code> for modeless.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: `
  const openDialog = () =>
    document.querySelector<HTMLDialogElement>("#dialogTest")?.showModal();
  const closeDialog = () =>
    document.querySelector<HTMLDialogElement>("#dialogTest")?.close();

  const Dialog = () => html\`
    <dialog id="dialogTest">
      <header><h4>Confirm delete</h4></header>
      <p>
        This will permanently delete the item. This action cannot be undone.
      </p>
      <footer>
        <button data-style-variant="ghost" onclick=\${closeDialog}>
          Cancel
        </button>
        <button data-color-variant="danger" onclick=\${closeDialog}>
          Delete
        </button>
      </footer>
    </dialog>

    <button onclick=\${openDialog}>Open</button>
  \`;
document.body.append(Dialog());` },
      label: "Modal dialog",
    })}
    ${code(VANILLA_CSS_COMPONENTS_SNIPPET_1, "javascript")}

    <!-- ── TOOLTIP ───────────────────────────────────── -->
    <h3>Tooltip</h3>
    <p>
      CSS-only tooltips via <code>data-tooltip</code>. Appears above the element
      on hover or focus.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;flex-wrap:wrap;gap:.5rem">
    <button data-tooltip="Copy to clipboard">Copy</button>
    <button data-tooltip="Open in a new tab" data-color-variant="primary">Open</button>
    <abbr data-tooltip="HyperText Markup Language">HTML</abbr>
  </div>
\`);` },
    })}

    <!-- ── POPOVER ───────────────────────────────────── -->
    <h3>Popover</h3>
    <p>
      Styled via the <code>[popover]</code> attribute. Uses the native Popover
      API — no extra JavaScript needed for basic show/hide.
    </p>

    ${LiveEditor({
      sourceVariants: { typescript: `document.body.append(html\`
  <div style="display:flex;gap:.75rem;align-items:center">
    <button popovertarget="vk-pop-demo" style="anchor-name:--vk-pop-demo">Show tip ▾</button>
    <div popover id="vk-pop-demo" style="margin:4px 0 0;position:fixed;position-anchor:--vk-pop-demo;top:anchor(bottom);left:anchor(left)">
      <strong>Quick tip</strong>
      <p>Use CSS sub-layers to override styles without specificity battles.</p>
    </div>
    <small style="opacity:.6">Click the button to open</small>
  </div>
\`);` },
      label: "Popover",
    })}
  </section>`;
}
