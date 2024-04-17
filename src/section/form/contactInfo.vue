<template>


  <!-- Mobile contact info -->
  <div class="mo-contact-info">
    <a class="flex flex-col contact-item justify-center items-center" 
      @click="modalType = 'phone';go()" v-if="info.phone">
      <img src="@/section/form/phone.svg" alt="貴賓專線" srcset="" />
      <div>貴賓專線</div>
    </a>
    <div class="flex flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/pen.svg" alt="立即預約" srcset="" />
      <div>立即預約</div>
    </div>
    <!-- 
    <div class="flex flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'messenger'" v-if="info.fbMessage">
      <img src="@/section/form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
  -->
    <a class="flex flex-col contact-item justify-center items-center"
    :href="info.fbLink" target="_blank" v-if="info.fbLink">
      <img src="@/section/form/fb.svg" alt="粉絲專頁" srcset="" />
      <div>粉絲專頁</div>
    </a>
    <!-- 
    <div class="flex flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'"  v-if="info.address" >
      <img src="@/section/form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
  -->
    <a class="flex flex-col contact-item justify-center items-center"
     :href="info.line"  target="_blank" v-if="info.line" >
      <img src="@/section/form/line.svg" alt="Line" srcset="" />
      <div>LINE</div>
    </a>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
      <label for="contact-modal" class="modal-bg"></label>
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'messenger'" src="@/section/form/messenger.svg" alt="messenger" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/fb.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="gmap" srcset="" />
      <img class="h-12" v-else-if="modalType == 'line'" src="@/section/form/line.svg" alt="line" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{
       modalType == 'phone' ? '賞屋專線' :
       modalType == 'messenger' ? 'Facebook Messenger' :
       modalType == 'fb' ? 'Facebook 粉絲專頁' :
       modalType == 'line' ? 'LINE賞屋客服' :
       modalType == 'gmap' ? `${info.address2?info.address2:'導航地址'}` : 
       ''
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ 
      modalType == 'phone' ? info.phone : 
      modalType == 'messenger' ? '線上諮詢' : 
      modalType == 'fb' ? '' :
      modalType == 'line' ? '' :
      modalType == 'gmap' ? `${info.address}` : 
      ''
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" v-if="modalType != 'phone'" v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'messenger',
        'btfanpage': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btline': modalType == 'line',
        'btcontac': modalType == 'phone'
      }">
        {{ 
        modalType == 'phone' ? '撥打電話' : 
        modalType == 'messenger' ? '立即諮詢' : 
        modalType == 'fb' ? '前往粉絲專頁' :
        modalType == 'line' ? '加入' :
        modalType == 'gmap' ? '開啟導航' : 
        ''
        }}</div>
      <!-- btn phone -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'messenger',
        'btfanpage': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btline': modalType == 'line',
        'btcontac': modalType == 'phone'
      }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'messenger' ? '立即諮詢' : modalType == 'fb' ? '前往粉絲專頁' :
        '開啟導航'
        }}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
  .mo-contact-info {
    @apply  flex w-full;
    z-index: 80;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: size(63);
      font-size: size(21);
      background: linear-gradient(to bottom, #666 0%,#333 100%);
      justify-content:flex-end;
      padding-right: 1em;

    .contact-item {
      height: 100%;
      font-weight: 400;
      color: #fff;transition: .3s background;
      @media screen and (min-width:768px) {
      padding: .6em;
      &:nth-child(1),
      &:nth-child(2){
      padding: 1em;
      border-left: 1px solid #666;
      img {display: none;}
      &:hover{background: #0003;}
    }
      &:nth-child(3){
      border-left: 1px solid #666;
      padding: 1em 1em 1em 2em;}
      &:nth-child(3),
      &:nth-child(4){
      > div {display: none;}
      img {display: block;
      //  margin-bottom: sizem(5);
        max-width:1.3em;
        height: 1.3em;
        max-height: 1.3em;transition:.3s transform;
        filter: brightness(0) invert(1);
      }
      &:hover{
      img{transform: scale(1.2);}
      }
    }


    }
    }
  }
  .modal-bg{
  @apply absolute block;top: 0;left: 0;width: 100%;
  height: 100%;
}

@media screen and (max-width:768px) {
  .mo-contact-info {
    @apply justify-between w-full;
    top: auto;
    bottom: 0;
      background: #999;
    height: sizem(63);
    padding: 0;

    .contact-item {
      height: 100%;
      background: linear-gradient(to bottom, #333 0%,#666 100%);
      font-size: sizem(16);
      font-weight: 400;
      color: #fff;
      flex: 1;
      margin-left: 1px;

      img {display: block;
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(0) invert(1);
      }
      &:first-child{
      margin-left: 0px;}

    }
  }

}
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue";
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
    // setTimeout(() => {
    //   window.location.href = "phoneThanks";
    // }, 1000);
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);

  }
}

const open = () => {
  window.open(info.fbLink);
}


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>
