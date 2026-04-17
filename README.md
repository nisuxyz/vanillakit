# vanillakit

A tiny (~760 lines, zero dependencies) frontend toolkit for building reactive UIs in plain JavaScript.

Signals, reactive objects, live DOM templating, scoped CSS, and a hash router — all in one small package.

## Modules

### Signals

Fine-grained reactivity primitives.

```js
import { signal, computed, effect, batch, untrack } from "vanillakit";

const count = signal(0);
const double = computed(() => count() * 2);

effect(() => console.log(double())); // runs whenever count changes

count(1); // set
count((c) => c + 1); // update via function
count.peek(); // read without tracking
```

### Reactive

Deep reactive proxies backed by signals.

```js
import { reactive, snapshot, toRaw, isReactive } from "vanillakit";

const state = reactive({ user: { name: "Ada", scores: [95, 87] } });

state.user.name = "Grace"; // triggers effects
state.user.scores.push(92);

snapshot(state); // plain (non-reactive) deep copy
```

### HTML

Tagged template for live DOM nodes with reactive bindings.

```js
import { html, each } from "vanillakit";

const items = signal(["a", "b", "c"]);
const name = signal("world");

const node = html`
  <div>
    <h1>Hello, ${name}!</h1>
    <ul>
      ${each(items, (item) => html`<li>${item}</li>`)}
    </ul>
  </div>
`;

document.body.append(node);
```

Attribute bindings, event listeners, and child content all update automatically when signals change.

### CSS

Scoped CSS-in-JS via tagged templates. Uses `CSSStyleSheet` — no style tags injected.

```js
import { css, keyframes, globalCss, cx } from "vanillakit";

const btn = css`
  padding: 8px 16px;
  background: var(--accent);
  &:hover {
    opacity: 0.85;
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

globalCss`
  *, *::before, *::after { box-sizing: border-box; }
`;

// cx merges class names (falsy values ignored)
const cls = cx(btn, isLoading && spinner);
```

### Router

Hash-based client-side router.

```js
import {
  createRouter,
  navigate,
  navLink,
  currentPath,
  routeParams,
} from "vanillakit";

const RouterView = createRouter({
  "/": HomePage,
  "/user/:id": UserPage,
  "*": NotFoundPage,
});

document.body.append(RouterView());

navigate("/user/42");
```

`routeParams` is a signal holding the current route's extracted params. `navLink` renders an `<a>` that gets an active class when its path matches.

## Running the demo

```sh
npm install
npm run dev
```

## License

MIT
