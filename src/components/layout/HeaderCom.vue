<template>
   <nav v-show ="$route.path === '/registerMem' || $route.path === '/login' ? false : true"  
   id ="topbar" class="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top" style="display: none;">
          <ul class="navbar-nav ml-auto">
            <div class="topbar-divider d-none d-sm-block"></div>
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <img class="img-profile rounded-circle" src="../../../public/assets121/img/man.png" style="max-width: 60px">
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" @click="logout">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  {{ $t('Logout') }}
                </a>
              </div>
            </li>
          </ul>
        </nav>
</template>

<script type="text/javascript">

export default {

    methods:{
      logout(){
        localStorage.removeItem('token')
        this.$router.push({ name: 'login' });
      }
  
    }
  }
</script>

