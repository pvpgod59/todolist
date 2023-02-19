let taskList = [];

let dir = document.getElementById("tasks-container");

let input = document.querySelector("input");

function addTask() {
    let taskName = input.value;

    if (taskName != ""){

        taskList.push(taskName);

        dir.innerHTML = "";
        input.value = "";

    
        for (let i = 0; i < taskList.length; i++) {
            let newTask = document.createElement("div");
            newTask.id = i;
            newTask.classList.add("task");
            let newTaskName = taskList[i];
            newTask.innerHTML = `<p>${newTaskName}</p>
                                 <button id="del-task" onclick="delTask(${i})">-</button>`;
            dir.appendChild(newTask);
            let task = document.getElementById(i);
            task.onclick = function(){checkTask(i)};
        }
    }
}

function delTask(id) {
    let task = document.getElementById(id);
    task.remove();
    taskList.splice(id);
}

function checkTask(id) {
    let task = document.getElementById(id);
    task.classList.toggle("checked");
}