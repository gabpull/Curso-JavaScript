const readline = require('readline');

//Tarea:
let tarea = {
  done: false,
  description: 'Sacar la Basura'
}

let taskList = [];

function addTask(taskList, taskDescription) {
  taskList.push({done: false, description: taskDescription});
  
}

function printTaskList(taskList){
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].done) {
      console.log('[x] ' + taskList[i].description);
    } else{
      console.log('[ ] ' + taskList[i].description);
    }
  }
}


addTask(taskList, 'Sacar la basura');
addTask(taskList, 'Lavar los platos');

printTaskList(taskList);




//Primer modo: Lectura de tareas necesarias






//Segundo modo: marcar las tareas realizadas

