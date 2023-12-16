<template>
      <nav id="sidebar" v-show="$route.path === '/' || $route.path === '/register' || $route.path === '/forget' ?false : true" style="display:none">

<ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div class="sidebar-brand-icon">
      <img src="">
    </div>
    <div class="sidebar-brand-text mx-3">RuangAdmin</div>
  </a>
  <hr class="sidebar-divider my-0">
  <li class="nav-item active">
    <router-link class="nav-link" to="/home">
      <i class="fas fa-fw fa-tachometer-alt"></i>
      <span>Dashboard</span></router-link>
  </li>

  <li class="nav-item bg-info">
    <router-link class="nav-link" to="/pos">
      <i class="fas fa-fw fa-tachometer-alt"></i>
      <span>POS</span></router-link>
  </li>

  <hr class="sidebar-divider">
  <div class="sidebar-heading">
    Features
  </div>
  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap"
      aria-expanded="true" aria-controls="collapseBootstrap">
      <i class="far fa-fw fa-window-maximize"></i>
      <span>Employee</span>
    </a>
    <div id="collapseBootstrap" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
  
        <router-link class="collapse-item" to="/store-employee">Add Employee</router-link>
        <router-link class="collapse-item" to="/employee">All Employee</router-link>

      </div>
    </div>
  </li>


        <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap1"
      aria-expanded="true" aria-controls="collapseBootstrap1">
      <i class="far fa-fw fa-window-maximize"></i>
      <span>Suppliers</span>
    </a>
    <div id="collapseBootstrap1" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
  
        <router-link class="collapse-item" to="/store-supplier">Add Suppliers</router-link>
        <router-link class="collapse-item" to="/supplier">All Suppliers</router-link>

      </div>
    </div>
  </li>


  <hr class="sidebar-divider">
  <div class="sidebar-heading">
    Examples
  </div>
  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePage" aria-expanded="true"
      aria-controls="collapsePage">
      <i class="fas fa-fw fa-columns"></i>
      <span>Pages</span>
    </a>
    <div id="collapsePage" class="collapse" aria-labelledby="headingPage" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Example Pages</h6>
        <a class="collapse-item" href="login.html">Login</a>

      </div>
    </div>
  </li>

  <hr class="sidebar-divider">
  <div class="version" id="version-ruangadmin"></div>
</ul>


  </nav>
</template>