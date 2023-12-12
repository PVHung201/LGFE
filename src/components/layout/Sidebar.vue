<template>
      <nav id="sidebar" v-show="$route.path === '/' || $route.path === '/register' || $route.path === '/forget' ?false : true" style="display:none">

<ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div class="sidebar-brand-icon">
      <img src="{{asset('backend/img/logo/logo2.png')}}">
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




        <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap2"
      aria-expanded="true" aria-controls="collapseBootstrap2">
      <i class="far fa-fw fa-window-maximize"></i>
      <span>Category</span>
    </a>
    <div id="collapseBootstrap2" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
  
        <router-link class="collapse-item" to="/store-category">Add Category</router-link>
        <router-link class="collapse-item" to="/category">All Category</router-link>

      </div>
    </div>
  </li>




        <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap4"
      aria-expanded="true" aria-controls="collapseBootstrap4">
      <i class="far fa-fw fa-window-maximize"></i>
      <span>Products</span>
    </a>
    <div id="collapseBootstrap4" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
  
        <router-link class="collapse-item" to="/store-product">Add Products</router-link>
        <router-link class="collapse-item" to="/product">All Products</router-link>

      </div>
    </div>
  </li>



  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap3"
      aria-expanded="true" aria-controls="collapseBootstrap3">
      <i class="far fa-fw fa-window-maximize"></i>
      <span>Expense</span>
    </a>
    <div id="collapseBootstrap3" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
  
        <router-link class="collapse-item" to="/store-expense">Add Expense</router-link>
        <router-link class="collapse-item" to="/expense">All Expense</router-link>

      </div>
    </div>
  </li>




  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap44"
      aria-expanded="true" aria-controls="collapseBootstrap44">
      <i class="far fa-fw fa-window-maximize"></i>
      <span>Customers</span>
    </a>
    <div id="collapseBootstrap44" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
  
        <router-link class="collapse-item" to="/store-customer">Add Customers</router-link>
        <router-link class="collapse-item" to="/customer">All Customers</router-link>

      </div>
    </div>
  </li>



        <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap6"
      aria-expanded="true" aria-controls="collapseBootstrap6">
      <i class="far fa-fw fa-window-maximize"></i>
      <span>Salary</span>
    </a>
    <div id="collapseBootstrap6" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
  
        <router-link class="collapse-item" to="/given-salary">Add Salary</router-link>
        <router-link class="collapse-item" to="/salary">All Salary</router-link>

      </div>
    </div>
  </li>


  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap7"
      aria-expanded="true" aria-controls="collapseBootstrap7">
      <i class="far fa-fw fa-window-maximize"></i>
      <span>Orders</span>
    </a>
    <div id="collapseBootstrap7" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
  
        <router-link class="collapse-item" to="/order">Today Orders</router-link>
        <router-link class="collapse-item" to="/searchorder">Search</router-link>

      </div>
    </div>
  </li>






  <li class="nav-item">
  <router-link class="nav-link" to="/stock">
      <i class="fab fa-fw fa-wpforms"></i>
      <span>Stock</span>
      </router-link>
  </li>
  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTable" aria-expanded="true"
      aria-controls="collapseTable">
      <i class="fas fa-fw fa-table"></i>
      <span>Reports</span>
    </a>
    <div id="collapseTable" class="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <router-link class="collapse-item" to="simple-tables.html">Report One</router-link>
        <router-link class="collapse-item" to="datatables.html">Report Two</router-link>
      </div>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="ui-colors.html">
      <i class="fas fa-fw fa-palette"></i>
      <span>UI Colors</span>
    </a>
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
        <a class="collapse-item" href="register.html">Register</a>
        <a class="collapse-item" href="404.html">404 Page</a>
        <a class="collapse-item" href="blank.html">Blank Page</a>
      </div>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="charts.html">
      <i class="fas fa-fw fa-chart-area"></i>
      <span>Charts</span>
    </a>
  </li>
  <hr class="sidebar-divider">
  <div class="version" id="version-ruangadmin"></div>
</ul>


  </nav>
</template>>