// 给配置项加自定义属性
import { Store } from "vuex"
import { State } from "./store"
// 模块扩展 this.$store强类型支持
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
