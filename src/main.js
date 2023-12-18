import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import jwtInterceptor from './service/jwtInterceptor'
import jQuery from 'jquery'
import JsonExcel from "vue-json-excel3";


window.axios = require('axios');
window.axios =axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = createApp(App);
app.use(router)
app.mount('#app')
app.use(jQuery)
app.component("downloadExcel", JsonExcel);

jwtInterceptor();


//import User class
import User from './helpers/User'
window.User = User


