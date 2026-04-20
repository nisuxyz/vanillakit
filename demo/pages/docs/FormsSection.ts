import { html } from "../../../src";
import { LiveEditor } from "../../components/LiveEditor";
import { code } from "../../highlight";

export function FormsSection() {
  return html`<section>
    <h2>Forms</h2>
    <p>
      Bind form inputs to signals for two-way data binding. Use
      <code>value</code> with a reactive function and <code>oninput</code> to
      write back.
    </p>

    <h3>Text input</h3>
    ${LiveEditor({
      source: `import { signal, html } from "vanillakit";

const name = signal("");

document.body.append(html\`
  <div>
    <input value=\${() => name()} oninput=\${(e) => name(e.target.value)}
      placeholder="Your name" style="max-width:240px; margin-bottom:10px;" />
    <p style="font-size:1rem; font-weight:600;">Hello, \${() => name() || "…"}!</p>
  </div>
\`);`,
      label: "Two-way binding — type to see it update",
    })}

    <h3>Checkbox</h3>
    ${LiveEditor({
      source: `import { signal, html } from "vanillakit";

const agreed = signal(false);

document.body.append(html\`
  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
    <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">
      <input type="checkbox" checked=\${() => agreed()}
        onchange=\${(e) => agreed(e.target.checked)} />
      I agree to the terms
    </label>
    <button disabled=\${() => !agreed()}
      style=\${() => !agreed() ? "opacity:0.4; cursor:not-allowed;" : ""}>
      Submit
    </button>
  </div>
\`);`,
      label: "Checkbox — toggle to enable the button",
    })}

    <h3>Select</h3>
    ${LiveEditor({
      source: `import { signal, html } from "vanillakit";

const color = signal("blue");
const colorMap = { red: "#e45", blue: "#48f", green: "#4c8" };

document.body.append(html\`
  <div style="display:flex; align-items:center; gap:14px;">
    <select onchange=\${(e) => color(e.target.value)}>
      <option value="red">Red</option>
      <option value="blue" selected>Blue</option>
      <option value="green">Green</option>
    </select>
    <span style=\${() => \`font-weight:700; color:\${colorMap[color()]};\`}>
      Chosen: \${color}
    </span>
  </div>
\`);`,
      label: "Select — pick a color",
    })}

    <h3>Form submission</h3>
    ${code(`const form = { name: signal(""), email: signal("") };

html\`
  <form onsubmit=\${(e) => {
    e.preventDefault();
    console.log({ name: form.name(), email: form.email() });
  }}>
    <input value=\${() => form.name()} oninput=\${(e) => form.name(e.target.value)} />
    <input value=\${() => form.email()} oninput=\${(e) => form.email(e.target.value)} type="email" />
    <button type="submit">Submit</button>
  </form>
\`;`)}

    <h3>vs. React / Vue</h3>
    <p>
      React needs <code>useState</code> + <code>onChange</code> for controlled
      inputs. Vue has <code>v-model</code>. vanillakit uses
      <code>value=\${() => sig()}</code> +
      <code>oninput=\${(e) => sig(e.target.value)}</code> — explicit and
      transparent.
    </p>
  </section>`;
}
