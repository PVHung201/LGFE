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
                    <h1 class="h4 text-gray-900 mb-4">Login</h1>
                  </div>
      <form class="user" @submit.prevent="login">
        <div class="form-group">
          <input type="text" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
            placeholder="Enter Id Employee" v-model="form.id">
    <small class="text-danger" v-if="errors.id"> {{ errors.id[0] }} </small>        
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password" v-model="form.password">
 <small class="text-danger" v-if="errors.password"> {{ errors.password[0] }} </small>
        </div>
        <div class="form-group">
          <div class="custom-control custom-checkbox small" style="line-height: 1.5rem;">
            <input type="checkbox" class="custom-control-input" id="customCheck">
            <label class="custom-control-label" for="customCheck">Remember
              Me</label>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Login </button>
        </div>
        <hr>
        
      </form>
                  <hr>
                  <div class="text-center">
 <router-link to="/register" class="font-weight-bold small">Create an Account!</router-link>
                  </div>
                  <div class="text-center">
    <router-link to="/forget" class="font-weight-bold small">Forget Password</router-link>
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
      errors:{}
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

       .catch(error => 
        this.errors = error.response.data.errorsF
 
      )

    }
  }
  } 
</script>

<style type="text/css">
	
</style>