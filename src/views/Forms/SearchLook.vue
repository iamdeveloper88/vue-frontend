<template>
  <div>
    <section class="hap_id_number_pages">
      <b-container>
        <b-row>
          <b-col md="12">
            <h1>
              Look up an
              <span
                ><span>H<span class="hap_color_heading">A</span>P</span> ID
                Number</span
              >
            </h1>
            <p>Please enter the exact ID Number below</p>
            <div class="search_look_up">
              <b-input-group>
                <b-form-input v-model="search" placeholder="HAP ID Number">
                </b-form-input>
              </b-input-group>
              <b-button
                type="button"
                variant="outline-info"
                class="search-look-btn"
                @click.prevent="onSearchHandler"
              >
                <i class="fas fa-search"></i>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="hap_id_number_results"
      v-if="Object.keys(hapIdData).length !== 0"
    >
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="look_results_title">
              <h5>Here Are Your Result</h5>
            </div>
            <div class="cards_layouts hap_id_number_layouts">
              <div class="hap_id_number_address">
                <div class="results_image">
                  <img
                    src="@/assets/images/hap-number/results-img.png"
                    alt="Street"
                  />
                </div>
                <div class="results_address hap_number_address_title">
                  <h3>{{ hapIdData.factory }}</h3>
                  <li>
                    <i class="fas fa-map-marker-alt"></i>
                      <!-- `${hapIdData.address}, ${hapIdData.zip_code}, ${hapIdData.country}, ${hapIdData.state}` -->
                    {{
                      `${hapIdData.address}, ${hapIdData.country && hapIdData.country.name}, ${hapIdData.state && hapIdData.state.name}`
                    }}
                  </li>
                  <!-- <li>
                    <i class="fas fa-phone-square"></i>
                    <a :href="`tel:${hapIdData.business_number}`">{{
                      hapIdData.business_number
                    }}</a>
                  </li> -->
                  <li>
                    <span>Date Created:</span>
                    <!-- <label for="date">12/02/2022</label> -->
                    <label for="date">{{ hapIdData.created_at }}</label>
                  </li>
                </div>
                <div class="results_links">
                  <b-button
                    type="submit"
                    variant="info"
                    @click.prevent="onSendRequestHandler(hapIdData.id)"
                    v-if="isLoggedIn && !isAlreadyExist"
                    >Request Access <i class="fas fa-arrow-right"></i
                  ></b-button>
                  <b-button
                    type="button"
                    variant="outline-info"
                    class="search-look-btn"
                    @click="showModal"
                    v-else-if="!isAlreadyExist"
                  >
                    Request Access <i class="fas fa-arrow-right"></i>
                  </b-button>

                  <span v-else>
                    <b-button
                      type="button"
                      variant="outline-info"
                      class="search-look-btn"
                    >
                      Request Sent <i class="fas fa-arrow-right"></i>
                    </b-button>
                  </span>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="hap_id_number_results hap_id_number_connections" v-else>
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="look_results_title text-center">
              <h4>{{ dataMessage }}</h4>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <LoginModal
      :isFooter="true"
      :componentName="modalComponentName"
      :isLoading="isLoading"
      :isValidate="isValidate"
      :isResend="isResend"
      :email="email"
      :type="type"
      @click="onLoginHandler($event)"
      @submitOtp="onSubmitOtpHandler($event)"
      @resendOtp="onResendOtp($event)"
    />
  </div>
</template>

<script>
import "@/assets/css/search_look.css";
import ApiClass from "@/Api/Api";
import LoginModal from "@/components/LoginModal.vue";
export default {
  name: "SearchLook",
  components: { LoginModal },
  //  company hap ID after scan the company qr code
  props: { companyHapId: String },
  data() {
    return {
      search: "",
      modalComponentName: "Request",
      isLoggedIn: localStorage.getItem("userInfo") ? true : false,
      isLoading: false,
      isValidate: false,
      isResend: false,
      email: "",
      type: "login",
      hapIdData: {},
      dataMessage: "Search an HAP ID Number",
      isAlreadyExist: false,
    };
  },
  // * ********************************************************** mounted  ****************************************************** */
  mounted() {
    if (this.companyHapId !== undefined) {
      this.search = this.companyHapId;
      this.onSearchHandler();
    }
  },
  methods: {
    // ? ********************************************************** On Send the Access Request ****************************************************** */
    async onSendRequestHandler(comp_id) {
      this.isLoading = true;
      const result = await ApiClass.postRequest(`request/access/${comp_id}`);
      if (result.data.status_code === "1") {
        this.isAlreadyExist = true;
        return this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Success",
          text: result.data.message,
        });
      }
      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: result.data.message,
      });
    },
    // ? ********************************************************** On Login modal hit ****************************************************** */
    async onLoginHandler(formData) {
      this.isLoading = true;
      const result = await ApiClass.postRequest("login", false, formData);
      this.isLoading = false;
      if (result.data.status_code === "1") {
        this.$bvModal.hide("modal-center");
        this.email = formData.email;
        this.type = "login";
        this.modalComponentName = "VerifyOtp";
        this.$bvModal.show("modal-center");
        return this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Success",
          text: result.data.message,
        });
      }
      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: result.data.message,
      });
    },
    // ? ********************************************************** On Resend the OTP ****************************************************** */
    async onResendOtp(resendData) {
      this.isResend = true;
      const result = await ApiClass.postRequest(
        "resend_otp",
        false,
        resendData
      );
      this.isResend = false;
      if (result.data.status_code === "1") {
        return this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Success",
          text: result.data.message,
        });
      }
      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: result.data.message,
      });
    },
    // ? ********************************************************** On Submit the OTP ****************************************************** */
    async onSubmitOtpHandler(otpData) {
      this.isValidate = true;
      const result = await ApiClass.postRequest(
        `validate_otp/${this.type}`,
        false,
        otpData
      );
      if (result.data.status_code === "1") {
        this.$bvModal.hide("modal-center");
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Success",
          text: result.data.message,
        });
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            token: result.data.data.token,
            userType: result.data.data.user_type,
          })
        );
        return window.location.reload();
      }
      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: result.data.message,
      });
    },
    // ? ********************************************************** On search a HAP ID ****************************************************** */
    async onSearchHandler() {
      const result = await ApiClass.getRequest(
        `company_hap_id/${this.search}`,
        this.isLoggedIn
      );
      if (result.data.status_code === "1") {
        this.search = "";
        if (Object.keys(result.data.data).length === 0) {
          return (this.dataMessage = "No ID found");
        }
        this.isAlreadyExist = result.data.data.isAlreadyExist;
        return (this.hapIdData = result.data.data);
      }
      return (this.dataMessage = result.data.message);
    },
    // ? ********************************************************** show the modal ****************************************************** */
    showModal() {
      this.modalComponentName = "Request";
      this.$bvModal.show("modal-center");
    },
  },
};
</script>
