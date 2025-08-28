// Part 1: JavaScript Basics - Variables and Conditionals
let taskCount = 0;
const maxTasks = 10;

// Function to update task counter display
function updateTaskCounter() {
    const counterElement = document.getElementById('taskCounter');
    counterElement.textContent = `Total tasks: ${taskCount}`;
    // Conditional to warn about maximum tasks
    if (taskCount >= maxTasks) {
        alert('Maximum task limit reached!');
    }
}

// Part 2: JavaScript Functions
// Function to create a new task element
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    
    // Add checkbox for task completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        toggleTaskCompletion(li, checkbox.checked);
    };
    
    li.appendChild(checkbox);
    return li;
}

// Function to format and validate task input
function validateAndFormatTask(taskText) {
    if (!taskText || taskText.trim() === '') {
        return null;
    }
    return taskText.trim().charAt(0).toUpperCase() + taskText.trim().slice(1);
}

// Part 3: JavaScript Loops
// Function to clear completed tasks
function clearCompleted() {
    const taskList = document.getElementById('taskList');
    const tasks = taskList.getElementsByTagName('li');
    
    // Loop through tasks in reverse to safely remove elements
    for (let i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].classList.contains('completed')) {
            taskList.removeChild(tasks[i]);
            taskCount--;
        }
    }
    
    // Update task counter after clearing
    updateTaskCounter();
}

// Function to display initial example tasks
function initializeExampleTasks() {
    const exampleTasks = ['Buy groceries', 'Do laundry', 'Call mom'];
    
    // Using forEach to iterate through example tasks
    exampleTasks.forEach(task => {
        if (taskCount < maxTasks) {
            addTask(task);
        }
    });
}

// Part 4: DOM Manipulation
// Function to add a new task
function addTask(taskText = null) {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    // Get task text from input or parameter
    const text = taskText || input.value;
    const formattedTask = validateAndFormatTask(text);
    
    if (formattedTask && taskCount < maxTasks) {
        const taskElement = createTaskElement(formattedTask);
        taskList.appendChild(taskElement);
        taskCount++;
        updateTaskCounter();
        
        // Clear input field if not an example task
        if (!taskText) {
            input.value = '';
        }
    } else if (!taskText && !formattedTask) {
        alert('Please enter a valid task!');
    }
}

// Function to toggle task completion
function toggleTaskCompletion(taskElement, isChecked) {
    taskElement.classList.toggle('completed', isChecked);
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Initialize the page with example tasks
document.addEventListener('DOMContentLoaded', initializeExampleTasks);