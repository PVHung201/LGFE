<template>
  <form class="vh-100" @submit.prevent="memberInsert">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-9">

          <div class="card" style="border-radius: 15px;">
            <div class="card-body">

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">ID</h6>

                </div>
                <div class="col-md-9 pe-5">

                  <input type="text"  class="form-control form-control-lg" v-model="form.id" @change="checkInputId"/>
                  <small class="text-danger col-md-9" v-if="hasErrorId">The id is not formatted correctly</small>


                </div>
              </div>

              <hr class="mx-n3">

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">Passwords</h6>

                </div>
                <div class="col-md-9 pe-5">

                  <input type="password" class="form-control form-control-lg" placeholder="password"
                    v-model="form.password" @change="checkInputPw()" @input="validatePassword" v-bind:class="{'is-invalid': hasErrorNo}"/>
                    <small class="text-danger col-md-9" v-if="hasErrorNo">The password is not formatted correctly</small>

                </div>

              </div>



              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">Reconfirm your password</h6>

                </div>
                <div class="col-md-9 pe-5">

                  <input type="password" class="form-control form-control-lg" placeholder="confirm your password" @input="validatePassword" v-model="confirmPassword"/>
                  <small class="text-danger col-md-9" v-if="passwordMismatch">The password must be same</small>


                </div>
              </div>


              <hr class="mx-n3">

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">Name</h6>

                </div>
                <div class="col-md-9 pe-5">

                  <textarea class="form-control" rows="3" placeholder="Name" v-model="form.name" @change="checkInputNm()" v-bind:class="{'is-invalid': hasErrorNm}"></textarea>
                  <small class="text-danger col-md-9" v-if="hasErrorNm">The name is not formatted correctly</small>

                </div>
              </div>

              <hr class="mx-n3">

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">Mobile phone number</h6>

                </div>
                <div class="col-md-9 pe-5">

                  <textarea class="form-control" rows="3" placeholder="type your mobiphone"
                    v-model="form.phone" @change="checkInputPh()" v-bind:class="{'is-invalid': hasErrorPhone}" ></textarea>
                    <small class="text-danger col-md-9" v-if="hasErrorPhone">The name is not formatted correctly</small>


                </div>
              </div>

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">email</h6>

                </div>
                <div class="col-md-3 pe-5">

                  <textarea class="form-control" rows="3" placeholder="type you domain email" v-model="email1"></textarea>

                </div>
                <label for="inputState" class="col-md-1 ps-5">@ </label>
                <select id="inputState" class="form-control col-md-3 ps-5" rows="3" v-model="email2">
                  <option selected>vaner.com</option>
                  <option>daum.net</option>
                  <option>gmail.com</option>
                  <option>nate.com</option>
                  <option>Hotmail.com</option>
                </select>
              </div>

              <hr class="mx-n3">

              <div class="px-5 py-4">
                <button type="submit" :disabled="!isvalid" class="btn btn-primary btn-lg">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
    
    
<script>
import axios from "axios"



export default {

  data() {
    return {
      form: {
        id: null,
        password: null,
        name: null,
        phone: null,
        email: null
      },

      email1: null,
      email2: null,
      confirmPassword: null,
      errors: {},
      hasErrorId: false,
      hasErrorNo: false,
      hasErrorNm: false,
      hasErrorPhone: false,
      passwordMismatch: false,
      isValid: false

    }
  },

  // watch: {
  //   hasErrorNo: false
  // },

  methods: {
    memberInsert() {
      this.isValid = this.hasErrorId && this.hasErrorNo && this.hasErrorNm && this.hasErrorPhone && this.passwordMismatch;

      this.form.email = this.email1 + '@' + this.email2;
      axios.post('http://localhost:8080/api/v1/member/register', this.form)
        .then(() => {
          this.$router.push({ name: 'home' })
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    checkInputId(){
        if(!( /^\d+$/.test(this.form.id)) || this.form.id.length < 5){
          this.hasErrorId = true
          return
        }
        this.hasErrorId = false
    },
    checkInputPw() {

      const regex = /^[a-zA-Z0-9!@#$%^&*]+$/;

      const onlyLetter = /[a-zA-Z]/.test(this.form.password)
      const onlyNm = /\d/.test(this.form.password)
      const onlySpecialChar = /[!@#$%^&*]/.test(this.form.password)
      const lengPw = this.form.password.length

      if(lengPw <5){
        this.hasErrorNo=true
        return
      }

      //check if password have strange characters
      if (!regex.test(this.form.password)) {
        this.hasErrorNo = true
        console.log(this.hasErrorNo)

        console.log("password khong thoa man")
        return
      }

      // Password Oke
      const typeCount = [onlyLetter, onlyNm, onlySpecialChar].filter(Boolean).length;

      if (typeCount == 2 && (lengPw <= 10 || lengPw >= 20)) {
        this.hasErrorNo = true
        console.log("password must be between 10 and 20")
        return
      }

      if (typeCount == 3 && (lengPw <= 8 || lengPw >= 20)) {
        this.hasErrorNo = true

        console.log("password must be between 8 and 20")
        return
      }


      let ListNmInPw = this.form.password.match(/\d+/g); // list the digits contained in password

      let runIntoList = 0
      if (ListNmInPw != null) {
        ListNmInPw.forEach(element => {
          if (element.length > 3) {
            
            this.hasErrorNo = true
            runIntoList = 1
            console.log("the password must not be more than 3 number chracters consecutive")
          }
        });
      }

      if(runIntoList == 0){
        this.hasErrorNo = false

      }


    },
    checkInputNm(){
      return /^[a-zA-Z]+$/.test(this.form.name) ? this.hasErrorNm = false : this.hasErrorNm = true
    },

    checkInputPh(){
      return /^\d+$/.test(this.form.phone) ? this.hasErrorPhone = false : this.hasErrorPhone = true
    },
    validatePassword() {
      this.passwordMismatch = this.form.password !== this.confirmPassword;
    }


  }

}

</script>
    
    