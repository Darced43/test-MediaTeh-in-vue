import { createApp, ref } from 'vue'
import './main.css'
import App from './App.vue'
import route from './route/router'

const countHead = ref(0)
const priceHead = ref(0)
const prodEnterBasket = []

const app = createApp(App)
app.use(route)
app.provide('countBtn', countHead)
app.provide('priceHead', priceHead)
app.provide('prodEnterBasket', prodEnterBasket)
app.mount('#app')
