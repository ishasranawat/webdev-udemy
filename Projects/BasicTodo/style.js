let todo = []; // Array to store tasks

const input = document.getElementById("left"); // Input field
const addButton = document.querySelector(".right"); // Add button
const todoList = document.getElementById("todo-list"); // List to display tasks

// Function to update the list on the page
function renderList() {
  todoList.innerHTML = ""; // Clear the list before updating
  todo.forEach((task, index) => {
    const li = document.createElement("li"); // Create a list item
    li.textContent = task;
    
    // Create a delete button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      deleteTask(index);
    };

    li.appendChild(deleteBtn); // Add delete button to list item
    todoList.appendChild(li); // Add list item to the list
  });
}

// Function to add a task when button is clicked
addButton.addEventListener("click", () => {
  const task = input.value.trim(); // Get input value
  if (task) { // Check if input is not empty
    todo.push(task); // Add task to the array
    input.value = ""; // Clear the input field
    renderList(); // Update the list
  }
});

// Function to delete a task
function deleteTask(index) {
  todo.splice(index, 1); // Remove task from the array
  renderList(); // Update the list
}

