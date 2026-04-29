import { css, navigate } from "@vanillakit/vanillakit";
import { a, div, h1, li, nav, ol, p, section, span, strong } from "@vanillakit/vanillakit";
import type { ExampleAppMeta } from "./catalog.ts";

type DisposableElement = Element & {
  __v_dispose?: (() => void) | null;
};

const appSectionsClass = css`
  display: grid;
  gap: var(--vk-space-xl);
  min-width: 0;
`;

const appSplitLayoutClass = css`
  display: grid;
  gap: var(--vk-space-xl);
  align-items: start;
  grid-template-columns: minmax(18rem, 22rem) minmax(0, 1fr);

  @media (max-width: 64rem) {
    grid-template-columns: 1fr;
  }
`;

const appRailClass = css`
  display: grid;
  gap: var(--vk-space-lg);
  align-self: start;

  @media (min-width: 64.01rem) {
    position: sticky;
    top: var(--vk-space-lg);
  }
`;

const appStackedControlsClass = css`
  display: grid;
  gap: var(--vk-space-lg);
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
`;

interface ExampleAppPageOptions {
  app: ExampleAppMeta;
  body: unknown;
  aside?: unknown;
  layout?: "rail" | "stack";
  onDispose?: () => void;
}

export function ExampleAppPage(options: ExampleAppPageOptions) {
  const { app, body, aside, layout = aside ? "rail" : "stack", onDispose } = options;

  const page = div(
    { class: "animate-in" },
    nav(
      { "aria-label": "breadcrumb" },
      ol(
        li(
          a(
            {
              href: "/examples",
              onclick: (event: Event) => {
                event.preventDefault();
                navigate("/examples");
              },
            },
            "Examples",
          ),
        ),
        li(a({ "aria-current": "page" }, app.title)),
      ),
    ),
    section(
      p(strong(app.kicker)),
      h1(app.title),
      p(app.summary),
      div(
        { style: "display:flex;flex-wrap:wrap;gap:var(--vk-space-xs);margin-top:var(--vk-space-sm);" },
        app.tags.map((tag) =>
          span({ "data-badge": true, "data-color-variant": "info" }, tag),
        ),
      ),
    ),
    aside
      ? layout === "stack"
        ? div(
            { class: appSectionsClass },
            div({ class: appStackedControlsClass }, aside),
            div({ class: appSectionsClass }, body),
          )
        : div(
            { class: appSplitLayoutClass },
            div({ class: appRailClass }, aside),
            div({ class: appSectionsClass }, body),
          )
      : div({ class: appSectionsClass }, body),
  );

  if (onDispose) {
    const disposablePage = page as DisposableElement;
    const previousDispose = disposablePage.__v_dispose;
    disposablePage.__v_dispose = () => {
      previousDispose?.();
      onDispose();
    };
  }

  return page;
}
