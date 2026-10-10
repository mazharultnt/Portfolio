import type { Post } from "./types";

export const javascriptDomTodo: Post = {
  slug: "javascript-dom-basics-with-a-todo-list",
  title: "JavaScript DOM Basics, Learned by Building a To-Do List",
  excerpt:
    "A beginner-friendly walk through selecting elements, creating nodes, handling events and saving data, using the classic to-do list project.",
  category: "JavaScript",
  date: "2026-09-19",
  tags: ["JavaScript", "DOM", "Beginners", "Projects"],
  accent: "amber",
  blocks: [
    {
      type: "p",
      text: "The to-do list is one of the best beginner JavaScript projects, because it forces you to practice almost every core DOM idea in a small space: selecting elements, reacting to clicks, creating new elements and removing old ones. It was one of my early projects, and I still reuse its ideas.",
    },
    {
      type: "p",
      text: "Here is the path I followed, written the way I wish someone had explained it to me.",
    },
    { type: "h2", text: "What is the DOM?" },
    {
      type: "p",
      text: "The DOM (Document Object Model) is the browser's live version of your HTML page, stored as a tree of objects. JavaScript can read that tree and change it, and the page updates instantly. That is how a click on a button can add a new item without reloading anything.",
    },
    { type: "h2", text: "Step 1: Start with simple HTML" },
    {
      type: "code",
      lang: "html",
      code: `<main class="todo">
  <h1>My Tasks</h1>

  <form id="todo-form">
    <input id="todo-input" type="text" placeholder="Add a task" required />
    <button type="submit">Add</button>
  </form>

  <ul id="todo-list"></ul>
</main>`,
    },
    { type: "h2", text: "Step 2: Select the elements you need" },
    {
      type: "p",
      text: "Use `document.querySelector` to grab the elements once, store them in variables and reuse them. Descriptive variable names make the rest of the code read like a sentence.",
    },
    {
      type: "code",
      lang: "javascript",
      code: `const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");`,
    },
    { type: "h2", text: "Step 3: React to the form" },
    {
      type: "p",
      text: "A form refreshes the page by default when submitted. We stop that with `event.preventDefault()`, read the value, create a list item and add it to the list.",
    },
    {
      type: "code",
      lang: "javascript",
      code: `form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  addTask(text);
  input.value = "";
  input.focus();
});

function addTask(text) {
  const item = document.createElement("li");

  const label = document.createElement("span");
  label.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";
  removeBtn.className = "remove";

  item.append(label, removeBtn);
  list.append(item);
}`,
    },
    {
      type: "callout",
      tone: "tip",
      title: "textContent vs innerHTML",
      text: "Prefer textContent when you insert text a user typed. innerHTML will treat the text as HTML, which can break your layout or even create security problems.",
    },
    { type: "h2", text: "Step 4: Complete and delete with event delegation" },
    {
      type: "p",
      text: "You could attach a click listener to every new item, but there is a cleaner way: attach one listener to the parent list and check what was clicked. This is called event delegation, and it works even for items created later.",
    },
    {
      type: "code",
      lang: "javascript",
      code: `list.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches(".remove")) {
    target.closest("li").remove();
    return;
  }

  if (target.matches("span")) {
    target.parentElement.classList.toggle("done");
  }
});`,
    },
    {
      type: "code",
      lang: "css",
      code: `li.done span {
  text-decoration: line-through;
  color: #94a3b8;
}`,
    },
    { type: "h2", text: "Step 5: Save tasks with localStorage" },
    {
      type: "p",
      text: "Right now, refreshing the page deletes everything. The browser has a small storage area called localStorage that survives refreshes. It stores strings, so we convert our array with `JSON.stringify` and back with `JSON.parse`.",
    },
    {
      type: "code",
      lang: "javascript",
      code: `let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const item = document.createElement("li");
    item.textContent = task.text;
    item.dataset.index = index;
    if (task.done) item.classList.add("done");
    list.append(item);
  });
}

render();`,
    },
    { type: "h2", text: "What I learned" },
    {
      type: "ul",
      items: [
        "Keep your data (an array) separate from what you show on screen (the DOM).",
        "Small functions with clear names beat one huge block of code.",
        "Event delegation saves a lot of repetitive listeners.",
        "Always trim and validate user input before using it.",
      ],
    },
    {
      type: "p",
      text: "Once this project feels easy, try adding filters (all, active, completed), a counter of remaining tasks and keyboard support. Each extra feature teaches a new idea without changing the foundation.",
    },
  ],
};
