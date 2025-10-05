function addTask() {
  // Get trimmed input value
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // Create new list item with task text
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create Remove button and style it
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  // Remove task when button clicked
  removeBtn.onclick = () => {
    taskList.removeChild(li);
  };

  // Append Remove button to li and li to the list
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = '';
}

// Event listener for Add Task button click
addButton.addEventListener('click', addTask);

// Event listener for pressing Enter key in task input
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
