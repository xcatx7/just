<template>
  <article class="s7" ref="s7">
    <div class="slider" data-aos="fade">
      <swiper  class="slide"
        :slidesPerView="'auto'"
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


    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s7 {
  @apply relative flex items-center justify-center text-[#633804] bg-[#fff];
  width: 100%;
  height:auto;
  padding:0em 0 2em 0;
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
    margin: 0 0 0 size(60);
    
   // flex-basis: 100%;
    width: calc(100% - #{size(60)});overflow: hidden;
      height:auto;padding:0 0 3em;
      &::after{
        content: "";position: absolute;top: 0;left: 0;width:size(200);
      height: size(400);background: linear-gradient(to right, #FFF 0%,#fff0 100%);z-index: 2;
      }
.swiper {height: 100%;overflow: visible;


      .swiper-slide {
          width: size(510);margin: 0 size(5);height: 100%;
  img{width: 100%;height: 100%;}
      .caption{
				@apply font-['Noto_Serif_TC'];
				font-size: size(30);display: block;
        width: 100%;letter-spacing: .06em;
				font-weight: 600;
        color: #367E7C;text-align: right;margin:.3em auto 0;
      }
      }
  }
  }
  
  .swiper-button-prev,
  .swiper-button-next{
      position: absolute;
    bottom: -3em;
      right: calc(50% - 4.7em);
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
      left: calc(50% - 4.7em);
    }
    .swiper-pagination{
    bottom: -2.1em;}
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
  width:100%;
      height:auto;
      &::after{
      height: sizem(300);
      }
.swiper {

  width:100%;
      .swiper-slide {
  width:sizem(160);
      .caption{
				font-size: sizem(16);
      }
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
    img:new URL("./s7/1.jpg", import.meta.url).href ,
    caption: "四季森悅廊道"
  },
  {
    img:new URL("./s7/2.jpg", import.meta.url).href ,
    caption: "圓滿活動廣場"
  },
  {
    img:new URL("./s7/3.jpg", import.meta.url).href ,
    caption: "逸樂散步小徑  "
  },
  {
    img:new URL("./s7/4.jpg", import.meta.url).href ,
    caption: "頑童遊戲沙坑"
  },
  {
    img:new URL("./s7/5.jpg", import.meta.url).href ,
    caption: "光合體適能區"
  },     
]
</script>

