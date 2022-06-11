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
    const listContainer = document.createElement("div");
    listContainer.classList.toggle("list-container");
    const listButton = document.createElement("button");
    listButton.type = "button";
    if (!document.querySelector(".active")) {
      listButton.classList.toggle("active");
    }
    listButton.textContent = this.name;
    listButton.addEventListener("click", () => {
      if (listButton.classList.contains("active")) {
        return;
      } else {
        const currentActiveButton = document.querySelector(".active");
        currentActiveButton.classList.toggle("active");
        listButton.classList.toggle("active");
        this.display(taskArea);
      }
    });
    listContainer.appendChild(listButton);
    if (this.name !== "Tasks") {
      const removeListButton = document.createElement("button");
      removeListButton.type = "button";
      removeListButton.classList.toggle("remove-list-button");
      const removeSpan = document.createElement("span");
      removeSpan.textContent = "X";
      removeListButton.appendChild(removeSpan);
      removeListButton.addEventListener("click", () => {
        if (!document.querySelector(".confirmation-container")) {
          const confirmationContainer = document.createElement("div");
          confirmationContainer.classList.toggle("confirmation-container");
          const confirmationLabel = document.createElement("p");
          confirmationLabel.innerText = `Delete ${this.name}?`;
          confirmationContainer.appendChild(confirmationLabel);
          const cancelButton = document.createElement("button");
          cancelButton.type = "button";
          cancelButton.classList.toggle("cancel");
          cancelButton.textContent = "Cancel";
          cancelButton.addEventListener("click", () => {
            confirmationContainer.innerHTML = "";
            document.body.removeChild(confirmationContainer);
          });
          confirmationContainer.appendChild(cancelButton);
          const confirmButton = document.createElement("button");
          confirmButton.type = "button";
          confirmButton.classList.toggle("confirm");
          confirmButton.textContent = "Confirm";
          confirmButton.addEventListener("click", () => {
            if (listButton.classList.contains("active")) {
              const newActive = document.querySelector(".list-container");
              newActive.classList.toggle("active");
            }
            buttonArea.removeChild(listContainer);
            localStorage.removeItem(`${this.name}`);
            confirmationContainer.innerHTML = "";
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
    location.innerHTML = "";
    const tasksContainer = document.createElement("div");
    tasksContainer.id = "tasks-container";

    const nameLabel = document.createElement("div");
    nameLabel.textContent = "To-Do";
    nameLabel.classList.toggle("column-label");
    nameLabel.classList.toggle("name");
    tasksContainer.appendChild(nameLabel);
    const priorityLabel = document.createElement("div");
    priorityLabel.textContent = "Priority";
    priorityLabel.classList.toggle("column-label");
    tasksContainer.appendChild(priorityLabel);
    const dateLabel = document.createElement("div");
    dateLabel.textContent = "Date";
    dateLabel.classList.toggle("column-label");
    tasksContainer.appendChild(dateLabel);
    const completeLabel = document.createElement("div");
    completeLabel.textContent = "Complete";
    completeLabel.classList.toggle("column-label");
    tasksContainer.appendChild(completeLabel);
    const removeLabel = document.createElement("div");
    removeLabel.textContent = "Remove";
    removeLabel.classList.toggle("column-label");
    tasksContainer.appendChild(removeLabel);

    this.tasks.forEach((task) => {
      const name = document.createElement("div");
      name.classList.toggle("name");
      name.textContent = task.name;
      tasksContainer.appendChild(name);

      const priority = document.createElement("div");
      priority.classList.toggle("priority");
      priority.textContent = task.priority;
      tasksContainer.appendChild(priority);

      if (task.priority == "Low") {
        priority.classList.toggle("low");
      } else if (task.priority == "Normal") {
        priority.classList.toggle("normal");
      } else if (task.priority == "High") {
        priority.classList.toggle("high");
      }

      const date = document.createElement("div");
      date.classList.toggle("date");
      date.textContent = task.date;
      tasksContainer.appendChild(date);

      const completeCheckBoxContainer = document.createElement("div");
      completeCheckBoxContainer.classList.toggle("container");
      const completeCheckBox = document.createElement("input");
      completeCheckBox.classList.toggle("checkbox");
      completeCheckBox.type = "checkbox";
      completeCheckBox.addEventListener("change", () => {
        name.classList.toggle("complete");
        date.classList.toggle("complete");
        priority.classList.toggle("complete");
      });
      completeCheckBoxContainer.appendChild(completeCheckBox);
      tasksContainer.appendChild(completeCheckBoxContainer);

      const removeButtonContainer = document.createElement("div");
      removeButtonContainer.classList.toggle("container");
      const removeButton = document.createElement("button");
      removeButton.classList.toggle("remove");
      removeButton.type = "button";
      const removeButtonSpan = document.createElement("span");
      removeButtonSpan.innerHTML = "X";
      removeButton.appendChild(removeButtonSpan);
      removeButton.addEventListener("click", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsVUFBVTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsVUFBVTtBQUNqRDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0YXNrcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgYWRkVG9QYWdlKGJ1dHRvbkFyZWEsIHRhc2tBcmVhKSB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwibGlzdC1jb250YWluZXJcIik7XG4gICAgY29uc3QgbGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGlzdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpKSB7XG4gICAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIGxpc3RCdXR0b24udGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gICAgbGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGxpc3RCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICAgICAgY3VycmVudEFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMuZGlzcGxheSh0YXNrQXJlYSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0QnV0dG9uKTtcbiAgICBpZiAodGhpcy5uYW1lICE9PSBcIlRhc2tzXCIpIHtcbiAgICAgIGNvbnN0IHJlbW92ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcmVtb3ZlTGlzdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgIHJlbW92ZUxpc3RCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInJlbW92ZS1saXN0LWJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IHJlbW92ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHJlbW92ZVNwYW4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgIHJlbW92ZUxpc3RCdXR0b24uYXBwZW5kQ2hpbGQocmVtb3ZlU3Bhbik7XG4gICAgICByZW1vdmVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtYXRpb24tY29udGFpbmVyXCIpKSB7XG4gICAgICAgICAgY29uc3QgY29uZmlybWF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25maXJtYXRpb25Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNvbmZpcm1hdGlvbi1jb250YWluZXJcIik7XG4gICAgICAgICAgY29uc3QgY29uZmlybWF0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICBjb25maXJtYXRpb25MYWJlbC5pbm5lclRleHQgPSBgRGVsZXRlICR7dGhpcy5uYW1lfT9gO1xuICAgICAgICAgIGNvbmZpcm1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtYXRpb25MYWJlbCk7XG4gICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYW5jZWxcIik7XG4gICAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb25maXJtYXRpb25Db250YWluZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbmZpcm1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgICAgICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIGNvbmZpcm1CdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY29uZmlybVwiKTtcbiAgICAgICAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3RCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0FjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1jb250YWluZXJcIik7XG4gICAgICAgICAgICAgIG5ld0FjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uQXJlYS5yZW1vdmVDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3RoaXMubmFtZX1gKTtcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb25maXJtYXRpb25Db250YWluZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbmZpcm1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbmZpcm1hdGlvbkNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVMaXN0QnV0dG9uKTtcbiAgICB9XG4gICAgYnV0dG9uQXJlYS5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgfVxuXG4gIGFkZFRvRG8odG9Ebykge1xuICAgIHRoaXMudGFza3MucHVzaCh0b0RvKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLm5hbWV9YCwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICB9XG5cbiAgcmVtb3ZlVG9Ebyh0b0RvKSB7XG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRvRG8pLCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLm5hbWV9YCwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICB9XG5cbiAgZGlzcGxheShsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tzQ29udGFpbmVyLmlkID0gXCJ0YXNrcy1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJUby1Eb1wiO1xuICAgIG5hbWVMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sdW1uLWxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKFwibmFtZVwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sdW1uLWxhYmVsXCIpO1xuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC50b2dnbGUoXCJjb2x1bW4tbGFiZWxcIik7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBjb25zdCBjb21wbGV0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZVwiO1xuICAgIGNvbXBsZXRlTGFiZWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbHVtbi1sYWJlbFwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUxhYmVsKTtcbiAgICBjb25zdCByZW1vdmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVtb3ZlTGFiZWwudGV4dENvbnRlbnQgPSBcIlJlbW92ZVwiO1xuICAgIHJlbW92ZUxhYmVsLmNsYXNzTGlzdC50b2dnbGUoXCJjb2x1bW4tbGFiZWxcIik7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlTGFiZWwpO1xuXG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcIm5hbWVcIik7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoXCJwcmlvcml0eVwiKTtcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJMb3dcIikge1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKFwibG93XCIpO1xuICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTm9ybWFsXCIpIHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcIm5vcm1hbFwiKTtcbiAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSBcIkhpZ2hcIikge1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlnaFwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXRlLmNsYXNzTGlzdC50b2dnbGUoXCJkYXRlXCIpO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcbiAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICBjb25zdCBjb21wbGV0ZUNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbXBsZXRlQ2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjb21wbGV0ZUNoZWNrQm94LmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja2JveFwiKTtcbiAgICAgIGNvbXBsZXRlQ2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGNvbXBsZXRlQ2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgICAgfSk7XG4gICAgICBjb21wbGV0ZUNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlQ2hlY2tCb3gpO1xuICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVDaGVja0JveENvbnRhaW5lcik7XG5cbiAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByZW1vdmVCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInJlbW92ZVwiKTtcbiAgICAgIHJlbW92ZUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHJlbW92ZUJ1dHRvblNwYW4uaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgICByZW1vdmVCdXR0b24uYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uU3Bhbik7XG4gICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVUb0RvKHRhc2spO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZChuYW1lKTtcbiAgICAgICAgdGFza3NDb250YWluZXIucmVtb3ZlQ2hpbGQoZGF0ZSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgdGFza3NDb250YWluZXIucmVtb3ZlQ2hpbGQoY29tcGxldGVDaGVja0JveENvbnRhaW5lcik7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHJlbW92ZUJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICAgIHJlbW92ZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==