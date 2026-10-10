import type { Post } from "./types";

export const reactInPlainWords: Post = {
  slug: "react-in-plain-words-components-props-state",
  title: "React in Plain Words: Components, Props and State",
  excerpt:
    "The three ideas that made React finally click for me, explained with small examples and without the jargon.",
  category: "React",
  date: "2026-09-10",
  tags: ["React", "JSX", "Props", "State"],
  accent: "violet",
  blocks: [
    {
      type: "p",
      text: "When I moved from plain JavaScript to React, the words felt heavy: components, JSX, props, state, virtual DOM. Once I broke them down into everyday ideas, the whole thing became much less scary. This post is that breakdown.",
    },
    { type: "h2", text: "Components: reusable pieces of UI" },
    {
      type: "p",
      text: "A component is just a function that returns what should appear on screen. Think of a button, a card or a navbar. You write it once and use it as many times as you need.",
    },
    {
      type: "code",
      lang: "tsx",
      code: `function Greeting() {
  return <h2>Hello from a component</h2>;
}

export default function App() {
  return (
    <main>
      <Greeting />
      <Greeting />
    </main>
  );
}`,
    },
    {
      type: "callout",
      tone: "note",
      title: "What is JSX?",
      text: "JSX is the HTML-looking syntax inside your JavaScript. It is not HTML. It gets converted into JavaScript, which is why attributes like class become className.",
    },
    { type: "h2", text: "Props: giving a component its data" },
    {
      type: "p",
      text: "A component becomes powerful when it can be customised. Props (short for properties) are the inputs you pass in, just like arguments to a function. A card component can show any title or description you hand it.",
    },
    {
      type: "code",
      lang: "tsx",
      caption: "A typed card component (TypeScript)",
      code: `type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function Cards() {
  return (
    <section>
      <Card title="Fast" description="Loads quickly." />
      <Card title="Responsive" description="Fits every screen." />
    </section>
  );
}`,
    },
    {
      type: "p",
      text: "Adding TypeScript here is a small step with a big reward: if I forget a prop or pass the wrong type, my editor tells me immediately, long before I open the browser.",
    },
    { type: "h2", text: "State: data that changes over time" },
    {
      type: "p",
      text: "Props come from outside. State lives inside a component and can change, for example a counter, an open menu or the text in an input. When state changes, React re-renders the component so the screen stays in sync.",
    },
    {
      type: "code",
      lang: "tsx",
      code: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
}`,
    },
    {
      type: "p",
      text: "`useState(0)` gives us two things: the current value (`count`) and a function to update it (`setCount`). We never change `count` directly. We always call the setter so React knows to update the screen.",
    },
    { type: "h2", text: "Rendering lists" },
    {
      type: "p",
      text: "To show a list, map over an array and return an element for each item. React needs a unique `key` on each one so it can track them efficiently.",
    },
    {
      type: "code",
      lang: "tsx",
      code: `const skills = ["HTML", "CSS", "JavaScript", "React"];

export default function SkillList() {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}`,
    },
    { type: "h2", text: "How I think about it now" },
    {
      type: "table",
      head: ["Concept", "Everyday meaning", "Direction"],
      rows: [
        ["Component", "A reusable piece of UI", "Written once, used many times"],
        ["Props", "Settings passed in from the parent", "Flow down, read-only"],
        ["State", "Memory that belongs to a component", "Changes over time"],
      ],
    },
    {
      type: "p",
      text: "A helpful habit: whenever I build a screen, I first draw boxes around the pieces and name them. Each box becomes a component, the data they need becomes props, and anything that changes becomes state. That small planning step saves a lot of confusion.",
    },
    {
      type: "p",
      text: "There is much more to learn, such as effects, context and routing, but these three ideas carry you a surprisingly long way.",
    },
  ],
};
