<template>
  <div>
    <section class="hap_id_number_pages">
      <b-container class="bv-example-row">
        <b-row>
          <b-col md="12">
            <h1 class="p-0">
              Manage & View
              <span>Access Requests</span>
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <div class="search_look_up">
              <b-input-group>
                <b-form-input v-model="search" placeholder="Search" @keyup="onSearchRequests">
                </b-form-input>
                <span><i class="fas fa-search"></i></span>
              </b-input-group>
            </div>
            <div class="access_request_btn">
              <b-button
                pill
                type="submit"
                variant="info"
                @click.prevent="showAccessRequest"
                v-if="isShowMangeRequest"
              >
                New Access Requests <i class="fas fa-arrow-right"></i>
              </b-button>
              <b-button
                pill
                type="submit"
                variant="info"
                @click.prevent="showBothRequest"
                v-else
              >
                <i class="fas fa-arrow-left"></i> Back to dashboard
              </b-button>
              <b-button
                pill
                type="submit"
                variant="info"
                @click.prevent="showManageRequest"
                v-if="isShowAccessRequest"
              >
                Manage Access Lists <i class="fas fa-arrow-right"></i>
              </b-button>
              <b-button
                pill
                type="submit"
                variant="info"
                @click.prevent="showBothRequest"
                v-else
              >
                <i class="fas fa-arrow-left"></i> Back to Dashboard
              </b-button>
            </div>
          </b-col>
        </b-row>
        <b-row> </b-row>
      </b-container>
    </section>
    <section class="hap_id_number_results">
      <b-container>
        <!--------- Access Request table components Here  --------->
        <AccessRequest v-if="isShowAccessRequest" ref="accessRequestMethods"/>
        <!--------- Mange Request table components Here  --------->
        <MangeRequest v-if="isShowMangeRequest" ref="manageRequestMethods"/>
      </b-container>
    </section>
  </div>
</template>

<script>
import "@/assets/css/manage-requests.css";
import AccessRequest from "@/views/Requests/AccessRequest.vue";
import MangeRequest from "@/views/Requests/MangeRequest.vue";
export default {
  components: { AccessRequest, MangeRequest },
  name: "ManageRequests",
  data() {
    return {
      search: "",
      isShowAccessRequest: true,
      isShowMangeRequest: true,
    };
  },
  methods: {
    // ! **************************************************** Show Access Requests only *********************************************** */
    showAccessRequest() {
      this.isShowMangeRequest = false;
      this.isShowAccessRequest = true;
    },
    //  ***************************************************** Show Manage Requests only *********************************************** */
    showManageRequest() {
      this.isShowAccessRequest = false;
      this.isShowMangeRequest = true;
    },
    // ! ***************************************************** Show Manage Requests only *********************************************** */
    showBothRequest() {
      this.isShowAccessRequest = true;
      this.isShowMangeRequest = true
    },
    // ! ***************************************************** Show Manage Requests only *********************************************** */
    onSearchRequests() {
      // console.log(this.search);
    }
  },
};
</script>
