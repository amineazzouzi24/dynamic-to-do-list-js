// Wait for the DOM to fully load before running any scripts
document.addEventListener('DOMContentLoaded', function () {

    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the input value and trim any extra spaces
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Prompt the user to enter a task
            return;
        }

        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Add click event to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li); // Remove the specific task
        };

        // Append the remove button to the list item
        li.appendChild(removeBtn);

        // Add the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listener to "Add Task" button
    addButton.addEventListener('click', addTask);

    // Attach keypress event to allow "Enter" key to add a task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Run addTask when the page loads (not required unless fetching saved tasks)
    // addTask(); // Uncomment if needed for loading initial tasks
});
