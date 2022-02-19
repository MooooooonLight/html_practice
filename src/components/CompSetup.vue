<template>
  <!-- 标题 -->
  <h1 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h1>
  <!-- 待办事项列表 -->
  <div v-for="item in todos" :key="item.id">{{ item.title }}</div>

  <div @click="$store.commit('add')">{{ counter }}</div>
  <div>{{ doubleCounter }}</div>
</template>
<script lang="ts" setup>
import { computed, PropType } from "vue";
import { TitleInfo } from "../types";
import { useStore } from "vuex";
import { key } from "../store";

defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true
  }
})
const store = useStore(key)
const counter = computed(() => store.state.counter)
const doubleCounter = computed(() => counter.value * 2)

const todos = computed(() => store.state.todos?.todos)

</script>
<style scoped>
</style>