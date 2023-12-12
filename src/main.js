import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

createApp(App).use(router).mount('#app')

window.axios =axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
