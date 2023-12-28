<template>
  <nav
    v-show="
      $route.path === '/registerMem' || $route.path === '/login' ? false : true
    "
    id="topbar"
    class="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top"
    style="display: none"
  >
  <div class="d-flex justify-content-end flex-fill">
          <!-- change language button-->
          <div class="d-flex flex-row-reverse bd-highlight">
          <button
            class="btn btn-light"
            @click="swichLanguage('KO')"
          >
            <img
              src="../../../public/assets121/img/korea.jpg"
              width="16"
              height="11"
              loading="lazy"
            />
            <span class="mg-left-lv2-i"> KO </span>
          </button>
          <button
            class="btn btn-light"
            @click="swichLanguage('EN')"
          >
            <img
              src="../../../public/assets121/img/english.png"
              width="16"
              height="11"
              loading="lazy"
            />
            <span class="mg-left-lv2-i"> EN </span>
          </button>
        </div>
        <!-- End change language button-->
  </div>



    <ul class="navbar-nav ml-auto">
      <div class="topbar-divider d-none d-sm-block"></div>
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            class="img-profile rounded-circle"
            src="../../../public/assets121/img/man.png"
            style="max-width: 60px"
          />
        </a>
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click="logout">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            {{ $t("Logout") }}
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script type="text/javascript">

import Cookies from 'js-cookie'

export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
    swichLanguage(lang) {

this.$i18n.locale = lang;

Cookies.set("locale", lang);

}
  },

};
</script>
