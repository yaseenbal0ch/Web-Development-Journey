// ===============================
// TaskFlow Pro
// Developed by Muhammad Yaseen
// ===============================

// HTML Elements

const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

const priority = document.getElementById("priority");

const dueDate = document.getElementById("dueDate");

const tasksContainer = document.getElementById("tasks");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");

const pendingTasks = document.getElementById("pendingTasks");

const highPriority = document.getElementById("highPriority");

// Empty Array

let tasks = [];

console.log("TaskFlow Pro Started Successfully 🚀");
// ==============================
// Add New Task
// ==============================

taskForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const newTask = {

        id: Date.now(),

        title: taskInput.value,

        priority: priority.value,

        dueDate: dueDate.value,

        completed: false

    };

    tasks.push(newTask);
    displayTasks();
    updateStats();
    console.log(tasks);

    taskInput.value = "";

    dueDate.value = "";

});
// ==============================
// Display Tasks
// ==============================

function displayTasks() {

    tasksContainer.innerHTML = "";

    tasks.forEach(task => {

        tasksContainer.innerHTML += `

        <div class="task">

            <div>

                <h3>${task.title}</h3>

                <p>📅 ${task.dueDate}</p>

                <p>⭐ ${task.priority}</p>

            </div>

        </div>

        `;

    });

}
// ==============================
// Update Statistics
// ==============================

function updateStats() {

    totalTasks.textContent = tasks.length;

    completedTasks.textContent = tasks.filter(task => task.completed).length;

    pendingTasks.textContent = tasks.filter(task => !task.completed).length;

    highPriority.textContent = tasks.filter(task => task.priority === "High").length;

}
// ==============================
// Delete Task
// ==============================

function deleteTask(id){

    tasks = tasks.filter(task => task.id !== id);

    displayTasks();

    updateStats();

}