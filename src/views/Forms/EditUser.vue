<template>
  <div>
    <b-form @submit.prevent="">
      <b-col lg="12">
        <b-row>
          <h2>Edit User</h2>
          <b-form-group label="Full Name" label-for="Full-Name">
            <b-form-input
              id="Full-Name"
              v-model="form.full_name"
              placeholder="Name Goes Here"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Email" label-for="Email">
            <b-form-input
              id="Email"
              v-model="user.email"
              placeholder="Email Goes Here"
              type="email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Business Name" label-for="Business-Name">
            <b-form-input
              id="Business-Name"
              v-model="user.business_name"
              placeholder="Business Name Goes Here"
              required
            ></b-form-input>
          </b-form-group>
          <div class="request-button">
            <b-button
              type="submit"
              variant="info"
              v-if="!isLoading"
              @click="onEditUserData"
              >Update User</b-button
            >
            <b-button type="submit" variant="info" disabled v-else>
              <b-spinner variant="primary"></b-spinner>
            </b-button>
          </div>
        </b-row>
      </b-col>
    </b-form>
  </div>
</template>
<script>
// import ApiClass from '@/Api/ApiClass'
export default {
  name: "EditUser",
  props: { user: Object, onEditSave: Function, isLoading: Boolean },
  data() {
    return {
      form: {
        full_name: this.user.full_name,
        email: this.user.email,
        business_name: this.user.business_name,
      },
    };
  },
  methods: {
    onEditUserData() {
      this.isLoading;
      this.$emit("onUser", this.form);
    },
  },
};
</script>
