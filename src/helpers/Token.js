class Token{

    isValid(token){
     const payload = this.payload(token)
     if (payload) {
        console.log("payload.iss: " + payload.iss)
      return true 
     }
     return false
    }
   
   
    payload(token){
     const payload = token.split('.')[1]
     return this.decode(payload)
    }
   
    decode(payload){
     return JSON.parse(atob(payload))
    }
    
   
   
   }
   
   const tokenInstance = new Token()
   export default tokenInstance