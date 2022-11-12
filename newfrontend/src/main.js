import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueSnip from 'vue-snip'
// import axios from 'axios'
import './assets/tailwind.css'

createApp(App).use(router).use(store).use(VueSnip).mount('#app')
