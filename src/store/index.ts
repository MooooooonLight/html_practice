import { InjectionKey } from "vue"
import { createStore, Store } from "vuex"
import todos from "./modules/todos"
import { TodoState } from "./modules/todos"

// 创建一个injectionKey
export const key: InjectionKey<Store<State>> = Symbol()

export type State = {
  counter: number
  todos?: TodoState
}
export default createStore({
  state: {
    counter: 1,
  },
  mutations: {
    add(state) {
      state.counter++
    },
  },
  modules: {
    todos,
  },
})
