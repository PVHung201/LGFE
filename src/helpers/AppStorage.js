class AppStorage{
    storeToken(token){
        localStorage.setItem('token',token);
    }

    store(token){
        this.storeToken(token)
    }

    clear(){
        localStorage.removeItem('token')
    }

    getToken(){
        return localStorage.getItem('token')
    }

}
const appStoragaIns = new AppStorage();
export default appStoragaIns