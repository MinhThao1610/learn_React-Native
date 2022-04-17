var taskInput = document.getElementById("new-task");//Add a new task.
var addButton = document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement=function(taskString){

  var listItem=document.createElement("li");

  //input (checkbox)
  var checkBox=document.createElement("input");//checkbx
  //label
  var label=document.createElement("label");//label
  //input (text)
  var editInput=document.createElement("input");//text
  //button.edit
  var editButton=document.createElement("button");//edit button

  //button.delete
  var deleteButton=document.createElement("button");//delete button

  label.innerText=taskString;

  //Each elements, needs appending
  checkBox.type="checkbox";
  editInput.type="text";

  editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
  editButton.className="edit";
  deleteButton.innerText="Delete";
  deleteButton.className="delete";



  //and appending.
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  return listItem;
}



var addTask=function(){
  console.log("Add Task...");
  //Create a new list item with the text from the #new-task:
  var listItem=createNewTaskElement(taskInput.value);

  //Append listItem to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value="";

}

//Mark task completed
var taskCompleted=function(){
    console.log("Complete Task...");
  
  //Append the task list item to the #completed-tasks
  var listItem=this.parentNode;
  completedTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
    console.log("Incomplete Task...");
//Mark task as incomplete.
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks.
    var listItem=this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
      bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
  console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addTask;
// addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    var checkBox=taskListItem.querySelector("input[type=checkbox]");
    checkBox.onchange=checkBoxEventHandler;
}
