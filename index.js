const addTask = document.getElementById("add-task");
const input = document.getElementById("input-task");
const error = document.getElementById("error");
const tasks = document.getElementById("tasks");
const icons = document.getElementsByClassName("icons");
let i = 1;

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
        <i class="far fa-check-circle"></i>
        <i class="fas fa-pen"></i>
      </div>
    </div>
    `
    const iconDelete = document.createElement("i");
    iconDelete.classList.add("fas", "fa-trash");
    icons[i++].append(iconDelete);
    input.value = "";

  }
}
addTask.addEventListener("click", addTaskFunc);
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter"){ 
    addTaskFunc();
  }
});
