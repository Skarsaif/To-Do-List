// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a valid task.");
      return;
    }
  
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="toggleTask(this)"> ${taskText} <button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  
  // Function to toggle the completion status of a task
  function toggleTask(checkbox) {
    const taskText = checkbox.nextSibling;
    taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
  }
  
  // Function to remove a task from the list
  function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
  }
  setInterval(myFunction, 1000);

