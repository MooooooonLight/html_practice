import { Module } from "vuex"
import { State } from ".."
import http from "../../api/request"
import { Todo } from "../../types"

const initialState = {
  todos: [] as Todo[],
}

export type TodoState = typeof initialState
export default {
  namespaced: true,
  state: initialState,
  mutations: {
    initTodo(state, payload: Todo[]) {
      state.todos = payload
    },
    addTodo(state, payload: Todo) {
      console.log(payload)
      state.todos.push(payload)
    },
  },
  actions: {
    initTodo({ commit }) {
      // setTimeout(() => {
      //   commit("initTodo", [
      //     {
      //       id: 1,
      //       name: "vue3",
      //       completed: false,
      //     },
      //   ])
      // }, 500)
      http.get<Todo>("/todos/1").then((resp) => {
        commit("addTodo", resp.data as Todo)
      })
    },
    addTodo({ commit, state }, payload: string) {
      commit("addTodo", {
        id: state.todos.length + 1,
        title: payload,
        completed: false,
      } as Todo)
    },
  },
} as Module<TodoState, State>
