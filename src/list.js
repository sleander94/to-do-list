export class List {
    constructor (name) {
        this.name = name;
        this.tasks = [];
    }

    addToSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = this.name;
        sidebar.appendChild(button);
    }
}

// Creates button that generates new list input on click
export function makeNewListButton() {
    const sidebar = document.querySelector('.sidebar');
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
    const sidebar = document.querySelector('.sidebar');
    const inputContainer = document.createElement('div');

    const listName = document.createElement('input');
    inputContainer.appendChild(listName);

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.classList.toggle('add');
    addButton.textContent = 'Add';
    addButton.addEventListener('click', () => {
        sidebar.removeChild(inputContainer);
        const newList = new List(listName.value);
        newList.addToSidebar();
        makeNewListButton();
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