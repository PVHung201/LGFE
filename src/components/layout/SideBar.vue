<template>
  <nav
    id="sidebar"
    v-show="
      $route.path === '/login' || $route.path === '/registerMem' ? false : true
    "
    style="display: none"
  >
    <ul
      class="navbar-nav sidebar sidebar-light accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href=""
      >
        <div class="sidebar-brand-icon">
          <img src="../../assets/logo1.png" />
        </div>
        <div class="sidebar-brand-text mx-3">LG CNS</div>
      </a>
      <hr class="sidebar-divider my-0" />
      <li class="nav-item active">
        <router-link class="nav-link" to="/list">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>{{ $t('Dashboard') }}</span></router-link
        >
      </li>
      <hr class="sidebar-divider" />

      <router-link to="/list" class="nav-item">
        <a class="nav-link">
          <i class="far fas fa-list"></i> <span>{{ $t('List Member') }}</span>
        </a>
      </router-link>
      
      <hr class="sidebar-divider" />

      <router-link to="/exmember" class="nav-item">
        <a class="nav-link">
          <i class="fab fa-creative-commons-sa"></i> <span>{{ $t('ExMember') }}</span>
        </a>
      </router-link>

    </ul>
  </nav>
</template>
