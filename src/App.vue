<template>
  <!-- <header-common /> -->
  <div class="popover" style="left: 1200px; top: 15px">
    <button class="btn btn-light" @click="swichLanguage('KO')">
      <img src="../public/assets121/img/korea.jpg" width="16" height="11" loading="lazy">
      <span class="mg-left-lv2-i">
        KO </span>
    </button>
    <button class="btn btn-light" @click="swichLanguage('EN')">
      <img src="../public/assets121/img/english.png" width="16" height="11" loading="lazy">
      <span class="mg-left-lv2-i">
        EN </span>
    </button>
  </div>



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
import Cookies from 'js-cookie'

export default {

  setup() {
    onMounted(() => {
      console.log("test run into onMounted")
      // Cookies.set("locale", "KO");
    })

  },


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

