import './assets/style.css';
import { inbox, projectList, ListManager, Task, Project } from'./todolist.js';
import { format, parseISO } from 'date-fns';
import setModals from './popUps.js'

const inboxBtn = document.getElementById('inboxBtn');
const taskDisplayer = document.getElementById('tasks');
const projectDisplayer = document.getElementById('projectList');

export function displayList(list) {
    taskDisplayer.innerHTML = '';

    list.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.style.borderBottom = getPriorityBorder(task.prio);

        const nameElement = document.createElement('span');
        nameElement.textContent = task.name;
        nameElement.classList.add('taskName');
        taskDiv.appendChild(nameElement);

        const dateElement = document.createElement('span');
        dateElement.textContent = format(parseISO(task.date), 'dd MMM yyyy');
        dateElement.classList.add('taskDate');
        taskDiv.appendChild(dateElement);

        const projectElement = document.createElement('span');
        projectElement.textContent = task.project;
        projectElement.classList.add('taskProject');
        taskDiv.appendChild(projectElement);

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.classList.add('taskDelete');
        delBtn.addEventListener('click', () => {
            ListManager.removeTaskFrominbox(task);
            taskDisplayer.removeChild(taskDiv);
        } );

        
        
        taskDiv.appendChild(delBtn);

        taskDisplayer.appendChild(taskDiv);        
    });
};

export function displayProjects() {
    projectDisplayer.innerHTML = '';

    projectList.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerText = `- ${project.name}`;

        // Add eventlistener for it to display its list
        projectDiv.addEventListener('click', () => {
            displayList(project.list);
        })
        projectDisplayer.appendChild(projectDiv)
    })

}

inboxBtn.addEventListener('click', ()=> {
    displayList(inbox);
});

function getPriorityBorder(priority) {
    if (priority === 1) {
        return '2px solid var(--Prio-1)';
      } else if (priority === 2) {
        return '2px solid var(--Prio-2)';
      } else if (priority === 3) {
        return '2px solid var(--Prio-3)';
      } else if (priority === 0) {
        return '2px solid var(--Prio-0)';
      } else return
}






const Task1 = new Task('Create ToDoList', '2023-08-10', 1, 'inbox');
const Task2 = new Task('Exam', '2023-08-17', 0, 'University');
const Tas32 = new Task('Push, pull, legs!', '2023-08-15', 2, 'Gym');
const Task4 = new Task('Etwas', '2023-08-16', 3, 'University');

const Project1 = new Project('University');
const Project2 = new Project('Gym');

const dueToday = ListManager.filterDueIn7Days(projectList[0].list);

setModals();
displayList(inbox);
displayProjects();