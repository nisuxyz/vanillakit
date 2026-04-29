import { css } from "../../../../src/index.js";
import { button, div, h2, input, p, span } from "../../../../src/index.js";

const pageClass = css`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

const leftClass = css`
  flex: 1;
  background: var(--vk-color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--vk-color-border);
`;

const rightClass = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--vk-space-2xl) var(--vk-space-lg);
  overflow-y: auto;
`;

const formClass = css`
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-md);
`;

const logoMarkClass = css`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: var(--vk-font-mono);
  color: var(--vk-color-text);
  letter-spacing: -0.04em;
`;

const dividerClass = css`
  display: flex;
  align-items: center;
  gap: var(--vk-space-sm);
`;

export function AuthAppPage() {
  return div(
    { class: `${pageClass} animate-in` },
    div(
      { class: leftClass },
      div(
        { style: "text-align:center;" },
        div({ class: logoMarkClass }, "vanillakit_"),
        p({
          style: "color:var(--vk-color-text-muted);margin-top:var(--vk-space-sm);font-size:var(--vk-font-size-sm);",
        }, "Zero-dependency reactive UI"),
      ),
    ),
    div(
      { class: rightClass },
      div(
        { class: formClass },
        div(
          { style: "margin-bottom:var(--vk-space-sm);" },
          div(
            { style: "display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--vk-space-lg);" },
            div(
              { style: "display:flex;align-items:center;gap:var(--vk-space-xs);" },
              span({ style: "font-size:0.9rem;" }, "⌘"),
              span({ style: "font-weight:600;font-size:var(--vk-font-size-sm);" }, "Acme Inc"),
            ),
            span({
              style: "font-size:var(--vk-font-size-sm);color:var(--vk-color-text-muted);",
            }, "Login"),
          ),
          h2({ style: "text-align:center;margin-bottom:var(--vk-space-xs);" }, "Create an account"),
          p({
            style: "text-align:center;color:var(--vk-color-text-muted);font-size:var(--vk-font-size-sm);margin:0;",
          }, "Enter your email below to create your account"),
        ),
        input({
          type: "email",
          placeholder: "name@example.com",
          style: "width:100%",
        }),
        button({ "data-color-variant": "primary", style: "width:100%" }, "Sign In with Email"),
        div(
          { class: dividerClass },
          div({ style: "flex:1;height:1px;background:var(--vk-color-border);" }),
          span({
            style: "font-size:0.72rem;color:var(--vk-color-text-muted);white-space:nowrap;",
          }, "Or continue with"),
          div({ style: "flex:1;height:1px;background:var(--vk-color-border);" }),
        ),
        button({ "data-style-variant": "outline", style: "width:100%" }, "⬡  GitHub"),
        p({
          style: "text-align:center;font-size:0.72rem;color:var(--vk-color-text-muted);margin:0;",
        }, "By clicking continue, you agree to our Terms of Service and Privacy Policy."),
      ),
    ),
  );
}
