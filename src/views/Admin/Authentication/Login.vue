<template>
  <div
    class="login_page height_layout d-flex align-items-center justify-content-center"
  >
    <b-container>
      <b-row align-h="center" align-v="center">
        <div class="login_logo">
          <router-link to="/">
            <!-- <img src="../../assets/images/logo.png" alt="logo" /> -->
          </router-link>
        </div>
        <div class="welcome_cards_layouts">
          <div class="cards_layouts">
            <div class="register_body_info">
              <h2>Welcome Admin!</h2>

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
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-3"
                  label="Password"
                  label-for="input-4"
                >
                  <b-form-input
                    id="input-4"
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
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
                <!-- <div class="register-page-link">
                  <p>
                    Not have an account?
                    <router-link to="/register">Register</router-link> here
                  </p>
                </div> -->
                <div class="authentication_contact">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Terms and Conditions</a>
                    </li>
                    <li><a href="javascript:void(0)">Privacy Policy</a></li>
                    <li><a href="javascript:void(0)">Contact</a></li>
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

export default {
  name: "Login",
  data: () => {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
      isLoading: false,
    };
  },
  methods: {
    async onSubmit() {
      this.isLoading = true;
      var result = await ApiClass.postRequest("admin_login", false, this.form);
      this.isLoading = false;
      if (result.data.status_code === "1") {
        console.log('here');
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Login Successful",
          text: `${result.data.message}`,
        });

        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            token: result.data.data.token,
            is_admin: result.data.data.is_admin,
            userType: result.data.data.user_type,
            userEmail: result.data.data.email
          })
        );
        return this.$router.push("/admin");
      }

      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Something Wrong",
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
};
</script>
