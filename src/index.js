import './style.css';


// Header
const header = document.createElement('div');
header.classList.toggle('header')
const title = document.createElement('h1');
title.innerText = '✔ To-Do List';
header.appendChild(title)
document.body.appendChild(header);



const sidebar = document.createElement('div');
sidebar.classList.toggle('sidebar')
document.body.appendChild(sidebar);

const content = document.createElement('div');
content.classList.toggle('content')
document.body.appendChild(content);