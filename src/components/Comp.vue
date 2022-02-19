<template>
  <!-- 标题 -->
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>
  <!-- 新增待办 -->
  <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))" />
  <!-- 待办事项列表 -->
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>

  <div>{{ $store.state.counter }}</div>
  <div>{{ doubleCounter }}</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TitleInfo, Todo } from "../types";

export default defineComponent({
  name: "todoList",
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true
    }
  },
  data() {
    return {
      items: [] as Todo[],
      todoName: ""
    };
  },
  created() {
    this.items.push({
      id: 1,
      name: 'vue3',
      completed: false
    })
  },
  computed: {
    doubleCounter(): number {
      return this.$store.state.counter * 2
    }
  },
  methods: {
    newTodo(todoName: string): Todo {
      return {
        id: this.items.length + 1,
        name: todoName,
        completed: false
      }
    },
    addTodo(todo: Todo): void {
      this.items.push(todo)
      this.todoName = ''
    }
  }
})
</script>
<style scoped>
</style>