<template>
  <div>
    <div class="welcome_login_layouts">
      <div class="cards_layouts">
        <div class="register_body_info">
          <h2>Welcome!</h2>
          <p>It seems that your are new here. Please provide info below.</p>

          <b-form @submit.prevent="onGetHelpHandler" v-if="show">
            <b-form-group id="user-group-1" label="Name" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                placeholder="Enter Your Name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Email Address"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                placeholder="name@email.com"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-3"
              label="Message"
              label-for="input-3"
            >
              <b-form-textarea
                class="model-form-index" 
                id="input-3"
                placeholder="Enter your message here"
                v-model="form.message"
                rows="3"
                no-resize
              ></b-form-textarea>
            </b-form-group>
            <div class="authentication_login">
              <b-button type="submit" variant="info" v-if="!isGetHelp"
                >Continue</b-button
              >
              <b-button type="submit" variant="info" disabled v-else>
                <b-spinner variant="light"></b-spinner>
              </b-button>
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
  name: "GetHelp",
  props: {
    isGetHelp: Boolean,
    getHelp: Function
  },
  data: () => {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      show: true,
    };
  },
  methods: {
    onGetHelpHandler() {
      this.isGetHelp
      this.$emit('getHelp', this.form);
    }
  }
};
</script>
