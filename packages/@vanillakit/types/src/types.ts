/**
 * Core types for vanillakit.
 * @module types
 */


import type { ReadonlySignal, Signal } from "@vanillakit/signal";

// ── Node types ─────────────────────────────────────────────

/** A DOM node extended with vanillakit disposal metadata. */
export type VanillaNode = Node & {
  __v_dispose?: () => void;
  __v_disposers?: Array<() => void> | null;
};

/** A DOM node extended with disposal metadata (router variant). */
export type DisposableNode = Node & {
  __v_dispose?: (() => void) | null;
  __v_disposers?: Array<() => void> | null;
};

/** The return type of `html()` and vkml tag functions. */
export type VanillaElement = Node | DocumentFragment;

export type VanillaChild = string | number | VanillaElement | Array<VanillaChild> | null | undefined;

// ── Each/list types ─────────────────────────────────────────

/** Descriptor for `each()` list rendering. */
export interface EachDescriptor<T> {
  __v_each: true;
  listFn: () => T[];
  keyFn: (item: T, index: number) => unknown;
  renderFn: (item: Signal<T>, index: ReadonlySignal<number>) => Node;
}

/** Internal entry tracking for `each()` reconciliation. */
export type EachEntry<T> = {
  nodes: Node[];
  disposers: Array<() => void>;
  itemSig: Signal<T>;
  indexSig: Signal<number>;
};

// ── Re-export signal types for convenience ──────────────────

export type { ReadonlySignal, Signal } from "@vanillakit/signal";