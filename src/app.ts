interface Todo {
  id: number;
  text: string;
  complated: boolean;
}

const textInput = document.getElementById("todo-input")! as HTMLInputElement;
const button = document.getElementById("add-btn")! as HTMLButtonElement;
const listElement = document.getElementById("todo-list")! as HTMLUListElement;

let todos: Todo[] = [];

function updateTodo() {
  listElement.innerHTML = "";

  todos.forEach((todo) => {
    const list = document.createElement("li");
    list.textContent = todo.text;

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "削除";
    deletebutton.addEventListener("click", () => deleteTodo(todo.id));

    list.appendChild(deletebutton);
    listElement.appendChild(list);
  });
}

function addTodo(text: string): void {
  const newTodo = { id: Date.now(), text, complated: true };
  todos.push(newTodo);
  updateTodo();
}

function deleteTodo(id: number): void {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }

  updateTodo();
}

button.addEventListener("click", () => {
  addTodo(textInput.value);
  textInput.value = "";
});
