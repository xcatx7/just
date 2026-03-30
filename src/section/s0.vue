<template>
  <article class="s0">
    <div class="slider-wrapper">

      <!-- 輪播 -->
      <Splide ref="splide" class="slide" :options="{
        arrows: true,
        autoplay: true,
        interval: 4000,
        gap: 0,
        type: 'loop',
        pagination: true,
       // height: '100vh',
      }">
        <SplideSlide class="slide-item" v-for="(item, i) in imgs" :key="i">
          <img :src="item.img" :alt="item.caption" />
        </SplideSlide>
      </Splide>

      <!-- 👉 右側文字 overlay -->
      <div class="content-overlay">
        <div class="text-box">
          <h1>新會館、新夢想，<br>我們又見面了</h1>

          <p class="p-gap">
            感謝您的耐心等待<br>
            為了延續服務 用心款待
          </p>

          <p>
            全新接待會館<br>
            即日正式對外開放。
          </p>

          <div class="divider"></div>

          <p class="p-gap">
            邀請<br>
            舊雨新知 再來聚聚
          </p>

          <p>
            全新精裝實品屋登場<br>
            歡迎鑑賞 圓夢啟程
          </p>
        </div>
      </div>

    </div>
  </article>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";

.s0 {
  @apply relative w-full text-white flex items-center justify-center;
  height: auto;
  background-size: cover;
  font-size: size(16);
  margin-top: size(62);
        @media (max-width: 767px) {
  font-size: sizem(16);
  margin-top: 0;
    align-items: flex-start;
  // height: sizem(604);

        }
.slider-wrapper{
    width: 100%;
    height: 100%;
        @media (max-width: 767px) {
          height:auto;aspect-ratio: 10 / 7;
        }}
  .slide {
    @apply relative;
   // z-index: 10;
    width: 100%;
    height: 100%;
  //  aspect-ratio: 1920/1080;

    .slide-item {
      width: 100%;
      // background: #eee;
      background-size: cover;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
        @media (max-width: 767px) {
          .splide__list,
          .splide__track,
          .splide__slide,
          .slide-item img{height: 100%;}
        }

    .splide__arrows,
    .splide__pagination{
      position: absolute;
    }
    .splide__arrows{z-index:15;top: 50%;width: 100%;display: flex;justify-content: space-between;pointer-events: auto;
      align-items: center;
      padding: 0 size(25);
      svg{display: none;}
    
        .splide__arrow--prev, .splide__arrow--next {
          display: flex;align-items: center;justify-content: center;
            width:  size(40);
            aspect-ratio: 1/1;
            opacity: 0.75;
            transition: .2s opacity;
        &::before {
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 20 20'%3E%3Cpath d='M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10,4.5,0,10,0s10,4.5,10,10ZM9.2,16.4l6-6c.2-.2.2-.5,0-.7l-6-6c-.2-.2-.5-.2-.7,0l-1.6,1.6c-.2.2-.2.5,0,.7l4.1,4.1-4.1,4.1c-.2.2-.2.5,0,.7l1.6,1.6c.2.2.5.2.7,0Z' fill='%23fff'/%3E%3C/svg%3E");
            display: block;
            width: 50%;
        }
        &:hover {
            opacity: 1;
        }}
        .splide__arrow--prev { transform: scaleX(-1);}
        
        @media (max-width: 767px) {
          
      padding: 0 sizem(20);
        .splide__arrow--prev, .splide__arrow--next {
           width:  sizem(35);
        }
        }
    }
    .splide__pagination{
      z-index: 15;
      bottom: size(25);
      display: flex;justify-content: center;gap: size(20);
      pointer-events: auto;
      left: 0;right: 0;margin: auto;
      .splide__pagination__page{
        width: size(10);
        aspect-ratio: 1/1;
        background: #fff;border-radius: 50%;
            opacity: 0.5;
          &.is-active{
            opacity: 1;}
          }
          
        @media (max-width: 767px) {
          display: none;
        }

    }
  }

  .content-overlay {
    position: absolute;
    top: 0;
    right: 0;    /* 靠右定位 */
    width: auto;    /* 寬度根據內容決定 */
    height: 100%;
    z-index: 10;
    display: flex;
    align-items: center;    /* 垂直置中 */
    pointer-events: none;    /* 讓滑鼠事件穿透 */
    background: rgba(0, 0, 0, 0.6); /* 半透明黑色背景 (0.6 是透明度) */
        @media (max-width: 767px) {
        position: relative;
          top: auto;
          bottom: 0;
                right: auto;
                left: 0;
                width: 100%;
                align-items: flex-end; /* 靠下對齊 */
                background: rgba(0, 0, 0, 0.7); /* 加深背景 */
    height: auto;

        }
    .text-box {
            color: #fff;
            padding: 0 size(80); /* 內距，調整文字與背景邊緣的距離 */
            text-align: left; /* 文字靠左對齊 */
           // pointer-events: auto; /* 恢復此區塊的滑鼠事件，避免無法點擊或選取 */
            box-sizing: border-box;
            max-width: size(600); /* 限制最大寬度，避免文字過長 */
           // height: 100%;
           
        @media (max-width: 991px) {
                padding: 0 size(50);
                max-width: 80%;}
        @media (max-width: 767px) {
                width: 100%;
                max-width: 100%;
                padding:sizem(30) sizem(20);
                text-align: center; /* 文字置中 */

        }
        }
        /* 文字排版詳細設定 */
        h1 {
            font-size: 2em;
            margin-top: 0;
            margin-bottom: size(25);
            letter-spacing: 0.05em;
            line-height: 1.4;
            font-weight: bold;
        @media (max-width: 991px) {
                font-size: 1.6em;
        }
        @media (max-width: 767px) {
        font-size: 1.3em;
        margin-bottom: .8em;
        }
        }

        p {
            font-size: 1.1em;
            line-height: 1.9;
            margin: 0;
            letter-spacing: 0.05em;
        @media (max-width: 767px) {
                font-size: 0.95em;
                line-height: 1.7;

        }
        }

        /* 分隔線 */
        .divider {
            width: size(60);
            height: 2px;
            background: rgba(255, 255, 255, 0.7);
            margin: size(35) 0;
        @media (max-width: 767px) {
            width: sizem(60);
          margin:  sizem(20) auto;
        }
        }

        /* 段落間距 */
        .p-gap {
            margin-bottom: 1.25em !important;
        }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"

const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")

const splide = ref()
const imgs = [
  /* {
     img:globals.$isMobile()?new URL("../section/s1/3m.jpg", import.meta.url).href: new URL("../section/s1/3.jpg", import.meta.url).href,
     caption: "",
   }, */
  {
    img: new URL("../section/s0/1.jpg", import.meta.url).href,
    caption: "",
  },
  {
    img: new URL("../section/s0/2.jpg", import.meta.url).href,
    caption: "",
  },
  {
    img: new URL("../section/s0/3.jpg", import.meta.url).href,
    caption: "",
  },
  {
    img: new URL("../section/s0/4.jpg", import.meta.url).href,
    caption: "",
  },
  {
    img: new URL("../section/s0/5.jpg", import.meta.url).href,
    caption: "",
  },
]
</script>
