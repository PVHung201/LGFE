import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import jwtInterceptor from './service/jwtInterceptor'
import jQuery from 'jquery'
import JsonExcel from "vue-json-excel3";

jwtInterceptor();


const app = createApp(App);
app.use(router)
app.mount('#app')
app.use(jQuery)
app.component("downloadExcel", JsonExcel);
window.axios = require('axios');

//import User class
import User from './helpers/User'
window.User = User

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios =axios;

