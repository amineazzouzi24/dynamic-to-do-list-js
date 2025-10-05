function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn'; // ✅ Required for styling

    removeBtn.onclick = function () {
        li.remove(); // ✅ This correctly removes the task
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // ✅ Clear input field
}

addButton.addEventListener('click', addTask); // ✅ Button adds task

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask(); // ✅ Pressing Enter adds task
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        // Full function as shown above
    }

    // Event listeners here
});
