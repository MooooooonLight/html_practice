<template>
  <!-- 新增待办 -->
  <input type="text" v-model="todoName" @keydown.enter="addTodo" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "../store";

const store = useStore(key)
const router = useRouter()

const todoName = ref("")

function addTodo(): void {
  store.dispatch('todos/addTodo', todoName.value)
  console.log(store.state.todos?.todos)
  todoName.value = ''
  // 跳转回列表页面
  router.push('/')
}
</script>
<style scoped>
</style>