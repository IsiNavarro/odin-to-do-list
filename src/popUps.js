import { Project, Task, inbox, projectList } from "./todolist";
import { displayProjects, displayList } from './index'


export default function setModals(){
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');
    const selection = document.getElementById('taskProject');
    

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            selection.innerHTML = '<option value="inbox">inbox</option>';
            projectList.forEach(project => {
                const option = document.createElement('option');
                option.value = project.name;
                option.textContent = project.name;
                selection.appendChild(option);
              });
            openModal(modal);
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        })
    })

    function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    const inputForm1 = document.getElementById('inputForm1');
    const projectNameInput = document.getElementById('projectName');

    inputForm1.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting and reloading the page
        
        const userInput = projectNameInput.value;
        const newProject = new Project(userInput);
        displayProjects();
        closeModal();
    });

    const inputForm2 = document.getElementById('inputForm2');
    const taskNameInput = document.getElementById('taskName');
    const taskDateInput = document.getElementById('taskDate');
    const taskPrioInput = document.getElementById('taskPrio');
    const taskProjectInput = document.getElementById('taskProject');

    inputForm2.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting and reloading the page
        
        const nameInput = taskNameInput.value;
        const dateInput = taskDateInput.value;
        const prioInput = taskPrioInput.value;
        const projectInput = taskProjectInput.value;
        const newTask = new Task(nameInput, dateInput, prioInput, projectInput);

        // const newTask = new Task(userInput);
        displayList(inbox);
        closeModal();
    });
};

