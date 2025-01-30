document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");

            // Create a span for the task text
            const taskLabel = document.createElement("span");
            taskLabel.textContent = taskText;

            // Create a checkbox
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";

            listItem.appendChild(taskLabel);
            listItem.appendChild(checkBox);

            taskList.appendChild(listItem);

            taskInput.value = "";
        }
    });
});
