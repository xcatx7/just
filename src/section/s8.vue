<template>
  <article class="s8">
    <img src="./s1/flower1.png" class="flower1" alt=""
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1600" />
    <img src="./s1/flower2.png" class="flower2" alt=""
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1600" />
    <div class="t">
      <div class="t1 " >精品風格 上質美學</div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  @apply relative w-full;
  height: size(1080);
  font-size: size(15);
  z-index: 3;
  background: #0003;
  
.flower1{
    @apply absolute;top:size(-285);right:size(695);width: size(518);z-index: 21;}
    
.flower2{
    @apply absolute;top:size(15);right:size(-75);width: size(285);z-index: 21;}

  .t {
    @apply absolute z-20 text-white;
    top: size(220);
    width: size(900);
    left:0;
    right: 0;
    margin: 0 auto;
    .t1 {
      @apply text-center  font-['Noto_Serif_TC'];
      font-size: size(44);
      font-weight: 700;
      margin-bottom: .1em;
    }
    .t2 {
      @apply text-center  font-['Noto_Serif_TC'];
      font-size: size(28);
      font-weight: 300;
      margin-bottom: size(23);
    }
    .t3 {
      @apply text-left text-[#FFF];
      font-size: size(12);
      font-weight: 300;
      span{font-size: 1.3em; margin: 0 .5em 0 0;}
    }
  }
  .b{
    display: flex;
    justify-content:space-between;
    img{
      width: size(226);
    }
  }

  .view {
    @apply w-full absolute bottom-0 left-0 right-0 z-20;
    width: size(1790);
    height: size(1415);margin: auto;
    border-radius: size(116);overflow: hidden;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s8 {
    height: sizem(1920);
    background-image:linear-gradient(0deg, #093948 75%, rgba(15, 35, 81, 0) 100%);
  
   // background: #1b527a;
    &::after {
      @apply absolute w-full h-full z-10;
      content: "";
    //  background-image: url("@/section/s8/bgm.jpg");
      background-position: top;
      background-size: 100%;
      background-repeat: no-repeat;
    }

    .splide {
      @apply absolute w-full z-20;
      height: sizem(190);
      top: sizem(500);
      .splide__slide {
        @apply relative cursor-pointer;
        background-size: contain;
        background-repeat: no-repeat;
        height: sizem(190);
        width: sizem(190);
        &:nth-child(1) {
          bottom: size(40);
        }
        &:nth-child(2) {
          bottom: size(10);
        }
        &:nth-child(3) {
          bottom: size(100);
        }
        &:nth-child(4) {
          bottom: size(40);
        }
        &:nth-child(6) {
          bottom: size(30);
        }
      }
    }
    .leaf-img {
      @apply absolute z-20;
      width: sizem(330);
      top: sizem(700);
      left: sizem(22.5);
    }
    .leaf-arrow {
      @apply absolute z-20;
      top: sizem(950);
      right: sizem(22.5);
    }
    .gor,.gol{
      @apply absolute z-20;
      top: sizem(500);
      right: 0;
      width:  sizem(100);height:  sizem(750);
    }
    .gol{
      left: 0;height:  sizem(200);
    }

    .t {
      @apply absolute z-20 text-white;
      top: sizem(100);
      width: sizem(300);
      left: sizem(37.5);
      .t1 {
        font-size: sizem(30);
        margin-bottom: sizem(20);
      }
      .t2 {
        font-size: sizem(14);
        font-weight: 400;
        width: 100%;
        margin-bottom: sizem(20);
      }
      .t3 {
        font-size: sizem(16);
        font-weight: 500;
      }
    }

    .view {
      height: sizem(900);
    }
  }
}
</style>

<script setup>
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const activeLeaf = ref(1)

const splide = ref()

const move = (idx1, idx2, dest) => {
  activeLeaf.value = idx2 + 1
}

const replaceBg = (isHover, event, index) => {
  const target = event.target
  const bgUrl = isHover
    ? target.getAttribute("data-bg2")
    : index == activeLeaf.value
    ? target.getAttribute("data-bg2")
    : target.getAttribute("data-bg")

  target.style.backgroundImage = `url(${bgUrl})`
}
</script>
