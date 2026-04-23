// export const COUNTER = `
// import { signal, html } from "vanillakit";

// const Counter = (props = { initial: 0 }) => {
//   const count = signal(props.initial);
//   return html\`
//     <div style="display: flex; flex-direction: column; gap: 1rem;">
//       Count: \${count}
//       <button onclick=\${() => count(n => n + 1)}>+1</button>
//     </div>
//   \`;
// };

// document.body.append(Counter({ initial: 10 }));
// `;

export const COUNTER = `
import { signal, html, type VanillaElement } from "vanillakit";

interface CounterProps {
  initial: number;
}

const Counter = (props: CounterProps = { initial: 0 }): VanillaElement => {
  const count = signal(props.initial); // Signal<number>
  return html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      Count: \${count}
      <button onclick=\${() => count(n => n + 1)}>+1</button>
    </div>
  \`;
};

document.body.append(Counter({ initial: 10 }));
`;

export const PROPS = `
import { html, css, type VanillaElement } from "vanillakit";

interface UserComponentProps {
  name: string;
  role: string;
}

const UserComponent = ({ name, role }: UserComponentProps): VanillaElement => {
  return html\`
    <article>
      <h3 style="margin:0 0 4px; font-size:0.95rem;">\${name}</h3>
      <p>\${role}</p>
    </article>
  \`;
}

document.body.append(html\`
  <div style="display:flex; gap: 1rem; flex-wrap:wrap;">
    \${UserComponent({ name: "Ada", role: "Engineer" })}
    \${UserComponent({ name: "Grace", role: "Admiral" })}
    \${UserComponent({ name: "Alan", role: "Mathematician" })}
  </div>
\`);`;

export const SIGNAL_PROPS = `
import { signal, html } from "vanillakit";

const Greeting = ({ name, color }) => {
  return html\`
    <p style=\${() => \`color: \${color()};\`}>
      Hello, \${name}!
    </p>
  \`;
}

const userName = signal("Ada");
const userColor = signal("#e8c547");

document.body.append(html\`
  <div>
    \${Greeting({ name: userName, color: userColor })}
    <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">
      <input value=\${userName} oninput=\${(e) => userName(e.target.value)}
        placeholder="Name" style="max-width:200px;" />
      <input type="color" value=\${userColor} oninput=\${(e) => userColor(e.target.value)}
        style="width:40px; height:34px; border:none; cursor:pointer;" />
    </div>
  </div>
\`);
`;

export const PROPS_CHILDREN = `
import { html, css } from "vanillakit";

const Layout = (title, ...children) => {
  return html\`
    <div class=\${css\`max-width: 800px; margin: 0 auto; padding: 24px;\`}>
      <h1>\${title}</h1>
      \${children}
    </div>
  \`;
}

const Child1 = () => html\`<p>This is the first child component.</p>\`;
const Child2 = () => html\`<p>This is the second child component.</p>\`;

const App = () => {
  return Layout("My App",
    Child1(),
    Child2(),
    html\`<p>This is a child passed directly as an argument.</p>\`
  );
}

document.body.append(App());
`;

export const DIRECT_CHILDREN = `
import { html } from "vanillakit";

const ChildComponent = () => html\`<p>This is a child component.</p>\`;

document.body.append(html\`
  <div>
    <h1>Parent Component</h1>
    \${ChildComponent()}
  </div>
\`);
`;

export const REACTIVITY = `
import { signal, effect, html, computed, batch, reactive, snapshot } from "vanillakit";

// Component that demonstrates all of the above
const ReactiveComponent = () => {
  // Basic signals and effects
  const count = signal(0);
  effect(() => console.log("Count is", count()));
  
  // Computed values
  const double = computed(() => count() * 2);
  effect(() => console.log("Double is", double()));
  
  // Batching updates
  const countPlus1 = computed(() => count() + 1);
  effect(() => console.log("Count + 1 is", countPlus1()));
  batch(() => {
    count(1);
    count(2);
    count(3);
  }); // Only triggers effects once, with count = 3
  
  // Reactive objects
  const state = reactive({
    todos: [
      { text: "Learn signals", done: true },
      { text: "Build an app", done: false },
    ],
  });
  
  effect(() => console.log("State is", JSON.stringify(snapshot(state), null, 2)));
  
  const addTodo = (text) => state().todos.push({ text, done: false });

  return html\`
    <div>
      <h2>Count: \${count}</h2>
      <h3>Double: \${double}</h3>
      <h3>Triple: \${() => count() * 3}</h3>
      <button onclick=\${() => count(count() + 1)}>Increment</button>
      
      <h2>Todos:</h2>
      <ul>
        \${state.todos.map(todo => html\`
          <li style=\${() => \`text-decoration: \${todo.done ? "line-through" : "none"};\`}>
            \${todo.text}
          </li>
        \`)}
      </ul>
      <button onclick=\${() => addTodo("New Todo")}>Add Todo</button>
    </div>
  \`;
}

document.body.append(ReactiveComponent());
`;
