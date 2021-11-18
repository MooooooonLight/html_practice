const app = Vue.createApp({
  data() {
    return {
      newTodoText: "",
      todos: [
        { id: 1, text: "打游戏" },
        { id: 2, text: "睡觉" },
        { id: 3, text: "吃饭" },
      ],
      nextTodoId: 4,
    };
  },
  methods: {
    addNewTodoItem() {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.newTodoText.replace(/\s+/g, "") === this.todos[i].text) {
          alert("瞎？");
          this.newTodoText = "";
          return;
        }
      }
      if (this.newTodoText.replace(/\s+/g, "") === "") {
        alert("没事干别动");
        this.newTodoText = "";
        return;
      }
      this.todos.push({ id: this.nextTodoId++, text: this.newTodoText });
      this.newTodoText = "";
    },
  },
});

app.component("todo-item", {
  template: `<li>
     {{text}}
     <button id="del" @click="$emit('remove')">删除</button>
     </li>`,
  props: ["text"],
  emits: ["remove"],
});

app.mount("#main-window");
