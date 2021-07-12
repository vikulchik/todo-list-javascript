const addTodosBtn = document.querySelector('.add-todos__btn');
const sortByNewBtn = document.querySelector('.sort-by-new');
const sortByOldBtn = document.querySelector('.sort-by-old');

function onAddTodo(e) {
    const { value } = addTodosField;
    e.preventDefault();
    if (value) {
        const todo = service.createTodo(addTodosField.value);
        view.renderTodo(todo);
        view.clear();
    }
}

function getSortByNew(e) {
    e.preventDefault();
    service.sortByNewDate(service.todos);
    view.renderTodos(service.todos);
}

function getSortByOld(e) {
    e.preventDefault();
    service.sortByOldDate(service.todos);
    view.renderTodos(service.todos);
}

sortByNewBtn.addEventListener('click', getSortByNew);
sortByOldBtn.addEventListener('click', getSortByOld);

function onSort(e) {
    const sortBy = e.target.dataset.sortBy;
    let sortedList;
    if (sortBy === 'asc') {
        sortedList = service.sortByOld();
    } else if (sortBy === 'desc') {
        sortedList = service.sortByNew();
    }
    view.renderTodos(sortedList)
}

function init() {
    service.todos = storage.get('todos') || [];
    view.renderTodos(service.todos);
    addTodosBtn.addEventListener('click', onAddTodo);
}

init()

//acs  - по возрастанию
//desc - по убыванию
