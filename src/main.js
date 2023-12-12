import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'




const app = createApp(App);
app.use(router)
app.mount('#app')
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


window.axios =axios;

