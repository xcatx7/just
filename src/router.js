import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
const routes = [{
    path: "/case_site/goodays/",
   // path: "/",
   // path: "/case_site/Demo_goodays/",
    name: "Home",
    component: Home,
},
/*
{
    path: "/case_site/goodays/formThanks",
    name: "formThanks",
    component: () =>
        import ("@/pages/FormThanks.vue"),
},
{
    path: "/case_site/goodays/phoneThanks",
    name: "phoneThanks",
    component: () =>
        import ("@/pages/PhoneThanks.vue"),
},

    {
        name: "404",
        path: "/case_site/goodays/404",
        component: () =>
            import ("@/pages/404.vue"),
    },
    {
        name: "404",
        path: "/case_site/goodays/404",
        component: () =>
            import ("@/pages/404.vue"),
    },
    {
        path: "/case_site/goodays/:catchAll(.*)", // 此处需特别注意至于最底部
        redirect: "/404",
    },*/
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router