import { vkml } from "@vanillakit/vanillakit";
import { LiveEditor } from "../../components/LiveEditor";
import {
  COUNTER,
  DERIVED_STATE,
  EXAMPLES_SNIPPET_1,
  EXAMPLES_SNIPPET_2,
  TWO_WAY_BINDING,
} from "../../snippets.ts";

export function SnippetsSection() {
  return vkml.section(
    vkml.h2("Code Examples"),

    vkml.h3("Counter"),
    vkml.p("The simplest possible app — a signal and a button."),
    LiveEditor({
      sourceVariants: COUNTER,
      label: "Counter",
    }),

    vkml.h3("Two-way binding"),
    vkml.p("Bind an input to a signal. The heading updates as you type."),
    LiveEditor({
      sourceVariants: TWO_WAY_BINDING,
      label: "Two-way binding",
    }),

    vkml.h3("Derived state"),
    LiveEditor({
      sourceVariants: DERIVED_STATE,
      label: "Derived state — change price or qty",
    }),

    vkml.h3("Reactive object"),
    LiveEditor({
      sourceVariants: {
        html: EXAMPLES_SNIPPET_1.html,
        vkml: EXAMPLES_SNIPPET_1.vkml,
      },
      label: "Reactive object",
    }),

    vkml.h3("Scoped styles + routing"),
    LiveEditor({ sourceVariants: EXAMPLES_SNIPPET_2 }),
  );
}
