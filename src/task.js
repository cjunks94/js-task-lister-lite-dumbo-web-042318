const Task= (() => {
let arr=[]
let taskId=1
return class Task {

    constructor(title, description, taskList){
      this.taskId = taskId++
      this.title = title
      this.description = description
      this.taskListId = taskList.id
      arr.push(this)
    }
    static allTask(){
      return arr
    }
  }
})();
