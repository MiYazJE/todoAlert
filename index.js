const addTask = document.getElementById("add-task");
const input = document.getElementById("input-task");
const error = document.getElementById("error");
const tasks = document.getElementById("tasks");

let i = 1, x = 1;

function addTaskFunc(){

  if (input.value == ""){

    error.classList.remove("hide");

  }else{

    error.classList.add("hide");
    
    tasks.innerHTML += 
    `
    <div class="task">
      <p class="task-text">${input.value}</p>
      <div class="icons">
        <i class="far fa-check-circle" onclick="checkTask()"></i>
        <i class="fas fa-pen" id="${x++}" onclick="editTask(id)"></i>
        <i class="fas fa-trash" id="${i++}" onclick="removeTask(id)"></i>
      </div>
    </div>
    `
    input.value = "";

  }
}

function removeTask(e){

  document.getElementById(e).parentElement.parentElement.remove();

}

function editTask(e){

  document.getElementById("edit").classList.remove("hide");

  document.getElementById("edit-input").value = document.getElementById(e).parentElement.parentElement.firstElementChild.innerHTML;

  document.getElementById("edit-agree").addEventListener("click", () => {

  document.getElementById(e).parentElement.parentElement.firstElementChild.innerHTML = document.getElementById("edit-input").value;

  edit.classList.add("hide");

  });

}
  
function editCancel(){
  edit.classList.add("hide");
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter"){ 
    addTaskFunc();
  }
});
