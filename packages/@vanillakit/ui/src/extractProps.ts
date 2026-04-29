// extractProps.ts — Reusable props/children extraction for UI components
//
// Mirrors the vkml tag function pattern: the first argument is either
// a props object (plain Record) or a child. This utility makes it
// ergonomic to write component functions that accept
// `(propsOrChild?, ...restChildren)` — same as vkml tag functions.
//
// Usage:
//   function Card(...args: CardPropsOrChild[]): Element {
//     const { props, children } = extractProps<CardProps>(args);
//     // props is CardProps (defaults applied), children is VanillaChild[]
//   }

import { isProps } from "@vanillakit/vkml";
import type { VanillaChild } from "@vanillakit/types";

export interface Extracted<P> {
  props: P;
  children: VanillaChild[];
}

/**
 * Extract props and children from a rest-args array following the
 * vkml calling convention: first arg is props if it's a plain object,
 * otherwise it's a child.
 *
 * @param args  The rest parameters from the component function
 * @returns     `{ props, children }` — props is always an object
 *              (empty `{}` if no props were passed), children is
 *              the remaining arguments (or all args if first wasn't props).
 */
export function extractProps<P extends Record<string, any>>(
  args: (P | VanillaChild)[],
): Extracted<P> {
  if (args.length === 0) {
    return { props: {} as P, children: [] };
  }

  const first = args[0];
  if (isProps(first)) {
    return {
      props: first as P,
      children: args.slice(1) as VanillaChild[],
    };
  }

  return {
    props: {} as P,
    children: args as VanillaChild[],
  };
}