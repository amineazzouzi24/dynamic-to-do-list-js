document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  /**
   * Task Creation and Removal:
   */
  function addTask() {
    const taskText = taskInput.value.trim();

    // تحقق مما إذا كان النص فارغًا، إذا كان فارغًا، قم بإنهاء الدالة
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn'; // بدون استخدام classList.add

    // تعيين حدث onclick لإزالة عنصر LI عند الضغط على الزر
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
  }

  /**
   * Attach Event Listeners:
   */

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
