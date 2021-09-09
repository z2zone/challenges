const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todo-lists");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inputValue = input.value;
    if(todos){
        const addedToDo = document.createElement("li");
        addedToDo.innerText = inputValue;
        todos.appendChild(addedToDo);
    }
});