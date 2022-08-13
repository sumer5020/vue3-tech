import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueCookies from 'vue3-cookies'
import VueSmoothScroll from 'vue3-smooth-scroll';
import './css/App.css'

createApp(App)
.use(VueSmoothScroll)
.use(VueCookies, {
    expireTimes: "1y",
    path: "/",
    //domain: "localhost",
    //secure: true,
    sameSite: "None"
})
.mount('#app')
