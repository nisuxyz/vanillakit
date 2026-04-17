import { css, keyframes, globalCss } from "../src/index.js";

globalCss`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=JetBrains+Mono:wght@400;500&display=swap')
`;

globalCss`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
`;

globalCss`
  :root {
    --bg: #0c0c0e; --surface: #16161a; --surface-2: #1e1e24; --surface-3: #26262e;
    --border: #2a2a35; --text: #e8e6e3; --text-muted: #8b8a8e;
    --accent: #e8c547; --accent-dim: #e8c54730;
    --danger: #e85454; --danger-dim: #e8545420;
    --success: #54e8a0; --success-dim: #54e8a020;
    --info: #5478e8; --info-dim: #5478e820;
    --radius: 10px; --font: 'DM Sans', system-ui, sans-serif; --mono: 'JetBrains Mono', monospace;
  }
`;

globalCss`
  body { background: var(--bg); color: var(--text); font-family: var(--font); line-height: 1.6; min-height: 100vh; }
`;

globalCss`
  #app { max-width: 820px; margin: 0 auto; padding: 0 24px; }
`;

export const navLinkBase = css`
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 8px;
  transition: all 0.15s ease;
  letter-spacing: 0.02em;
  &:hover {
    color: var(--text);
    background: var(--surface-2);
  }
`;
export const navLinkActive = css`
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--accent-dim);
  letter-spacing: 0.02em;
`;
export const headerClass = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 36px;
`;
export const logoClass = css`
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  color: var(--accent);
  font-family: var(--mono);
`;
export const navClass = css`
  display: flex;
  gap: 4px;
`;

const fadeIn = keyframes`from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); }`;
export const pageClass = css`
  animation: ${fadeIn} 0.25s ease-out;
`;
export const headingClass = css`
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
`;
export const subtitleClass = css`
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 32px;
`;
export const cardClass = css`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  margin-bottom: 12px;
`;

export const btnBase = css`
  font-family: var(--font);
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.12s ease;
  letter-spacing: 0.01em;
`;
export const btnPrimary = css`
  background: var(--accent);
  color: var(--bg);
  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;
export const btnGhost = css`
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  &:hover {
    color: var(--text);
    border-color: var(--text-muted);
  }
`;
export const btnDanger = css`
  background: var(--danger-dim);
  color: var(--danger);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--danger);
  }
`;
export const btnInfo = css`
  background: var(--info-dim);
  color: var(--info);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--info);
  }
`;
export const btnSuccess = css`
  background: var(--success-dim);
  color: var(--success);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--success);
  }
`;

export const inputClass = css`
  font-family: var(--font);
  font-size: 0.9rem;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  color: var(--text);
  outline: none;
  width: 100%;
  transition: border-color 0.15s ease;
  &:focus {
    border-color: var(--accent);
  }
  &::placeholder {
    color: var(--text-muted);
    opacity: 0.6;
  }
`;
export const selectClass = css`
  font-family: var(--font);
  font-size: 0.85rem;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 12px;
  color: var(--text);
  outline: none;
  cursor: pointer;
  &:focus {
    border-color: var(--accent);
  }
`;
export const badgeClass = css`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;
export const monoSmall = css`
  font-family: var(--mono);
  font-size: 0.8rem;
`;
export const codeBlock = css`
  font-family: var(--mono);
  font-size: 0.82rem;
  background: var(--surface-2);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
  white-space: pre-wrap;
  line-height: 1.7;
  color: var(--text-muted);
  strong {
    color: var(--accent);
    font-weight: 500;
  }
`;
export const sourceBlock = css`
  font-family: var(--mono);
  font-size: 0.78rem;
  background: var(--surface-2);
  padding: 16px;
  border-radius: 0 0 8px 8px;
  border: 1px solid var(--border);
  border-top: none;
  white-space: pre;
  overflow-x: auto;
  line-height: 1.7;
  color: var(--text-muted);
  max-height: 400px;
  overflow-y: auto;
`;
export const detailsSummary = css`
  font-family: var(--font);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
  margin-top: 16px;
  &:hover {
    color: var(--text);
    border-color: var(--text-muted);
  }
  &::marker {
    color: var(--accent);
  }
`;
export const docSectionClass = css`
  margin-bottom: 36px;
  & h2 {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 8px;
    font-family: var(--mono);
    color: var(--accent);
  }
  & h3 {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 16px 0 6px;
    font-family: var(--mono);
  }
  & p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 10px;
    line-height: 1.6;
  }
  & code {
    font-family: var(--mono);
    background: var(--surface-2);
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 0.85em;
  }
  & hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 28px 0;
  }
`;
