<template>
  <div class="admin-page-table">
    <Header />
    <Sidebar />
    <div class="main-content">
      <div class="page-content">
        <b-container fluid>
          <b-row align-h="center" align-v="center">
            <b-col md="12">
              <div class="report-history-title">
                <h2>HAP ID Number Requests</h2>
              </div>
            </b-col>
            <b-col md="12">
              <div class="admin-data-table">
                <div class="overflow-auto">
                  <b-table
                    id="my-table"
                    :items="hapIds"
                    :per-page="perPage"
                    :fields="fields"
                    :current-page="currentPage"
                    md
                    :show-empty="isEmpty"
                  >
                    <template #cell(country)="data">
                      {{ data.item.country && data.item.country.name }}
                    </template>

                    <template #cell(state)="data">
                      {{ data.item.state && data.item.state.name }}
                    </template>
                  </b-table>
                  <div class="connection_pagination">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                      aria-controls="my-table"
                    ></b-pagination>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <Modal
      :isFooter="true"
      :componentName="'EditUser'"
      :userData="user"
      @click="onSaveEdit(user.id, $event)"
      :isLoading="isLoading"
      :size="'lg'"
    />
  </div>
</template>

<script>
import ApiClass from "@/Api/Api";
import "@/assets/css/Admin/Main.css";
import Modal from "@/views/Forms/Modal.vue";
import Header from "@/components/Admin/Layouts/Header.vue";
import Sidebar from "@/components/Admin/Layouts/Sidebar.vue";

export default {
  components: { Modal, Header, Sidebar },
  name: "Admin",
  data: () => {
    return {
      form: {
        full_name: "",
        email: "",
        business_name: "",
      },
      isLoading: false,
      perPage: 2,
      currentPage: 1,
      fields: ["legal_business_name", "business_number", "contact_email", "country", "state", "city", "address", "location", "zip_code", "created_at"],
      hapIds: [],
      user: {},
      isEmpty: false,
    };
  },
  computed: {
    rows() {
      return this.hapIds.length;
    },
  },
  mounted() {
    this.hapIdsData();
  },
  methods: {
    // ***************************************************************** Get the hapIds ********************************************************* */
    async hapIdsData() {
      this.isLoading = true;
      var result = await ApiClass.getRequest("admin/get_id_requests");
      this.isLoading = false;
      if (result.data.status_code === "1") {
        if (result.data.data.length === 0) {
          return (this.isEmpty = true);
        }
        this.perPage = result.data.per_page;
        return (this.hapIds = result.data.data);
      }
      this.isEmpty = true;
      return this.message = result.data.message;
    },
    // ***************************************************************** Delete the user ********************************************************* */
    async onDelete(id) {
      this.isLoading = true;
      var result = await ApiClass.postRequest(`admin/delete_user/${id}`);
      this.isLoading = false;
      if (result.data.status_code === "1") {
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Deleted",
          text: `${result.data.message}`,
        });
        return this.hapIdsData();
      }

      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: `${result.data.message}`,
      });
    },
    // ***************************************************************** Edit the user ********************************************************* */
    async onEditHandler(id) {
      this.isLoading = true;
      var result = await ApiClass.getRequest(`admin/edit_user/${id}`, true);
      this.isLoading = false;
      if (result.data.status_code === "1") {
        this.user = result.data.data;
        return this.$bvModal.show("modal-center");
      }
      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: `${result.data.message}`,
      });
    },
    // ***************************************************************** Edit the user ********************************************************* */
    async onSaveEdit(id, formData) {
      this.isLoading = true;
      var result = await ApiClass.updateRequest(
        `admin/update_user/${id}`,
        true,
        formData
      );
      this.isLoading = false;
      if (result.data.status_code === "1") {
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Deleted",
          text: `${result.data.message}`,
        });
        this.usersData();
        return this.$bvModal.hide("modal-center");
      }

      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Not Deleted",
        text: `${result.data.message}`,
      });
    },
  },
};
</script>
