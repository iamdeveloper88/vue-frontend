<template>
  <div
    class="login_page height_layout d-flex align-items-center justify-content-center"
  >
    <b-container>
      <b-row align-h="center" align-v="center">
        <div class="login_logo">
          <router-link to="/">
            <img src="../../assets/images/logo.png" alt="logo" />
          </router-link>
        </div>
        <div class="welcome_cards_layouts">
          <div class="cards_layouts">
            <div class="register_body_info">
              <h2>Welcome!</h2>
              <p>It seems that your are new here. Please provide info below.</p>

              <b-form @submit.prevent="onSubmit" v-if="show">
                <b-form-group
                  id="input-group-1"
                  label="Full Name"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.full_name"
                    placeholder="John Show"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Business Name"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.business_name"
                    placeholder="Company Name"
                    required
                  ></b-form-input>
                </b-form-group>
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
                <!-- <button @click="executeRecaptcha">execute recaptcha</button> -->
                <!-- listen to verify event emitted by the recaptcha component -->
                <div class="authentication_recaptcha">
                  <Recaptcha />
                </div>
                <div class="authentication_Code">
                  <b-button type="submit" variant="info" v-if="!isLoading"
                    >Get Authentication Code</b-button
                  >
                  <b-button type="submit" variant="info" disabled v-else>
                    <b-spinner variant="light"></b-spinner>
                  </b-button>
                </div>
                <div class="register-page-link">
                  <p>
                    Already have an account?
                    <router-link to="/login">Login</router-link> here
                  </p>
                </div>
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
import Recaptcha from "@/components/Recaptcha/Recaptcha.vue";

export default {
  components: { Recaptcha },
  name: "Register",
  data: () => {
    return {
      form: {
        full_name: "",
        business_name: "",
        email: "",
      },
      show: true,
      isLoading: false,
    };
  },
  methods: {
    async onSubmit() {
      this.isLoading = true;
      var result = await ApiClass.postRequest("register", false, this.form);
      this.isLoading = false;
      if (result.data.status_code == "1") {
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Registration Successful",
          text: `${result.data.message}`,
        });
        return this.$router.push({
          name: "VerifyOtp",
          params: {
            email: this.form.email,
            type: "register",
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
      this.form.full_name = "";
      this.form.business_name = "";
      this.form.email = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
