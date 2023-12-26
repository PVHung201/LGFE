import axios from 'axios';


const apiUrl = process.env.VUE_APP_BASE_URL;

axios.defaults.baseURL = apiUrl;


export default axios;