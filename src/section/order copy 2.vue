<template>
  <div id="order" class="relative text-center">
    <div class="order">
    <div class="order-section">
      <!-- Title -->
      <div class="order-title text-center relative z-10">
        {{ info.order.title }}
      </div>
      <form id="myform" class="form mx-auto relative flex justify-center justify-between items-center z-10" action="wsform.php" role="form" method="post">
        <div class="row2">
          <div class="row1">
            <label class="row">
              <input type="text" id="name" name="name" class="name input w-full rounded-none" placeholder="請輸入姓名">
            </label>
            <div class="sex">
              <label>
                <input  type="radio" name="sex" value="male">先生
              </label>
              <label>
                <input  type="radio" name="sex" value="female">女士
              </label>
            </div>
          </div>
          <label class="row">
            <input type="phone" id="phone" name="phone" class="phone input w-full rounded-none" placeholder="請輸入手機號碼">
          </label>
        </div>
        <label class="row">
          <input type="text" id="email" name="email" class="email input w-full rounded-none" placeholder="請輸入電子郵件">
        </label>
        <label class="row">
          <select id="ctime" name="ctime" class="ctime select w-full rounded-none">
            <option>方便聯絡時間</option>
            <option>上午 08:00~12:00</option>
            <option>中午 12:00~13:00</option>
            <option>下午 13:00~18:00</option>
          </select>
        </label>
      <!-- Policy -->
      <div class="flex gap-2 control flex-col relative z-10">
        <p class="text-[#fff]">
        <input
          type="checkbox" id="checkbox_form"
          class="bg-white rounded-md"
        />
          本人知悉並同意<label
            for="policy-modal"
            class="modal-button text-[#ff0] cursor-pointer hover:opacity-70"
            >「個資告知事項聲明」</label
          >內容
        </p>
        <p class="text-[#fff] text-left">
        您所登錄的個人資料將作為以下用途<br>
(一)本網站所載之相關事項通知<br>
(二)客戶管理與服務<br>
(三)本公司行銷業務之推廣</p>
      </div>
      
      <button class="reg_btn_disabled send mt-2 mx-auto hover:scale-90" id="send_btn" type="button">送出表單</button>
      <!-- Send
      <div
        class="send mt-2 mx-auto hover:scale-90 btn cursor-pointer relative z-10"
        @click="send()"
      >
        {{ sending ? "發送中.." : "即刻預約" }}
      </div> -->
    </form>

    </div>


    <!-- HouseInfo -->
    <HouseInfo /></div>
    <!-- Map -->
    <Map v-if="info.address" />
    
    <Policy />
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#1D3736] text-[#FFF]">
        合登建設 成泰美copyright
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order-section {
  position: relative;
  // padding-top: size(280);
  overflow: hidden;width: size(853);
  background:#117568;z-index: 22;
  border-radius: size(150) 0 0 size(150);padding: 2em 2em 2em 0;
}

.order {
  position: relative;
  width: 100%;
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction:row-reverse;
    font-size: size(23);
  
  
.input,.select {font-size: 1em;}
.formimg{width: size(590);}
  .order-title {
      @apply absolute font-['Noto_Serif_TC'];
    top: 0;right: 0;height: 100%;width: 1.9em;
    background:#4D4D4D ;
    font-size: size(36);
    font-weight: 700;padding: 3em 0;
    color: #fff;
   // padding-top: 4em;
  }

  .order-title-img {
    width: size(557);
    margin-bottom: size(0);
  }
  .order-subTitle {
    font-size: size(17);
    color: #fff;
    padding-top: 0.8em;
    letter-spacing: 0em;
    font-weight: 500;
  }
  .cus-divider {
    margin: 0 auto;
    width: size(300);
    height: size(2);
    margin-bottom: size(50);
    background-color: #055f76;
  }

  .form {
    width:85%;
   //min-width: 680px;
    //  height: 350px;
    gap: size(20);
    margin-top: size(45);
    margin-bottom: size(50);
    z-index: 50;
    flex-wrap: wrap;
      color: #fff;
    
    .row1 {
      display: flex;
      width: 100%;
      align-items: center;
    .row{
      width: calc(100% - 4.5em); margin-right: .6em;}
    }    
    
    .row2 {
      display: flex;
      width: 100%;
      align-items: center;
    gap: 1em;
      .row1 {
      flex: 5;}
    .row {
      flex: 4;}
    
    }
    .row {
     // background: #00133f66;
      border: 1px solid #ccc;
      border-radius: .8em;
      display: flex;
      width: 100%;
      align-items: center;
      > span {
        width: 5.5em;
        text-align: left;
        padding-left: 1em;
        > span {
          color: #f00;
          font-size: 12px;
        }
      }
      input,
      select {
        background: none;
        flex: 1;
      }
      option {
        color: #666;
      }
      select {
        background: url("//h65.tw/img/select.svg") no-repeat calc(100% - 0.5em)
          100%;
        background-size: auto 200%;
        transition: background 0.3s;
        filter: brightness(0) invert(1);

        &:focus {
          background-position: calc(100% - 0.5em) 0%;
        }
      }
    }
      .sex{
      @apply flex flex-col ;
      }
  }

  .send {
    font-size:20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    background: #0006;
    //border: 1px solid #FFF9;
    border: 0;
    border-radius: 0.5em;

    width: 15em;
    height: 3.3em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 700;
    position: relative;
  }

  .control {
    font-size: size(20);
    color: #000;
    position: relative;line-height: 1.6;
  }
}

@media screen and (max-width: 768px) {
  .order-section {
   // min-height: sizem(800);
    position: relative;width: sizem(360);
  }

  .order {
    width: 100%;
    font-size: sizem(16);

.formimg{width: sizem(280);margin-right:  sizem(50);}

    .order-title-img {
      width: sizem(200);
      margin-bottom: sizem(22);
    }

    .bird {
      @apply absolute;
      width: sizem(48.8);
      top: sizem(205);
      right: sizem(40);
    }

    .cus-divider {
      margin: 0 auto;
      width: sizem(117);
      height: sizem(2);
      margin-bottom: sizem(25);
      background-color: #055f76;
    }

    .order-title {
      font-size: sizem(20);
      // padding-top:4.5em;
    }
    .order-subTitle {
      font-size: sizem(13);
      padding-top: 0;
    }

    .form {
      min-width: 0;
      height: auto;
        gap:1em;
      flex-direction: column;
    //  margin-right: 2.5em;

      
    .row2 {
      flex-direction: column;

    }

      &::after {
        display: none;
      }
    }

    .send {
      font-size: sizem(18);
    //  width: sizem(310);
     // height: sizem(72);
    }

    .control {
      font-size: sizem(13.5);
    }
  }
}
</style>

<script setup>
import Policy from "@/section/form/policy.vue"
import Map from "@/section/form/map.vue"
import HouseInfo from "@/section/form/houseInfo.vue"

import info from "@/info"


</script>
