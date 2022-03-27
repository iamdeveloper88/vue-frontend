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
                <h2>All Screenings</h2>
                <b-button
                  class="add-screen"
                  variant="info"
                  @click="$bvModal.show('modal-center')"
                  ><i class="fa fa-plus"></i
                ></b-button>
              </div>
            </b-col>
            <b-col md="12">
              <div class="admin-data-table">
                <div class="overflow-auto">
                  <b-table
                    md
                    id="my-table"
                    :items="screens"
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
    <Modal
      :isFooter="true"
      :componentName="'AddScreening'"
      @onAddScreening="onAddScreening($event)"
      :isAdding="isAdding"
      :size="'md'"
    />
  </div>
</template>

<script>
import Header from "../../components/Admin/Layouts/Header.vue";
import Sidebar from "../../components/Admin/Layouts/Sidebar.vue";
import ApiClass from "@/Api/Api";
import Modal from "../Forms/Modal.vue";

export default {
  components: { Header, Sidebar, Modal },
  name: "Screenings",
  data() {
    return {
      isAdding: false,
      isEmpty: false,
      screens: [],
      perPage: 1,
      currentPage: 1,
      fields: [
        {
          key: "screen_id",
          label: "Id",
          sortable: false,
        },
        {
          key: "type",
          sortable: false,
        },
      ],
    };
  },
  computed: {
    rows() {
      return this.screens.length;
    },
  },
  methods: {
    //   ? ****************************************************** show all screens ******************************************************
    async allScreenings() {
      const result = await ApiClass.getRequest("show_screens", false);
      if (result.data.status_code === "1") {
        if (result.data.data.length === 0) {
          return (this.isEmpty = true);
        }

        this.perPage = result.data.per_page;
        this.screens = result.data.data;
      }

      return (this.isEmpty = true);
    },
    //   ? ****************************************************** on add screens ******************************************************
    async onAddScreening(formData) {
      this.isAdding = true;
      const result = await ApiClass.postRequest("add_screen", false, formData);
      this.isAdding = false;
      if (result.data.status_code === "1") {
        this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Success",
          text: result.data.message,
        });

        this.$bvModal.hide("modal-center");
        return this.allScreenings();
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
  created() {
    this.allScreenings();
  },
};
</script>
