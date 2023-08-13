class Task {
    constructor(_name, _date, _prio, _project) {
        this.name = _name;
        this.date = _date;
        this.prio = _prio;
        this.project = _project;
        
        this.onGoing = true;
    }
}

class  AllTasksList {
    constructor() {
        this.list = [];
    }
    showAllTasks() {
        for (let item in this.list){
            console.log(this.list[item]);
        }
    }
    appendTask(Task) {
        this.list.push(Task);
    }
}

export default Task;
export { AllTasksList };