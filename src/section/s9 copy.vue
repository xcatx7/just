<template>
  <article class="s9">
    <div class="t">
      <div class="t1 " >合登建設 幸福建築推手</div>
      <div class="t2">合登建設系出合康建築團隊，從專業建築師的務實理性出發，以居住者角度思考，掌握當代生活趨勢，不論地點、社區規模，只為了完成每塊土地所賦予的使命，贏得每一位購屋者微笑的肯定！
      </div>
    </div>
    <div class="list flex">
    <img src="./s9/1.png" alt="" @click="s9open = true; modalType = 'type1'" >
    <img src="./s9/2.png" alt="" @click="s9open = true; modalType = 'type2'" >
    <img src="./s9/3.png" alt="" @click="s9open = true; modalType = 'type3'" >
    </div>


    
  <!-- Modal -->
  <input type="checkbox" v-model="s9open" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="s9-box relative flex items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
    <img src="./s9/t1.png" class="left" alt="" >
    <img src="./s9/1.jpg" class="right" alt="" >
    </div>
  </div>


  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  @apply relative w-full;
  height: size(1080);
  font-size: size(15);
  z-index: 3;
  
  .t {
    @apply z-20 text-white;
  //  top: size(125);
    width: size(660);
    left:0;
    right: 0;
    margin: 0 auto;
    .t1 {
      @apply text-center  font-['Noto_Serif_TC'];
      font-size: size(44);
      font-weight: 700;
      margin-bottom: .4em;
      color: #367E7C
    }
    .t2 {
      @apply text-center  ;
      font-size: size(12);
      font-weight: 500;
      color: #000;
    }
  }
  .list{
    justify-content:space-between;
    width:size(750);margin: auto;
    img{
      width: size(226);
      background-size: cover;
      &:nth-child(1){background-image: url("./s9/1.jpg");}
      &:nth-child(2){background-image: url("./s9/2.jpg");}
      &:nth-child(3){background-image: url("./s9/3.jpg");}
    }
  }
.s9-box{
width: size(760);background: #000;padding: 2em;
.left{width:size(457);}
.right{width:size(220);}
}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s9 {
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
const s9open = ref(false);
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
