<template>
  <article class="s3">
    <img src="./s1/flower1.png" class="flower1" alt=""
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1600" />
    <img src="./s1/flower2.png" class="flower2" alt=""
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1600" />
    <img src="./s3/en.svg" class="en">
    <div class="view">
      <fullview />
    </div>
    <div class="t">
      <div class="t1 " >繁華映綠 文教馥域</div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @apply relative w-full z-0;
  height: size(930);
  font-size: size(15);
  .en{
    @apply absolute;
    top:size(30);
    right: size(120);
    width:size(500) ;
  }
.flower1{
    @apply absolute;top:size(-155);left: size(-265);width: size(585);z-index: 21;}
    
.flower2{
    @apply absolute;top:size(-75);left:size(305);width: size(285);z-index: 21;}

  .t {
    @apply absolute z-20 text-white;
    top: size(135);
    width: size(900);
    left:0;
    right: 0;
    margin: 0 auto;
    .t1 {
      @apply text-center  font-['Noto_Serif_TC'];
      font-size: size(44);
      font-weight: 700;
      color: #367E7C;
      margin-bottom: .1em;
    }
  }

  .view {
    @apply w-full absolute bottom-0 left-0 right-0 z-20;
    width: size(1280);
    height: size(750);margin: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    height: sizem(1920);
    background-image:linear-gradient(0deg, #093948 75%, rgba(15, 35, 81, 0) 100%);
  
   // background: #1b527a;
    &::after {
      @apply absolute w-full h-full z-10;
      content: "";
    //  background-image: url("@/section/s2/bgm.jpg");
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
import fullview from "@/components/fullview2.vue"
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
