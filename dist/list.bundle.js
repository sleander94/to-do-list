"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["list"],{

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
class List {
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
                    if (listButton.classList.contains('active')) {
                        const newActive = document.querySelector('.list-container');
                        newActive.classList.toggle('active');
                    } 
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
        }
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

        this.tasks.forEach(task => {
            const name = document.createElement('div');
            name.classList.toggle('name');
            name.textContent = task.name;
            tasksContainer.appendChild(name);  

            const priority = document.createElement('div');
            priority.classList.toggle('priority');
            priority.textContent = task.priority
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
            date.textContent = task.date
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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/list.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsVUFBVTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVTtBQUMxQzs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRhc2tzKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB9XG5cbiAgICBhZGRUb1BhZ2UoYnV0dG9uQXJlYSwgdGFza0FyZWEpIHtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGlzdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpKSB7XG4gICAgICAgICAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RCdXR0b24udGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gICAgICAgIGxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbGlzdEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkodGFza0FyZWEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0QnV0dG9uKTtcbiAgICAgICAgaWYgKHRoaXMubmFtZSAhPT0gJ1Rhc2tzJykge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcmVtb3ZlTGlzdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgICAgICByZW1vdmVMaXN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3JlbW92ZS1saXN0LWJ1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJlbW92ZVNwYW4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICByZW1vdmVMaXN0QnV0dG9uLmFwcGVuZENoaWxkKHJlbW92ZVNwYW4pO1xuICAgICAgICAgICAgcmVtb3ZlTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtYXRpb24tY29udGFpbmVyJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29uZmlybWF0aW9uLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlybWF0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uTGFiZWwuaW5uZXJUZXh0ID0gYERlbGV0ZSAke3RoaXMubmFtZX0/YDtcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybWF0aW9uTGFiZWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2NhbmNlbCcpO1xuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbmZpcm1hdGlvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY29uZmlybScpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBY3RpdmUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkFyZWEucmVtb3ZlQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3RoaXMubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbmZpcm1hdGlvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbmZpcm1hdGlvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlTGlzdEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uQXJlYS5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBhZGRUb0RvKHRvRG8pIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRvRG8pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLm5hbWV9YCwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvRG8odG9Ebykge1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh0aGlzLnRhc2tzLmluZGV4T2YodG9EbyksIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLm5hbWV9YCwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgIH1cblxuICAgIGRpc3BsYXkobG9jYXRpb24pIHtcbiAgICAgICAgbG9jYXRpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmlkID0gJ3Rhc2tzLWNvbnRhaW5lcic7XG5cbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdUby1Ebyc7XG4gICAgICAgIG5hbWVMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdjb2x1bW4tbGFiZWwnKTtcbiAgICAgICAgbmFtZUxhYmVsLmNsYXNzTGlzdC50b2dnbGUoJ25hbWUnKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdjb2x1bW4tbGFiZWwnKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZSc7XG4gICAgICAgIGRhdGVMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdjb2x1bW4tbGFiZWwnKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgY29uc3QgY29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcbiAgICAgICAgY29tcGxldGVMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdjb2x1bW4tbGFiZWwnKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVMYWJlbCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlbW92ZUxhYmVsLnRleHRDb250ZW50ID0gJ1JlbW92ZSc7XG4gICAgICAgIHJlbW92ZUxhYmVsLmNsYXNzTGlzdC50b2dnbGUoJ2NvbHVtbi1sYWJlbCcpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVMYWJlbCk7XG5cbiAgICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QudG9nZ2xlKCduYW1lJyk7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgICAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7ICBcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHlcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKCdsb3cnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnTm9ybWFsJykge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoJ25vcm1hbCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdIaWdoJykge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZ2gnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGF0ZS5jbGFzc0xpc3QudG9nZ2xlKCdkYXRlJyk7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlXG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKTsgIFxuXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZUNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrQm94Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29uc3QgY29tcGxldGVDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrQm94LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgY29tcGxldGVDaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgIGRhdGUuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlQ2hlY2tCb3gpO1xuICAgICAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVDaGVja0JveENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlJyk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvblNwYW4uaW5uZXJIVE1MID0gJ1gnO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvblNwYW4pO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVG9Ebyh0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZChuYW1lKTtcbiAgICAgICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZChkYXRlKTtcbiAgICAgICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgdGFza3NDb250YWluZXIucmVtb3ZlQ2hpbGQoY29tcGxldGVDaGVja0JveENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdGFza3NDb250YWluZXIucmVtb3ZlQ2hpbGQocmVtb3ZlQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b25Db250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuICAgIH1cblxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=