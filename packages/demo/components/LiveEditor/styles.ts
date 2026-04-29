// ── LiveEditor Styles ───────────────────────────────────────
import { css, globalCss } from "@vanillakit/vanillakit";

globalCss`
  /* CodeJar editor overrides */
  .codejar-wrap {
    border-radius: var(--vk-radius-md) var(--vk-radius-md) 0 0;
    border: 1px solid var(--vk-color-border);
    background: var(--vk-color-surface);
  }
  .codejar-wrap:focus-within {
    border-color: var(--vk-color-accent);
  }
  .codejar-linenumbers-inner-wrap {
    background: var(--vk-color-surface) !important;
  }
  .codejar-linenumbers {
    background-color: var(--vk-color-surface-2) !important;
  }
  .codejar-linenumber {
    color: var(--vk-color-text-muted) !important;
  }
`;

export const editorClass = css`
  display: block;
  width: 100%;
  min-height: 60px;
  font-family: var(--vk-font-mono);
  font-size: 0.82rem;
  line-height: 1.6;
  background: var(--vk-color-surface);
  color: var(--vk-color-text);
  padding: 16px;
  tab-size: 2;
  white-space: pre;
  overflow-x: auto;
  outline: none;
  box-sizing: border-box;
  border: none;
  margin: 0;
  border-radius: 0;
`;

export const liveEditorRootClass = css`
  position: relative;
`;

export const backdropClass = css`
  position: fixed;
  inset: 0;
  background: rgba(8, 10, 16, 0.58);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 79;
`;

export const backdropVisibleClass = css`
  opacity: 1;
  pointer-events: auto;
`;

export const shellClass = css`
  position: relative;
  margin-bottom: 2rem;
`;

export const fullscreenShellClass = css`
  position: fixed;
  inset: 2rem;
  z-index: 80;
  width: auto;
  max-width: none;
  height: calc(100vh - 4rem);
  margin: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
`;

export const workspaceClass = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  min-height: 0;
  padding: 0;
`;

export const workspaceSplitClass = css`
  height: 100%;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  }
`;

export const paneClass = css`
  min-width: 0;
  min-height: 0;
`;

export const fullscreenPaneClass = css`
  height: 100%;
`;

export const codePaneClass = css`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--vk-color-surface);
`;

export const editorsViewportClass = css`
  flex: 1;
  min-height: 0;
  overflow: auto;
  background: var(--vk-color-surface);
`;

export const previewPaneClass = css`
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 18px 18px 78px;
  border-top: 1px solid var(--vk-color-border);
  background: var(--vk-color-bg);
`;

export const previewPaneSplitClass = css`
  border-top: none;
  border-left: 1px solid var(--vk-color-border);

  @media (max-width: 960px) {
    border-left: none;
    border-top: 1px solid var(--vk-color-border);
  }
`;

export const previewBodyClass = css`
  flex: 1;
  min-height: 0;
  overflow: auto;
`;

export const previewOutputClass = css`
  min-height: 100%;
`;

export const controlsClass = css`
  position: absolute;
  right: var(--vk-space-xs);
  top: var(--vk-space-xs);
  z-index: 2;
  display: flex;
  justify-content: flex-end;
`;

export const controlGroupClass = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
  padding: 8px;
  border: 1px solid var(--vk-color-border);
  border-radius: var(--vk-radius-full);
  background: var(--vk-color-surface);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
  opacity: 0.98;
`;

export const fullscreenTabPickerClass = css`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const hiddenPaneClass = css`
  display: none;
`;