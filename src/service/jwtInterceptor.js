import axios from 'axios'
import User from '../helpers/User'


const jwtInterceptor = () => {
    if(User.loggedIn()){
        axios.interceptors.request.use(function (config) {
          if(User.loggedIn()){
            config.headers.Authorization =`Bearer ${User.getToken()}`
            return config;
          }
          return config
              }
              );
        } 
}

export default jwtInterceptor;