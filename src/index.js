import './assets/style.css';
import { inbox, projectList, ListManager, Task, Project } from'./todolist.js';

const Task1 = new Task('Create ToDoList', '2023-08-16', 1, 'inbox');
const Task2 = new Task('Exam', '2023-08-15', 1, 'University');

const Project1 = new Project('University');

const dueToday = ListManager.filterDueIn7Days(projectList[0].list);
console.log(dueToday);

