<template>
  <div>
    <div class="navbar-menu">
      <div class="navbar-brand-box">
        <b-navbar-brand href="https://id.hapintl.com/" class="header_logo">
          <img src="@/assets/images/logo.png" alt="logo" />
        </b-navbar-brand>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li>
            <router-link class="nav-link" :to="{ name: 'Admin' }">
              <i class="fas fa-cogs"></i>
              <span>Request</span>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'Add' }">
              <i class="fa fa-user-plus"></i>
              <span>Add</span>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'Users' }">
              <i class="fas fa-users"></i>
              <span>Users</span>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'Companies' }">
              <i class="fas fa-sort-amount-up"></i>
              <span>Companies</span>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'Screenings' }">
              <i class="fa fa-desktop"></i>
              <span>Screenings</span>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'Reports' }">
              <i class="far fa-user-circle"></i>
              <span>Reports</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
};
</script>
