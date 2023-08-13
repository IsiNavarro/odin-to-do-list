const mainList = [];
const projectList = [];

const ListManager =  new class ListManager {
    removeTaskFromMainList(Task) {
        const index = mainList.indexOf(Task);
    
        if (index !== -1) {
            mainList.splice(index, 1);
        }
    }
    removeTaskFromProjectList(Task) {
        const index = projectList.indexOf(Task);
    
        if (index !== -1) {
            projectList.splice(index, 1);
        }
    }

}

class Task {
    constructor(_name, _date, _prio, _project) {
        this.name = _name;
        this.date = _date;
        this.prio = _prio;
        this.project = _project;
        this.onGoing = true;
        
        mainList.push(this);
    }

    set Name(newName) {
        this.name = newName;
    }
    set Date(newDate) {
        this.date = newDate;
    }
    set Prio(newPrio) {
        this.prio = newPrio;
    }
    set Project(newProject) {
        this.project = newProject;
    }
    
    toggleOnGoing() {
        this.onGoing = !this.onGoing;
    }
}

class Project {
    constructor(_name) {
        this.name = _name;

        if (projectList.length < 5) projectList.push(this);
    }

    get list() {
        return mainList.filter(task => task.project === this.name)
    }
}

export {
    mainList,
    projectList,
    ListManager,
    Task,
    Project
};