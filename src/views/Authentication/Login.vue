<template>
  <div
    class="login_page height_layout d-flex align-items-center justify-content-center"
  >
    <b-container>
      <b-row align-h="center" align-v="center">
        <div class="login_logo">
          <router-link to="/">
            <img src="@/assets/images/logo.png" alt="logo" />
          </router-link>
        </div>
        <div class="welcome_cards_layouts">
          <div class="cards_layouts">
            <div class="register_body_info">
              <h2>Welcome!</h2>
              <p>It seems that your are new here. Please provide info below.</p>

              <b-form @submit.prevent="onSubmit" v-if="show">
                <b-form-group
                  id="input-group-3"
                  label="Email Address"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.email"
                    type="email"
                    placeholder="name@email.com"
                    required
                  ></b-form-input>
                </b-form-group>
                <div class="authentication_login">
                  <b-button type="submit" variant="info" v-if="!isLoading"
                    >Continue</b-button
                  >
                  <b-button type="submit" variant="info" disabled v-else>
                    <b-spinner variant="light"></b-spinner>
                  </b-button>
                </div>
                <div class="register-page-link">
                  <p>
                    Not have an account?
                    <router-link to="/register">Register</router-link> here
                  </p>
                </div>
                <div class="authentication_contact">
                  <ul>
                    <li>
                      <a href="javascript:void(0);">Terms and Conditions</a>
                    </li>
                    <li><a href="javascript:void(0);">Privacy Policy</a></li>
                    <li><a href="javascript:void(0);">Contact</a></li>
                  </ul>
                </div>
              </b-form>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ApiClass from "@/Api/Api";
import "@/assets/css/Authentication.css";
// import Login from "@/store/Modules/Login";

export default {
  name: "Login",
  data: () => {
    return {
      form: {
        email: "",
      },
      show: true,
      isLoading: false,
    };
  },
  methods: {
    // async onSubmit() {
    //   this.isLoading = true;
    //   const result = await Login(this.form);
    //   this.isLoading = false;
    //   if (result.status_code === "1") {
    //     this.$vs.notification({
    //       position: "top-right",
    //       progress: "auto",
    //       color: "success",
    //       title: "Login Successful",
    //       text: `${result.message}`,
    //     });
    //     return this.$router.push({
    //       name: "VerifyOtp",
    //       params: {
    //         email: result.email,
    //         type: "login",
    //         userType: result.userType,
    //       },
    //     });
    //   }
    //   return this.$vs.notification({
    //     position: "top-right",
    //     progress: "auto",
    //     color: "danger",
    //     title: "Error",
    //     text: `${result.message}`,
    //   });
    // },
    async onSubmit() {
      this.isLoading = true;
      var result = await ApiClass.postRequest("login", false, this.form);
      this.isLoading = false;
      if (result.data.status_code == "1") {
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Login Successful",
          text: `${result.data.message}`,
        });
        return this.$router.push({
          name: "VerifyOtp",
          params: {
            email: this.form.email,
            type: "login",
            userType: result.data.data,
          },
        });
      }

      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: `${result.data.message}`,
      });
    },
    onReset() {
      // Reset our form values
      this.form.email = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  // mounted() {
  //   console.log('here');
  //   console.log(this.$router.query)
  // }
};
</script>
