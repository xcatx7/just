<template>
  <article class="s7" ref="s7">
    <div class="slider" data-aos="fade">
      <swiper  class="slide"
        :slidesPerView="'auto'"
        :pagination="{ clickable: true }"
        :navigation="false"
        :loop="true"
        :speed="2000"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide  class="slide-item" v-for="img in imgs">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </swiper-slide>
      </swiper>


    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s7 {
  @apply relative flex items-center justify-center text-[#633804];
  width: 100%;
  height:auto;
  padding:0em 0 5em 0;
  font-size:size(28);
  gap:1.5em;
  flex-wrap: wrap;
    flex-direction:column;
    .t{
    width: size(1440);}
.box{
  display: flex;
  gap:1.5em;
}
    .en{
    width: size(415);}



.slider {
    margin: 0 0 0 auto;
    
   // flex-basis: 100%;
    width: 100%;
      height: size(335);
.swiper {height: 100%;overflow: hidden;


      .swiper-slide {
          width: size(510);margin: 0 size(5);height: 100%;
  img{width: 100%;height: 100%;}
      }
  }
  }
  
  .swiper-button-prev,
  .swiper-button-next{
      position: absolute;
      top: 0;
      right: -2em;
      width:2em;
      height: sizem(257);
      display: flex;
      pointer-events: stroke;
      cursor: pointer;z-index: 3;
      
  justify-content: center;
  align-items:center;
    background:url("data:image/svg+xml,%3Csvg stroke='%23633804' stroke-width='5' stroke-linecap='round' width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
    background-size: 50% auto;
    transition:background-color .5s ;
    &:hover{
      //background-color: #0003;
    }
    }
    .swiper-button-prev{transform: scaleX(-1);
      left: -2em;
    }
    .swiper-pagination{
    bottom: 1em;transform: translateX(-100%);}
    .swiper-pagination-bullet{
        width: 1em;
        height: 1em;
          background:#B4B4B4;opacity: 1;

    }
    .swiper-pagination-bullet-active{background:#22491B;}

    
/*
  .slider {
    margin: 0;
    flex-basis: 100%;
    width: 100%;
      height: size(1009);
    .slide-item {
      @apply bg-cover;
    flex-basis:100%;
    width: 100%;
      height: size(1009);
      
    }
  }*/


}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s7 {
@apply flex-col;
  height: auto;
  padding:3em 0 2em;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;


.main {
  padding: 0 0;
  width: 100%;
  margin: 0 auto;
}

.txt {margin: 2.3em auto 0em;
  width: 77%;
}


.slider {
  width:sizem(900);
      height: sizem(257);
      overflow: auto;
.swiper {

  width:sizem(510);
      .swiper-slide {width: 100%; margin: 0 sizem(30);
  img{width: 100%;height: 100%;}
      }
  }
}
}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);

const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const imgs = [
  {
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s4/3.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s4/4.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s4/5.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s4/6.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s4/7.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s4/8.jpg", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s4/9.jpg", import.meta.url).href ,
    caption: ""
  },
]
</script>

