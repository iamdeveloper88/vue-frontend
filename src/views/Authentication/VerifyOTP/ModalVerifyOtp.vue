<template>
  <div>
        <div class="welcome_login_layouts">
          <div class="cards_layouts">
            <div class="register_body_info different_email">
              <h6>
                <router-link :to="this.type">
                  <i class="fas fa-arrow-left pl-1"></i> Try a different email
                </router-link>
              </h6>
              <h2>Enter the code!</h2>
              <p>
                A code has been sent to this email address:
                <span>{{ email }}</span>
              </p>

              <b-form @submit.prevent="onSubmit" v-if="show">
                <div class="code_input_login">
                  <v-otp-input
                    ref="otpInput"
                    input-classes="otp-input"
                    separator=""
                    :num-inputs="4"
                    :should-auto-focus="true"
                    :is-input-num="true"
                    @on-change="handleOnChange"
                  />
                </div>
                <div class="authentication_code">
                  <b-button type="submit" variant="info" v-if="!isValidate"
                    >Validate</b-button
                  >
                  <b-button type="submit" variant="info" disabled v-else>
                    <b-spinner variant="light"></b-spinner>
                  </b-button>
                </div>
                <div class="login_resend_code">
                  <p>Didn't receive the code?</p>
                  <h6>
                    <!-- <router-link to="/" @click.prevent="onResend">Resend</router-link> -->
                    <b-button
                      type="button"
                      variant="info"
                      @click="onResend"
                      v-if="!isResend"
                      >Resend</b-button
                    >
                    <b-button type="button" variant="info" disabled v-else>
                      <b-spinner variant="light"></b-spinner>
                    </b-button>
                  </h6>
                </div>
              </b-form>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import "@/assets/css/Authentication.css";
// import ApiClass from "@/Api/Api";
export default {
  name: "VerifyOtp",
  // props: ["email", "type", "isLoading", ""],
  props: {
    email: String,
    type: String,
    isValidate: Boolean,
    isResend: Boolean,
    onEnterOtp: Function,
    userLoginType: String
  },
  data: () => {
    return {
      form: {
        otp: "",
      },
      show: true,
    };
  },
  methods: {
    // ? ******************************************************* on submit the OTP **************************************************************** */
    onSubmit() {
      this.isValidate;
      const data = {
        otp: this.form.otp,
        email: this.email,
        userType: this.userLoginType
      };
      this.$emit("onEnterOtp", data);
    },
    // ? ******************************************************* on entering the otp **************************************************************** */
    handleOnChange(value) {
      this.form.otp = value;
      if (this.form.otp.trim().toString().length === 4) {
        this.onSubmit();
      }
    },
    // ? ******************************************************* resend the OTP **************************************************************** */
    onResend() {
      this.isResend;
      const data = { email: this.email, type: this.type };
      this.$emit("otpResend", data);
    },
  },
  // methods: {
  // // ******************************************************* on submit the OTP **************************************************************** */
  // async onSubmit() {
  //   this.isValidate = true;
  //   var data = {
  //     otp: this.form.otp,
  //     email: this.email,
  //   };
  //   var result = await ApiClass.postRequest(
  //     `validate_otp/${this.type}`,
  //     false,
  //     data
  //   );
  //   this.isValidate = false;
  //   if (result.data.status_code == "1") {
  //     this.$vs.notification({
  //       position: "top-right",
  //       progress: "auto",
  //       color: "success",
  //       title: "Login Successful",
  //       text: `${result.data.message}`,
  //     });
  //     // localStorage.setItem("token", result.data.data.token);
  //     return localStorage.setItem('userInfo', JSON.stringify({ token:  result.data.data.token, userType: result.data.data.user_type}));
  //     // return this.$router.push("/dashboard");
  //   }
  //   return this.$vs.notification({
  //     position: "top-right",
  //     progress: "auto",
  //     color: "danger",
  //     title: "Error",
  //     text: result.data.message,
  //   });
  // },
  // // ******************************************************* on reset the form **************************************************************** */
  // onReset() {
  //   // Reset our form values
  //   this.form.otp = "";
  //   this.show = false;
  //   this.$nextTick(() => {
  //     this.show = true;
  //   });
  // },
  // // ******************************************************* execute the recaptcha widget **************************************************************** */
  // executeRecaptcha() {
  //   this.$refs.recaptcha.execute();
  // },

  // // ******************************************************* resend the OTP **************************************************************** */
  // async onResend() {
  //   this.isResend = true;
  //   var data = { email: this.email, type: this.type };
  //   var result = await ApiClass.postRequest(`resend_otp`, false, data);
  //   this.isResend = false;
  //   if (result.data.status_code == "1") {
  //     return this.$vs.notification({
  //       position: "top-right",
  //       progress: "auto",
  //       color: "success",
  //       title: "OTP Resend",
  //       text: `${result.data.message}`,
  //     });
  //   }

  //   return this.$vs.notification({
  //     position: "top-right",
  //     progress: "auto",
  //     color: "danger",
  //     title: "Error",
  //     text: `${result.data.message}`,
  //   });
  // },
  // // ******************************************************* on entering the otp **************************************************************** */
  // handleOnChange(value) {
  //   this.form.otp = value;
  //   if(this.form.otp.toString().length == 4) {
  //     this.onSubmit();
  //   }
  // },
  // },
};
</script>
