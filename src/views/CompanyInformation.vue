<template>
  <div>
    <section class="hap_id_number_pages" id="company-information">
      <b-container>
        <b-row>
          <b-col md="12">
            <h1>
              <span v-if="isUserType === 'company'">Update your </span>
              <span
                ><span>H<span class="hap_color_heading">A</span>P</span> ID
                Company Information</span
              >
            </h1>
            <p>
              HAP due diligence teams can provide practical information on what
              to do, when and what to keep on file, broken down in a way to
              guide you toward implementing credible due diligence. We do this
              by examining and identifying which ways your structure and
              sourcing practices can impede or enhance your capacity to
              implement meaningful due diligence. While companies might face
              different types of obstacles when implementing due diligence, HAP
              analysis will help you understand which current characteristics
              will enable you to facilitate your due diligence process and how
              to use these strengths to your advantage.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="hap_id_number_results" v-if="isInformation">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="cards_layouts hap_id_number_layouts">
              <div class="hap_id_number_address">
                <div class="results_image">
                  <img
                    src="@/assets/images/hap-number/company-img.png"
                    class="circle"
                    alt="Street"
                  />
                  <div
                    class="qr-code-img"
                    @click="$bvModal.show('modal-centers')"
                  >
                    <img
                      src="@/assets/images/hap-number/qr-code.png"
                      alt="qr-code"
                    />
                    <p>
                      {{ isUserType === "company" ? "My" : "Your HAP ID" }} QR
                      code
                    </p>
                  </div>
                </div>
                <div class="results_address hap_number_address_title">
                  <h6>HAP ID: {{ companyInfo.hap_id_number }}</h6>
                  <h3>{{ companyInfo.factory }}</h3>
                  <li>
                    <!-- <i class="fas fa-map-marker-alt"></i> Street Name, No., Zip,
                    City, State, Country -->
                    <i class="fas fa-map-marker-alt"></i>
                    <!-- , ${companyInfo.zip_code} , ${companyInfo.business_number}-->
                    {{
                      `${companyInfo.address}, ${companyInfo.city}, ${
                        companyInfo.state && companyInfo.state.name
                      }, ${companyInfo.country && companyInfo.country.name}`
                    }}
                  </li>
                  <li>
                    <span>Date Created:</span>
                    <!-- <label for="date">12/02/2022</label> -->
                    <label for="date">{{ createdAtInfo }}</label>
                  </li>
                  <li>
                    <b-button
                      type="button"
                      @click="$bvModal.show('modal-center')"
                      class="edit_profile"
                      v-if="isUserType === 'company'"
                      ><i class="fas fa-edit"></i> Edit Profile</b-button
                    >
                  </li>
                </div>
                <div class="company_images">
                  <div
                    class="company_image_edit"
                    v-for="companyImage in companyImages"
                    :key="companyImage.id"
                  >
                    <!-- http://192.168.1.13/images/company/1646137611.png -->
                    <!-- :src="`http://13.233.5.19/backend/public/images/company/${companyImage.image}`" -->
                    <img
                      :src="`http://192.168.1.14:80/images/company/${companyImage.image}`"
                      alt="Street"
                    />
                    <div
                      class="img-edit-remove"
                      v-if="isUserType === 'company'"
                    >
                      <b-form-file
                        v-model="image"
                        id="file-small"
                        size="sm"
                        accept="image/*"
                        @change="onChangeImageHandler(companyImage.id, $event)"
                      ></b-form-file>
                      <p>Edit</p>
                      |
                      <!-- <button @click.prevent="on" >Edit</router-link> | -->
                      <!-- <router-link to="">Remove</router-link> -->
                      <button
                        @click.prevent="onRemoveImage(companyImage.id)"
                        v-if="!isRemoving"
                      >
                        Remove
                      </button>

                      <button disabled v-else>
                        <b-spinner variant="dark"></b-spinner>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="report-history-title">
              <h2>Report History</h2>
            </div>
          </b-col>
          <b-col md="12">
            <div class="report-history-table">
              <div class="table-responsive">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Activity Type</th>
                      <th scope="col">Product Supply Chain Type</th>
                      <th scope="col">Outcome/Result</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jan 02 2022</td>
                      <td>Record Verification</td>
                      <td>Cotton - Apparel</td>
                      <td>List of the supply chain</td>
                      <td>
                        <span class="badge rounded-pill bg-success"
                          >Success</span
                        >
                      </td>
                    </tr>
                    <tr style="height: 10px; bg-color: #fff"></tr>
                    <tr>
                      <td>Jan 02 2022</td>
                      <td>Record Verification</td>
                      <td>Cotton - Apparel</td>
                      <td>Documentation to support</td>
                      <td>
                        <span class="badge rounded-pill bg-danger">Failed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="report-history-title">
              <h2>Inquiries</h2>
            </div>
            <div class="company-inquiries" v-if="inquiries.length !== 0">
              <b-row>
                <b-col lg="6">
                  <div class="company-inquiries-info">
                    <b-row v-for="inquiry in inquiries" :key="inquiry.id">
                      <b-col md="6">
                        <li>
                          <span>Date Created:</span>
                          <label for="created-date">{{
                            inquiry.created_at
                          }}</label>
                        </li>
                      </b-col>
                      <b-col md="6">
                        <li>
                          <span>Company Name:</span>
                          <label for="company-name">{{
                            inquiry.user && inquiry.user.business_name
                          }}</label>
                        </li>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
            </div>
            <div class="company-inquiries" v-else>
              <b-row>
                <b-col lg="6">
                  <div class="company-inquiries-info">
                    <b-row>
                      <b-col md="6">
                        <li>
                          <h5 class="mb-0">No inquiries found</h5>
                        </li>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="hap_id_number_results hap_id_number_connections" v-else>
      <b-container>
        <b-row>
          <b-col>
            <div class="look_results_title text-center">
              <h4>No Company Information found</h4>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <Modal
      :isFooter="true"
      :componentName="'Request'"
      :companyData="companyInfo"
      ref="checkClicked"
      :size="'lg'"
    />
    <QRCode
      :isFooter="true"
      :value="`http://192.168.1.14:8080/scan_qr/${companyInfo.id}/${isUserType}`"
    />
  </div>
</template>

<script>
import "@/assets/css/Information.css";
import Modal from "@/views/Forms/Modal.vue";
import QRCode from "@/components/Modal/QRCode.vue";
import ApiClass from "@/Api/Api";
export default {
  components: { Modal, QRCode },
  props: ["companyId"],
  name: "CompanyInformation",
  data() {
    return {
      image: null,
      createdAtInfo: {},
      companyInfo: {},
      fullInfo: {},
      isInformation: true,
      isLoggedIn:
        JSON.parse(localStorage.getItem("userInfo")) !== null ? true : false,
      isUserType: JSON.parse(localStorage.getItem("userInfo")).userType
        ? JSON.parse(localStorage.getItem("userInfo")).userType
        : "",
      // isUserType: "",
      inquiries: [],
      isInquiries: true,
      companyImages: [],
      isRemoving: false,
    };
  },
  methods: {
    // ? ******************************************************************* Request the information ********************************************************* */
    async getInformation() {
      const result = await ApiClass.getRequest(`companies/information`);
      if (result.data.status_code === "1") {
        this.createdAtInfo = result.data.data.created_at;
        this.companyImages = result.data.data.company_images;
        if (result.data.data.access_requests.length > 0) {
          this.inquiries = result.data.data.access_requests;
        } else {
          this.isInquiries = false;
        }
        return (this.companyInfo = result.data.data);
      }
      return (this.isInformation = false);
    },
    // ? ******************************************************************* Request the specific information ********************************************************* */
    async getSpecificInformation() {
      const result = await ApiClass.getRequest(
        `user/connection_information/${this.$route.params.companyId}`
      );
      if (result.data.status_code === "1") {
        this.companyInfo = result.data.data.company;
        this.createdAtInfo = result.data.data.created_at;
        this.companyImages = result.data.data.company.company_images;
        return (this.fullInfo = result.data.data);
      }

      return (this.isInformation = false);
    },
    // ? ******************************************************************* User Access Company Inquiries ********************************************************* */
    async allInquiries() {
      const result = await ApiClass.getRequest(
        `user/connection_inquiries/${this.$route.params.companyId}`
      );
      if (result.data.status_code === "1") {
        this.inquiries = result.data.data;
      }

      return (this.isInquiries = false);
    },
    // ? ******************************************************************* Remove the image ************************************************************ */
    async onRemoveImage(id) {
      // this.isRemoving = true;
      const result = await ApiClass.postRequest(`companies/remove_image/${id}`);
      // this.isRemoving = false;
      if (result.data.status_code === "1") {
        this.getInformation();
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
    // ? ******************************************************************* change the image ************************************************************ */
    async onChangeImageHandler(id, e) {
      this.image = e.target.files[0];
      let formData = new FormData();
      formData.append("image", this.image);
      let header = {
        "Content-Type": `multipart/form-data;boundary=${Math.random()
          .toString()
          .substr(2)}"`,
      };
      const result = await ApiClass.postRequest(
        `companies/update_image/${id}`,
        true,
        formData,
        header
      );
      if (result.data.status_code === "1") {
        this.getInformation();
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
    // ? ******************************************************************* Scan Qr Data ************************************************************ */
    async getScannedCompanyInfo() {
      const result = await ApiClass.getRequest(
        `scanned_company_info/${this.$route.params.companyHapId}`,
        false
      );
      if (result.data.status_code === "1") {
        this.companyInfo = result.data.data;
        this.createdAtInfo = result.data.data.created_at;
        this.companyImages = result.data.data.company_images;
        return (this.fullInfo = result.data.data);
      }

      return (this.isInformation = false);
    },
  },
  mounted() {
    if (this.$route.params.companyHapId !== undefined) {
      return this.getScannedCompanyInfo();
      // this.$route.push('')
    }

    if (this.isUserType === "user") {
      if (this.$route.params.companyId === undefined) {
        return (this.isInformation = false);
      }

      this.getSpecificInformation();
      return this.allInquiries();
    }
    // get all the information with the inquiries
    return this.getInformation();
  },
};
</script>
