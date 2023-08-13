import './assets/style.css';
import Task, { AllTasksList } from'./todolist.js';

const Task1 = new Task('Create ToDoList', '20122023', 1, 'inbox');
const TaskList = new AllTasksList();
TaskList.appendTask(Task1);
TaskList.showAllTasks();