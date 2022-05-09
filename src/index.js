import './style.css';
import {List} from './list.js';
import {ToDo} from './todo.js'

// Header
const header = document.createElement('div');
header.classList.toggle('header')
const title = document.createElement('h1');
title.innerText = '✔ To-Do List';
header.appendChild(title)
document.body.appendChild(header);

// Sidebar
const sidebar = document.createElement('div');
sidebar.classList.toggle('sidebar')
document.body.appendChild(sidebar);

// Content
const content = document.createElement('div');
content.classList.toggle('content')
document.body.appendChild(content);



// Create empty array to store lists
let listArray = [];


// Creates button that generates new list input on click
function makeNewListButton() {
    const newListButton = document.createElement('button');
    newListButton.type = 'button';
    newListButton.textContent = 'New List +'
    newListButton.addEventListener('click', () => {
        sidebar.removeChild(newListButton);
        newListInput();
    });
    sidebar.appendChild(newListButton);
}

// Creates input field to name new list and buttons to add or cancel
function newListInput() {
    const inputContainer = document.createElement('div');

    const listName = document.createElement('input');
    inputContainer.appendChild(listName);

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.classList.toggle('add');
    addButton.textContent = 'Add';
    addButton.addEventListener('click', () => {
        if (listName.value == '') {
            alert('Enter a name for the list');
        } else { 
            sidebar.removeChild(inputContainer);
            const currentActiveButton = document.querySelector('.active');
            currentActiveButton.classList.toggle('active');
            const newList = new List(listName.value);
            listArray.push(newList);
            newList.addToSidebar();
            makeNewListButton();
        }
    });
    inputContainer.appendChild(addButton);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button'
    cancelButton.classList.toggle('cancel');
    cancelButton.textContent = 'Cancel'
    cancelButton.addEventListener('click', () => {
        sidebar.removeChild(inputContainer);
        makeNewListButton();
    });
    inputContainer.appendChild(cancelButton);

    sidebar.appendChild(inputContainer);
}




// Create default list 'Tasks'
const tasks = new List('Tasks');
listArray.push(tasks);
tasks.addToSidebar();

const test = new ToDo('test', '12/7', 'normal');
const laundry = new ToDo('do laundry', 'today', 'high');
tasks.addToDo(laundry);
tasks.addToDo(test);
tasks.display();
// Add new list button to sidebar
makeNewListButton()







