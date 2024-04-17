<template>
  <article class="s3">
    <img src="./s1/flower1.png" class="flower1" alt=""
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-duration="1600" />
    <img src="./s1/flower2.png" class="flower2" alt=""
      data-aos="zoom-in"
      data-aos-delay="600"
      data-aos-duration="1600" />
    <img src="./s3/en.svg" class="en">
    <div class="view">
      <fullview />
    </div>
    <div class="t">
      <div class="t1 "
      data-aos="zoom-in"
      data-aos-delay="0"
      data-aos-duration="1300" >繁華映綠 文教馥域</div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @apply relative w-full z-0;
  height: size(1150);
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
      font-size: size(60);
      font-weight: 700;
      color: #367E7C;
      margin-bottom: .1em;
    }
  }

  .view {
    @apply w-full absolute bottom-0 left-0 right-0 z-20;
    width: size(1600);
    height: size(939);margin: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    height: sizem(1050);
  .en{
    top:sizem(10);
    right: sizem(10);
    width:sizem(200) ;
  }
.flower1{
  top:sizem(-70);left: sizem(-80);width: sizem(190);}
    
.flower2{
  top:sizem(-70);left:sizem(70);width: sizem(110);}


    .t {
      @apply absolute z-20 text-white;
      top: sizem(90);
      width: sizem(310);
      .t1 {
        font-size: sizem(35);
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
    width: sizem(350);
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
