export class ToDo {
    constructor(name, date, priority) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.complete = false;
    }

    changePriority(value) {
        this.priority = value;
    } 
}