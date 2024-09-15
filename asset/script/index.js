// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const card_container = document.querySelector(".card_container");
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");
const addBtn = document.querySelector(".add");
const inputTask = document.querySelector(".input_task");
const checkBox = document.querySelector("input[name=checkbox]");

// Initialize tasks array from local storage (if available)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText);
    updateTaskList();

    taskInput.value = "";

    saveTasksToLocalStorage();

    modal.style.display = "none";
  }
}

// Function to update the task list
function updateTaskList() {
  const taskList = document.querySelector(".card_container");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.id = "taskList";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `task${index}`;
    checkbox.name = "checkbox";

    const label = document.createElement("label");
    label.htmlFor = `task${index}`;
    label.classList.add("lable");
    label.innerHTML = `<p>${task}</p>`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("task_btn");
    deleteButton.innerHTML =
      '<span class="material-symbols-outlined"> delete </span>';
    deleteButton.onclick = () => removeTask(index);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  });
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
  saveTasksToLocalStorage();
}

// Function to clear all tasks
function clearTasks() {
  tasks = [];
  updateTaskList();
  saveTasksToLocalStorage();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage on page load
updateTaskList();

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal when the close button (X) is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

addBtn.addEventListener("click", addTask);

// Close the modal if user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// checkBox.addEventListener("change", (e) => {
//   if (e.target.checked) {
//     console.log("ON");
//   } else {
//     console.log("OFF");
//   }
// });
