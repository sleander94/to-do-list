import './style.css';
import {List, makeNewListButton} from './list.js';


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

// Create default list 'Tasks'
const tasks = new List('Tasks');
tasks.addToSidebar();

// Add new list to sidebar





makeNewListButton()



// Content
const content = document.createElement('div');
content.classList.toggle('content')
document.body.appendChild(content);


