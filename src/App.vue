<template>
  <!-- <header-common /> -->

  <v-btn @click="$i18n.locale = `EN`"> EN</v-btn>
  <v-btn @click="$i18n.locale = `KO`"> KO</v-btn>



  <div id="app">
    <div id="wrapper">
      <!-- Sidebar -->
      <SideBar />
      <!-- Sidebar -->

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <!-- TopBar -->
          <HeaderCom />
          <!-- Topbar -->

          <div class="container-fluid" id="container-wrapper">
            <router-view></router-view>
          </div>
        </div>
        <!--Footer-->
        <FooterCom />
      </div>
    </div>
  </div>
</template>



<script>

import HeaderCom from '@/components/layout/HeaderCom.vue'
import FooterCom from '@/components/layout/FooterCom.vue'
import SideBar from '@/components/layout/SideBar.vue'
   import { onMounted } from 'vue'
 //import { onCreated } from 'vue'
  import Cookies from 'js-cookie';

// onCreated(() => {
//   console.log('Component created');
// });




// mounted(() => {
//   console.log('Component created');
// });


export default {
// mounted(){
//   document.cookie = 'locale =KO'

// },
setup(){
  onMounted(() => {
    console.log("test run into onMounted")
    Cookies.set("locale", "EN");
  })
},

    component: {
      HeaderCom,
      FooterCom,
      SideBar
    },
    components: { HeaderCom, FooterCom, SideBar}
}
</script>

