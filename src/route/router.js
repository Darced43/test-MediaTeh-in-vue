import { createRouter, createWebHistory } from "vue-router";
import Basket from '../pages/Basket.vue'
import MainContent from '../pages/MainContent.vue'


export default  createRouter({
    history: createWebHistory('/test-MediaTeh-in-vue'),
    routes: [
        { path: '/', component: MainContent},
        { path: '/basket', component: Basket },
      ]
})
