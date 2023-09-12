import { createRouter, createWebHistory } from "vue-router";
import Basket from '../pages/Basket.vue'
import MainContent from '../pages/MainContent.vue'


export default  createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/test-MediaTeh-in-vue/', component: MainContent},
        { path: '/basket', component: Basket },
      ]
})
