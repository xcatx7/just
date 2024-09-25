<template>
  <article class="s1">
    <!--  
    <img src="./s1/00.png" class="t0" alt="" /> 
    <img src="./s1/pc.jpg" class="t0" alt="" /> 
    <img src="./s1/leaf.webp" class="leaf" alt="" />
    <img src="./s1/box1.webp" class="box1" alt="" data-aos="fade-down"
      data-aos-delay="800"
      data-aos-duration="1600" />
    <img src="./s1/box2.webp" class="box2" alt="" data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="1600" />
    <img src="./s1/flower2.webp" class="flower2" alt=""
      data-aos="zoom-in"
      data-aos-delay="1000"
      data-aos-duration="1600" />
    <img src="./s1/building.webp" class="building" alt="" />
    -->
    <img src="./s1/01.png" class="img1 absolute" data-aos="fade" alt="img1" />
    <img src="./s1/02.webp" class="img2 absolute" data-aos="fade-left" alt="img2" />
    <img src="./s1/03.webp" class="img3 absolute" data-aos="fade-right" alt="img3" />
    <div class="txt">
    <img
      src="./s1/logo.svg"
      class="logo"
      alt=""
      data-aos="zoom-in"
      data-aos-delay="0"
      data-aos-duration="1600"
    />
    <img
      src="./s1/t1.svg"
      class="t1"
      alt=""
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1600"
    />
    <img
      src="./s1/t2.svg"
      class="t2"
      alt=""
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-duration="1600"
    />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply relative w-full h-screen bg-[#e37524];
  min-height: size(900);
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
  margin-bottom: size(50);
  // overflow: hidden;

  .t0{
    position: absolute;
    top: 0;left: 0;width: 100%;opacity: .3;pointer-events: none;z-index: 50;
  }
 // background-image: url("@/section/s1/bg1.jpg");
 // background-position: top center;
 // background-size: 100%;
 /*
.leaf{
    @apply absolute;top: 0;left: size(-15);width: size(690);
    transform: skewY(-3deg);transform-origin: 0 0;pointer-events: none;
  
    animation: an1 3s ease-in-out alternate infinite;}
.box1{
    @apply absolute;top:size(380);left:size(490);width: size(23);}
.box2{
    @apply absolute;top:size(300);right:size(580);width: size(23);}
.flower2{
    @apply absolute;bottom:size(100);right:size(455);pointer-events: none;width: size(290);}
    .building{
    @apply absolute;bottom:size(-55);right:size(-0);pointer-events: none;
    width: size(535);}
    */
  .img1{
    left:size(160);pointer-events: none;
    top: calc(50% + #{size(150-(1080 * 0.5))});
    width: size(1200);mix-blend-mode: multiply;}
  .img2{
    right:size(0);pointer-events: none;
    bottom: calc(30% + #{size(100-(1080 * 0.3))});
    width: size(800);}
  .img3{
    bottom:size(0);left:size(-50);pointer-events: none;
    width: size(1050);}
  .txt{
    @apply absolute z-10;
    display: flex;
  flex-direction: column;
    top: calc(50% + #{size(280-(1080 * 0.5))});
    text-align: center;
  }

  .logo {
    width: size(545);
    margin-bottom: 1em;
  }
  .t1 {
    width: size(450);
    margin: .3em auto 1.3em auto;
  }
  .t2 {
    width: size(450);
    margin: auto;
  }

  @keyframes an1 {
    to {
      transform: scale(1) ;
    }
  }
/*
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
    */
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
    margin-bottom: sizem(50);
    /*
.leaf{
    @apply absolute;top: 0;left: sizem(-15);width: sizem(250);
  
    animation: an1 3s ease-in-out alternate infinite;}
.box1{
    @apply absolute;top:sizem(180);left:sizem(40);width: sizem(13);}
.box2{
    @apply absolute;top:sizem(100);right:sizem(20);width: sizem(13);}
.flower2{
    @apply absolute;bottom:sizem(50);right:sizem(150);pointer-events: none;width: sizem(100);}
.building{
    @apply absolute;bottom:sizem(-55);right:size(-10);pointer-events: none;
    width: sizem(200);}
*/
.img1{
    left:sizem(-190);
    top: calc(50% + #{sizem(30-(494 * 0.5))});
    width: sizem(570);}
  .img2{
    right:sizem(0);
    bottom: calc(30% + #{sizem(42-(494 * 0.3))});
    width: sizem(250);}
  .img3{
    bottom:sizem(0);left:sizem(-40);pointer-events: none;
    width: sizem(270);}

    .txt{
    top: calc(50% + #{sizem(150-(604 * 0.5))});}
    .logo {
    width: sizem(330);
    }
  .t1 {
    width: sizem(275);
    margin: .3em auto 3em auto;
  }
  .t2 {
    width: sizem(230);
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
