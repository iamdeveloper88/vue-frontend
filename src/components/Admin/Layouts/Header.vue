<template>
  <div>
    <div class="page-topbar">
      <header class="admin-header">
        <b-container fluid>
          <b-row>
            <div class="header-navbar">
              <div class="admin-home-link">
                <b-nav-item href="https://id.hapintl.com/">Home</b-nav-item>
              </div>
              <div class="admin-login-link">
                <b-nav-item
                  class="header_login"
                  v-if="isLoggedIn"
                  @click.prevent="onLogout"
                >
                  <i class="fas fa-unlock"></i> Logout
                </b-nav-item>
                <b-nav-item class="header_login" v-else>
                  <router-link :to="{ name: 'Login' }">
                    <i class="fas fa-lock"></i> Login
                  </router-link>
                </b-nav-item>
              </div>
            </div>
          </b-row>
        </b-container>
      </header>
    </div>
  </div>
</template>


<script>
import "@/assets/css/Admin/Main.css";
import ApiClass from "@/Api/Api.js";
export default {
  name: "Header",
  data: () => {
    return {
      isLoggedIn: localStorage.getItem("userInfo"),
    };
  },
  methods: {
    async onLogout() {
      var result = await ApiClass.deleteRequest("logout", true);
      if (result.data.status_code === "1") {
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Success",
          text: `Logout Successfully`,
        });
        localStorage.clear();
        return this.$router.push("/login");
      }

      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: `Invalid Data!`,
      });
    },
  },
};
</script>

