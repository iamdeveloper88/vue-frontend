<template>
  <div class="add-company-profile-modal">
    <b-form @submit.prevent="onUpdateCompanyInfo" v-if="show">
      <div class="upload-images-modal">
        <div class="image-upload">
          <img
            src="/img/company-img.51a8e7d1.png"
            class="circle"
            alt="Street"
          />
        </div>
        <div class="img-upload-remove">
          <router-link to="">Upload new image</router-link> |
          <router-link to="">Remove image</router-link>
        </div>
      </div>
      <b-row>
        <b-col lg="6">
          <b-form-group label="Factory" label-for="Legal-Business">
            <b-form-input
              id="Legal-Business"
              v-model="form.name"
              placeholder="Name Goes Here"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group label="First Name" label-for="Legal-Business">
            <b-form-input
              id="Legal-Business"
              v-model="form.first_name"
              placeholder="First Name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group label="Last Name" label-for="Legal-Business">
            <b-form-input
              id="Legal-Business"
              v-model="form.last_name"
              placeholder="Last Name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group label="Country" label-for="country">
            <b-form-select
              id="country"
              class="form-control"
              v-model="form.country_id"
              required
              @change="onCountryChangeHandler"
              selected
            >
              <b-form-select-option value="" disabled class="option-disabled">
                Select a Country
              </b-form-select-option>
              <b-form-select-option
                v-for="(country, index) in countries"
                :key="index"
                :value="country.id"
              >
                {{ country.name }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group label="State" label-for="state">
            <b-form-select
              id="state"
              class="form-control"
              v-model="form.state_id"
              required
              selected
            >
              <b-form-select-option value="" disabled class="option-disabled">
                Select a State
              </b-form-select-option>
              <b-form-select-option
                v-for="(state, index) in states"
                :key="index"
                :value="state.id"
              >
                {{ state.name }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group label="City" label-for="City">
            <b-form-input
              id="City"
              v-model="form.city"
              placeholder="Boston"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="12">
          <b-form-group label="Address" label-for="Address">
            <b-form-input
              id="Address"
              v-model="form.address"
              placeholder="Street Name, 12"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <!-- <b-col lg="6">
          <b-form-group label="ZipCode" label-for="ZipCode">
            <b-form-input
              id="ZipCode"
              v-model="form.zip_code"
              type="number"
              placeholder="12345"
              required
            ></b-form-input>
          </b-form-group>
        </b-col> -->
        <b-col lg="12">
          <div class="request-button">
            <b-button type="submit" variant="info" v-if="!isLoading"
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
import ApiClass from "@/Api/Api";
export default {
  props: {
    companyData: Object,
  },
  data() {
    return {
      isLoading: false,
      form: {
        name: "",
        first_name: "",
        last_name: "",
        address: "",
        zipCode: "",
        city: "",
        state_id: "",
        country_id: "",
      },
      show: true,
      countries: [],
      states: [],
    };
  },
  mounted() {
    this.form.name = this.companyData.factory;
    this.form.first_name = this.companyData.first_name;
    this.form.last_name = this.companyData.last_name;
    this.form.address = this.companyData.address;
    this.form.zip_code = this.companyData.zip_code;
    this.form.zip_code = this.companyData.zip_code;
    this.form.city = this.companyData.city;
    this.form.state_id = this.companyData.state.id;
    this.form.country_id = this.companyData.country.id;
    console.log(this.companyData.state);
    // all countries data
    this.allCountries();
    this.onCountryChangeHandler();
  },
  methods: {
    // ? *********************************************** Update Company Data ****************************************************** */
    async onUpdateCompanyInfo() {
      this.isLoading = true;
      const result = await ApiClass.postRequest(
        `companies/update/${this.companyData.id}`,
        true,
        this.form
      );
      this.isLoading = false;
      if (result.data.status_code === "1") {
        this.onReset();
        this.$bvModal.hide("modal-center");
        this.$parent.$parent.$parent.updatedCompanyInfo();
        return this.$vs.notification({
          position: "top-right",
          progress: "auto",
          color: "success",
          title: "Success",
          text: `${result.data.message}`,
        });
      }
      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Error",
        text: `${result.data.message}`,
      });
      // this.$parent.$parent.$parent.$parent.getInformation()
    },
    // ? ************************************************ Countries Data ********************************************************* */
    async allCountries() {
      const result = await ApiClass.getRequest("request/countries", false);
      if (result.data.status_code === "1") {
        return (this.countries = result.data.data);
      }
    },
    // ? ************************************************ States Data ***************************************************** */
    async onCountryChangeHandler() {
      const result = await ApiClass.getRequest(
        `request/states/${this.form.country_id}`,
        false
      );
      if (result.data.status_code === "1") {
        return (this.states = result.data.data);
      }
    },
    onReset() {
      this.form.name = "";
      this.form.address = "";
      this.form.zip_code = "";
      this.form.zip_code = "";
      this.form.city = "";
      this.form.state_id = "";
      this.form.country_id = "";
    },
  },
};
</script>

<style>
button.btn.edit_profile.btn-secondary {
  color: #21b8ce;
  background-color: transparent;
  border: none;
  padding: 0;
  font-weight: 300;
}
button.btn.edit_profile.btn-secondary:hover,
button.btn.edit_profile.btn-secondary:focus {
  color: #21b8ce;
  background-color: transparent;
}
.btn-check:focus + button.btn.edit_profile.btn-secondary,
button.btn.edit_profile.btn-secondary:focus {
  box-shadow: none;
}
/* #modal-center .modal-dialog {
  max-width: 800px;
} */

.modal-content {
  border-radius: 12px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
}
.add-company-profile-modal {
  padding: 10px 15px 30px;
}
header.modal-header {
  padding: 0;
  border: none;
}

button.close {
  position: absolute;
  right: -22px;
  top: -3px;
  font-weight: 100;
  background-color: transparent;
  color: #fff;
  opacity: 1 !important;
  box-shadow: none;
  border: none;
  border-radius: 0px;
}
.upload-images-modal {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}

.image-upload img {
  max-width: 100px;
  margin-right: 20px;
}
.img-upload-remove {
  font-size: 16px;
  color: #21b8ce;
  font-weight: 300;
}
.img-upload-remove a {
  color: #21b8ce;
}

@media (max-width: 767px) {
  .add-company-profile-modal {
    padding: 0px;
  }
  .upload-images-modal {
    display: grid;
    padding-bottom: 10px;
  }
  .img-upload-remove {
    padding-top: 10px;
  }
}
@media screen and (max-width: 540px) {
  header.modal-header {
    padding: 1rem;
  }
  .add-company-profile-modal {
    padding: 0px 15px 30px;
  }
  .modal-header button {
    right: 0px;
    top: 0px;
    font-weight: 100;
    background-color: rgb(14 192 217);
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    opacity: 1 !important;
    box-shadow: none;
    border: none;
    border-radius: 0px;
  }
}
</style>
