// // Get references to HTML elements
// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// // Initialize tasks array from local storage (if available)
// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// // Function to add a task
// function addTask() {
//   const taskText = taskInput.value.trim();
//   if (taskText) {
//     tasks.push(taskText);
//     updateTaskList();
//     taskInput.value = "";
//     saveTasksToLocalStorage();
//   }
// }

// // Function to update the task list
// function updateTaskList() {
//   taskList.innerHTML = "";
//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.textContent = task;
//     li.innerHTML += ` <button onclick="removeTask(${index})">Delete</button>`;
//     taskList.appendChild(li);
//   });
// }

// // Function to remove a task
// function removeTask(index) {
//   tasks.splice(index, 1);
//   updateTaskList();
//   saveTasksToLocalStorage();
// }

// // Function to clear all tasks
// function clearTasks() {
//   tasks = [];
//   updateTaskList();
//   saveTasksToLocalStorage();
// }

// // Function to save tasks to local storage
// function saveTasksToLocalStorage() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // Load tasks from local storage on page load
// updateTaskList();

// Get references to HTML elements
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal when the close button (X) is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal if user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
