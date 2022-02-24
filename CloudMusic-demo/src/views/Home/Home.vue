<script lang='ts' setup>
import Carousel from '@/components/Carousel/Carousel.vue'
import Hot from './Hot/Hot.vue';
import New from './New/New.vue';
</script>
<template>
  <nav class="top-nav">
    <span>推荐</span>
    <span>排行榜</span>
    <span>歌单</span>
    <span>主播电台</span>
    <span>歌手</span>
    <span>新碟上架</span>
  </nav>
  <div>
    <div class="middle">
      <Carousel :img-height="280" :img-width="730" />
      <img src="@/assets/downLoad.png" />
    </div>
    <div>
      <Hot />
    </div>
  </div>
  <div></div>
  <New />
</template>
<style scoped>
* {
  flex-shrink: 0;
}
.top-nav {
  height: 30px;
  background-color: #c20c0c;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-nav * {
  flex-shrink: 0;
}
.top-nav span {
  height: auto;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #c20c0c;
  border-radius: 10px;
  cursor: pointer;
}
.top-nav span:hover {
  background-color: rgb(150, 144, 144);
  opacity: 0.8;
}
.middle {
  display: flex;
  justify-content: center;
}
</style>