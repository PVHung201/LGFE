import tokenInstance from './Token'
import appStoragaIns from './AppStorage'

class User {

    responseAfterLogin(res){
        const access_token = res.data.access_token
        if(tokenInstance.isValid(access_token)){
            appStoragaIns.store(access_token) 
        }
    }

    hasToken(){
        const storeToken = localStorage.getItem('token');
        if(storeToken){
            return tokenInstance.isValid(storeToken) ? true : false
        }
        return false
    }

    loggedIn(){
        return this.hasToken()
    }

}

const userIns = new User();

export default userIns