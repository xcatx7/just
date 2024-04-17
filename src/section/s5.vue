<template>
  <article class="s5">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: false,
          interval: 4000,
          gap: 10,
          type: 'loop',
          pagination: false,
          arrowPath: `M17.4591 31.1385C17.9961 31.6755 18.8667 31.6755 19.4037 31.1385C19.9406 30.6015 19.9406 29.7309 19.4037 29.1939L10.3223 20.1126L19.4037 11.0312C19.9406 10.4943 19.9406 9.62368 19.4037 9.0867C18.8667 8.54973 17.9961 8.54973 17.4591 9.0867L7.40551 19.1403C6.86854 19.6773 6.86854 20.5479 7.40551 21.0849L17.4591 31.1385Z`,
        }"
        @splide:move="onMoved"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="(item, i) in imgs"
        >
          <img :src="item.img" :alt="item.caption">
          <a :href="item.link" target=" _blank" class="vr"><b>{{ item.caption }}</b>樣品屋<span><img src="./s5/a.svg" alt="" srcset="" />請點擊VR實境看房</span>
    
          </a>
        </SplideSlide>
      </Splide>

    <div class="slide-box">
      <div class="me">
      <span class="m1"       
      :class="{ active: currentIndex == 0||currentIndex == 1}"
            :key="i"
            @click="splide.go(0)">2房</span>
      <span class="m2" 
      :class="{ active: currentIndex == 2||currentIndex == 3}"
            @click="splide.go(2)">3房</span>
          </div>
          <div class="list type1" v-if="currentIndex == 0||currentIndex == 1">
          <h3>現代2房，舒適生活</h3>
          <img src="./s5/1.png" class="img" alt="" srcset=""  v-if="currentIndex == 0"   />
          <img src="./s5/2.png" class="img" alt="" srcset="" v-if="currentIndex == 1"  />
          <div class="bottom_me">
          <h4 
      :class="{ active: currentIndex == 0}" @click="splide.go(0)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 27"><polyline points=".5 .5 40.5 25.5 80.5 .5"/></svg>
            <span>B2</span>/25.73坪</h4>
          <h4 
      :class="{ active: currentIndex == 1}" @click="splide.go(1)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 27"><polyline points=".5 .5 40.5 25.5 80.5 .5"/></svg><span>C4</span>/26.51坪</h4></div>
          <img src="./s5/b1.webp" class="bottom" alt="" srcset="" />
        </div>
          <div class="list type2" v-if="currentIndex == 2||currentIndex == 3" >
          <h3>寬敞3房，溫馨空間</h3>
          <img src="./s5/3.png" class="img" alt="" srcset="" v-if="currentIndex == 2" />
          <img src="./s5/4.png" class="img" alt="" srcset="" v-if="currentIndex == 3" />
          <div class="bottom_me">
          <h4 
      :class="{ active: currentIndex == 2}" @click="splide.go(2)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 27"><polyline points=".5 .5 40.5 25.5 80.5 .5"/></svg><span>B2</span>/33.37坪</h4>
          <h4 
      :class="{ active: currentIndex == 3}" @click="splide.go(3)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 27"><polyline points=".5 .5 40.5 25.5 80.5 .5"/></svg><span>C4</span>/35.71坪</h4></div>
          <img src="./s5/b2.webp" class="bottom" alt="" srcset="" />
        </div>
    </div>


  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  @apply relative w-full z-30 text-white flex items-center justify-center;
  height: size(900);
  // background-image: url("@/section/s5/0.jpg");
  background-size: cover;
          font-size: size(15);

    .slide {
      width: size(1280);
      height: size(900);
      .slide-item {
        width: 100%;
       // background: #eee;
        background-size: cover;
        img{width: 100%;}
        .vr {
          @apply absolute flex items-center justify-center font-['Noto_Serif_TC'];
          left: 0;
          top: 0;
          width: 100%;height: 100%;
          background: #0009;
          color: #fff;
          font-size: size(45);
          font-weight: 700;
          b{font-size: 1.2em;vertical-align: bottom;
          font-weight: 700;}
          img{height: 1em;width: 1em;vertical-align: middle;margin: 0 0.2em 0.2em .7em;}
          span{color: #E95513;
          font-size: size(24);}
        }
      }
    }


  .slide-box {
    @apply relative flex flex-col items-start font-['Noto_Serif_TC'];
   // gap: size(59);
    flex: 1;
    margin-top: size(86);
    color: #FFF;
    .me{
          font-size: size(27);
      margin: auto;
    .m1,.m2{
          font-weight: 700;
background: url("./s5/m1.webp");
background-size: cover;width: 7.5em;display: inline-block;text-align: center;
cursor: pointer;
    }
.m2{margin-left: .3em;
background-image: url("./s5/m2.webp");}
.m1,.m2{
  transition: opacity .2s;
  opacity: .5;
  &.active{
  opacity: 1;}
}
    }
.list{
    @apply relative flex flex-col ;
    margin: auto;

.bottom{
    @apply relative;
    left: 4em;
    height: size(12);
}
&.type2{
    h4.active{
      color:#FBB03B;
    }
    }
h3{color: #000;font-size: size(40);margin: .3em auto .3em auto;width: size(410);font-weight: 700;}
.img{width: size(380);margin: auto auto .4em auto;}
    
    .bottom_me{
    @apply relative flex;
    margin: auto;
      width: size(380);
      gap: 2em;
      font-size:  size(22);
    align-items:flex-end;
    }
h4{color: #888;
  cursor: pointer;
  svg{stroke:currentColor;fill:none;width: size(80);margin: auto;opacity: 0;transition: opacity .5s;}
      span{font-size:1.5em;}
    &.active{
      color:#367e7c;
      svg{opacity: 1;}
    }
    }
    .type2{
    h4.active{
      color:#FBB03B;
    }
    }}
}
  
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s5 {
    @apply  flex-col;
   // gap: size(59);
   height: sizem(700);
          font-size: sizem(16);
    .slide {
      width: 100%;
      height: sizem(240);
      .slide-item {
        .vr {
          font-size: sizem(20);
          span{
          font-size: sizem(12);}
        }}}

    .slide-box {
      gap: sizem(0);
      margin-top: sizem(50);

      .me{
          font-size: sizem(18);
    }
    .list{
      
h3{font-size: sizem(25);width: sizem(270);}
.img{width: sizem(300);margin: auto auto .4em auto;}

.bottom{
    height: sizem(9);
}

.bottom_me{
      width: sizem(280);
      font-size:  sizem(18);
    }

    }
  }

}}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"

const s5open = ref(false);
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const currentIndex = ref(0)

const onMoved = (newIdx, prevIdx, destIdx) => {
  currentIndex.value = prevIdx
}
const splide = ref()
const s5index = ref(0)
const imgs = [
  {
    img: new URL("../section/s5/1.webp", import.meta.url).href,
    caption: "B2",
    link:'https://yun.kujiale.com/design/3FO3OSS0JJYJ/airoaming'
  },
  {
    img: new URL("../section/s5/2.webp", import.meta.url).href,
    caption: "C4",
    link:'https://yun.kujiale.com/design/3FO3OTKP1CLL/airoaming'
  },
  {
    img: new URL("../section/s5/3.webp", import.meta.url).href,
    caption: "B4",
    link:'https://yun.kujiale.com/design/3FO3OU5TTJ96/airoaming'
  },
  {
    img: new URL("../section/s5/4.webp", import.meta.url).href,
    caption: "C1",
    link:'https://yun.kujiale.com/design/3FO3OSE4054I/airoaming'
  },
]
</script>
