
const todoInput = document.querySelector('.input');
const todoButton = document.querySelector('.addtask');
const todoList = document.querySelector('.todo-list');
const tasksorting = document.querySelector('.filter-todo');

//eventlister
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
tasksorting.addEventListener('click', filterTodo);

function addTodo(event) {

    event.preventDefault();

const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML= '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML= '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

//append to list
todoList.appendChild(todoDiv);

//clear todoinput value
todoInput.value="";


}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
      const todo = item.parentElement;
      todo.remove();

     
    }

    //check mark
  if (item.classList[0] === "complete-btn") {
      const todo =  item.parentElement;
      todo.classList.toggle("completed");
  }
    
}

function filterTodo(e) {
    const todos = [...todoList.children];
todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all" :
                todo.style.display = "flex";
                break;
                case "completed":
                    if(todo.classList.contains("completed")) {
                        todo.style.display = "flex";

                    } else {
                        todo.style.display = "none";
                    }
                    break;
             case "pending": 
             if(!todo.classList.contains("completed")) {
                todo.style.display = "flex";

            } else {
                todo.style.display = "none";
            }    
        }
    });
}