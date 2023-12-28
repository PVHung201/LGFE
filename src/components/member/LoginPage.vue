<template>
		<div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">{{$t('Login')}}</h1>
                  </div>
      <form class="user" @submit.prevent="login">
        <div class="form-group">
          <input type="text" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
          :placeholder="$t('Enter Id Employee')" v-model="form.id">
    <small class="text-danger" v-if="errors.id"> {{ errors.id[0] }} </small>        
        </div>
        <div class="form-group">
          <input :type="passwordType" class="form-control" id="exampleInputPassword" :placeholder="$t('Password')" v-model="form.password">
 <small class="text-danger" v-if="errors.password"> {{ errors.password[0] }} </small>
        </div>
        <div class="form-group">
          <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      @click="disPlayPw"
                    />
                    <label class="form-check-label">
                      {{ $t("Show password") }}
                    </label>
                  </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">{{$t('Login')}}</button>
          <small class="text-danger col-md-9" v-if="errorAfterLog">{{errorAfterLog}}</small>

        </div>
        
      </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>



<script type="text/javascript">
	
import axios from '../../service/axiosService'
import User from '../../helpers/User'

  export default {

    created(){
      if (User.loggedIn()) {
        this.$router.push({name: 'listMember'})
      }
    },

    data(){
    return {
      form:{
        id: null,
        password: null
      },
      passwordType: "password",
      errors:{},
      errorAfterLog: ''
    }
  }, 
  methods:{
    login(){
      axios.post('/auth/login',this.form, {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(res => {
        User.responseAfterLogin(res)
        this.$router.push({ name: 'listMember'})
      })

      .catch((error) => {
          this.errorAfterLog = error.response.data.error
        });

    },
    disPlayPw() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
  }
  } 
</script>

<style type="text/css">
	
</style>