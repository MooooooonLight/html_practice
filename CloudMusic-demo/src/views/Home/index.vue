<script lang='ts' setup>
import Carousel from '../../components/Carousel/index.vue'
</script>
<template>
  <nav class="top-nav1"></nav>
  <nav class="top-nav2">
    <span>推荐</span>
    <span>排行榜</span>
    <span>歌单</span>
    <span>主播电台</span>
    <span>歌手</span>
    <span>新碟上架</span>
  </nav>
  <div>
    <Carousel />
  </div>
</template>
<style scoped>
.top-nav1 {
  height: 5px;
  background-color: #c20c0c;
}
.top-nav2 {
  height: 30px;
  background-color: #c20c0c;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-nav2 * {
  flex-shrink: 0;
}
.top-nav2 span {
  height: auto;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #c20c0c;
  border-radius: 10px;
  cursor: pointer;
}
.top-nav2 span:hover {
  background-color: rgb(150, 144, 144);
  opacity: 0.8;
}
</style>