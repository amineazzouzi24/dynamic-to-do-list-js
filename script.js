document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from localStorage when the page loads
  loadTasks();

  /**
   * Load tasks from localStorage and render them in the list
   */
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' prevents adding to Local Storage again
  }

  /**
   * Add task to the list and save to localStorage
   * @param {string} taskText - The text of the task to be added
   * @param {boolean} save - Whether to save the task to localStorage
   */
  function addTask(taskText, save = true) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn'; // Styling class

    // Event listener to remove task from the list and localStorage
    removeBtn.onclick = () => {
      taskList.removeChild(li);
      removeTaskFromLocalStorage(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
      saveTaskToLocalStorage(taskText);
    }

    taskInput.value = ''; // Clear input field
  }

  /**
   * Save a new task to localStorage
   * @param {string} taskText - The text of the task to be saved
   */
  function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  /**
   * Remove a task from localStorage
   * @param {string} taskText - The text of the task to be removed
   */
  function removeTaskFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText); // Remove the task
    localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated array back to localStorage
  }

  /**
   * Add task when button is clicked
   */
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    addTask(taskText); // Add the task and save it to localStorage
  });

  /**
   * Add task when Enter key is pressed
   */
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();

      if (taskText === '') {
        alert('Please enter a task');
        return;
      }

      addTask(taskText); // Add the task and save it to localStorage
    }
  });
});
