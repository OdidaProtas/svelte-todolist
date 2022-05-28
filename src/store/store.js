import { fetchTodos } from "../api/todos.api"
import { writable } from "svelte/store"

export const formActive = writable(false)
export const todosAPI = writable(fetchTodos(2000));