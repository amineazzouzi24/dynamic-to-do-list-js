// Listen for DOMContentLoaded event to ensure HTML is fully loaded before running script
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements and store in constants
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  /**
   * Adds a new task to the task list
   */
  function addTask() {
    // Retrieve and trim value from task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is empty and alert if so
    if (taskText === '') {
      alert('Please enter a task');
      return; // Exit early if no input
    }

    // Create new li element and set its textContent to taskText
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button element
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Assign onclick event to remove button to remove li from taskList
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append remove button to li, then append li to taskList
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = '';
  }

  // Add click event listener on addButton to call addTask
  addButton.addEventListener('click', addTask);

  // Add keypress event listener on taskInput to add task when Enter key is pressed
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Invoke addTask on DOMContentLoaded (can be used to load saved tasks if needed)
  addTask();
});
