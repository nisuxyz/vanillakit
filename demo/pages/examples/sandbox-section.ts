import { vkml } from "../../../src/index.js";
import { LiveEditor } from "../../components/LiveEditor.ts";
import { SANDBOX_SNIPPET } from "../../snippets.ts";

export function SandboxSection() {
  return vkml.section(
    vkml.h2("Playground"),
    vkml.p(
      "Write vanillakit code and see results live. Edit the code below — output updates instantly. Switch tabs to compare ",
      vkml.code("html``"),
      " and ",
      vkml.code("vkml"),
      " syntax.",
    ),
    LiveEditor({
      sourceVariants: SANDBOX_SNIPPET,
      label: "Sandbox — edit freely",
    }),
  );
}
