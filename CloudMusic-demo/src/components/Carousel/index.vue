<script lang='ts' setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { reactive } from 'vue';

defineProps({
  imgWidth: {
    type: Number,
    required: true
  },
  imgHeight: {
    type: Number,
    required: true
  },
})

const imgUrl = (name: string) => new URL(name, import.meta.url).href
let imgList = reactive([
  { pic: imgUrl('./images/1.jpeg') },
  { pic: imgUrl('./images/2.jpeg') },
  { pic: imgUrl('./images/3.jpeg') }

])

</script>
<template>
  <div :style="{ width: imgWidth + 'px' }">
    <a-carousel arrows autoplay>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <div v-for="(img, index) in imgList" :key="index">
        <h3>
          <img :src="img.pic" :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }" />
        </h3>
      </div>
    </a-carousel>
  </div>
</template>
<style scoped>
h3 {
  margin: 0;
}
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  line-height: 0;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>