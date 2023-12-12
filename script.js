const input = document.querySelector("#todo__input");
const todoList = document.querySelector(".todo__list");

function addTask() {
  if (input.value === "") alert("Please write your todo!");
  else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add("todo__list__item");
    todoList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  input.value = "";
  saveData();
}

todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}

function showTask() {
  todoList.innerHTML = localStorage.getItem("data");
}

showTask();
