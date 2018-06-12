// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const searchBox = document.getElementById('create-task-form')
  const description = document.getElementById('new-task-description')
  const tasks = document.getElementById('tasks')


  searchBox.addEventListener('submit', postTask)

    function postTask(e) {
      let listItem = document.createElement('li')
      //add delete button here
      let itemTxt = document.createTextNode(description.value)
      listItem.appendChild(itemTxt)
      tasks.appendChild(listItem)
      e.preventDefault();

    }
})
