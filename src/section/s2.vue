<template>
  <article class="s2">
    <img src="./s1/flower1.png" class="flower1" alt=""
      data-aos="zoom-in"
      data-aos-delay="1200"
      data-aos-duration="1600" />
    <img src="./s1/flower2.png" class="flower2" alt=""
      data-aos="zoom-in"
      data-aos-delay="0"
      data-aos-duration="1600" />
    <div class="view">
      <fullview />
    </div>
    <div class="t">
      <h3 class="t1" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1300">五股豐收之境<br v-if="isMobile"> 都心熟成之地</h3>
      <h4 class="t2" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1300">市心珍藏 千坪美玉 成泰繁華 大隱森境
      </h4>
      <div class="t3" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1500"><span>五股精華市區</span>成泰路商圈機能豐美，水碓社區、德音生活圈，在地隱富聚落，因倚公園而享「小陽明山」美譽，為五股人文與景觀兼具的成熟美地。
        <div class="hr"></div>
        <span>新北交通樞紐</span>新北重量級動力軸線，車程約4分鐘上五股交流道；台64、65線縱橫大台北連接雙高，近距新莊副都心繁榮共享，桃園機場、松山機場約20分鐘可達。
      </div>
      <div class="b"><img src="./s2/t1.png" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1300"><img src="./s2/t2.png" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1300"><img src="./s2/t3.png" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1300"></div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  @apply relative w-full;
  height: calc(#{size(1440)} + #{size(-450)} + 28em);
  font-size: calc(13px + #{size(4)});
  z-index: 3;
  
.flower1{
    @apply absolute;top:size(-285);right:size(695);width: size(518);z-index: 21;pointer-events: none;}
    
.flower2{
    @apply absolute;top:size(15);right:size(-75);width: size(285);z-index: 21;pointer-events: none;}

  .t {
    @apply absolute z-30 text-white;
    top: size(220);
    width: 47.5em;
    left:0;
    right: 0;
    margin: 0 auto;
    .t1 {
      @apply text-center  font-['Noto_Serif_TC'];
      font-size: 2.2em;
      font-weight: 700;
      margin-bottom: .1em;
    }
    .t2 {
      @apply text-center  font-['Noto_Serif_TC'];
      font-size:1.4em;
      font-weight: 300;
      margin-bottom: 1em;
    }
    .t3 {
      @apply text-[#FFF];
      font-weight: 300;
      margin-bottom: size(50);
      text-align: justify;
      span{font-size: 1.3em; margin: -.2em .5em .5em 0;
      font-weight: 500; float: left;}
      .hr{width: 100%;height: 1px;background: #FFF;margin: .5em auto;}
    }
  }
  .b{
    display: flex;
    justify-content:space-between;
    img{
      width: 14.5em;
    }
  }

  .view {
    @apply w-full absolute bottom-0 left-0 right-0 z-20;
    width: size(1790);padding: calc(#{size(-450)} + 28em) 0 0 0 ;
    height:calc(#{size(1440)} + #{size(-450)} + 28em) ;margin: auto;
    border-radius: size(116);overflow: hidden;background: #0a4370;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s2 {
    height: sizem(1200 + 670);
        font-size: sizem(16);
  
   // background: #1b527a;
    &::after {
      @apply absolute w-full h-full z-10;
      content: "";
    //  background-image: url("@/section/s2/bgm.jpg");
      background-position: top;
      background-size: 100%;
      background-repeat: no-repeat;
    }
  
  .flower1{
    top:sizem(-80);right:sizem(160);width: sizem(200);}
      
  .flower2{
    top:sizem(15);right:sizem(-70);width: sizem(150);}


    .t {
      @apply absolute  ;
      top: sizem(100);
      width: sizem(320);
      .t1 {
        font-size: sizem(35);
        margin-bottom: sizem(10);
      }
      .t2 {
        font-size: sizem(17);
        font-weight: 400;
        width: 100%;
        margin-bottom: sizem(20);
      }
      .t3 {
        font-size: sizem(16);
        margin: sizem(20);
      width: auto auto sizem(280) auto;
      span{display: block; float: none;margin: 0;}
      .hr{margin: 1em auto;}
      }
    }
  .b{
flex-wrap: wrap;
    justify-content:center;gap: 1em;
    img{
      width: sizem(230);margin: 0 auto 0em;
    //  &:last-child{margin: -1.8em auto 0;}
    &:nth-child(1){
      margin: 0 0 -1em auto;
    }
    &:nth-child(2){
      margin: 0 auto -1em 0;
    }
    &:nth-child(3){
      margin: 0 0 0em auto;
    }
    }
  }

    .view {padding:sizem(670) 0 0 0 ;
    width: sizem(360);
      height: sizem(1200 + 670);
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
