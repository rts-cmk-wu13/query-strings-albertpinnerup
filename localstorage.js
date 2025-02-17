function saveTolocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key)
}
