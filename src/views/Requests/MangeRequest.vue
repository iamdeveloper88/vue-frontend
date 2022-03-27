<template>
  <b-row>
    <b-col md="12">
      <div class="cards_layouts_access m-0">
        <h3><span>Manage </span>Access Lists</h3>
        <div class="layouts-access-table">
          <div class="table-responsive">
            <b-table
              id="access-requests-table"
              borderless
              :items="manageRequests"
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
                  class="table_accept_btn m-0"
                  variant="info"
                  pill
                  @click.prevent="revokeManageRequest(data.item.id)"
                >
                  Revoke Consent
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
import ApiClass from "@/Api/Api";
export default {
  name: "MangeRequest",
  data() {
    return {
      // ? Note Manage Access Requests in the rendered table
      isEmpty: false,
      manageRequests: [],
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
      return this.manageRequests.length;
    },
  },
  methods: {
    // ******************************************************************* Manage Access Requests *********************************************** */
    async manageAccessRequestsList() {
      const result = await ApiClass.getRequest("companies/approve_requests");
      if (result.data.status_code === "1") {
        if (result.data.data.length === 0) {
          return (this.isEmpty = true);
        }
        this.perPage = result.data.per_page;
        return (this.manageRequests = result.data.data);
      }
    },
    // ******************************************************************* Revoke the Access Request *********************************************** */
    async revokeManageRequest(id) {
      const result = await ApiClass.postRequest(
        `companies/revoke_request/${id}`
      );
      if (result.data.status_code === "1") {
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Revoked",
          text: `${result.data.message}`,
        });
        this.manageAccessRequestsList();
        return this.$parent.$refs.accessRequestMethods.latestAccessRequests();
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
    this.manageAccessRequestsList();
  },
};
</script>
