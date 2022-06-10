import './style.css';
import { List } from './list.js';
import { ToDo } from './todo.js';
import firestore from './firebase.js';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

const testDoc = doc(firestore, 'testdoc/2022-10-6');
function writeToTest() {
  const docData = {
    description: 'A firestore test',
    price: '$69.99',
    success: 'Yes!',
  };
  setDoc(testDoc, docData);
}
writeToTest();

const page = (() => {
  // Header
  const header = document.createElement('div');
  header.classList.toggle('header');
  const title = document.createElement('h1');
  title.innerText = '✔ To-Do List';
  header.appendChild(title);
  document.body.appendChild(header);

  // Sidebar
  const sidebar = document.createElement('div');
  sidebar.classList.toggle('sidebar');
  document.body.appendChild(sidebar);

  // Content
  const content = document.createElement('div');
  content.classList.toggle('content');
  document.body.appendChild(content);

  // Empty array to store lists
  let listArray = [];

  // Sidebar button that generates new list input on click
  function makeNewListButton() {
    const newListButton = document.createElement('button');
    newListButton.classList.toggle('new-list');
    newListButton.type = 'button';
    newListButton.textContent = 'New List +';
    newListButton.addEventListener('click', () => {
      sidebar.removeChild(newListButton);
      newListInput();
    });
    sidebar.appendChild(newListButton);
  }

  // Input for new list / add & cancel buttons
  function newListInput() {
    const inputContainer = document.createElement('form');

    const listName = document.createElement('input');
    listName.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('add').click();
      }
    });
    inputContainer.appendChild(listName);

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.classList.toggle('add');
    addButton.id = 'add';
    addButton.textContent = 'Add';
    addButton.addEventListener('click', () => {
      if (listName.value == '') {
        alert('Enter a name for the list');
      } else {
        sidebar.removeChild(inputContainer);
        const activeList = document.querySelector('.active');
        activeList.classList.toggle('active');
        const newList = new List(listName.value, []);

        // Add newList to firestore
        let currList = doc(firestore, `testUser/${newList.name}`);
        setDoc(currList, {});

        localStorage.setItem(`${newList.name}`, JSON.stringify(newList));
        listArray.push(newList);
        newList.addToPage(sidebar, content);
        newList.display(content);
        makeNewListButton();
      }
    });
    inputContainer.appendChild(addButton);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.classList.toggle('cancel');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
      sidebar.removeChild(inputContainer);
      makeNewListButton();
    });
    inputContainer.appendChild(cancelButton);

    sidebar.appendChild(inputContainer);
    listName.focus();
  }

  // Add todo button
  function makeAddToDoButton() {
    const addToDoButton = document.createElement('button');
    addToDoButton.type = 'button';
    addToDoButton.classList.toggle('todo-button');
    addToDoButton.innerText = '+';
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

    const title = document.createElement('h2');
    title.textContent = 'New Task';
    toDoContainer.appendChild(title);

    const toDoName = document.createElement('input');
    toDoName.type = 'text';
    toDoName.placeholder = 'Task name';
    toDoContainer.appendChild(toDoName);

    const priorityContainer = document.createElement('div');
    priorityContainer.classList.toggle('priority-container');
    const priorityTitle = document.createElement('p');
    priorityTitle.innerText = 'Priority';
    priorityContainer.appendChild(priorityTitle);

    const lowPriority = document.createElement('input');
    lowPriority.type = 'radio';
    lowPriority.name = 'priority';
    lowPriority.value = 'Low';
    lowPriority.id = 'priorityChoice1';
    const lowLabel = document.createElement('label');
    lowLabel.for = 'priorityChoice1';
    lowLabel.textContent = 'Low';
    priorityContainer.appendChild(lowPriority);
    priorityContainer.appendChild(lowLabel);

    const normalPriority = document.createElement('input');
    normalPriority.type = 'radio';
    normalPriority.name = 'priority';
    normalPriority.value = 'Normal';
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
    highPriority.value = 'High';
    highPriority.id = 'priorityChoice3';
    const highLabel = document.createElement('label');
    highLabel.for = 'priorityChoice3';
    highLabel.textContent = 'High';
    priorityContainer.appendChild(highPriority);
    priorityContainer.appendChild(highLabel);

    toDoContainer.appendChild(priorityContainer);

    const toDoDate = document.createElement('input');
    toDoDate.type = 'date';
    toDoContainer.appendChild(toDoDate);

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.classList.toggle('add');
    addButton.textContent = 'Add';
    addButton.addEventListener('click', () => {
      if (toDoName.value == '') {
        alert('Enter a name for the task');
      } else {
        const toDoPriority = document.querySelector(
          'input[name="priority"]:checked'
        );
        document.body.removeChild(toDoContainer);
        const activeButton = document.querySelector('.active');
        listArray.forEach((list) => {
          if (activeButton.textContent == list.name) {
            const newToDo = new ToDo(
              toDoName.value,
              toDoDate.value,
              toDoPriority.value
            );

            let currentDoc = doc(
              firestore,
              `testUser/${activeButton.textContent}`
            );
            // Add todo to firestore

            updateDoc(currentDoc, {
              [newToDo.name]: {
                name: newToDo.name,
                date: newToDo.date,
                priority: newToDo.priority,
                complete: false,
              },
            });

            list.addToDo(newToDo);
            list.display(content);
          }
        });
      }
    });
    toDoContainer.appendChild(addButton);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.classList.toggle('cancel');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
      document.body.removeChild(toDoContainer);
    });
    toDoContainer.appendChild(cancelButton);

    document.body.appendChild(toDoContainer);
    toDoName.focus();
  }

  // Create default list and store in local storage if local storage is empty
  if (localStorage.length < 1) {
    const tasks = new List('Tasks', []);
    localStorage.setItem(`${tasks.name}`, JSON.stringify(tasks));
  }

  // Loop through lists in local storage and populate listArray on page load
  function getListsFromStorage() {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const listName = localStorage.key(i);
      const listData = JSON.parse(localStorage.getItem(listName));
      const list = new List(listData.name, listData.tasks);
      listArray.push(list);
      list.addToPage(sidebar, content);
      if (i == 0) {
        list.display(content);
      }
    }
  }

  getListsFromStorage();
  makeNewListButton();
  makeAddToDoButton();
})();
