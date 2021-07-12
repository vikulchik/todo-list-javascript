const addTodosField = document.querySelector('#field');
const myTodo = document.querySelector('.my-todo-list');

function renderTodo({ id, createAt, title }) {
    let myTodoListItem = `
        <li class="my-todo-list__item">
            <span class="my-todo-list__title">${title}</span>
            <span class="my-todo-list__date">${createAt}</span>
        </li>`;
    myTodo.insertAdjacentHTML('beforeend', myTodoListItem);
}

function renderTodos(list) {
    debugger
    myTodo.innerHTML = '';
    list.forEach((todo)=> {
        renderTodo(todo);
    });
}

function clear() {
    addTodosField.value = '';
}

const view = {
    renderTodo,
    renderTodos,
    clear
}
