import { signal, vkml } from "@vanillakit/vanillakit";

export function VkmlTestSection() {
  const radius = signal(30);
  const color = signal("#60a5fa");

  return vkml.section(
    vkml.h2("VKML: Vanilla Kit Markup Language"),
    vkml.p(
      "This section is built entirely with the new VKML Proxy-based element factory. It demonstrates dynamic SVG properties updating natively without innerHTML parsing.",
    ),

    vkml.div(
      {
        style:
          "display:flex; flex-direction:column; gap:16px; margin-bottom: 24px; padding: 16px; background: var(--vk-color-bg-subtle); border-radius: 8px;",
      },
      vkml.label(
        { style: "display:flex; gap:12px; align-items:center;" },
        vkml.strong("Radius: "),
        vkml.input({
          type: "range",
          min: "5",
          max: "45",
          value: () => radius(),
          oninput: (e: any) => radius(+e.target.value),
        }),
        vkml.span(() => radius()),
      ),
      vkml.label(
        { style: "display:flex; gap:12px; align-items:center;" },
        vkml.strong("Color: "),
        vkml.input({
          type: "color",
          value: () => color(),
          oninput: (e: any) => color(e.target.value),
        }),
        vkml.span(() => color()),
      ),
    ),

    vkml.div(
      { style: "display:flex; justify-content:center; align-items:center;" },
      vkml.svg(
        {
          viewBox: "0 0 100 100",
          width: "150",
          height: "150",
          style:
            "border: 1px dashed var(--vk-color-border); border-radius: 8px; overflow: hidden;",
        },
        vkml.rect({
          width: 100,
          height: 100,
          fill: "var(--vk-color-bg-subtle)",
        }),
        vkml.circle({
          cx: "50",
          cy: "50",
          r: () => radius(),
          fill: () => color(),
          style:
            "transition: r 0.2s cubic-bezier(0.4, 0, 0.2, 1), fill 0.2s linear;",
        }),
        vkml.text(
          {
            x: "50",
            y: "55",
            "text-anchor": "middle",
            fill: "white",
            "font-size": "14",
            "font-family": "var(--vk-font-sans)",
            "font-weight": "bold",
            "pointer-events": "none",
          },
          "VKML",
        ),
      ),
    ),
  );
}
