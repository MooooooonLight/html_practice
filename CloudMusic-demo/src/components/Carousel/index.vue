<script lang='ts' setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>
<template>
  <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>...
  </swiper>
</template>
<style scoped>
</style>