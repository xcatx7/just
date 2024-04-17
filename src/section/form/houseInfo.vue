<template>
    <div class="house" v-if="info.houseInfos.length > 0">
    <img src="@/section/s1/flower1.png" class="flower1" alt=""
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1600" />
        <div class="relative flex h-full flex-col md:flex-row items-center justify-between z-10">
            <div class="flex-1 items-center justify-center">
                <div class="h-full info-box mx-auto flex flex-col items-center justify-center">
                    <div class="title  font-['Noto_Serif_TC']">建案資訊<img src="@\section\s5\b2.webp" alt="" /></div>
                    <div class="info-items mt-4 w-full grid grid-cols-1 md:grid-cols-2 ">
                        <div class="item font-bold flex items-center w-full whitespace-nowrap"
                            v-for="item in info.houseInfos">
                            <p class="mr-2 border-r-2 border-[#F7931E] pr-2 text-[#000] font-[700]" v-html="item[0]"></p>
                            <p class="whitespace-pre-line leading-normal text-left text-[#333] font-normal"
                                v-html="item[1]">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

// .map {
//     width: size(772);
//     height: size(642);
//     background-color: #75E3D5;
//     background-image: url('@/section/form/map.png');
//     background-size: contain;
//     background-position: center;
//     background-repeat: no-repeat;
// }
.displaynone{display: none;}
.house {
    position: relative;
   // height: auto;
    font-size: size(22);
  //  background: #FFF;
   // height:4em;
   margin: auto 1.2em auto auto;
    img{//height: 1.3em;
        vertical-align: middle;}
}
.flower1{
    @apply absolute;bottom:size(-70);right:size(-130);pointer-events: none;width: size(290);height: auto;}
.info-box {
    width: size(950);

    .title {
        font-size: size(45);
        font-weight: 700;
        color: #666;
        margin: 0 auto 0em 0;
        text-align: left;
        img{height: .5em;width: 11em;margin-left: .5em;}
    }

    .info-items {
        row-gap: size(10);
        column-gap: size(10);

        .item {
            line-height: size(17);
            font-size: size(16);
            align-items: flex-start;
            line-height: 1.5;
            text-align: left;

            p:first-child {
                // min-width: 4.5em;
            }
        }
    }
}
@media screen and (max-width:768px) {
.house {
    // background:#fff;
  //  height: sizem(400);
    font-size: sizem(13);
    margin: 2em auto; 
}
.flower1{
    bottom:sizem(-70);right:sizem(-60);width: sizem(150);}
    .footer {
        margin-bottom: sizem(0);
        //margin-bottom: sizem(63);
    }

    .info-box {
        width: sizem(330);
        padding: 0;

        .title {
            font-size: sizem(35);
            width: auto;
            img {
    height: 0.4em;
    width: 8em;
    margin-left: 0.5em;margin-right: -6em;
}
        }

        .info-items {
            row-gap: sizem(15);

            .item {
                font-size: sizem(16);
            }
        }
    }

}
</style>

<script setup>
import info from "@/info"


</script>