// Create variables (global scope)
let taskName = $('#taskName');
let taskDescription = $('#taskDescription');
let deadline = $('#datepicker');

function generateTaskId() {
    const randomId = Math.floor(Math.random() * 1000);
    const timestamp = new Date().getTime();
    const uniqueId = timestamp + randomId;

    return uniqueId;
}

// Assign variables (global scope)
const addNewBtn = $('.btn');
const escapeModal = $('.close');
const modalForm = $('#formModal');
const saveButton = $('.saveTask');
const deleteButton = $('.delete');
const todoList = $('#todo-cards');

let taskStatus = $('.swim-lanes')
const TASK_DATA_KEY = "tasks";

// function to save task + uniqueid to localStorage
function setTasksInLocalStorage(tasks) {
    localStorage.setItem(TASK_DATA_KEY, JSON.stringify(tasks));
}

// Retrieve tasks and nextId from localStorage
function getTasksFromLocalStorage() {
    const taskString = localStorage.getItem(TASK_DATA_KEY);
    return taskString ? JSON.parse(taskString) : [];
}

// Delete task from localStorage
function removeTaskFromLocalStorage(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    // Update tasks
    setTasksInLocalStorage(tasks);
}


function closeModal() {
    modalForm.modal('hide');
}

// function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();

    // Model each task
    const newTask = {
        id: generateTaskId(),
        name: taskName.val(),
        description: taskDescription.val(),
        deadline: deadline.val(),
        status: taskStatus.val(),
    }

    const taskList = getTasksFromLocalStorage();
    taskList.push(newTask);
    setTasksInLocalStorage(taskList);

    createTaskCard(newTask);
    closeModal();
    renderTaskList();
}

// function to render the task list and make cards draggable
function renderTaskList() {
    const tasks = getTasksFromLocalStorage();

    $(todoList).text("");

    $.each(tasks, (i, task) => {
        createTaskCard(task)
        console.log(task)
        $(todoList).append(createTaskCard(task));

        $('.task-card').draggable({
            revert: 'invalid',
            cursor: 'grab'
        })
    });
    // make lanes droppable
    $('.card-body').droppable({
        accept: '.task-card',
        drop: handleDrop
    });
}


// function to create a task card
function createTaskCard(task) {
    console.log(task);

    const taskCard = $("<article>");
    taskCard.attr('class', 'task-card');
    const taskName = $("<header>");
    const taskDescription = $("<body>");
    const deadline = $("<footer>");
    // const status = ;

    taskName.text(task.name);
    taskDescription.text(task.description);
    deadline.text(task.deadline);

    taskCard.append(taskName, taskDescription, deadline);

    return taskCard;
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const droppedCard = ui.draggable;
    const droppedCardId = droppedCard.attr('id');
    const droppedCardParent = droppedCard.parent().attr('id');

    switch (droppedCardParent) {
        case 'to-do':
            updateTaskStatus(droppedCardId, 'to-do');
            break;
        case 'in-progress':
            updateTaskStatus(droppedCardId, 'in-progress');
            break;
        case 'done':
            updateTaskStatus(droppedCardId, 'done');
            break;
    }
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    const taskCard = $(this).closest('.task-card');
    const taskId = taskCard.attr('id');
    const taskLane = taskCard.closest('.lane').attr('id');

    // Remove task card from UI
    taskCard.remove();

    // Remove task from localStorage
    removeTaskFromLocalStorage(taskId);

    // Update task status lane
    if (taskLane === 'to-do' || taskLane === 'in-progress' || taskLane === 'done') {
        updateTaskStatus(taskId, taskLane);
    }
}

// When the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // Set up event handlers - these don't run (yet)
    escapeModal.on('click', closeModal);
    saveButton.on('click', handleAddTask);
    deleteButton.on('click', handleDeleteTask);

    // Use parens to run now(on page load)
    renderTaskList();
});