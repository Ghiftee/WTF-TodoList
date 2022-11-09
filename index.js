function onSubmitForm(e){
    e.preventDefault()
    const formInput = document.getElementById('todo-input')
    const formInputValue = formInput.value
    formInput.value = '';
    showAllTodo(formInputValue)
}

function deleteTodo(e){
    const clickedDelButton = e.target;
    const entireLiPerTodo = clickedDelButton.parentNode.parentNode.parentNode
    console.log(entireLiPerTodo);
    entireLiPerTodo.remove();
}

function addListenerToDelete(){
    const allDeleteButtons = document.querySelectorAll('.del-btn')
    const lastDelButton = allDeleteButtons[allDeleteButtons.length - 1];
    lastDelButton.addEventListener('click', deleteTodo);
}

function showAllTodo(TodoItem){
    let newList = document.createElement('li');
    newList.innerHTML = `
        <div class="todo-list-item">
            <input type="checkbox" class="snd-input">
            <span>${TodoItem}</span>
            <div class="todo-btn">
                <button id="editbtn"  class="edit-btn pdn-border">Edit</button>
                <button id="deletebtn" class="del-btn pdn-border">Delete</button>
            </div>
        </div>
    `
    const newListContainer = document.getElementById('todo-ul');
    newListContainer.appendChild(newList);

    addListenerToDelete();
}


const submitForm = document.getElementById('todoFormSubmit');
const submitTodoForm = submitForm.addEventListener('submit', onSubmitForm);
