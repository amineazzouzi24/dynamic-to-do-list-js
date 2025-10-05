// Wait for the HTML document to be fully loaded before running any script
document.addEventListener('DOMContentLoaded', () => {
  // Select the Add Task button
  const addButton = document.getElementById('add-task-btn');
  // Select the input field for task entry
  const taskInput = document.getElementById('task-input');
  // Select the unordered list that will contain the tasks
  const taskList = document.getElementById('task-list');

  // Function to add a new task to the list
  function addTask() {
    // Get the trimmed value of the input field
    const taskText = taskInput.value.trim();

    // Check if the task text is not empty
    if (taskText === '') {
      alert('Please enter a task');
      return; // Exit the function early if no task is entered
    }

    // Create a new list item element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Assign click event to remove the task when button is clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the new task (li) to the task list (ul)
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = '';
  }

  // Add event listener for click on the Add Task button
  addButton.addEventListener('click', addTask);

  // Add event listener for pressing the 'Enter' key inside the task input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optionally invoke addTask on DOMContentLoaded (if needed for initial loading)
  // In this case, your instructions say to invoke it, but since no default data, it's okay to call without effect
  addTask();
});
