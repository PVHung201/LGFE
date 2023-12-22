<template>

  <form class="vh-100" @submit.prevent="memberInsert">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-9">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body">

              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">{{ $t('Register') }}</h1>
                
              </div>

              <div class="row align-items-center pt-4 pb-3">        
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">ID</h6>

                </div>
                <div class="col-md-9 pe-5">

                  <input type="text" class="form-control form-control-lg" v-model="form.id" @change="checkInputId" required />
                  <small class="text-danger col-md-9" v-if="errors.hasErrorId">{{ $t('The id is not formatted correctly') }}</small>


                </div>
              </div>

              <hr class="mx-n3">

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">{{ $t('Password') }}</h6>

                </div>
                <div class="col-md-9 pe-5">

                  <input type="password" class="form-control form-control-lg" :placeholder="$t('Password')"
                    v-model="form.password" @change="checkInputPw()" @input="validatePassword"
                    v-bind:class="{ 'is-invalid': errors.hasErrorNo }" required/>
                  <small class="text-danger col-md-9" v-if="errors.hasErrorNo">{{ $t('The password is not formatted correctly') }}</small>

                </div>

              </div>



              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">{{ $t('Reconfirm your password') }}</h6>

                </div>
                <div class="col-md-9 pe-5">

                  <input type="password" class="form-control form-control-lg" :placeholder="$t('confirm your password')"
                    @input="validatePassword" v-model="confirmPassword" />
                  <small class="text-danger col-md-9" v-if="errors.passwordMismatch">{{ $t('The password must be same') }}</small>


                </div>
              </div>


              <hr class="mx-n3">

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">{{ $t('Name') }}</h6>

                </div>
                <div class="col-md-9 pe-5">

                  <textarea class="form-control" rows="3" :placeholder="$t('Name')" v-model="form.name" @change="checkInputNm()"
                    v-bind:class="{ 'is-invalid': errors.hasErrorNm }" required></textarea>
                  <small class="text-danger col-md-9" v-if="errors.hasErrorNm">{{ $t('The name is not formatted correctly') }}</small>

                </div>
              </div>

              <hr class="mx-n3">

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">{{ $t('Mobile phone number') }}</h6>

                </div>
                <div class="col-md-9 pe-5">

                  <input type = "number" class="form-control" rows="3" :placeholder="$t('type your mobiphone')" v-model="form.mobilePhone"
                    @change="checkInputPh()" v-bind:class="{ 'is-invalid': errors.hasErrorPhone }"/>
                  <small class="text-danger col-md-9" v-if="errors.hasErrorPhone">{{ $t('The name is not formatted correctly') }}</small>


                </div>
              </div>

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">{{ $t('email') }}</h6>

                </div>
                <div class="col-md-3 pe-5">

                  <textarea class="form-control" rows="3" :placeholder="$t('type you domain email')" v-model="email1" @input="validateBoxes"></textarea>

                </div>
                <label for="inputState" class="col-md-1 ps-5">@ </label>
                <select id="inputState" class="form-control col-md-3 ps-5" rows="3" v-model="email2" @change="validateBoxes">
                  <option value="vaner.com">vaner.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="nate.com">nate.com</option>
                  <option value="Hotmail.com">Hotmail.com</option>
                </select>
              </div>

              <small class="text-danger col-md-9" v-if="errors.validateEmail">{{ $t('The email is not formatted correctly') }}</small>

              <hr class="mx-n3">

              <div class="px-5 py-4">
                <button type="submit" :disabled="isvalid" class="btn btn-primary btn-lg">{{ $t('Register') }}</button>
              </div>
              <small class="text-danger col-md-9" v-if="errorAfterRegis">{{errorAfterRegis}}</small>

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
        mobilePhone: null,
        email: null
      },

      email1: null,
      email2: null,

      confirmPassword: null,
      errors: {
        hasErrorId: false,
        hasErrorNo: false,
        hasErrorNm: false,
        hasErrorPhone: false,
        passwordMismatch: false,
        validateEmail: false

      },
      errorAfterRegis: '',
      isvalid: true


    }
  },


  watch: {
    errors: {
      handler() {
        this.isvalid = this.errors.hasErrorId || this.errors.hasErrorNo || this.errors.hasErrorNm || this.errors.hasErrorPhone || this.errors.passwordMismatch || this.errors.validateEmail
      },
      deep: true
    },

  },

  methods: {
    memberInsert() {

      if(this.email2 == null){
        this.form.email
      } else {
        this.form.email = this.email1 + '@' + this.email2
      }
      axios.post('http://localhost:8080/api/v1/member/register', this.form)
        .then(() => {
          this.$router.push({ name: 'login' })
        })
        .catch((error) => {
          console.log(error),
          this.errorAfterRegis = error.response.data.error
        });
    },

    checkInputId() {
      if (!(/^\d+$/.test(this.form.id)) || this.form.id.length < 4) {
        this.errors.hasErrorId = true
        return
      }
      this.errors.hasErrorId = false
    },
    checkInputPw() {

      const regex = /^[a-zA-Z0-9!@#$%^&*]+$/;

      const onlyLetter = /[a-zA-Z]/.test(this.form.password)
      const onlyNm = /\d/.test(this.form.password)
      const onlySpecialChar = /[!@#$%^&*]/.test(this.form.password)
      const lengPw = this.form.password.length

      if (lengPw < 5) {
        this.errors.hasErrorNo = true
        return
      }

      //check if password have strange characters
      if (!regex.test(this.form.password)) {
        this.errors.hasErrorNo = true
        console.log(this.errors.hasErrorNo)

        console.log("password khong thoa man")
        return
      }

      // Password Oke
      const typeCount = [onlyLetter, onlyNm, onlySpecialChar].filter(Boolean).length;

      if (typeCount == 2 && (lengPw < 10 || lengPw > 20)) {
        this.errors.hasErrorNo = true
        console.log("password must be between 10 and 20")
        return
      }

      if (typeCount == 3 && (lengPw < 8 || lengPw > 20)) {
        this.errors.hasErrorNo = true

        console.log("password must be between 8 and 20")
        return
      }


      let ListNmInPw = this.form.password.match(/\d+/g); // list the digits contained in password

      let runIntoList = 0
      let consecutiveNm = ['012','123','234','345','456','567','678','789','890',]
      if (ListNmInPw != null) {
        ListNmInPw.forEach(element => {
          if (element.length > 3 || consecutiveNm.some(subStr => element.includes(subStr))) {

            this.errors.hasErrorNo = true
            runIntoList = 1
            console.log("the password must not be more than 3 number chracters consecutive")
          }
        });
      }

      if (runIntoList == 0) {
        this.errors.hasErrorNo = false

      }


    },
    checkInputNm() {
      return /^[a-zA-Z]+$/.test(this.form.name) ? this.errors.hasErrorNm = false : this.errors.hasErrorNm = true
    },

    checkInputPh() {
      return /^\d+$/.test(this.form.mobilePhone) ? this.errors.hasErrorPhone = false : this.errors.hasErrorPhone = true
    },
    validatePassword() {
      this.errors.passwordMismatch = this.form.password !== this.confirmPassword;
    },

    validateBoxes() {
      if((this.email1 == null || this.email1 == '') && this.email2 == null ){
        this.errors.validateEmail = false
        this.form.email = null
        return
      } else {
        this.errors.validateEmail = ((this.email1 == null || this.email1 == '') && this.email2 !== null) || (this.email1 !== null && this.email2 == null) ;
      }
    },


  }

}

</script>
    
    