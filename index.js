const addTask = document.getElementById("add-task");
const input = document.getElementById("input-task");
const error = document.getElementById("error");
const tasks = document.getElementById("tasks");

function addTaskFunc(){

  if (input.value == ""){

    error.classList.remove("hide");

  }else{

    error.classList.add("hide");
    
    tasks.innerHTML += 
    `
    <div class="task"">
      <p class="task-text">${input.value}</p>
      <div class="icons">
        <i class="far fa-check-circle"></i>
        <i class="fas fa-pen"></i>
        <i class="fas fa-trash" onclick="removeTask()"></i>
      </div>
    </div>
    `
    input.value = "";

  }
}

function removeTask(){
  console.log("Eliminando ...");
  
}

addTask.addEventListener("click", addTaskFunc);
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter"){ 
    addTaskFunc();
  }
});
