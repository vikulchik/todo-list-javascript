const addTodosForm = document.querySelector('.add-todos');
const addTodosField = document.querySelector('#field');
const addTodosBtn = document.querySelector('.add-todos__btn');
const myTodo = document.querySelector('.my-todo-list');

// let newTodo = {};
//
// console.log(newTodo);
function addTodos() {
    addTodosBtn.addEventListener('click', e => {
        e.preventDefault()
        let myTodoListItem = document.createElement('li');
        myTodoListItem.classList.add('my-todo-list__item');
        myTodoListItem.innerHTML = addTodosField.value;
        myTodo.append(myTodoListItem)
        console.log(addTodosField);
    })
}

addTodos()
