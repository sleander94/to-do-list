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
        const removeListButton = document.createElement('button');
        removeListButton.type = 'button';
        removeListButton.classList.toggle('remove-list-button');
        const removeSpan = document.createElement('span');
        removeSpan.textContent = 'X';
        removeListButton.appendChild(removeSpan);
        removeListButton.addEventListener('click', () => {
            if (!document.querySelector('.confirmation-container')) {
            const confirmationContainer = document.createElement('div');
            confirmationContainer.classList.toggle('confirmation-container')
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
                buttonArea.removeChild(listContainer);
                localStorage.removeItem(`${this.name}`);
                confirmationContainer.innerHTML = '';
                document.body.removeChild(confirmationContainer);
            });
            confirmationContainer.appendChild(confirmButton);
            document.body.appendChild(confirmationContainer);
        }
        });
        listContainer.appendChild(removeListButton);
        buttonArea.appendChild(listContainer);
    }

    addToDo(toDo) {
        this.tasks.push(toDo);
        localStorage.setItem(`${this.name}`, JSON.stringify(this));
    }

    removeToDo(toDo) {
        this.tasks.splice(this.tasks.indexOf(toDo), 1);
        localStorage.setItem(`${this.name}`, JSON.stringify(this));
    }

    display(location) {
        location.innerHTML = '';
        const tasksContainer = document.createElement('div');
        tasksContainer.id = 'tasks-container';

        const nameLabel = document.createElement('div');
        nameLabel.textContent = 'To-Do';
        nameLabel.classList.toggle('name-label');
        tasksContainer.appendChild(nameLabel);
        const dateLabel = document.createElement('div');
        dateLabel.textContent = 'Due Date';
        dateLabel.classList.toggle('date-label');
        tasksContainer.appendChild(dateLabel);
        const priorityLabel = document.createElement('div');
        priorityLabel.textContent = 'Priority';
        priorityLabel.classList.toggle('priority-label');
        tasksContainer.appendChild(priorityLabel);
        const completeLabel = document.createElement('div');
        completeLabel.textContent = 'Complete';
        completeLabel.classList.toggle('complete-label');
        tasksContainer.appendChild(completeLabel);
        const removeLabel = document.createElement('div');
        removeLabel.textContent = 'Remove';
        removeLabel.classList.toggle('remove-label');
        tasksContainer.appendChild(removeLabel);

        this.tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.toggle('task-div');

            const name = document.createElement('span');
            name.textContent = task.name;
            taskDiv.appendChild(name);

            const date = document.createElement('span');
            date.textContent = task.date
            taskDiv.appendChild(date);    

            const priority = document.createElement('span');
            priority.textContent = task.priority
            taskDiv.appendChild(priority);

            if (task.priority == 'low') {
                taskDiv.classList.toggle('low');
            } else if (task.priority == 'normal') {
                taskDiv.classList.toggle('normal');
            } else if (task.priority == 'high') {
                taskDiv.classList.toggle('high');
            }

            const completeCheckBox = document.createElement('input');
            completeCheckBox.type = 'checkbox';
            completeCheckBox.addEventListener('change', () => {
                taskDiv.classList.toggle('complete');
            });
            taskDiv.appendChild(completeCheckBox);

            const removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.innerHTML = 'Remove';
            removeButton.addEventListener('click', () => {
                this.removeToDo(task);
                tasksContainer.removeChild(taskDiv);
            });
            taskDiv.appendChild(removeButton);


            tasksContainer.appendChild(taskDiv);
        });
        location.appendChild(tasksContainer);
    }

}

