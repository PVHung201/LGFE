import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import jwtInterceptor from './service/jwtInterceptor'
// import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import EN from './language/en.json'
import KO from './language/ko.json'
import User from './helpers/User'




window.User = User


const app = createApp(App);

const i18n = createI18n({
    locale: document.cookie.split('=')[1],
    messages: {
        EN: EN,
        KO: KO,
    }

})

app.config.globalProperties.$t = i18n.global.t;
app.config.globalProperties.$i18n = i18n.global;

jwtInterceptor();
window.axios = require('axios');
window.axios =axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
app.use(router)
app.mount('#app')
app.use(i18n)
