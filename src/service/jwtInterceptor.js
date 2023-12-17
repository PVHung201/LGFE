import axios from 'axios'
import User from '../helpers/User'


const jwtInterceptor = () => {
    if(User.loggedIn()){
        axios.interceptors.request.use(function (config) {
                config.headers.Authorization =`Bearer ${User.getToken()}`
                return config;
              }, function () {
                // Do something with request error
                console.log("error into jwtINterceptor")
              });
        } 
}

export default jwtInterceptor;