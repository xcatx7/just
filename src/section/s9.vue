<template>
  <article class="s9">
    <div class="t">
      <div class="t1 " >合登建設 幸福建築推手</div>
      <div class="t2">合登建設系出合康建築團隊，從專業建築師的務實理性出發，以居住者角度思考，掌握當代生活趨勢，不論地點、社區規模，只為了完成每塊土地所賦予的使命，贏得每一位購屋者微笑的肯定！
      </div>
    </div>
    <div class="list flex">
      <span @click="s9open = true; s9type = 'type1'" ><img src="./s9/1.png" alt=""></span>
      <span @click="s9open = true; s9type = 'type2'" ><img src="./s9/2.png" alt=""></span>
      <span @click="s9open = true; s9type = 'type3'" ><img src="./s9/3.png" alt=""></span>
    </div>
    <img src="./s9/en.svg" alt="" class="en">


    
  <!-- Modal -->
  <input type="checkbox" v-model="s9open" id="contact-modal" class="modal-toggle" />
  <div class="modal boxbg">
      <label for="contact-modal" class="mbg"></label>
    <div class="s9-box ">
      <label for="contact-modal" class="btn absolute">✕</label>
      <div v-if="s9type == 'type1'">
    <img src="./s9/t1.png" class="left" alt="" >
    <img src="./s9/1.jpg" class="right" alt="" >
    </div>
      <div v-if="s9type == 'type2'">
    <img src="./s9/t2.png" class="left" alt="" >
    <img src="./s9/2.jpg" class="right" alt="" >
    </div>
      <div v-if="s9type == 'type3'">
    <img src="./s9/t3.png" class="left" alt="" >
    <img src="./s9/3.jpg" class="right" alt="" >
    </div>
    </div>
  </div>


  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  @apply relative w-full;
  font-size: size(15);
  z-index: 3;
  padding: 8.1em 0;
  overflow: hidden;
  .btn{right: -1em;top: -1em;border-radius: 50%;background: #367E7C;border: 0;width: 2em;height: 2em;line-height: 1;min-height: 1em;padding: 0;font-size: 1.2em;}
    .en {
    width: size(927);
    margin: 0 auto;display: block;

    }
  
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
      font-weight: 400;
      color: #000;
      margin-bottom:5em;
    }
  }
  .list{
    justify-content:space-between;
    width:size(730);margin: auto auto 4em;
    img{
      width: 100%;opacity: .5;
      background-size: cover;transition: opacity .5s;
    }
    span{background: #000;
      width: size(210);
      &:nth-child(1) img{background-image: url("./s9/1.jpg");}
      &:nth-child(2) img{background-image: url("./s9/2.jpg");}
      &:nth-child(3) img{background-image: url("./s9/3.jpg");}
      &:hover img{opacity:1;}
    
    }
  }
  .boxbg{
  @apply absolute  flex items-center justify-center ;
  background: #0003;top: 0;left: 0;width: 100%;
  height: 100%;
}
  .mbg{
  @apply absolute block;top: 0;left: 0;width: 100%;
  height: 100%;
}
.s9-box{
  @apply relative ;
  top: 1em;
width: size(760);background: #000;padding: 2em;
> div{
  @apply relative flex items-center justify-center; gap: 2em;

}
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
  font-size: sizem(14);
  padding:2em 0;

    .en {
    width: sizem(180);
    margin: 0 auto 3em auto;

    }
  

    .t {
      top: sizem(0);
      width: sizem(310);
      .t1 {
        font-size: sizem(30);
      }
      .t2 {
        font-size: sizem(14);
      margin-bottom:3em;
      }
    }
  .list{
    width:sizem(340);margin: auto auto 3em;
    span{
      width: sizem(110);
    }
  }
.s9-box{
  top: 5em;
width: sizem(340);
> div{
  @apply relative flex items-center justify-center; gap: 2em;

}
.left{width:sizem(300);}
.right{display: none;}
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
