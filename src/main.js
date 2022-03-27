import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import OtpInput from "@bachdgvn/vue-otp-input";

Vue.component("v-otp-input", OtpInput);

// Import Bootstrap an BootstrapVue CSS files (order is important)

import { BootstrapVue } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vuesax/dist/vuesax.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(Vuesax);

// Make Fontawesome available throughout your project

import "@fortawesome/fontawesome-free/css/all.min.css";

// Make Main Css throughout your project
import "./assets/css/style.css";
// Make Card Css throughout your project
import "./assets/css/Card.css";
// Make Buttons Css throughout your project
import "./assets/css/Button.css";
// Make Fonts available throughout your project

import "./assets/Fonts/stylesheet.css";
// import "../src/assets/Css/style.css"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
