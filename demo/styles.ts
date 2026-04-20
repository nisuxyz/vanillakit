import { css, globalCss, initVanillaCss } from "../src/index.js";

// Initialize vanillacss (tokens, reset, base, forms, components, utilities, animations)
initVanillaCss();

export const logoClass = css`
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  color: var(--vk-color-accent);
  font-family: var(--vk-font-mono);
`;

export const subtitleClass = css`
  margin-bottom: 2rem;
`;

export const sourceBlock = css`
  border-top: none;
  border-radius: 0 0 var(--vk-radius-md) var(--vk-radius-md);
  max-height: 400px;
  overflow-y: auto;
`;

/* Shared sidebar nav group label */
export const sidebarGroupClass = css`
  margin-bottom: 20px;
  & .group-label {
    font-family: var(--vk-font-mono);
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--vk-color-text-muted);
    margin-bottom: 6px;
    padding-left: 8px;
  }
`;

/* Sidebar nav link — active state handled by aria-current */
export const sidebarLinkClass = css`
  display: block;
  font-size: 0.82rem;
  color: var(--vk-color-text-muted);
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 6px;
  border-left: 2px solid transparent;
  transition: all 0.12s ease;
  cursor: pointer;
  &:hover {
    color: var(--vk-color-text);
    background: var(--vk-color-surface);
  }
  &[aria-current="page"] {
    color: var(--vk-color-accent);
    border-left-color: var(--vk-color-accent);
    background: var(--vk-color-accent-dim);
    font-weight: 600;
  }
`;
