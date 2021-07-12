function createTodo(item) {
    const newTodo = {
        id: service.todos.length,
        title: item,
        status: changeStatus(),
        createAt: new Date().toLocaleString()
    };
    service.todos.push(newTodo)
    storage.set('todos', service.todos)
    return newTodo;
}

function changeStatus() {

}

function sortByNewDate(array) {
    array.sort((a, b) => {
        return new Date(b.createAt) - new Date(a.createAt);
    });
}

function sortByOldDate(array) {
    array.sort((a, b) => {
        return new Date(a.createAt) - new Date(b.createAt);
    });
}

const service = {
    createTodo,
    changeStatus,
    sortByNewDate,
    sortByOldDate,
    todos: []
}
