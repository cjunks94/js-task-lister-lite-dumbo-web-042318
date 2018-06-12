const TaskList = (() =>{
let taskListId=1;

  return class TaskList {
    constructor(){
       this.taskListId = taskListId++
    }

  }
})();
