import './assets/style.css';
import { mainList, projectList, ListManager, Task, Project } from'./todolist.js';

const Task1 = new Task('Create ToDoList', '20122023', 1, 'inbox');
const Task2 = new Task('Exam', '20122023', 1, 'University');



console.log(mainList);

const Project1 = new Project('University');
console.log(Project1.list);

ListManager.removeTaskFromMainList(Task1, mainList);
console.log(mainList);

console.log(projectList);
console.log(projectList[0].list)

