<template>
  <form class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-15">

          <div class="card">
            <div class="card-body">

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">ID</h6>

                </div>
                <div class="col-md-3 pe-5">

                  <input type="text" class="form-control form-control-lg" />

                </div>

                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">Mobile phone number</h6>

                </div>
                <div class="col-md-3 pe-5">

                  <textarea class="form-control" rows="1" placeholder="type your mobiphone"></textarea>

                </div>
              </div>


              <hr class="mx-n3">

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">Name</h6>

                </div>
                <div class="col-md-3 pe-5">

                  <textarea class="form-control" rows="1" placeholder="Name"></textarea>

                </div>
              </div>

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">

                  <h6 class="mb-0">Join date</h6>

                </div>
                <div class="col-md-3 pe-5">

                  <textarea class="form-control" rows="1" placeholder="Name"></textarea>

                </div>

                <div class="col-md-3 pe-5">

                  <textarea class="form-control" rows="1" placeholder="Name"></textarea>

                </div>
              </div>


              <hr class="mx-n3">

            </div>
          </div>
        </div>
      </div>
    </div>
  </form>

  <div class="table-responsive">
    <table class="table align-items-center table-flush">
      <thead class="thead-light">
        <tr>
          <th>Membership Number</th>
          <th>ID</th>
          <th>name</th>
          <th>Mobile phhone number</th>
          <th>email</th>
          <th>Join date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.id">
          <td>{{ member.memberNo }}</td>
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.mobilePhone }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.joinDate }}</td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios"
import User from '../../helpers/User'


export default{

    
  data(){
    return{
      members:[],
    }
  },

  created(){
    this.allMember();

    if (!User.loggedIn()) {
        this.$router.push({name: '/'})
      }
  },

  methods:{
    allMember(){
      axios.get('http://localhost:8080/api/v1/member/list')
      .then(({data}) => (this.members = data))
      .catch(console.error());
    }
  }
}
</script>