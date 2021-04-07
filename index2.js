class TodoAlert{

  constructor(tasksContainer){

    this.allTasks = [];
    this.container = tasksContainer;
    this.currentId = 0;
    
  }

  addToArray(){

    const mainInput = document.getElementById("input-task");

    if (mainInput.value == ""){

      alert("Ingresa el nombre de la tarea");

    } else {

      const task = {

        id: this.currentId++,
        textTask: mainInput.value,
        checked: false
        
      }

      this.allTasks.unshift(task);
      this.showTask();
    
      mainInput.value = "";
    }
    
  }

  deleteTask(x){

    const taskToDelete = this.allTasks.findIndex((task) => task.id == x);

    this.allTasks.splice(taskToDelete, 1);

    this.showTask();

  }

  checkedOrNot(y){

    const taskToCheck = this.allTasks.findIndex((task) => task.id == y);
    
    this.allTasks[taskToCheck].checked = !this.allTasks[taskToCheck].checked;

    this.showTask();
    
  }

/*   editTask(z){

    const taskToEdit = this.allTasks.findIndex((task) => task.id == z );
    
    document.getElementById("edit-Cancel").addEventListener("click", () => {

      document.getElementById("edit").classList.add("hide");

    });

    document.getElementById("edit-agree").addEventListener("click", () => {

      this.allTasks[taskToEdit].textTask = document.getElementById("edit-input").value;
      document.getElementById("edit").classList.add("hide");
      this.showTask();

      this.allTasks[taskToEdit].textTask = "";
    });

  } */

  showTask(){

    this.container.innerHTML = "";

    this.allTasks.forEach((taskItem) => {

      const taskContainer = document.createElement("div");
      const taskp = document.createElement("p");
      const icons = document.createElement("div")
      const circle = document.createElement("i");
      /* const pen = document.createElement("i"); */
      const trash = document.createElement("i");
  
      taskContainer.setAttribute("class", "task");
      taskContainer.setAttribute("data-id", taskItem.id);

      taskp.setAttribute("class", "task-text");
      taskp.setAttribute("data-id", taskItem.id);
      taskp.innerText = taskItem.textTask;
      taskContainer.appendChild(taskp);

      icons.setAttribute("class", "icons");
      taskContainer.appendChild(icons);

      circle.setAttribute("class", "far fa-check-circle");
      circle.setAttribute("data-id", taskItem.id);
      icons.appendChild(circle);

      /* pen.setAttribute("class", "fas fa-pen");
      pen.setAttribute("data-id", taskItem.id);
      icons.appendChild(pen); */

      trash.setAttribute("class", "fas fa-trash");
      trash.setAttribute("data-id", taskItem.id);
      icons.appendChild(trash);

      trash.addEventListener("click", e => {

        const trashId = e.target.getAttribute("data-id");
        myTodoAlert.deleteTask(trashId);    

      });

      circle.addEventListener("click", e => {

        const circleId = e.target.getAttribute("data-id");
        myTodoAlert.checkedOrNot(circleId);

      });

      /* pen.addEventListener("click", e => {

        const penId = e.target.getAttribute("data-id");
        
        document.getElementById("edit").classList.remove("hide");
        
        myTodoAlert.editTask(penId);       
      }); */

      if (taskItem.checked){

        circle.classList.remove("far");
        circle.classList.add("fas");
        taskp.classList.add("line-through");

      } else {

        circle.classList.remove("fas");
        circle.classList.add("far");
        taskp.classList.remove("line-through");

      }
      
      this.container.appendChild(taskContainer);
      
    })

  }
}

const mainContainer = document.getElementById("tasks");
let myTodoAlert = new TodoAlert(mainContainer);

document.getElementById("add-task").addEventListener("click", () => {

  myTodoAlert.addToArray();
  
})
