import "./style.css";
import { TodoItem } from "./todoItem";
// import "./todoItem"

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

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.done;

  const text = document.createTextNode(todo.what)
  div.append(checkbox, text);

  return div;
};

const render = () => {
  const todoDiv = document.getElementById("todo_list");
  if (todoDiv === null) throw new Error(`div not exists!!!`);
  console.log(todoDiv);

  todoDiv.append(...todos.map(renderTodoItem));
};

render();
