import firestore from './firebase.js';
import { doc, updateDoc, deleteDoc, deleteField } from 'firebase/firestore';
import { listArray } from './index.js';

export class List {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = tasks;
  }

  addToPage(buttonArea, taskArea) {
    const listContainer = document.createElement('div');
    listContainer.classList.toggle('list-container');
    const listButton = document.createElement('button');
    listButton.type = 'button';
    if (!document.querySelector('.active')) {
      listButton.classList.toggle('active');
    }
    listButton.textContent = this.name;
    listButton.addEventListener('click', () => {
      if (listButton.classList.contains('active')) {
        return;
      } else {
        const currentActiveButton = document.querySelector('.active');
        currentActiveButton.classList.toggle('active');
        listButton.classList.toggle('active');
        this.display(taskArea);
      }
    });
    listContainer.appendChild(listButton);
    if (this.name !== 'Tasks') {
      const removeListButton = document.createElement('button');
      removeListButton.type = 'button';
      removeListButton.classList.toggle('remove-list-button');
      const removeSpan = document.createElement('span');
      removeSpan.textContent = 'X';
      removeListButton.appendChild(removeSpan);
      removeListButton.addEventListener('click', () => {
        if (!document.querySelector('.confirmation-container')) {
          const confirmationContainer = document.createElement('div');
          confirmationContainer.classList.toggle('confirmation-container');
          const confirmationLabel = document.createElement('p');
          confirmationLabel.innerText = `Delete ${this.name}?`;
          confirmationContainer.appendChild(confirmationLabel);
          const cancelButton = document.createElement('button');
          cancelButton.type = 'button';
          cancelButton.classList.toggle('cancel');
          cancelButton.textContent = 'Cancel';
          cancelButton.addEventListener('click', () => {
            confirmationContainer.innerHTML = '';
            document.body.removeChild(confirmationContainer);
          });
          confirmationContainer.appendChild(cancelButton);
          const confirmButton = document.createElement('button');
          confirmButton.type = 'button';
          confirmButton.classList.toggle('confirm');
          confirmButton.textContent = 'Confirm';
          confirmButton.addEventListener('click', () => {
            if (listButton.classList.contains('active')) {
              document
                .querySelector('.list-container')
                .querySelector('button')
                .classList.toggle('active');

              listArray[0].display(taskArea);
            }
            buttonArea.removeChild(listContainer);

            // Delete list from firestore
            const deleteList = async () => {
              deleteDoc(doc(firestore, `testUser/${this.name}`));
            };
            deleteList();

            confirmationContainer.innerHTML = '';
            document.body.removeChild(confirmationContainer);
          });
          confirmationContainer.appendChild(confirmButton);
          document.body.appendChild(confirmationContainer);
        }
      });
      listContainer.appendChild(removeListButton);
    }
    buttonArea.appendChild(listContainer);
  }

  addToDo(toDo) {
    this.tasks.push(toDo);
  }

  removeToDo(toDo) {
    this.tasks.splice(this.tasks.indexOf(toDo), 1);
  }

  display(location) {
    location.innerHTML = '';
    const tasksContainer = document.createElement('div');
    tasksContainer.id = 'tasks-container';

    const nameLabel = document.createElement('div');
    nameLabel.textContent = 'To-Do';
    nameLabel.classList.toggle('column-label');
    nameLabel.classList.toggle('name');
    tasksContainer.appendChild(nameLabel);
    const priorityLabel = document.createElement('div');
    priorityLabel.textContent = 'Priority';
    priorityLabel.classList.toggle('column-label');
    tasksContainer.appendChild(priorityLabel);
    const dateLabel = document.createElement('div');
    dateLabel.textContent = 'Date';
    dateLabel.classList.toggle('column-label');
    tasksContainer.appendChild(dateLabel);
    const completeLabel = document.createElement('div');
    completeLabel.textContent = 'Complete';
    completeLabel.classList.toggle('column-label');
    tasksContainer.appendChild(completeLabel);
    const removeLabel = document.createElement('div');
    removeLabel.textContent = 'Remove';
    removeLabel.classList.toggle('column-label');
    tasksContainer.appendChild(removeLabel);

    this.tasks.forEach((task) => {
      const name = document.createElement('div');
      name.classList.toggle('name');
      name.textContent = task.name;
      tasksContainer.appendChild(name);

      const priority = document.createElement('div');
      priority.classList.toggle('priority');
      priority.textContent = task.priority;
      tasksContainer.appendChild(priority);

      if (task.priority == 'Low') {
        priority.classList.toggle('low');
      } else if (task.priority == 'Normal') {
        priority.classList.toggle('normal');
      } else if (task.priority == 'High') {
        priority.classList.toggle('high');
      }

      const date = document.createElement('div');
      date.classList.toggle('date');
      date.textContent = task.date;
      tasksContainer.appendChild(date);

      const completeCheckBoxContainer = document.createElement('div');
      completeCheckBoxContainer.classList.toggle('container');
      const completeCheckBox = document.createElement('input');
      completeCheckBox.classList.toggle('checkbox');
      completeCheckBox.type = 'checkbox';
      completeCheckBox.addEventListener('change', () => {
        name.classList.toggle('complete');
        date.classList.toggle('complete');
        priority.classList.toggle('complete');
      });
      completeCheckBoxContainer.appendChild(completeCheckBox);
      tasksContainer.appendChild(completeCheckBoxContainer);

      const removeButtonContainer = document.createElement('div');
      removeButtonContainer.classList.toggle('container');
      const removeButton = document.createElement('button');
      removeButton.classList.toggle('remove');
      removeButton.type = 'button';
      const removeButtonSpan = document.createElement('span');
      removeButtonSpan.innerHTML = 'X';
      removeButton.appendChild(removeButtonSpan);
      removeButton.addEventListener('click', () => {
        // Remove task from list in firestore
        const removeTask = async () => {
          await updateDoc(doc(firestore, `testUser/${this.name}`), {
            [`tasks.${task.name}`]: deleteField(),
          });
        };
        removeTask();
        this.removeToDo(task);
        tasksContainer.removeChild(name);
        tasksContainer.removeChild(date);
        tasksContainer.removeChild(priority);
        tasksContainer.removeChild(completeCheckBoxContainer);
        tasksContainer.removeChild(removeButtonContainer);
      });
      removeButtonContainer.appendChild(removeButton);
      tasksContainer.appendChild(removeButtonContainer);
    });
    location.appendChild(tasksContainer);
  }
}
