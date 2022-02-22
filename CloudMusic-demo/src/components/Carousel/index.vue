<script lang='ts'>
import Swiper from 'swiper'

import { defineComponent, onMounted, reactive } from 'vue'
import 'swiper/css/swiper.css';
export default defineComponent({
  name: "Carousel",
  setup() {
    onMounted(() => {
      var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        autoplay: true, // 开启自动切换
        loop: true, // 循环模式选项
        pagination: {
          el: '.swiper-pagination',
          // 点击小球也切换页面
          clickable: true
        },
        // 如果需要后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    })
    let imgs = reactive([
      { pic: './images/1.jpeg' },
      { pic: './images/2.jpeg' },
      { pic: './images/3.jpeg' }
    ]);
    const getImageUrl = (name: any) => {
      return new URL(name, import.meta.url).href
    }
    return {
      imgs,
      getImageUrl
    };
  },
})
</script>
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, i) in imgs" :key="i">
        <img :src="getImageUrl(item.pic)" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<style lang="less" >
.swiper-container {
  width: 30%;
  // height: 200px;
  border-radius: 10px;
  .swiper-slide {
    width: 100% !important;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>