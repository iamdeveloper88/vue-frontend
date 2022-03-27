<template>
  <div class="Index_page">
    <section class="home_banner">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="banner_sec_info">
              <h1>
                <span>H<span class="hap_color_heading">A</span>P</span> ID
                Number. Your Supply Chain Due Diligence Report, <br />Insights,
                and more. All Free.
              </h1>
              <a
                href="javascript:void(0)"
                @click="showModal('Request')"
                v-if="!isLoggedIn"
              >
                <!-- HAP ID Info -->
              <b-button
                type="button"
                variant="info"
                >Get Your HAP ID Number</b-button
              >
              </a>
              <b-button
                type="button"
                variant="info"
                @click.prevent="$router.push({ name: 'Request' })"
                v-else-if="isUserType === 'user'"
                >Get Your HAP ID Number</b-button
              >
              <b-button
                type="button"
                variant="info"
                @click.prevent="$router.push({ name: 'ManageRequests' })"
                v-else
                >Manage & View Access Requests</b-button
              >
              <h3>
                Make sure other businesses get a complete and accurate story
                about your business
              </h3>
              <p>
                The HAP ID offers a <span>Free</span> due diligence report and
                insights into how your downstream supply chain partners manage
                the process by which they track materials or products and the
                conditions under which they were produced through the supply
                chain.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="what_you_can_do">
      <b-container>
        <b-row>
          <b-col md="12">
            <h1>What <span>You</span> Can Do</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <div class="flip-card-company" tabIndex="0">
              <div class="flip-card-inner-company">
                <div class="cando_hap_id_number flip-card-front-company">
                  <div class="hap_Id_number_icon">
                    <i class="fas fa-search"></i>
                  </div>
                  <h2>Look up <span>an HAP ID Number</span></h2>
                  <p>
                    Search for your company's or other company's HAP ID Number.
                  </p>
                  <!-- <router-link :to="{ name: 'SearchLook' }"> -->
                  <!-- <b-button
                    type="button"
                    @click="showModal"
                    variant="outline-info"
                  >
                    Search an HAP ID Number <i class="fas fa-arrow-right"></i>
                  </b-button> -->
                  <!-- </router-link> -->
                  <router-link :to="{ name: 'SearchLook' }">
                    <b-button type="button" variant="outline-info">
                      Search an HAP ID Number <i class="fas fa-arrow-right"></i
                    ></b-button>
                  </router-link>
                </div>
                <div class="flip-card-back-company">
                  <div class="hap_Id_number_icon_back">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </div>
                  <h2>Look up an HAP ID Number</h2>
                  <router-link :to="{ name: 'SearchLook' }">
                    Search an HAP ID Number <i class="fas fa-arrow-right"></i
                  ></router-link>
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div tabindex="0" class="flip-card-company request_number_card">
              <div class="flip-card-inner-company">
                <div class="cando_hap_id_number flip-card-front-company">
                  <div class="hap_Id_number_icon">
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <h2>Request <span>an HAP ID Number</span></h2>
                  <p>
                    The HAP ID Number is used to establish your company's HAP
                    file, which can help potential partners and lenders learn
                    more about your supply chain due diligence business
                    processes and assist them in making informed decisions.
                  </p>
                  <router-link :to="{ name: 'Request' }">
                    <b-button type="button" variant="outline-info">
                      Request an HAP ID Number
                      <i class="fas fa-arrow-right"></i>
                    </b-button>
                  </router-link>
                </div>
                <div class="flip-card-back-company">
                  <div class="hap_Id_number_icon_back">
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <h2>Request an HAP ID Number</h2>
                  <router-link :to="{ name: 'Request' }">
                    Request an HAP ID Number <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div tabindex="0" class="flip-card-company cando_hap_business">
              <div class="flip-card-inner-company">
                <div class="cando_hap_id_number flip-card-front-company">
                  <div class="hap_Id_number_icon">
                    <i class="fas fa-sync-alt"></i>
                  </div>
                  <h2><span>Your HAP ID Company Information</span></h2>
                  <p>
                    HAP ID allows participants to collaborate and engage in a
                    cross-industry initiative that focuses on collaborative
                    enhancement of downstream supply chain due diligence
                    practices, pooling leverage, reducing the costs of due
                    diligence and facilitating access to harmonized information
                    on your partners due diligence journey.
                  </p>
                  <router-link
                    :to="{ name: 'CompanyInformation' }"
                    v-if="isLoggedIn"
                  >
                    <b-button type="button" variant="outline-info">
                      HAP ID Info <i class="fas fa-arrow-right"></i>
                    </b-button>
                  </router-link>
                  <a
                    href="javascript:void(0)"
                    @click="showModal('Request')"
                    v-else
                    ><b-button type="button" variant="outline-info">
                      HAP ID Info
                      <i class="fas fa-arrow-right"></i> </b-button
                  ></a>
                </div>
                <div class="flip-card-back-company">
                  <div class="hap_Id_number_icon_back">
                    <i class="fas fa-sync-alt"></i>
                  </div>
                  <h2>HAP ID Info</h2>
                  <router-link
                    :to="{ name: 'CompanyInformation' }"
                    v-if="isLoggedIn"
                  >
                    HAP ID Info <i class="fas fa-arrow-right"></i>
                  </router-link>
                  <a
                    href="javascript:void(0)"
                    @click="showModal('Request')"
                    v-else
                  >
                    HAP ID Info
                  </a>
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div tabindex="0" class="flip-card-company cando_hap_business">
              <div class="flip-card-inner-company">
                <div class="cando_hap_id_number flip-card-front-company">
                  <div class="hap_Id_number_icon">
                    <i class="fas fa-hands-helping"></i>
                  </div>
                  <h2>
                    Get Help
                    <span
                      >Enhancing Your Business Processes for <br />Supply Chain
                      Due Diligence Acts</span
                    >
                  </h2>
                  <p>
                    Having challenges understanding what types of downstream
                    information is expected of you? HAP due diligence teams can
                    provide practical information on what to do, when and what
                    to keep on file, broken down in a way to guide you toward
                    implementing credible due diligence.
                  </p>
                  <!-- <router-link :to="{ name: 'Index' }"> -->
                  <b-button
                    type="button"
                    variant="outline-info"
                    @click="showModal('GetHelp')"
                  >
                    Get Help <i class="fas fa-arrow-right"></i>
                  </b-button>
                  <!-- </router-link> -->
                  <!-- <a href="javascript:void(0)" @click="showModal" v-else>
                    <b-button type="button" variant="outline-info">
                      Get Help <i class="fas fa-arrow-right"></i>
                    </b-button>
                  </a> -->
                </div>
                <div class="flip-card-back-company">
                  <div class="hap_Id_number_icon_back">
                    <i class="fas fa-hands-helping"></i>
                  </div>
                  <h2>
                    Get Help Enhancing Your Business Processes for Supply Chain
                    Due Diligence Acts
                  </h2>
                  <!-- <router-link :to="{ name: 'Index' }"> -->
                  <b-button
                    type="button"
                    variant="outline-info"
                    @click="showModal('GetHelp')"
                  >
                    Get Help <i class="fas fa-arrow-right"></i>
                  </b-button>
                  <!-- </router-link> -->
                  <!-- <a href="javascript:void(0)" @click="showModal" v-else>
                    Get Help
                  </a> -->
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="unique_diligence_story">
      <b-container>
        <b-row>
          <b-col md="12" class="text-center">
            <h1>
              Your <span>H<span class="hap_color_heading">A</span>P</span> ID
              Number is part of your unique due diligence story.
            </h1>
            <h2>
              Manage it regularly so you can confidently take part in the supply
              chain economy
            </h2>
          </b-col>
          <b-col md="12">
            <div class="diligence_story_info diligence_what_id_number">
              <h3>What is an <span>HAP</span> ID Number?</h3>
              <p>
                HAP ID Numbers are used by potential business partners to help
                predict the reliability of how downstream supply chain partners
                manage the process by which they track materials or products and
                the conditions under which they were produced through the supply
                chain. The HAP ID Number is a universal numbering system, used
                to maintain a comprehensive and continually updated view to help
                an enterprise gain information on downstream entities operating
                across the supply chain.
              </p>
            </div>
          </b-col>
          <b-col md="12">
            <div class="diligence_story_info diligence_why_id_number">
              <h3>Why DO I Need an <span>HAP</span> ID Number?</h3>
              <p>
                In many countries, it is your regulatory import obligation to be
                aware of your downstream supply chain activities. The HAP ID
                Number promotes the development of a cross-sector collaborative
                initiative that provides access to traceability information on a
                business, while also raising the level of due diligence
                awareness by developing effective communication, practical tools
                and guidance adapted to enhance the capacity of downstream
                suppliers to recognize and act upon due diligence risks. Sharing
                information can help to increase your business partners
                awareness of your specific progress in the development of
                downstream traceability management systems and bring attention
                to emerging risks more quickly than would be possible for most
                individual enterprises.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="diligence_identity_sce">
      <b-container>
        <b-row>
          <b-col md="12">
            <h1>Your Due Diligence. Your <span>Identity</span></h1>
            <p>
              Your HAP ID Number can help you build the health of your
              downstream traceability systems and better protect you from risks
              Know your potential and raise your due diligence capabilities.
              We'll highlight your key implementation challenges and show you
              ways to prepare and improve.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="government_promote_sec">
      <b-container>
        <b-row class="government_promote_row">
          <b-col lg="9">
            <div class="government_promote_info">
              <h2>
                Government. Promote an enabling environment and level playing
                field
              </h2>
              <p>
                The <span>HAP ID Number</span> may be used as an electronic
                screening aid for federal, state, local and provincial
                government agencies to understand the process by which entities
                involved in export transactions track materials or products and
                the conditions under which they were produced through the supply
                chain, making it easier to understand if additional due
                diligence should be conducted before proceeding.
              </p>
              <p>
                Accessing the data behind the HAP ID number creates an enabling
                environment and level playing field, promoting the development
                of an empowering economic and regulatory environment that
                encourages downstream supply chain entities to implement supply
                chain due diligence and strengthen their capabilities to remain
                competitive. We encourage governments, lenders and insurance
                companies to provide Safe Harbor incentives for pro-active
                entities providing consent to access their HAP ID file.
              </p>
              <p>
                New government agencies can request a meeting to understand more
                about the data collection, methodologies, and risk analysis
                behind the HAP ID.
              </p>
              <div class="government_promote_button">
                <router-link :to="{ name: 'GovernmentMeeting' }">
                  <b-button
                    type="button"
                    class="request_meeting"
                    variant="info"
                  >
                    Request a Government Meeting
                  </b-button>
                </router-link>
                <router-link :to="{ name: 'Index' }">
                  <b-button type="button" variant="info">
                    Visit HAP ID Government Page
                  </b-button>
                </router-link>
              </div>
            </div>
          </b-col>
          <b-col lg="3" align-self="center">
            <div class="government_promote_img">
              <img
                src="@/assets/images/home/through_collaboration.png"
                alt="promote"
              />
            </div>
          </b-col>
        </b-row>
        <b-row class="increase_awareness_row">
          <b-col lg="3" align-self="center">
            <div class="government_promote_img">
              <img
                src="@/assets/images/home/enabling_environment.png"
                alt="promote"
              />
            </div>
          </b-col>
          <b-col lg="9">
            <div class="government_promote_info">
              <h2>
                Industry. Increase awareness and transparency through
                collaboration
              </h2>
              <p>
                The <span>HAP ID Number</span> represents a single source for
                the trade community to follow the facts and quickly understand
                the processes by which downstream entities track materials
                and/or products and the conditions under which they were
                produced through the supply chain.
              </p>
              <p>
                The HAP ID Number is a unique digital identifier that provides
                importers with shared access to a business partner file,
                containing a level of detail required to substantiate if the
                implementation of business processes associated with raw
                material origin, employment standards or green product claims,
                have already occurred or will occur in the immediate future.
                While costs associated with due diligence implementation can
                represent a significant burden for importers and downstream
                supply chain partners alike, providing the trade community with
                knowledge of a business partners due diligence progress and
                governance, will allow both parties to significantly improve
                implementation efficiencies and focus on what matters. The HAP
                ID Number can also be referenced to screen potential business
                partners to help predict the reliability of supply chain due
                diligence or traceability capabilities for the company in
                question. Because of its unique assignment, the HAP ID Number
                supports the international trade community in a scalable
                approach.
              </p>
              <div
                class="government_promote_button"
                v-if="isUserType === 'company'"
              >
                <router-link :to="{ name: 'ManageRequests' }" v-if="isLoggedIn">
                  <b-button
                    type="button"
                    class="request_meeting"
                    variant="info"
                  >
                    Request a Meeting
                  </b-button>
                </router-link>
                <a
                  href="javascript:void(0)"
                  @click="showModal('Request')"
                  v-else
                >
                  <b-button
                    type="button"
                    class="request_meeting"
                    variant="info"
                  >
                    Request a Meeting
                  </b-button>
                </a>
              </div>
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
      :isGetHelp="isGetHelp"
      :userLoginType="loginUserType"
      @click="onLoginHandler($event)"
      @submitOtp="onSubmitOtpHandler($event)"
      @resendOtp="onResendOtp($event)"
      @getHelp="onGetHelp($event)"
    />
  </div>
</template>

<script>
import "@/assets/css/home.css";
import ApiClass from "@/Api/Api";
import LoginModal from "@/components/LoginModal.vue";
export default {
  components: { LoginModal },
  name: "Index",
  data() {
    return {
      modalComponentName: "Request",
      isLoggedIn: localStorage.getItem("userInfo") ? true : false,
      isLoading: false,
      isValidate: false,
      isResend: false,
      isGetHelp: false,
      email: "",
      type: "login",
      loginUserType: "",
      isUserType: localStorage.getItem("userInfo")
        ? localStorage.getItem("userInfo").userType
        : "",
    };
  },
  methods: {
    // ? ********************************************************** On Login modal hit ****************************************************** */
    async onLoginHandler(formData) {
      this.isLoading = true;
      const result = await ApiClass.postRequest("login", false, formData);
      this.isLoading = false;
      if (result.data.status_code === "1") {
        this.$bvModal.hide("modal-center");
        this.email = formData.email;
        this.type = "login";
        this.loginUserType = result.data.data;
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
        `validate_otp/${this.type}/${otpData.userType}`,
        false,
        otpData
      );
      this.isValidate = false;
      if (result.data.status_code === "1") {
        this.isLoggedIn = true;
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
            is_admin: result.data.data.is_admin,
            userEmail: result.data.data.email,
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
    // ? ********************************************************** show the modal ****************************************************** */
    showModal(modalType) {
      this.modalComponentName = modalType;
      this.$bvModal.show("modal-center");
    },
    // ? ********************************************************** Submit the get help data ****************************************************** */
    async onGetHelp(getHelpData) {
      this.isGetHelp = true;
      const result = await ApiClass.postRequest("get_help", false, getHelpData);
      this.isGetHelp = false;
      if (result.data.status_code === "1") {
        this.$bvModal.hide("modal-center");
        return this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Submit",
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
  },
};
</script>
