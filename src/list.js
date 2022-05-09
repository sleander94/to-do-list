export class List {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addToPage(location) {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.toggle('active');
        button.textContent = this.name;
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) {
                return;
            } else {
                const currentActiveButton = document.querySelector('.active');
                currentActiveButton.classList.toggle('active');
                button.classList.toggle('active');
                this.display();
            }
        });
        location.appendChild(button);
    }

    addToDo(toDo) {
        this.tasks.push(toDo);
    }

    display(location) {
        location.innerHTML = '';
        const taskContainer = document.createElement('div');
        this.tasks.forEach(task => {
            const taskString = document.createElement('div');
            taskString.textContent = `${task.name} | ${task.date}`;
            taskContainer.appendChild(taskString);
        });
        location.appendChild(taskContainer);
    }

}

