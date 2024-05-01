const caseName = "合登成泰美"

export default {
  meta: {
    title: caseName,
    description: caseName,
    keywords: caseName,
  },
  address1: "接待會館", //按鈕區的--- 如空白會只呈現地址
  address2: "接待會館", //map點下確認的--- 如空白會顯示"導航地址"
  address: "新北市五股區成泰路一段205號",
  googleSrc:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14454.920536892649!2d121.4351805!3d25.0771343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a76c468f4f33%3A0xaf99707120ba2c10!2z5oiQ5rOw576OIOaOpeW-heacg-mkqA!5e0!3m2!1szh-TW!2stw!4v1713332905481!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/7Ud9m1qUrNXPHC7H8",
  phone: "02-82922299",
  fbLink: "https://www.facebook.com/61553991285623",
  fbMessage: "https://m.me/61553991285623",
  line: "https://lin.ee/4Az6cpy",
  caseName: caseName,
  houseInfos: [ 
    ["投資建設", "合登建設"],
    ["坪數規劃", "20~36坪"],
    ["接待會館", "新北市五股區成泰路一段205號"],
    ["基地位置", "新北市五股區成泰路一段與成泰路一段189巷交叉口"],
    ["規劃型態", "電梯大樓"],
    ["建案類別", "預售屋（建構中）"],
    ["土地分區", "住宅區"],
    ["基地面積", "1350坪"],
    ["棟別戶數", "3幢，4棟，183戶住家"],
    ["樓層規劃", "地上9層，地下3層"],
    ["格局規劃", "二房(20~28坪)、三房(27~36坪)"],
    ["車位規劃", "地下室坡道平面車位 200個、有充電設備（含預留）"],
    ["公共設施", "接待大廳、中庭花園、交誼廳、會議室、閱覽室、健身房、親子遊戲區、兒童遊戲區"],
    ["結構工程", "RC鋼筋混凝土"],
    ["建造執照", "111股建字第00342號"],
    ["投資興建", "合登建設股份有限公司"],
    ["營造公司", "洛城營造有限公司"],
    ["建築設計", "閤康聯合建築師事務所"],
    ["企劃銷售", "翰永興業"],
  ],
  gtmCode: ["GTM-KK69KQQT"], // 可放置多個
  
  /*
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",

  */
  order: {
    title: "預約表單",
  //  subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
  },
  //底下2個 沒項目就會隱藏
  // room_type: ["兩房", "三房", "店面", "其他"],
  /*
  budget: [
    "1500-1800萬",
    "1800-2000萬",
    "2000-2200萬",
    "2200-2500萬",
    "2500萬以上",
  ],
  */
  ctime: ["上午", "下午"],
  
  navList: [{
    name: "最強增值",
    target: ".s4",
    offset: "-60",
    offsetmo: "0",
},{
    name: "水岸人生",
    target: ".s7",
    offset: "-60",
    offsetmo: "0",
},{
    name: "房貸瘦身",
    target: ".s5",
    offset: "-60",
    offsetmo: "0",
},{
    name: "貴賓專線",
    target: ".contact-info",
    offset: "",
    type: 'btn'
},
{
    name: "立即預約",
    target: ".order",
    offset: "",
    type: 'btn'
},
],

}