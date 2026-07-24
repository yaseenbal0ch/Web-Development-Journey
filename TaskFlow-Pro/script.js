let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const tasksContainer = document.getElementById("tasksContainer");
const searchInput = document.getElementById("searchInput");
const allBtn = document.getElementById("allBtn");
const completedBtn = document.getElementById("completedBtn");
const pendingBtn = document.getElementById("pendingBtn");

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = {
        id: Date.now(),
        title: taskInput.value,
        priority: priority.value,
        dueDate: dueDate.value,
        completed: false
    };

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskForm.reset();

    displayTasks();
});


function toggleComplete(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {
            task.completed = !task.completed;
        }

        return task;
    });

    displayTasks();
}
function displayTasks(filteredTasks = tasks) {

    tasksContainer.innerHTML = "";

    filteredTasks.forEach(task => {

        tasksContainer.innerHTML += `
        <div class="task-card">

            <h3>${task.title}</h3>

            <p><strong>Priority:</strong> ${task.priority}</p>

            <p><strong>Due Date:</strong> ${task.dueDate}</p>

            <button onclick="toggleComplete(${task.id})">
                ${task.completed ? "Completed ✅" : "Complete"}
            </button>

            <button onclick="editTask(${task.id})">
                Edit
            </button>

            <button onclick="deleteTask(${task.id})">
                Delete
            </button>

        </div>
        `;

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateStats();

}
function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    displayTasks();
}
function editTask(id) {

    const task = tasks.find(task => task.id === id);

    const updatedTitle = prompt("Edit Task", task.title);

    if (updatedTitle !== null && updatedTitle.trim() !== "") {

        task.title = updatedTitle.trim();

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();

    }
}

displayTasks();
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        tasks = [];
        saveTasks();
        displayTasks();
    }
}

function searchTasks(keyword) {
    keyword = keyword.toLowerCase();

    const filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(keyword)
    );

    tasksContainer.innerHTML = "";

    filtered.forEach(task => {
        tasksContainer.innerHTML += `
        <div class="task-card">
            <h3>${task.title}</h3>
            <p>Priority: ${task.priority}</p>
            <p>Due: ${task.dueDate}</p>
        </div>
        `;
    });
}
searchInput.addEventListener("input", () => {

    const keyword = searchInput.value.toLowerCase();

    const filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(keyword)
    );

    displayTasks(filtered);

});

allBtn.addEventListener("click", () => {
    displayTasks(tasks);
});

completedBtn.addEventListener("click", () => {

    displayTasks(
        tasks.filter(task => task.completed)
    );

});

pendingBtn.addEventListener("click", () => {

    displayTasks(
        tasks.filter(task => !task.completed)
    );

});
function updateStats() {

    document.getElementById("totalTasks").textContent = tasks.length;

    document.getElementById("completedTasks").textContent =
        tasks.filter(task => task.completed).length;

    document.getElementById("pendingTasks").textContent =
        tasks.filter(task => !task.completed).length;

    document.getElementById("highPriority").textContent =
        tasks.filter(task => task.priority === "High").length;

}
displayTasks();
updateStats();
