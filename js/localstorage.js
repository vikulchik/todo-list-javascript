function set(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
}

function get(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

const storage = {
    get,
    set
}
