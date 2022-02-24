
<script lang='ts' setup>
</script>
<template>
  <div class="main">
    <nav class="nav">
      <strong>热门推荐</strong>
      <a>华语</a>
      <hr class="v-line" />
      <a>流行</a>
      <hr class="v-line" />
      <a>摇滚</a>
      <hr class="v-line" />
      <a>民谣</a>
      <hr class="v-line" />
      <a>电子</a>
    </nav>
    <hr class="h-line" />
    <div class="top">
      <div class="one">
        <img src="./img/hot.png" />
        <p>如果再给我一次机会你还会选择走吗</p>
      </div>
      <div class="one">
        <img src="./img/hot.png" />
        <p>如果再给我一次机会你还会选择走吗</p>
      </div>
      <div class="one">
        <img src="./img/hot.png" />
        <p>如果再给我一次机会你还会选择走吗</p>
      </div>
      <div class="one">
        <img src="./img/hot.png" />
        <p>如果再给我一次机会你还会选择走吗</p>
      </div>
    </div>
    <div class="top">
      <div class="one">
        <img src="./img/hot.png" />
        <p>如果再给我一次机会你还会选择走吗</p>
      </div>
      <div class="one">
        <img src="./img/hot.png" />
        <p>如果再给我一次机会你还会选择走吗</p>
      </div>
      <div class="one">
        <img src="./img/hot.png" />
        <p>如果再给我一次机会你还会选择走吗</p>
      </div>
      <div class="one">
        <img src="./img/hot.png" />
        <p>如果再给我一次机会你还会选择走吗</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  flex-shrink: 0;
}
.main {
  width: 730px;
  background-color: white;
  border-left: 1px solid rgba(68, 65, 65, 0.336);
  border-right: 1px solid rgba(68, 65, 65, 0.336);
}
a {
  color: black;
  padding-left: 10px;
  padding-right: 10px;
}
.top {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;
}
.one {
  width: 139px;
  display: inline-block;
}
.nav {
  padding-top: 10px;
  display: flex;
  text-align: left;
  padding-left: 30px;
}
.v-line {
  width: 1px;
  height: 10px;
  background-color: rgb(156, 163, 163);
  margin: auto 0;
  border: 0;
}
.h-line {
  display: inline-block;
  width: 94%;
  height: 2px;
  margin: auto 0;
  border: 0;
  padding: 0;
  background-color: #c10d0c;
  margin-bottom: 5px;
}
</style>