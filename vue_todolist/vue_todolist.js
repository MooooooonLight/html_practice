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
      let liList = document.getElementsByTagName("li");
      for (let i = 0; i < liList.length; i++) {
        if (
          this.newTodoText.replace(/\s+/g, "") ===
          liList[i].innerText.split("\n")[0]
        ) {
          alert("瞎？");
          return;
        }
      }
      if (this.newTodoText.replace(/\s+/g, "") === "") {
        alert("没事干别动");
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
