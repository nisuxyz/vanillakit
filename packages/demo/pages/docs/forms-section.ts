import { html } from '@vanillakit/vanillakit';
import { LiveEditor } from "../../components/LiveEditor";
import {
  FORMS_CHECKBOX_SNIPPET,
  FORMS_SELECT_SNIPPET,
  FORMS_SNIPPET_1,
  FORMS_TEXT_SNIPPET,
} from "../../snippets";

export function FormsSection() {
  return html`<section>
    <h2>Forms</h2>
    <p>
      Bind form inputs to signals for two-way data binding. Use
      <code>value</code> with a reactive function and <code>oninput</code> to
      write back. Switch tabs on any example below to compare
      <code>html</code> and <code>vkml</code> syntax.
    </p>

    <h3>Text input</h3>
    ${LiveEditor({
      sourceVariants: FORMS_TEXT_SNIPPET,
      label: "Two-way binding — type to see it update",
    })}

    <h3>Checkbox</h3>
    ${LiveEditor({
      sourceVariants: FORMS_CHECKBOX_SNIPPET,
      label: "Checkbox — toggle to enable the button",
    })}

    <h3>Select</h3>
    ${LiveEditor({
      sourceVariants: FORMS_SELECT_SNIPPET,
      label: "Select — pick a color",
    })}

    <h3>Form submission</h3>
    ${LiveEditor({ sourceVariants: FORMS_SNIPPET_1, label: "Form submission" })}

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
