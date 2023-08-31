const createTaskButton = document.getElementById("create-task");
const taskTitleInput = document.getElementById("task-title");
const tasksList = document.getElementById("tasks");

const chatInput = document.getElementById("chatInput");
const sendMessageButton = document.getElementById("sendMessageButton");
const chatMessages = document.getElementById("chatMessages");

sendMessageButton.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatInput.value = ""; // Clear the input
  }
});

createTaskButton.addEventListener("click", () => {  // adding event listener in task button
  const taskTitle = taskTitleInput.value.trim();
  if (taskTitle) {

    const taskItem = document.createElement("li");
    taskItem.classList.add("task-list-item");
    taskItem.innerHTML =  `<h3 class="task-title">${taskTitle}</h3>
    <button class="delete_button">Delete</button>`;

    const deleteButton = taskItem.querySelector(".delete_button");  // event listener to delete button
    deleteButton.addEventListener("click", () => {
      tasksList.removeChild(taskItem);
    });

    tasksList.appendChild(taskItem);

    taskTitleInput.value = "";
  }
});
