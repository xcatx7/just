<template>
  <article class="s1">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          interval: 4000,
          gap: 0,
          type: 'loop',
          pagination: false,
        }"
        @splide:move="onMoved"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="(item, i) in imgs"
        >
          <img :src="item.img" :alt="item.caption">
        </SplideSlide>
      </Splide>


  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  @apply relative w-full text-white flex items-center justify-center;
  height: auto;
  // background-image: url("@/section/s5/0.jpg");
  background-size: cover;
          font-size: size(16);
          margin-bottom: size(50);
      //   background: #fff;
     //  &::before{content: "";position: absolute;top: 0;left: 0;background: #fff;width: 100%;height: 100%;z-index: -1;}

    .slide { @apply relative;
      z-index: 10;
      width:100%;
      height: 100%;
      .slide-item {
        width: 100%;
       // background: #eee;
        background-size: cover;
        img{width: 100%;}
      }
    }


  
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    @apply  flex-col;
    //height: sizem(604);
   // gap: size(59);
   height: auto;
          font-size: sizem(16);
          margin-bottom: sizem(50);
}}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"

const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")

const splide = ref()
const imgs = [
  {
    img:globals.$isMobile()?new URL("../section/s1/2m.jpg", import.meta.url).href: new URL("../section/s1/2.jpg", import.meta.url).href,
    caption: "",
  },
  {
    img: globals.$isMobile()?new URL("../section/s1/1m.jpg", import.meta.url).href:new URL("../section/s1/1.jpg", import.meta.url).href,
    caption: "",
  },
]
</script>
