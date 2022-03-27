<template>
  <div>
    <section class="hap_id_number_pages" id="company-information">
      <b-container>
        <b-row>
          <b-col md="12">
            <h1>
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
                  <h3>{{ companyInfo.name }}</h3>
                  <li>
                    <!-- <i class="fas fa-map-marker-alt"></i> Street Name, No., Zip,
                    City, State, Country -->
                    <i class="fas fa-map-marker-alt"></i>
                    {{
                      `${companyInfo.address}, ${
                        companyInfo.business_number
                      }, ${companyInfo.zip_code}, ${companyInfo.city}, ${
                        companyInfo.state && companyInfo.state.name
                      }, ${companyInfo.country && companyInfo.country.name}`
                    }}
                  </li>
                  <li>
                    <span>Date Created:</span>
                    <!-- <label for="date">12/02/2022</label> -->
                    <label for="date">{{ createdAtInfo }}</label>
                  </li>
                </div>
                <div class="company_images">
                  <div
                    class="company_image_edit"
                    v-for="companyImage in companyImages"
                    :key="companyImage.id"
                  >
                    <!-- :src="`http://13.233.5.19/backend/public/images/company/${companyImage.image}`" -->
                    <!-- http://192.168.1.13/images/company/1646137611.png -->
                    <img
                      :src="`http://192.168.1.13:80/images/company/${companyImage.image}`"
                      alt="Street"
                    />
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
    />
    <QRCode
      :isFooter="true"
      :value="`http://192.168.1.13:8080/scan_qr/${companyInfo.id}/${isUserType}`"
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
      isUserType: this.$route.params.userType,
      inquiries: [],
      isInquiries: true,
      companyImages: [],
    };
  },
  methods: {
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
  },
};
</script>
