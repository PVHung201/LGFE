<template>
	<div>
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
          <input type="text" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
          :placeholder="$t('Enter Id Employee')" v-model="form.id">
    <small class="text-danger" v-if="errors.id"> {{ errors.id[0] }} </small>        
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword" :placeholder="$t('Password')" v-model="form.password">
 <small class="text-danger" v-if="errors.password"> {{ errors.password[0] }} </small>
        </div>
        <div class="form-group">
          <div class="custom-control custom-checkbox small" style="line-height: 1.5rem;">
            <input type="checkbox" class="custom-control-input" id="customCheck">
            <label class="custom-control-label" for="customCheck">{{$t('Remember Me')}}</label>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">{{$t('Login')}}</button>
          <small class="text-danger col-md-9" v-if="errorAfterLog">{{errorAfterLog}}</small>

        </div>
        <hr>
        
      </form>
                  <hr>
                  <div class="text-center">
 <router-link to="/registerMem" class="font-weight-bold small">{{$t('Create an account')}}</router-link>
                  </div>
                  <div class="text-center">
    <router-link to="/#" class="font-weight-bold small">{{$t('Forget Password')}}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>

</template>



<script type="text/javascript">
	
import axios from 'axios'
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
      errors:{},
      errorAfterLog: ''
    }
  }, 
  methods:{
    login(){
      axios.post('http://localhost:8080/api/v1/auth/login',this.form, {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(res => {
        User.responseAfterLogin(res)
        this.$router.push({ name: 'listMember'})
      })

      .catch((error) => {
          console.log(error)
          this.errorAfterLog = error.response.data.error
        });

    }
  }
  } 
</script>

<style type="text/css">
	
</style>