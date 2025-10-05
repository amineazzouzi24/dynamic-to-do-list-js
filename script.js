document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  /**
   * Task Creation and Removal:
   * This function creates a new task element, adds it to the task list, 
   * and provides a button to remove it. It also clears the input field.
   */
  function addTask() {
    const taskText = taskInput.value.trim();

    // If taskText is empty, prompt the user
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    // Create the <li> element and set its text content to the task text
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button, set its text content, and add a class using classList.add()
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn'); // Using classList.add() to add the class

    // When the remove button is clicked, remove the task from the task list
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the <li> element
    li.appendChild(removeBtn);

    // Append the <li> to the task list
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = '';
  }

  /**
   * Attach Event Listeners:
   * We add event listeners to handle task creation when the user clicks the "Add Task" button
   * or presses the Enter key.
   */

  // Event listener for "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener for Enter key press inside the task input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask(); // Call addTask if Enter is pressed
    }
  });
});
