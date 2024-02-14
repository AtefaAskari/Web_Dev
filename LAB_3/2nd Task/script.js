// Function to add a new task
function addTask() {
    // Get the input value
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value;

    if (taskText.trim() !== '') {
        // Create a new task element
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <input type="checkbox" class="checkbox" onclick="toggleTask(this)">
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Append the task to the task list
        const taskList = document.getElementById('task-list');
        taskList.appendChild(taskElement);

        // Clear the input field
        newTaskInput.value = '';
    }
}

// Function to toggle the completion status of a task
function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

// Function to remove a task
function removeTask(button) {
    const taskElement = button.parentElement;
    taskElement.remove();
}
