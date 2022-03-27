<template>
  <div>
    <div class="welcome_login_layouts">
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
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ApiClass from "@/Api/Api";
import "@/assets/css/Authentication.css";

export default {
  name: "ModalLoginForm",
  props: { isLoading: Boolean, onLogin: Function },
  data: () => {
    return {
      form: {
        email: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
      this.isLoading
      this.$emit('onLogin', this.form);
      // var result = await ApiClass.postRequest("login", false, this.form);
      // this.isLoading = false;
      // if (result.data.status_code == "1") {
      //   this.$bvModal.hide("modal-center");
      //   this.$vs.notification({
      //     position: "top-right",
      //     progress: "auto",
      //     color: "success",
      //     title: "Success",
      //     text: result.data.message,
      //   });
      //   this.modalComponentName = "VerifyOtp";
      //   return this.$bvModal.show("modal-center");
      // }

      // return this.flashMessage.error({
      //   title: "Error",
      //   message: result.data.message,
      // });
    },
    onReset() {
      // Reset our form values
      this.form.email = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    // execute the recaptcha widget
    executeRecaptcha() {
      this.$refs.recaptcha.execute();
    },
  },
};
</script>
