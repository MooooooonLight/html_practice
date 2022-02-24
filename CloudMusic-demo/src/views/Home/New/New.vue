<template>
  <swiper
    :slides-per-view="1"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide>
      <img src="@/components/Carousel/images/1.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/components/Carousel/images/2.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/components/Carousel/images/3.jpeg" />
    </swiper-slide>...
  </swiper>
</template>
<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>