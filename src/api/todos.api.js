export async function fetchTodos(ms) {
    return new Promise(res => {
        setTimeout(() => res(JSON.parse(localStorage.getItem("todos") ?? "[]")        ), ms)
    })
}