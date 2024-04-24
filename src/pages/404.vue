<template>
    <div class="bg-404">404
        <a class="bg-color1 text-white hover:bg-color2" href="/">回首頁</a>
    </div>
</template>
<style lang="scss" scoped>
.bg-404 {
    width: 100vw;
    height: 100vh;
  background: #efefef url("@/section/s1/bg.jpg") fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2vw;
    text-align: center;
    line-height: 2;
    a {
        display: block;
        width: 6em;
        border-radius:.3em;
        margin: 1em auto 0;
    font-size: 0.8em;
        
    }
}

@media screen and (max-width: 767px) {
    .bg-404 {
    font-size: 6vw;
    }
}
</style>

<script>
// import gtm from '@/mixins/gtm.js'
export default {
    name: '404',
    // mixins: [gtm],
    components: {},
    methods: {},
}
</script>