<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "./store";

const store = useStore(key)
// todos的初始化操作
store.dispatch("todos/initTodo")
</script>

<template>
  <div>
    <router-link to="/">todo</router-link>
  </div>
  <router-link to="/add">add</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
