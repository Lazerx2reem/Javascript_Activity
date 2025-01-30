document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create new list item
            const listItem = document.createElement("li");

            // Create a span for the task text
            const taskLabel = document.createElement("span");
            taskLabel.textContent = taskText;

            // Create a checkbox
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";

            // Append task text first, then checkbox
            listItem.appendChild(taskLabel);
            listItem.appendChild(checkBox);

            // Append the list item to the ordered list
            taskList.appendChild(listItem);

            // Clear input field
            taskInput.value = "";
        }
    });
});
