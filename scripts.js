// Sample tasks
const tasks = [
  { id: 1, title: "Task 1", description: "Description 1", status: "todo" },
  { id: 2, title: "Task 2", description: "Description 2", status: "doing" },
  { id: 3, title: "Task 3", description: "Description 3", status: "done" }
];

// Function to render tasks on the Kanban board
function renderTasks() {
  const todoList = document.getElementById("todo-list");
  const doingList = document.getElementById("doing-list");
  const doneList = document.getElementById("done-list");

  todoList.innerHTML = "";
  doingList.innerHTML = "";
  doneList.innerHTML = "";

  tasks.forEach(task => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.textContent = task.title;

    taskCard.addEventListener("click", () => {
      // Implement task editing logic here
    });

    if (task.status === "todo") {
      todoList.appendChild(taskCard);
    } else if (task.status === "doing") {
      doingList.appendChild(taskCard);
    } else if (task.status === "done") {
      doneList.appendChild(taskCard);
    }
  });
}

renderTasks();
