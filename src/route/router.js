import { createRouter, createWebHistory } from "vue-router";
import Basket from '../pages/Basket.vue'
import MainContent from '../pages/MainContent.vue'


export default  createRouter({
    history: createWebHistory('darced43.github.io/test-MediaTeh-in-vue/'),
    routes: [
        { path: '/', component: MainContent},
        { path: '/basket', component: Basket },
      ]
})
