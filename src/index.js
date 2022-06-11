import './style.css';
import { List } from './list.js';
import { ToDo } from './todo.js';
import firestore from './firebase.js';
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  collection,
} from 'firebase/firestore';

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

// Empty array to store lists
let listArray = [];

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

  // Container for lists
  const listsCont = document.createElement('div');
  listsCont.classList.toggle('listsContainer');
  sidebar.appendChild(listsCont);

  // Content
  const content = document.createElement('div');
  content.classList.toggle('content');
  document.body.appendChild(content);

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
        const addNewList = async () => {
          await setDoc(doc(firestore, `testUser/${newList.name}`), {
            timestamp: new Date().getTime(),
            tasks: {},
          });
        };
        addNewList();
        localStorage.setItem(`${newList.name}`, JSON.stringify(newList));
        listArray.push(newList);
        newList.addToPage(listsCont, content);
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

            // Add todo to firestore
            const updateList = async () => {
              await updateDoc(
                doc(firestore, `testUser/${activeButton.textContent}`),
                {
                  tasks: {
                    [newToDo.name]: {
                      name: newToDo.name,
                      date: newToDo.date,
                      priority: newToDo.priority,
                      complete: false,
                    },
                  },
                }
              );
            };
            updateList();
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

  // Create default list in firestore if none exist
  const setTasks = async () => {
    setDoc(doc(firestore, `testUser/Tasks`), {
      timestamp: new Date().getTime(),
      tasks: {},
    });
  };

  const defaultList = async () => {
    const tasksDoc = await getDoc(doc(firestore, 'testUser', 'Tasks'));
    if (!tasksDoc.exists()) {
      setTasks();
      getLists();
    } else {
      console.log('Tasks exists');
    }
  };
  defaultList();

  // Get lists from firestore and populate listArray on page load

  const getLists = async () => {
    listsCont.innerHTML = '';
    const q = query(collection(firestore, 'testUser'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const list = new List(doc.id, Object.values(doc.data().tasks));
      listArray.push(list);
      list.addToPage(listsCont, content);
      if (doc.id === 'Tasks') {
        list.display(content);
      }
    });
  };

  getLists();
  makeNewListButton();
  makeAddToDoButton();
})();

export { listArray };
