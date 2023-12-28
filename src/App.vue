<template>
  <!-- <header-common /> -->
  <div class="popover" style="left: 96%; top: 15px" v-show ="$route.path === '/registerMem' || $route.path === '/login' ? true : false">
    <button class="btn btn-light" style="width: 100%;" @click="swichLanguage('KO')">
      <img src="../public/assets121/img/korea.jpg" width="16" height="11" loading="lazy">
      <span class="mg-left-lv2-i">
        KO </span>
    </button>
    <button class="btn btn-light" style="width: 100%;" @click="swichLanguage('EN')">
      <img src="../public/assets121/img/english.png" width="16" height="11" loading="lazy">
      <span class="mg-left-lv2-i">
        EN </span>
    </button>
  </div>




    <div id="wrapper" style = "min-height: 90%;">
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
        <FooterCom v-show ="$route.path === '/registerMem' || $route.path === '/login' ? false : true" />
      </div>
    </div>
    <FooterCom v-show ="$route.path === '/registerMem' || $route.path === '/login' ? true : false" />

</template>
<script>

import HeaderCom from '@/components/layout/HeaderCom.vue'
import FooterCom from '@/components/layout/FooterCom.vue'
import SideBar from '@/components/layout/SideBar.vue'
import Cookies from 'js-cookie'

export default {

  component: {
    HeaderCom,
    FooterCom,
    SideBar
  },
  components: { HeaderCom, FooterCom, SideBar },

  methods: {
    swichLanguage(lang) {

      this.$i18n.locale = lang;

      Cookies.set("locale", lang);

    }
  }
}
</script>

