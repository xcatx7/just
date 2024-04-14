<template>
  <article class="s1">
    <!--  


    -->
    <img src="./s1/pc.jpg" class="t0" alt="" />  
    <img src="./s1/leaf.png" class="leaf" alt="" />
    <img src="./s1/box1.png" class="box1" alt="" />
    <img src="./s1/box2.png" class="box2" alt="" />
    <img src="./s1/flower2.png" class="flower2" alt=""
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1600" />
    <img src="./s1/building.png" class="building" alt="" />
    <div class="txt">
    <img
      src="./s1/logo.svg"
      class="logo"
      alt=""
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1600"
    />
    <img
      src="./s1/t1.svg"
      class="t1"
      alt=""
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1600"
    />
    <img
      src="./s1/t2.svg"
      class="t2"
      alt=""
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1600"
    />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply relative w-full h-screen;
  min-height: size(1080);
  max-height: size(1080);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: size(40);
  color: #fff;
  line-height: 1.3;
  font-weight: 700;
  // overflow: hidden;

  .t0{
    position: absolute;
    top: 0;left: 0;width: 100%;opacity: .3;pointer-events: none;z-index: 50;
  }
 // background-image: url("@/section/s1/bg1.jpg");
 // background-position: top center;
 // background-size: 100%;
.leaf{
    @apply absolute;top: 0;left: size(-15);width: size(690);
    transform: skewY(-3deg);transform-origin: 0 0;
  
    animation: an1 3s ease-in-out alternate infinite;}
.box1{
    @apply absolute;top:size(380);left:size(490);width: size(23);}
.box2{
    @apply absolute;top:size(300);right:size(580);width: size(23);}
.flower2{
    @apply absolute;bottom:size(100);right:size(455);width: size(290);}
.building{
    @apply absolute;bottom:size(-55);right:size(-0);
    width: size(535);}
  .bg {
    @apply absolute w-full z-0;
  }
  .txt{
    @apply absolute z-10;
    display: flex;
  flex-direction: column;
    top: calc(50% + #{size(320-(1080 * 0.5))});}

  .logo {
    width: size(545);
    margin-bottom: 1em;
  }
  .t1 {
    width: size(550);
    margin-bottom: .7em;
  }
  .t2 {
    width: size(555);
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
  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    font-size: sizem(14);
    background-size: 105%;
    background-image: url("@/section/s1/bgm.jpg");
    background-position: bottom;

    .logo {
      position: absolute;
      top: sizem(604);
      left: auto;
      right: auto;
      margin: auto;
      top: calc(50% + #{sizem(130-(604 * 0.5))});
      width: sizem(271);
    }

    .img1 {
      top: sizem(-30);
      left: sizem(-45);
      width: sizem(250);
    }
    .img2 {
      bottom: sizem(0);
      right: sizem(0);
      width: sizem(110);
    }
    .img3 {
      bottom: sizem(-100);
      right: sizem(-60);
      width: sizem(240);
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
