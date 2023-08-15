import { addDays, sub, isWithinInterval, parseISO, isToday } from 'date-fns';
const inbox = [];
const projectList = [];

const ListManager =  new class ListManager {
    removeTaskFrominbox(task) {
        const index = inbox.indexOf(task);
    
        if (index !== -1) {
            inbox.splice(index, 1);
        }
    }
    removeProjectFromProjectList(project) {
        const index = projectList.indexOf(project);
    
        if (index !== -1) {
            projectList.splice(index, 1);
        }
    }

    // Pass 'inbox' or 'projectList[i].list'
    filterDueToday(list) {
        return list.filter(task => {
            const taskDate = parseISO(task.date);
            return isToday(taskDate)
        })
    }

    // Pass 'inbox' or 'projectList[i].list'
    filterDueIn7Days(list) {
        const today = new Date();
        const yesterday = sub(today, {days: 1});
        const sevenDaysFromNow = addDays(today, 7);

        return list.filter(task => {
            const taskDate = parseISO(task.date);
            console.log("taskDate:", taskDate);
            return isWithinInterval(taskDate, {start: yesterday, end: sevenDaysFromNow})
        });
    }
}

class Task {
    constructor(_name, _date, _prio, _project) {
        this.name = _name;
        this.date = _date;
        this.prio = _prio;
        this.project = _project;
        this.onGoing = true;
        
        inbox.push(this);
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
        return inbox.filter(task => task.project === this.name)
    }
}

export {
    inbox,
    projectList,
    ListManager,
    Task,
    Project
};