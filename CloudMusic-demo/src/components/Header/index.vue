<template>
  <nav class="top-nav">
    <router-link class="logo">
      <img src="./images/cloud.png" />
    </router-link>
    <span class="function">
      <router-link>发现音乐</router-link>
    </span>
    <span class="function">
      <router-link>我的音乐</router-link>
    </span>
    <span class="function">
      <router-link>关注</router-link>
    </span>
    <span class="function">
      <router-link>商城</router-link>
    </span>
    <span class="function">
      <router-link>音乐人</router-link>
    </span>
    <span class="function">
      <router-link>下载客户端</router-link>
    </span>
    <a-input-search
      class="nav-input"
      v-model:value="value"
      placeholder="音乐/视频/电台/用户"
      style="width: 200px"
      @search="onSearch"
    />
    <a-button class="nav-button" type="primary">创作者中心</a-button>
    <a class="login">登录</a>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

//导航栏输入
const value = ref<string>('');
const onSearch = (searchValue: string) => {

};
</script>

<style scoped>
router-link {
  color: white;
}
.top-nav {
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #333;
  overflow: auto;
}
.top-nav * {
  flex-shrink: 0;
}
.function {
  display: flex;
  align-items: center;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
}
.function:hover {
  cursor: pointer;
  background-color: black;
}
.logo {
  margin-left: 14%;
}
.nav-input {
  margin-left: 50px;
}
.nav-button {
  margin-left: 20px;
}
.login {
  margin-left: 20px;
  color: rgb(104, 104, 109);
  cursor: pointer;
}
.login:hover {
  color: blue;
}
</style>
