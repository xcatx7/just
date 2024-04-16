<template>
  <article class="s8">
    <div class="t">
      <div class="t1">精品風格 上質美學</div>
    <img src="./s8/logosm.png" alt="" class="logos" v-if="isMobile">
    <img src="./s8/logos.png" alt="" class="logos" v-else>
    <img src="./s8/en.svg" alt="" class="en">
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  @apply relative w-full;
  height: size(990);
  font-size: size(15);
  z-index: 3;
  //background: #0003;
  .bg{
    @apply absolute;
    top: 0;left: 0;width: 100%;

  }

  
  .t {
    @apply absolute z-20 text-white;
    top: size(155);
    width: size(1597);
    left:0;
    right: 0;
    margin: 0 auto;
    .t1 {
      @apply text-center  font-['Noto_Serif_TC'];
      font-size: size(44);
      font-weight: 700;
      margin-bottom: 1.2em;
    }
    .logos {
    width: size(1590);
    margin: 0 auto 3.6em;display: block;
    }
    .en {
    width: size(385);
    margin: 0 auto;display: block;

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
    height: sizem(470);
  
    .bg{
    @apply absolute;
    top: 0;left: -50%;width: 260%;

  }


    .t {
      @apply absolute z-20 text-white;
      top: sizem(50);
      width: 100%;
      .t1 {
        font-size: sizem(30);
        margin-bottom: sizem(20);
      }
    .logos {
    width: sizem(350);
    }
    .en {
    width: sizem(100);

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
