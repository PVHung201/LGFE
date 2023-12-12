<template>
  <!-- <header-common /> -->
  
  <div id="app">
  <div id="wrapper">

    
    <!-- Sidebar -->
      <SideBar/>
    <!-- Sidebar -->

    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <!-- TopBar -->
          <HeaderCom/>
        <!-- Topbar -->

        <div class="container-fluid" id="container-wrapper">
          <router-view></router-view>
        </div>
      </div>
      <!--Footer-->
      <FooterCom/>


    </div>
  </div>
</div>

</template>



<script>

import HeaderCom from '@/components/layout/HeaderCom.vue'
import FooterCom from '@/components/layout/FooterCom.vue'
import SideBar from '@/components/layout/SideBar.vue'

export default {
    component: {
      HeaderCom,
      FooterCom,
      SideBar
    },
    components: { HeaderCom, FooterCom, SideBar}
}
</script>

