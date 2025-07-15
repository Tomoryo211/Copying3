const textInput = document.getElementById("text-input");
const todoList = document.getElementById("TodoList");

// ローカルストレージから読み込んで表示
window.addEventListener("DOMContentLoaded", () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach(text => {
    addTodoItem(text);
    });
});

// ToDo追加処理
textInput.addEventListener("keydown", e => {
    const text = textInput.value.trim();
    if (text === "" || e.key !== "Enter") {
    return;
}

    addTodoItem(text);
    saveTodo(text);
    textInput.value = "";
});

// ToDoを追加する関数（DOM操作）
function addTodoItem(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.classList.add("Listitem");
    span.textContent = text;
    span.classList.add("Todotext");

    button.textContent = "削除";
    button.type = "button";
    button.classList.add("delete_button");

button.addEventListener("click", () => {
    todoList.removeChild(li);
    deleteTodo(text);
});

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

// localStorage に追加保存
function saveTodo(text) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(text);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// localStorage から削除
function deleteTodo(text) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const updated = todos.filter(todo => todo !== text);
    localStorage.setItem("todos", JSON.stringify(updated));
}
