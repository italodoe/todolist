import "./style.css";
import { TodoItem } from "./todoItem";
// import "./todoItem"

const todoDiv = document.getElementById("todo_list");
const form = document.querySelector("form");
const clear = document.getElementById("clear");
const input = document.querySelector<HTMLInputElement>('input[name="what"]');

// const todo = Array<TodoItem>;
const todos: TodoItem[] = [
  new TodoItem("write an essay"),
  new TodoItem("clean the box"),
  new TodoItem("Dont talk about"),
  new TodoItem("Buy chinese foot", true),
];

const renderTodoItem = (todo: TodoItem) => {
  const div = document.createElement("div");
  div.classList.add("todo-item");
  if (todo.done) div.classList.add("todo-checked");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.done;

  const text = document.createTextNode(todo.what);
  div.append(checkbox, text);

  div.addEventListener("click", (e) => {
    todo.toggleDone();
    checkbox.checked = todo.done;
    div.classList.toggle("todo-checked");
  });

  return div;
};

const render = () => {
  if (todoDiv === null) throw new Error(`div not exists!!!`);
  console.log(todoDiv);

  todoDiv.append(...todos.map(renderTodoItem));
};

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input?.value;
  if (text === "") return false;
  const newTodoItem = new TodoItem(text || "error");
  todos.push(newTodoItem);
  todoDiv?.append(renderTodoItem(newTodoItem));
  if (input) input.value = "";
});

clear?.addEventListener("click", (e) => {
  e.preventDefault();
  todos.splice(0, todos.length);
  if (todoDiv)
    todoDiv.innerHTML= "";
});

render();
