<template>
  <b-row>
    <b-col md="12">
      <div class="cards_layouts_access">
        <h3><span>New</span> Access Requests</h3>
        <div class="layouts-access-table">
          <div class="table-responsive">
            <b-table
              id="access-requests-table"
              borderless
              :items="accessRequests"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              :show-empty="isEmpty"
            >
              <template #cell(user)="data">
                {{ data.item.user.full_name }}
              </template>

              <template #cell(company)="data">
                {{ data.item.company.legal_business_name }}
              </template>

              <template #cell(show_details)="data">
                <b-button
                  class="table_accept_btn"
                  variant="info"
                  pill
                  @click.prevent="acceptAccessRequest(data.item.id)"
                >
                  Accept
                </b-button>
                <b-button class="table_reject_btn" variant="outline-info" pill @click.prevent="rejectAccessRequest(data.item.id)">
                  Reject
                </b-button>
              </template>
            </b-table>
            <div class="connection_pagination">
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                first-number
                last-number
                size="sm"
                v-if="!isEmpty"
              ></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import ApiClass from '@/Api/Api';
export default {
  name: "AccessRequest",
  data() {
    return {
      // ? Note New Access Requests in the rendered table
      isEmpty: false,
      accessRequests: [],
      perPage: 1,
      currentPage: 1,
      fields: [
        {
          key: "user",
          label: "Name",
          sortable: false,
        },
        {
          key: "company",
          label: "Business",
          sortable: false,
        },
        {
          key: "created_at",
          label: "Date of Request",
          sortable: false,
        },
        {
          key: "show_details",
          sortable: false,
        },
      ],
    };
  },
  computed: {
    rows() {
      return this.accessRequests.length;
    },
  },
  methods: {
    // ******************************************************************* Latest Access Requests *********************************************** */
    async latestAccessRequests() {
      const result = await ApiClass.getRequest("companies/access_requests");
      if (result.data.status_code === "1") {
        if (result.data.data.length === 0) {
          this.accessRequests = [];
          return (this.isEmpty = true);
        }
        this.perPage = result.data.per_page;
        return (this.accessRequests = result.data.data);
      }
    },
    // ******************************************************************* Accept the Access Request *********************************************** */
    async acceptAccessRequest(id) {
      const result = await ApiClass.postRequest(`companies/accept_request/${id}`);
      if (result.data.status_code === "1") {
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Accepted",
          text: `${result.data.message}`,
        });
        this.latestAccessRequests();
        return this.$parent.$refs.manageRequestMethods.manageAccessRequestsList();
      }
      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: `${result.data.message}`,
      });
    },
    // ******************************************************************* Reject the Access Request *********************************************** */
    async rejectAccessRequest(id) {
      const result = await ApiClass.postRequest(`companies/reject_request/${id}`);
      if (result.data.status_code === "1") {
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Rejected",
          text: `${result.data.message}`,
        });
        this.latestAccessRequests();
        return this.$parent.$refs.manageRequestMethods.manageAccessRequestsList();
      }
      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: `${result.data.message}`,
      });
    },
  },
  mounted() {
    this.latestAccessRequests();
  },
};
</script>