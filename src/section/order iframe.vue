<template>
  <div id="order" class="relative text-center">
    <div class="order">
    <div class="order-section">
      <!-- Title -->
      <div class="order-title text-center relative z-10">
        {{ info.order.title }}
      </div>
       <iframe :src="`${iframeSrc}?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}`" frameborder="0"></iframe>

    </div>


    <!-- HouseInfo -->
    <HouseInfo />
  </div>
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
  overflow: hidden;width: size(853);
  background:#117568;z-index: 22;
  border-radius: size(150) 0 0 size(150);padding: 0em 0 0em 0;
  iframe{
    width: 100%;
    height: size(700);
  }
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
    position: relative;width: sizem(360);
  iframe{
    width: 100%;
    height: sizem(604);
  }
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

      
    .row2 {
      flex-direction: column;

    }

      &::after {
        display: none;
      }
    }

    .send {
      font-size: sizem(18);
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

// import { cityList, renderAreaList } from "@/info/address.js"
import { ref, reactive } from "vue"
// import { VueRecaptcha } from "vue-recaptcha"

import { useToast } from "vue-toastification"
const toast = useToast()

const sending = ref(false)

const urlParams = new URLSearchParams(window.location.search);
const utmSource = urlParams.get("utm_source");
const utmMedium = urlParams.get("utm_medium");
const utmContent = urlParams.get("utm_content");
const utmCampaign = urlParams.get("utm_campaign");
const iframeSrc = "https://hc-nice.com/case_site/Demo_goodays/form/form.html";

const formData = reactive({
  name: "",
  sex: "",
  phone: "",
  email: "",
  ctime: "",
//  msg: "",
  policyChecked: false,
  //: true,
})

//非必填
const bypass = [
  "sex",
  "email",
  "ctime",
  "r_verify",
//  "msg",
]

//中文對照
const formDataRef = ref([
  "姓名", //name
  "性別", //sex
  "手機", //phone
  "信箱", //email
  "聯絡時段", //ctime
  //"備註訊息", //msg
  "個資告知事項聲明", //policyChecked
  //"機器人驗證", //r_verify
])

const areaList = ref([])
const send = () => {

  const presend = new FormData()
  let pass = true
  let unfill = []
  
  let idx = 0

  //驗證
  for (const [key, value] of Object.entries(formData)) {
    if (!bypass.includes(key)) {
      if (value == "" || value == false) {
        unfill.push(formDataRef.value[idx])
      }
    }

    idx++

    presend.append(key, value)
  }


  //有未填寫
  if (unfill.length > 0) {
    pass = false
    toast.error(`「${unfill.join(", ")}」為必填或必選`)
    return
  }

  //手機驗證
  const MobileReg = /^(09)[0-9]{8}$/
  if (!formData.phone.match(MobileReg)) {
    pass = false
    toast.error(`手機格式錯誤 ( 09開頭10位數字 )`)
    return
  }
  if (pass && !sending.value) {
    sending.value = true
//送至表單PHP
    fetch("wsform.php", {
      method: "POST",
      body: presend,
    }).then((response) => {
      sending.value = false;      
      if (response.status === 200) {
        window.location.href = "https://hc-nice.com/case_site/goodays/thank.php"
      }
    })
    // 
  }
}
</script>
