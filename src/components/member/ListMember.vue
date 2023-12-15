<template>
  <div class="container-fluid" id="container-wrapper">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">DataTables</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="./">Home</a></li>
        <li class="breadcrumb-item">Tables</li>
        <li class="breadcrumb-item active" aria-current="page">DataTables</li>
      </ol>
    </div>

    <!-- Row -->
    <div class="row">
      <!-- Datatables -->
      <div class="col-lg-12">
        <div class="card mb-4">
          <!-- Search-->
          <form class="card-body">
            <!-- Start 1 row-->
            <div class="d-flex justify-content-center">
              <!--1-->
              <div class="col-lg-6 mb-4">
                <div class="form-group">
                  <div class="d-flex align-items-center">
                    <div class="col-3 text-center">ID</div>
                    <div class="col">
                      <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter Id">
                    </div>
                  </div>

                </div>
              </div>

              <!-- end 1-->

              <div class="col-lg-6 mb-4">
                <div class="form-group">
                  <div class="d-flex align-items-center">
                    <div class="col-3 text-center">Mobile Phone number</div>
                    <div class="col">
                      <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter phone number">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- EndStart 1 row-->

            <!--Row 2-->
            <div class="d-flex justify-content-center">
              <!--1-->
              <div class="col-lg-6 mb-4">
                <div class="form-group">
                  <div class="d-flex align-items-center">
                    <div class="col-3 text-center">name</div>
                    <div class="col">
                      <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter name">
                    </div>
                  </div>

                </div>
              </div>

              <!-- end 1-->

              <div class="col-lg-6 mb-4">
                <div class="form-group">
                  <div class="d-flex align-items-center">
                    <div class="col-3 text-center">Join date</div>
                    <div class="col">
                      <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End row 2-->

          </form>

          <!--End Search-->


          <div class="table-responsive p-3">
            <table class="table align-items-center table-flush" id="dataTable">
              <thead class="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- DataTable with Hover -->
 
    </div>
    <!--Row-->

    <!-- Documentation Link -->


  </div>
</template>

<script>
import axios from "axios"
import User from '../../helpers/User'




export default {


  data() {
    return {
      members: [],
    }
  },

  created() {
    this.allMember();

    if (!User.loggedIn()) {
      this.$router.push({ name: '/' })
      return
    }
  },

  methods: {
    allMember() {
      axios.get('http://localhost:8080/api/v1/member/list')
        .then(({ data }) => (this.members = data))
        .catch(console.error());
    }
  }
}
</script>