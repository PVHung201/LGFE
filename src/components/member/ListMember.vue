<template>
  <div class="container-fluid" id="container-wrapper">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">List Member</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="./">Home</a></li>
        <li class="breadcrumb-item">Member</li>
        <li class="breadcrumb-item active" aria-current="page">List Member</li>
      </ol>
    </div>

    <!-- Query bar -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card mb-4">
          <form class="card-body" @submit.prevent="search">
            <!-- Start row 1-->
            <div class="d-flex justify-content-center">

              <!--left box-->
              <div class="col-lg-6 mb-4">
                <div class="form-group">
                  <div class="d-flex align-items-center">
                    <div class="col-3 text-center">ID</div>
                    <div class="col">
                      <input type="number" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter Id" v-model="searchForm.id" @change="checkInputId"
                        v-bind:class="{ 'is-invalid': hasErrors.hasErrorId }">
                      <small class="text-danger col-md-9" v-if="hasErrors.hasErrorId">The Id is not formatted
                        correctly</small>

                    </div>
                  </div>

                </div>
              </div>

              <!-- end left box-->

              <!-- right box -->

              <div class="col-lg-6 mb-4">
                <div class="form-group">
                  <div class="d-flex align-items-center">
                    <div class="col-3 text-center">Mobile Phone number</div>
                    <div class="col">
                      <input type="number" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter phone number" v-model="searchForm.mobilePhone" required>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End right box-->

            <!--Row 2-->
            <div class="d-flex justify-content-center">

              <!--left box-->
              <div class="col-lg-6 mb-4">
                <div class="form-group">
                  <div class="d-flex align-items-center">
                    <div class="col-3 text-center">name</div>
                    <div class="col">
                      <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter name" v-model="searchForm.name" @change="checkInputNm"
                        v-bind:class="{ 'is-invalid': hasErrors.hasErrorNm }">
                      <small class="text-danger col-md-9" v-if="hasErrors.hasErrorNm">The name is not formatted
                        correctly</small>

                    </div>
                  </div>

                </div>
              </div>

              <!-- End left box-->

              <!-- Right box -->

              <div class="col-lg-6 mb-4">
                <div class="form-group">
                  <div class="d-flex align-items-center">
                    <div class="col-3 text-center">Join date</div>
                    <div class="col">
                      <input type="Date" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="" v-model="searchForm.beginDate">
                    </div>
                    <div class="col">
                      <input type="Date" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="" v-model="searchForm.endDate">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- End Row 2-->


            <!--Row 3-->
            <div class="d-flex justify-content-end">

              <!-- Right box -->

              <div class="col-lg-3 mb-4">
                <div class="btn-toolbar pull-right">
                  <div class="btn-group">
                    <button type="submit" :disabled="isvalid" class="btn btn-primary btn-lg mr-3 ">Inquiry</button>
                  </div>
                  <div class="btn-group ">

                    <!-- <download-excel class="btn btn-default" :data="members" :fields="json_fields"
                     worksheet="My Worksheet" name="filename.xlsx"> -->
                      <button type="button" class="btn btn-primary btn-lg mr-3" @click="exportExcel">Excel</button>
                    <!-- </download-excel> -->

                   
                  </div>
                </div>
              </div>
            </div>
            <!--End Row 3-->


            <div>


            </div>


            <!-- End Right box-->

          </form>

          <!--End Query bar -->

          <div class="table-responsive p-3">

            <div class="table-responsive p-3">
              <table class="table align-items-center table-flush" id="dataTable">
                <thead class="thead-light">
                  <tr>
                    <th>Membership Number</th>
                    <th>ID</th>
                    <th>name</th>
                    <th>Mobile phone number</th>
                    <th>email</th>
                    <th>Join date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="member in members" :key="member.memberNo">
                    <td>{{ member.memberNo }}</td>
                    <td>{{ member.id }}</td>
                    <td>{{ member.name }}</td>
                    <td>{{ member.mobilePhone }}</td>
                    <td>{{ member.email }}</td>
                    <td>{{ member.joinDate.slice(0, 10) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--Paginate Page-->

            <PaginatePage @changePage="changePage" :page="count" />

            <!--End Paginate page-->
          </div>


        </div>
      </div>

    </div>


    <!--End Query bar-->



  </div>
</template>

<script>
import axios from "axios"
import User from '../../helpers/User'
import PaginatePage from "./paginatePage.vue"
// import JsonExcel from "vue-json-excel3"



export default {

  components: { PaginatePage },

  data() {
    return {
      members: [],
      searchForm: {
        id: null,
        name: null,
        mobilePhone: null,
        beginDate: null,
        endDate: null,
        size: 5,
        page: 0
      },
      hasErrors: {
        hasErrorId: false,
        hasErrorNm: false
      },
      count: null,

      json_fields: {
        'Membership Number': 'memberNo',
        'ID': 'id',
        'Name': 'name',
        'Mobile phonge number': 'mobilePhone',
        'email': 'email',
        'Join Date': 'joinDate'
      },

      json_data: [        {
            "memberNo": 10,
            "id": "11334",
            "name": "phanvanhung",
            "mobilePhone": "044484894",
            "email": "pvhung@nate.com",
            "joinDate": "2023-12-16T19:35:01.958+00:00"
        }],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          }
        ]
      ]

    };
  },

  watch: {
    hasErrors: {
      handler() {
        this.isvalid = this.hasErrors.hasErrorId || this.hasErrors.hasErrorNm;
      },
      deep: true
    },

    members:{
      addJsonData(){
        this.json_data = this.members
      },
      deep: true
    }
  },

  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: 'login' });
      return;
    }
    let currentDate = new Date();
    this.searchForm.endDate = currentDate.toISOString().split('T')[0];
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    this.searchForm.beginDate = currentDate.toISOString().split('T')[0];
    this.search()
  },
  methods: {

    checkInputId() {
      let lengthId = this.searchForm.id.toString().length;
      if (lengthId > 0 && lengthId < 3) {
        this.hasErrors.hasErrorId = true;
        return;
      }
      return this.hasErrors.hasErrorId = false;
    },
    checkInputNm() {
      let lengthNm = this.searchForm.name.length;
      if (lengthNm > 0 && lengthNm < 2) {
        this.hasErrors.hasErrorNm = true;
        return;
      }
      this.hasErrors.hasErrorNm = false;
    },
    search() {
      axios.post('http://localhost:8080/api/v1/member/list/search', this.searchForm)
        .then(({ data }) => (this.members = data.listMemberRen,
          this.count = data.count))
        .catch(console.error());
    },
    changePage(n) {
      this.searchForm.page = n
      this.search()

    },
    exportExcel(){
       axios.post('http://localhost:8080/api/v1/member/exportExcel', this.searchForm, {
        responseType: 'blob'
       })
      .then(response => {
        console.log(response);
        const label = 'ListMember.xlsx';
         const blob = new Blob([response.data], { type: response.headers['content-type'] })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = label
        link.click()
        URL.revokeObjectURL(link.href) 
      })
      .catch(console.error())
    }
  }
}
</script>