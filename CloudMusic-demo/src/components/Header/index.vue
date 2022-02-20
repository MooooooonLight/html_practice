<template>
  <nav class="top-nav">
    <router-link class="logo">
      <img src="./images/cloud.png" />
    </router-link>
    <span class="function">
      <span>
        <router-link class="middle">我的音乐</router-link>
      </span>
      <span>
        <router-link class="middle">发现音乐</router-link>
      </span>
      <span>
        <router-link class="middle">关注</router-link>
      </span>
      <span>
        <router-link class="middle">商城</router-link>
      </span>
      <span>
        <router-link class="middle">音乐人</router-link>
      </span>
      <span>
        <router-link class="middle">下载客户端</router-link>
      </span>
    </span>
  </nav>
  <a-input-search
    v-model:value="value"
    placeholder="input search text"
    style="width: 200px"
    @search="onSearch"
  />
</template>

<script lang="ts" setup>
const value = ""
const onSearch = function () { }
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');

    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    return {
      value,
      onSearch,
    };
  },
});
</script>
<style scoped>
router-link {
  color: white;
}
.top-nav {
  position: relative;
  height: 70px;
  background-color: #333;
  width: 100%;
}
.logo {
  display: inline-block;
  position: relative;
  right: 20%;
}
.function {
  display: inline-block;
  height: 70px;
  position: absolute;
  left: 35%;
}
.function span {
  display: inline-block;
  height: 70px;
}
.function span:hover {
  background-color: black;
}
.middle {
  top: 25px;
  position: relative;
  padding-left: 20px;
  margin-right: 20px;
}
.search {
  padding-left: 20px;
  margin-right: 20px;
  position: relative;
}
</style>