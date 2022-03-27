<template>
  <div class="add-company-profile-modal">
    <b-form @submit.prevent="onScreenAdd" v-if="show">
      <b-row>
        <b-col lg="12">
          <b-form-group label="Id" label-for="Screen-Id">
            <b-form-input
              id="Screen-Id"
              v-model="form.screen_id"
              placeholder="Screen Id Here"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="12">
          <b-form-group label="Type" label-for="Screen-Type">
            <b-form-input
              id="Screen-Type"
              v-model="form.type"
              placeholder="Screen Type"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="12">
          <div class="request-button">
            <b-button type="submit" variant="info" v-if="!isAdding"
              >Save Changes</b-button
            >
            <b-button type="button" variant="info" disabled v-else>
              <b-spinner variant="light"></b-spinner>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "AddScreening",
  props: { addScreening: Function, isAdding: Boolean },
  data() {
    return {
      show: true,
      form: {
        screen_id: "",
        type: "",
      },
    };
  },
  methods: {
    onScreenAdd() {
      this.$emit("addScreening", this.form);
    },
  },
};
</script>
