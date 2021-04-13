const form = document.getElementById("form")
const template = document.getElementById("template").content
const taskContainer = document.getElementById("taskContainer")
const fragment = document.createDocumentFragment()
const tasks = []

document.addEventListener("DOMContentLoaded", () => showTask())

form.addEventListener("submit", e => {

  e.preventDefault()
  addTasks(e)

})

const addTasks = e =>{

  let inputText = e.target[0].value

  if (inputText.trim() == ""){
    document.querySelector(".error").classList.remove("hide")
    return
  } else {document.querySelector(".error").classList.add("hide")}
    
  const task = {
    id: Date.now(),
    text: inputText,
    checked: false
  }

  form.reset()
  tasks.unshift(task)
  showTask()

}

const showTask = () =>{

  if (tasks.length === 0){
    taskContainer.innerHTML = `
    <div class="clearTask">No tienes tareas pendientes</div>
    `
    return
  }

  taskContainer.innerHTML = ""

  tasks.forEach(element => {

    const templateCopy = template.cloneNode(true)

    templateCopy.querySelector("p").textContent = element.text
    templateCopy.querySelector("p").dataset.id = element.id
    templateCopy.querySelectorAll("i")[0].dataset.id = element.id
    templateCopy.querySelectorAll("i")[1].dataset.id = element.id

    if (element.checked === true){

      templateCopy.querySelector("p").classList.add("check")
      
      templateCopy.querySelector("i").classList.replace("far", "fas")

      templateCopy.querySelector("p").parentElement.classList.add("bgGreen")

    }

    fragment.appendChild(templateCopy)

  })

  taskContainer.appendChild(fragment)

}

const deleteTask = e => {
  const elementDelete = tasks.findIndex(task => task.id == e)

  tasks.splice(elementDelete, 1)

  showTask()
}

const checkTask = e => {

  const elementCheck = tasks.findIndex(task => task.id == e)

  tasks[elementCheck].checked = !tasks[elementCheck].checked

  showTask()

}

