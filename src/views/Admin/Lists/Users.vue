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
                <h2>All users</h2>
              </div>
            </b-col>
            <b-col md="12">
              <div class="admin-data-table">
                <div class="overflow-auto">
                  <b-table
                    id="my-table"
                    :items="users"
                    :per-page="perPage"
                    :fields="fields"
                    :current-page="currentPage"
                    md
                    :show-empty="isEmpty"
                  >
                    <!-- <template #cell(country)="data">
                      {{ data.item.country && data.item.country.name }}
                    </template>

                    <template #cell(state)="data">
                      {{ data.item.state && data.item.state.name }}
                    </template> -->
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
  </div>
</template>
<script>
import Header from "../../../components/Admin/Layouts/Header.vue";
import Sidebar from "../../../components/Admin/Layouts/Sidebar.vue";

import ApiClass from "@/Api/Api";
export default {
  components: { Header, Sidebar },
  name: "Users",
  data() {
    return {
      isEmpty: false,
      users: [],
      perPage: 1,
      currentPage: 1,
      fields: ["full_name", "email", "business_name"],
    };
  },
  computed: {
    rows() {
      return this.users.length;
    },
  },
  methods: {
    async allUsers() {
      const result = await ApiClass.getRequest("admin/all_users");
      if (result.data.status_code === "1") {
        if (result.data.data.length === 0) {
          return (this.isEmpty = true);
        }
        this.perPage = result.data.per_page;
        return (this.users = result.data.data);
      }
      return (this.isEmpty = true);
    },
  },
  mounted() {
    this.allUsers();
  },
};
</script>
