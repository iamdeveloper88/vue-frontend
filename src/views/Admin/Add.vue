<template>
  <div class="admin-page-table">
    <Header />
    <Sidebar />
    <div class="main-content">
      <div class="page-content">
        <b-container fluid>
          <b-row>
            <b-col lg="6">
              <b-form @submit.prevent="onAddHandler" v-if="show">
                <b-form-group
                  id="input-group-3"
                  label="User Type"
                  label-for="input-3"
                >
                  <b-form-select
                    id="input-3"
                    class="form-control custom-select"
                    v-model="form.type"
                    :options="types"
                    required
                    @change="onChangeUserHandler(form.type)"
                  ></b-form-select>
                </b-form-group>
                <b-form-group label="Full Name" label-for="full-name">
                  <b-form-input
                    id="full-name"
                    v-model="form.name"
                    placeholder="Full Name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Legal Business Name"
                  label-for="Legal-Business"
                  v-if="isUserAdd"
                >
                  <b-form-input
                    id="Legal-Business"
                    v-model="form.legal_business_name"
                    placeholder="Business Name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Organization Name"
                  label-for="Organization"
                  v-else
                >
                  <b-form-input
                    id="Organization"
                    v-model="form.organization"
                    placeholder="Organization Name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Email" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="name@email.com"
                    required
                  ></b-form-input>
                </b-form-group>
                <div>
                  <b-button variant="primary" v-if="!isAdding" @click="onAddHandler">Submit</b-button>
                  <b-button type="submit" variant="info" disabled v-else>
                    <b-spinner variant="light"></b-spinner>
                  </b-button>
                </div>
              </b-form>
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
  name: "Add",
  data() {
    return {
      form: {
        type: "User",
        name: "",
        legal_business_name: "",
        organization: "",
        email: "",
      },
      types: ["User", "Government"],
      show: true,
      isUserAdd: true,
      isGovtAdd: false,
      isAdding: false,
    };
  },
  methods: {
    onChangeUserHandler(type) {
      if (type === "User") {
        this.isGovtAdd = false;
        return (this.isUserAdd = true);
      }
      this.isUserAdd = false;
      return (this.isGovtAdd = true);
    },
    // ? ************************************************************* Add the user or government ******************************************** */
    async onAddHandler() {
      this.isAdding = true;
      const result = await ApiClass.postRequest(
        "admin/add_user_government",
        true,
        this.form
      );
      this.isAdding = false;
      if (result.data.status_code === "1") {
        return this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Success",
          text: result.data.message,
        });
      }
    },
  },
};
</script>
