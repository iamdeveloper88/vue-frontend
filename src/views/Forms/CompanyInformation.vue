<template>
  <div>
    <section class="hap_id_number_pages" id="company-information">
      <b-container>
        <b-row>
          <b-col md="12">
            <h1>
              <span v-if="isUserType === 2">Update your</span> 
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
    <section class="hap_id_number_results">
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
                  <div class="qr-code-img">
                    <img
                      src="@/assets/images/hap-number/qr-code.png"
                      alt="qr-code"
                    />
                    <p>My QR code</p>
                  </div>
                </div>
                <div class="results_address hap_number_address_title">
                  <h6>HAP ID: 100001</h6>
                  <h3>{{ information.legal_business_name }}</h3>
                  <li>
                    <!-- <i class="fas fa-map-marker-alt"></i> Street Name, No., Zip,
                    City, State, Country -->
                    <i class="fas fa-map-marker-alt"></i>
                    {{
                      `${information.address}, ${
                        information.business_number
                      }, ${information.zip_code}, ${information.city}, ${
                        information.state && information.state.name
                      }, ${information.country && information.country.name}`
                    }}
                  </li>
                  <li>
                    <span>Date Created:</span>
                    <!-- <label for="date">12/02/2022</label> -->
                    <label for="date">{{ information.created_at }}</label>
                  </li>
                  <li>
                    <b-button
                      type="button"
                      @click="$bvModal.show('modal-center')"
                      class="edit_profile"
                      v-if="isUserType === 2"
                      ><i class="fas fa-edit"></i> Edit Profile</b-button
                    >
                  </li>
                </div>
                <div class="company_images">
                  <div class="company_image_edit">
                    <img
                      src="@/assets/images/hap-number/company-img.png"
                      alt="Street"
                    />
                    <div class="img-edit-remove">  
                      <router-link to="">Edit</router-link> |
                      <router-link to="">Remove</router-link>
                    </div>  
                  </div>
                  <div class="company_image_edit">
                    <img
                      src="@/assets/images/hap-number/company-img.png"
                      alt="Street"
                    />
                    <div class="img-edit-remove">
                      <router-link to="">Edit</router-link> |
                      <router-link to="">Remove</router-link>
                    </div>
                  </div>
                  <div class="company_image_edit">
                    <img
                      src="@/assets/images/hap-number/company-img.png"
                      alt="Street"
                    />
                    <div class="img-edit-remove">
                      <router-link to="">Edit</router-link> |
                      <router-link to="">Remove</router-link>
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
            <div class="company-inquiries">
              <b-row>
                <b-col lg="6">
                  <div class="company-inquiries-info">
                    <b-row>
                      <b-col md="6">
                        <li>
                          <span>Date Created:</span>
                          <label for="created-date">12/02/2022</label>
                        </li>
                      </b-col>
                      <b-col md="6">
                        <li>
                          <span>Company Name:</span>
                          <label for="company-name">Company Name</label>
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
    <Modal :isFooter="true" :componentName="'Request'" :size="'lg'" />
  </div>
</template>

<script>
import "@/assets/css/Information.css";
import Modal from "./Modal.vue";
import ApiClass from "@/Api/Api";
export default {
  components: { Modal },
  name: "CompanyInformation",
  data() {
    return {
      information: {},
      isInformation: true,
      isUserType: JSON.parse(localStorage.getItem("userInfo")).userType
    };
  },
  methods: {
    // ? ******************************************************************* Request the information ********************************************************* */
    async getInformation() {
      const result = await ApiClass.getRequest("company/information");
      if (result.data.status_code === "1") {
        return (this.information = result.data.data);
      }
      return this.information = false;
    },
  },
  mounted() {
    this.getInformation();
  },
};
</script>
