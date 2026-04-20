import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";

export function ConditionalSection() {
  return html`<section>
    <h2>Conditional Rendering</h2>
    <p>
      In <code>html\`\`</code>, use a function that returns different nodes (or
      <code>null</code>) based on signal values. The DOM updates surgically when
      conditions change.
    </p>

    <h3>Show / hide</h3>
    ${LiveEditor({
      source: `import { signal, html } from "vanillakit";

const loggedIn = signal(false);

document.body.append(html\`
  <div>
    \${() => loggedIn()
      ? html\`<div style="display:flex; align-items:center; gap:12px;">
          <span style="color:gold; font-weight:600;">Welcome back!</span>
          <button onclick=\${() => loggedIn(false)}>Log out</button>
        </div>\`
      : html\`<button onclick=\${() => loggedIn(true)}>Log in</button>\`
    }
  </div>
\`);`,
      label: "Show/hide — toggle login state",
    })}

    <h3>Multiple conditions</h3>
    ${LiveEditor({
      source: `import { signal, html } from "vanillakit";

const status = signal("idle"); // "idle" | "loading" | "error" | "done"

document.body.append(html\`
  <div>
    <div style="display:flex; gap:8px; margin-bottom:12px;">
      <button onclick=\${() => status("idle")}>Idle</button>
      <button onclick=\${() => status("loading")}>Loading</button>
      <button onclick=\${() => status("error")}>Error</button>
      <button onclick=\${() => status("done")}>Done</button>
    </div>
    <div style="font-size:1rem; font-weight:600;">
      \${() => {
        switch (status()) {
          case "loading": return html\`<span>Loading...</span>\`;
          case "error":   return html\`<span style="color:red;">Error!</span>\`;
          case "done":    return html\`<span style="color:green;">Done ✓</span>\`;
          default:        return html\`<span>Ready.</span>\`;
        }
      }}
    </div>
  </div>
\`);`,
      label: "Switch — click buttons to change status",
    })}

    <h3>vs. React / Vue</h3>
    <p>
      React uses JSX ternaries or early returns. Vue uses <code>v-if</code> /
      <code>v-else</code>. vanillakit uses plain JS functions — return a DOM
      node or <code>null</code>. There's no template syntax to learn.
    </p>
  </section>`;
}
