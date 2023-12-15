import axios from 'axios'
import User from '../helpers/User'


const jwtInterceptor = () => {
    if(User.loggedIn()){
        axios.interceptors.request.use(function (config) {
                config.headers.Authorization =`Bearer ${User.getToken()}`
                return config;
              }, function (error) {
                // Do something with request error
                return Promise.reject(error);
              });
        }
}

export default jwtInterceptor;