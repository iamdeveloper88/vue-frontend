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
                <h2>All Reports</h2>
              </div>
            </b-col>
            <b-col md="12">
              <div class="admin-data-table">
                <div class="overflow-auto">
                  <b-table
                    md
                    id="my-table"
                    :items="reports"
                    :per-page="perPage"
                    :fields="fields"
                    :current-page="currentPage"
                    :show-empty="isEmpty"
                  >
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
import Header from "../../components/Admin/Layouts/Header.vue";
import Sidebar from "../../components/Admin/Layouts/Sidebar.vue";
import ApiClass from "@/Api/Api";

export default {
  components: { Header, Sidebar },
  name: "Reports",
  data() {
    return {
      isEmpty: false,
      reports: [],
      perPage: 1,
      currentPage: 1,
      fields: ["date", "screen_type", "m_type", "p_type", "outcome"],
    };
  },
  computed: {
    rows() {
      return this.reports.length;
    },
  },
  methods: {
    //   ? ****************************************************** Get all Reports ********************************************************
    async getReports() {
      const result = await ApiClass.getRequest("all_reports", false);
      if (result.data.status_code === "1") {
        if (result.data.data.length === 0) {
          return (this.isEmpty = true);
        }

        this.perPage = result.data.per_page;
        return (this.reports = result.data.data);
      }
    },
  },
  created() {
    this.getReports();
  },
};
</script>
