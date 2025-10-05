document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from localStorage when the page is loaded
  loadTasks();

  /**
   * Load tasks from Local Storage:
   * This function retrieves tasks from Local Storage and displays them on the page.
   */
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' to prevent adding to localStorage again
  }

  /**
   * Task Creation and Removal:
   * This function adds a new task to the task list and saves it to localStorage.
   */
  function addTask(taskText, save = true) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    removeBtn.onclick = () => {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = '';

    // Save task to localStorage if 'save' is true
    if (save) {
      saveTaskToStorage(taskText);
    }
  }

  /**
   * Save task to Local Storage:
   * This function adds a new task to the localStorage array and updates it.
   */
  function saveTaskToStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  /**
   * Remove task from Local Storage:
   * This function removes a task from localStorage after it is deleted from the DOM.
   */
  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  /**
   * Attach Event Listeners:
   */
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
    } else {
      alert('Please enter a task');
    }
  });

  // Allow task to be added via Enter key
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
      } else {
        alert('Please enter a task');
      }
    }
  });
});
