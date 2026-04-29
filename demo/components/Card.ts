import { article, div, header, footer, type VanillaChild } from "../../src/index.ts";

export interface CardProps {
  centered?: boolean;
  hoverEffect?: "glow" | "lift";
}

export const Card = ({ hoverEffect, centered }: CardProps, ...children: VanillaChild[]) =>
  article({ 'data-card': true, 'data-hover': hoverEffect ?? false, 's-ta': centered ? 'center' : undefined },
    ...children,
  );

export const CardHeader = (...children: VanillaChild[]) => header(...children);

export const CardContent = (...children: VanillaChild[]) => div({ class: 'container' }, ...children);

export const CardFooter = (...children: VanillaChild[]) => footer(...children);