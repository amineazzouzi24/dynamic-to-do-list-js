 // SETUP SEVENTERER لتحميل الصفحة : listen for DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', function() {
      // Select DOM elements: button, input field, and task list
      const addButton = document.getElementById('add-task-btn');
      const taskInput = document.getElementById('task-input');
      const taskList = document.getElementById('task-list');

      // Define function addTask responsible for adding new tasks
      function addTask() {
        // Retrieve and trim the value from task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is empty, alert user if so
        if (taskText === "") {
          alert("Please enter a task.");
          return;
        }

        // Create a new li element and set its text content
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button with text "Remove" and class 'remove-btn'
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Assign onclick event to remove the li from taskList
        removeBtn.onclick = function() {
          taskList.removeChild(li);
        };

        // Append the remove button to li, then append li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = "";
      }

      // Attach event listener to addButton to call addTask on click
      addButton.addEventListener('click', addTask);

      // Attach event listener to taskInput to add task on Enter key press
      taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          addTask();
        }
      });

      // (Optional) If you want to add a task immediately on page load,
      // call addTask() here - but normally the input is empty so no task will be added.
      // addTask(); 
    });
