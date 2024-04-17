<template>
  <article class="s4" ref="s4">
    <img src="./s4/tm.png" class="t" v-if="isMobile"  data-aos="fade-up">
    <img src="./s4/t.png" class="t" v-else  data-aos="fade-up">
    <div class="box">
    <img src="./s4/en.svg" class="en" v-if="!isMobile">
    <img src="./s4/enm.svg" class="en" v-else>
    <div class="slider" data-aos="fade">
      <swiper  class="slide"
        :slidesPerView=" isMobile ? '1':'auto' " 
        :spaceBetween="10"
        :pagination="{ clickable: true }"
        :navigation="true"
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
  <!--   <div class="arrows">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div> -->  


    </div>
</div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s4 {
  @apply relative flex items-center justify-center text-[#633804];
  width: 100%;
  height:auto;
  padding:2.7em 0 3em 0;
  font-size:size(28);
  gap:1.5em;
  flex-wrap: wrap;
    flex-direction:column;
    .t{
    width: size(1850);}
.box{
  display: flex;
  gap:.8em;width: 100%;
    align-items:flex-start;
}
// .arrows{position: absolute;left: size(-440);width: size(440);bottom: 0;}
    .en{
    width: size(415);margin:1.5em auto auto 4.8em;flex: 0;}



.slider {
    margin: 0 0 0 auto;padding:0;
   // overflow: hidden;
   // flex-basis: 100%;
    width: size(1330);
      height:auto;
.swiper {height: 100%;padding:0 0 1.8em;

      .swiper-slide {
          width: size(510);margin: 0;height: 100%;
  img{width: 100%;height: 100%;}
      }
  }
  }
  
  .swiper-button-prev,
  .swiper-button-next{
      position: absolute;
      bottom: -.5em;
      right: calc(50% - 6.5em);
      width:3em;
      height: 3em;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;z-index: 15;
  justify-content: center;
  align-items:center;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23367E7C' d='M12.5,25C19.4,25,25,19.4,25,12.5C25,5.6,19.4,0,12.5,0C5.6,0,0,5.6,0,12.5C0,19.4,5.6,25,12.5,25z'/%3E%3Cpath stroke='%23FFF' d='M8.5,20.4l10-8l-10-8'/%3E%3C/svg%3E") no-repeat center;
    background-size: 50% auto;
    transition:background-color .5s ;
    &:hover{
      //background-color: #0003;
    }
    }
    .swiper-button-prev{transform: scaleX(-1);
      left: calc(50% - 6.5em);
    }
    .swiper-pagination{
    bottom: .35em;}
    .swiper-pagination-bullet{
        width: .3em;
        height: .3em;
          background:#367d7b66;opacity: 1;


    }
    .swiper-pagination-bullet-active{background:#367E7C;}
    
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


.s4 {
@apply flex-col;
  height: auto;
  padding:3em 0 3em;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
    .t{
    width: sizem(360);margin-bottom: 2em;}
.box{
  display: flex;
  gap:0;width: 100%;
    align-items:flex-start;
    flex-wrap: wrap;
}
    .en{position: absolute;bottom:sizem(82);left:sizem(2);margin: 0;
    width: sizem(45);}


.slider {
  width:sizem(320);
      height: sizem(210);
      overflow: auto;
.swiper {

  width:sizem(320);
      .swiper-slide {width: 100%;
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

