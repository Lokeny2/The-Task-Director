// 1.Selection 
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("task-list");
const clearAllBtn = document.getElementById("clearAllBtn");


// 2.The Adding Logic 
function addTask(){
    const text = taskInput.value.trim();
    if(text === "") return alert("Please enter a task!");


const li = document.createElement('li');
li.className = 'task-item';
li.innerHTML = `<span>${text}</span><button class="delete-btn">Delete</button>`;

taskList.appendChild(li);
taskInput.value = '';
}


// 3.Delegation Logic
taskList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.classList.toggle('completed');
    }
})

// 4.Listeners
addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addTask();
    };})

clearAllBtn.addEventListener('click', () => {
    if(confirm('Are you sure you want to delete all the tasks?')){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild)
        }
    }
} )
