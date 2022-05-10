import './style.css';
import {List} from './list.js';
import {ToDo} from './todo.js'


const page = (() => {
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

    // Empty array to store lists
    let listArray = [];

    // Sidebar button that generates new list input on click
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

    // Input for new list / add & cancel buttons
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
                const activeList = document.querySelector('.active');
                activeList.classList.toggle('active');
                const newList = new List(listName.value);
                listArray.push(newList);
                newList.addToPage(sidebar, content);
                newList.display(content);
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

    // Add todo button
    function makeAddToDoButton() {
        const addToDoButton = document.createElement('button');
        addToDoButton.type = 'button';
        addToDoButton.classList.toggle('todo-button');
        const addToDoButtonSpan = document.createElement('span');
        addToDoButtonSpan.textContent = '+';
        addToDoButton.appendChild(addToDoButtonSpan);
        addToDoButton.addEventListener('click', () => {
            newToDoInput();
        });
        document.body.appendChild(addToDoButton);
    }

    // Input for new todo / add & cancel buttons
    function newToDoInput() {
        if (document.getElementById('todo-form')) {
            return;
        }
        const toDoContainer = document.createElement('div');
        toDoContainer.id = 'todo-form';

        const toDoName = document.createElement('input');
        toDoName.placeholder = 'What do you need to-do?';
        toDoContainer.appendChild(toDoName);

        const toDoDate = document.createElement('input');
        toDoDate.type = 'date';
        toDoContainer.appendChild(toDoDate);

        const priorityContainer = document.createElement('div');
        const priorityTitle = document.createElement('p');
        priorityTitle.innerText = 'Priority';
        priorityContainer.appendChild(priorityTitle);

        const lowPriority = document.createElement('input');
        lowPriority.type = 'radio';
        lowPriority.name = 'priority';
        lowPriority.value = 'low';
        lowPriority.id = 'priorityChoice1';
        const lowLabel = document.createElement('label');
        lowLabel.for = 'priorityChoice1';
        lowLabel.textContent = 'Low';
        priorityContainer.appendChild(lowPriority);
        priorityContainer.appendChild(lowLabel);

        const normalPriority = document.createElement('input');
        normalPriority.type = 'radio';
        normalPriority.name = 'priority';
        normalPriority.value = 'normal';
        normalPriority.id = 'priorityChoice2';
        normalPriority.checked = true;
        const normalLabel = document.createElement('label');
        normalLabel.for = 'priorityChoice2';
        normalLabel.textContent = 'Normal';
        priorityContainer.appendChild(normalPriority);
        priorityContainer.appendChild(normalLabel);

        const highPriority = document.createElement('input');
        highPriority.type = 'radio';
        highPriority.name = 'priority';
        highPriority.value = 'high';
        highPriority.id = 'priorityChoice3';
        const highLabel = document.createElement('label');
        highLabel.for = 'priorityChoice3';
        highLabel.textContent = 'High';
        priorityContainer.appendChild(highPriority);
        priorityContainer.appendChild(highLabel);

        toDoContainer.appendChild(priorityContainer);


        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.classList.toggle('add');
        addButton.textContent = 'Add';
        addButton.addEventListener('click', () => {
            if (toDoName.value == '') {
                alert('Enter a name for the task');
            } else { 
                const toDoPriority = document.querySelector('input[name="priority"]:checked');
                document.body.removeChild(toDoContainer);
                const activeButton = document.querySelector('.active');
                listArray.forEach(list => {
                    if (activeButton.textContent == list.name) {
                        const newToDo = new ToDo(toDoName.value, toDoDate.value, toDoPriority.value);
                        list.addToDo(newToDo);
                        list.display(content);
                    }
                });
            }
        });
        toDoContainer.appendChild(addButton);

        const cancelButton = document.createElement('button');
        cancelButton.type = 'button'
        cancelButton.classList.toggle('cancel');
        cancelButton.textContent = 'Cancel'
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(toDoContainer);
        });
        toDoContainer.appendChild(cancelButton);

        document.body.appendChild(toDoContainer);
    }



    // Default list 'Tasks'
    const tasks = new List('Tasks');
    listArray.push(tasks);
    tasks.addToPage(sidebar, content);

    const test = new ToDo('test', '12/7', 'normal');
    const laundry = new ToDo('do laundry', 'today', 'high');
    tasks.addToDo(laundry);
    tasks.addToDo(test);
    tasks.display(content);
    // Add new list button to sidebar
    makeNewListButton()
    makeAddToDoButton()
})();





