<template>
  <div>
    <header class="header">
      <b-container>
        <b-row>
          <b-navbar toggleable="lg" type="light">
            <!-- <b-navbar-brand href="https://id.hapintl.com/" class="header_logo"> -->
            <b-navbar-brand
              :to="{ path: '/index' }"
              class="header_logo"
              v-if="userType === 'user'"
            >
              <img src="@/assets/images/logo.png" alt="logo" />
            </b-navbar-brand>
            <b-navbar-brand
              :to="{ path: '/company/index' }"
              class="header_logo"
              v-else
            >
              <img src="@/assets/images/logo.png" alt="logo" />
            </b-navbar-brand>
            <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
            <b-navbar-toggle target="nav-collapse"
              ><i class="fas fa-outdent"></i><i class="fas fa-times"></i
            ></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="m-0">
                <!-- <b-nav-item href="https://id.hapintl.com/">Home</b-nav-item> -->
                <b-nav-item @click="onIndexHandler">Home</b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item v-if="isLoggedIn">{{ userEmail }}</b-nav-item>
                <b-nav-item @click="onAccountHandler" v-if="isLoggedIn"
                  >My Account</b-nav-item
                >
                <b-nav-item
                  :to="{ name: 'CompanyInformation' }"
                  v-if="isLoggedIn && userType === 'company'"
                  >Profile</b-nav-item
                >
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
              </b-navbar-nav>

              <!-- Right aligned nav items -->
            </b-collapse>
          </b-navbar>
        </b-row>
      </b-container>
    </header>
  </div>
</template>

<script>
import ApiClass from "@/Api/Api.js";
import "@/assets/css/Header.css";
export default {
  name: "Header",
  data: () => {
    return {
      isLoggedIn: localStorage.getItem("userInfo") ? true : false,
      userType: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo")).userType
        : "",
      userEmail: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo")).userEmail
        : "",
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
        this.isLoggedIn = false;
        this.userType = "";
        this.userEmail = "";
        localStorage.clear();
        return this.$router.push("/");
      }

      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: `Invalid Data!`,
      });
    },
    onAccountHandler() {
      if (this.userType === "user") {
        return this.$router.push({ name: "SupplyChain" }).catch(() => {});
      }

      return this.$router.push({ path: "/company/dashboard" }).catch(() => {});
    },

    onIndexHandler() {
      if (this.userType === "user") {
        return this.$router.push({ path: "/index" }).catch(() => {});
      }

      return this.$router.push({ path: "/company/index" }).catch(() => {});
    },
  },
};
</script>
