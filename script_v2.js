// Displaying To-Do items in the list
const ul = document.querySelector("ul");

let tasks = ["html", "css", "javascript", "react"];

const createTask = task => {
  let li = document.createElement("li");
  const deleteBtn = document.createElement("div");

  li.textContent = task;
  ul.appendChild(li);

  deleteBtn.textContent = "X";
  li.appendChild(deleteBtn);

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  deleteBtn.addEventListener("click", () => {
    li.style.display = "none";
  });
};

tasks.forEach(createTask);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const newTask = document.querySelector("#new-input");
  if (newTask.value !== " ") {
    tasks.push(newTask.value);
    createTask(tasks[tasks.length - 1]);
    newTask.value = "";
  }
});

document.querySelector("#add-todo").addEventListener("keypress", event => {
  if (event.charCode === 13) {
    addTodo(event);
  } 
});
