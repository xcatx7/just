<template>
  <article class="s10">
    <!--  


    -->
    <div class="box2">
    <img src="./s1/box2.png" alt=""
      data-aos="fade"
      data-aos-delay="0"
      data-aos-duration="1600" /></div>
    <img src="./s1/flower1.webp" class="flower1" alt=""
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-duration="1600" />
    <img src="./s1/flower2.webp" class="flower2" alt=""
      data-aos="zoom-in"
      data-aos-delay="600"
      data-aos-duration="1600" />
    <img src="./s1/flower2.webp" class="flower3" alt=""
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1600" />
    <img src="./s1/building.webp" class="building" alt="" />
    <div class="txt">
    <img
      src="./s1/logo.svg"
      class="logo"
      alt=""
      data-aos="zoom-in"
      data-aos-delay="0"
      data-aos-duration="1600"
    />
    <div class="t1"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1600">｜千坪美玉｜景觀2-3房｜</div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s10 {
  @apply relative w-full h-screen;
  position: relative;
  height: size(605);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: size(40);
  color: #fff;
  line-height: 1.3;
  font-weight: 700;
.box2{
    @apply absolute;top:size(90);left:size(900);
  img{transform: rotate(90deg);transform-origin: 0 0;width: size(23);}
  }
.flower1{
    @apply absolute;top:size(-90);left:size(-185);pointer-events: none;width: size(575);z-index: 2;}
.flower2{
    @apply absolute;top:size(-90);left:size(380);pointer-events: none;width: size(220);z-index: 2;}
.flower3{
    @apply absolute;bottom:size(-60);right:size(340);pointer-events: none;width: size(220);}
.building{
    @apply absolute;bottom:size(-60);right:size(-0);pointer-events: none;
    width: size(410);}
  .bg {
    @apply absolute w-full z-0;
  }
  .txt{
    @apply absolute z-10;
    display: flex;
  flex-direction: column;
    top: size(240);}

  .logo {
    width: size(522);
    margin: auto auto .5em auto;
  }
  .t1 {
      @apply text-center  font-['Noto_Serif_TC'] text-[#000];
    width: size(600);
    margin: auto auto 0 auto;
      font-size: size(50);
  }

  @keyframes an1 {
    to {
      transform: scale(1);
    }
  }

  .img1 {
    @apply z-10;
    position: absolute;
    top: size(-85);
    left: size(-10);
    width: size(521);
    transform: skewX(-10deg);
    transform-origin: 0 0;
    animation: an1 7s ease-in-out alternate infinite;
  }
  .img2 {
    @apply z-10;
    position: absolute;
    bottom: size(230);
    right: size(0);
    width: size(388);
  }
  .img3 {
    @apply z-10;
    position: absolute;
    bottom: size(-100);
    right: size(-134);
    width: size(737);
    transform: skewY(3deg);
    transform-origin: 100% 10%;
    animation: an1 3s ease-in-out alternate infinite;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s10 {
    height: sizem(380);
    font-size: sizem(14);
.box2{
  top:sizem(80);left:sizem(270);
  img{width: sizem(10);}
  }
.flower1{
  top:sizem(-100);left:sizem(-120);width: sizem(260);}
.flower2{
  top:sizem(-30);left:sizem(120);width: sizem(100);}
.flower3{
  bottom:sizem(-70);right:sizem(120);width: sizem(160);}
.building{
  bottom:sizem(-60);right:sizem(-0);
    width: sizem(160);}

  .txt{;
    top: sizem(130);}
    .logo {
    width: sizem(240);
    margin: auto auto 1em auto;
    }
  .t1 {
    width: 100%;
      font-size: sizem(20);
  }

  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
