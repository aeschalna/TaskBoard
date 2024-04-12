# TaskBoard
Use starter code to create a functional site for organizing tasks

Starter Code:

HTML
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />

  <link rel="stylesheet" href="./assets/css/style.css" />
  <title>Task Board</title>
</head>

<body>
  <header class="p-4 mb-4 text-center border-bottom border-5">
    <h1 class="display-3">Task Board</h1>
    <p class="lead">A simple Kanban board for task management</p>
  </header>
  <div class="container">
    <div class="text-center mb-5">
      <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#formModal">Add Task</button>
    </div>
    <!-- Todo: Create a modal with a form to add tasks -->
    <div class="row swim-lanes text-center justify-content-between">
      <div class="col-12 col-lg-4 d-flex">
        <div id="to-do" class="card border-light mb-3 lane flex-grow-1">
          <div class="card-header bg-white">
            <h2 class="card-title mb-1">To Do</h2>
          </div>
          <div class="card-body bg-light">
            <div id="todo-cards"></div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 d-flex">
        <div id="in-progress" class="card border-light mb-3 lane flex-grow-1">
          <div class="card-header bg-white">
            <h2 class="card-title mb-1">In Progress</h2>
          </div>
          <div class="card-body bg-light">
            <div id="in-progress-cards"></div>
          </div>
        </div>
        </div>
        <div class="col-12 col-lg-4 d-flex">
          <div id="done" class="card border-light mb-3 lane flex-grow-1">
            <div class="card-header bg-white">
              <h2 class="card-title mb-1">Done</h2>
            </div>
            <div class="card-body bg-light">
              <div id="done-cards"></div>
          </div>
          </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
    integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U=" crossorigin="anonymous"></script>

  <script src="./assets/js/script.js"></script>
</body>

</html>

CSS

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
}

.swim-lanes {
  min-height: 60vh;
}

.task-card {
  margin: 0 auto;
}

.task-card:hover {
  cursor: grab;
}

Javascript

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});