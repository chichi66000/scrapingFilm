import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import axios from 'axios'
import './assets/tailwind.css'

createApp(App).use(router).use(store).mount('#app')
