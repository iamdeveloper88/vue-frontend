<template>
  <div>
    <section class="hap_id_number_pages">
      <b-container>
        <b-row>
          <b-col md="12">
            <h1>
              Request an
              <span
                ><span>H<span class="hap_color_heading">A</span>P</span> ID
                Number</span
              >
            </h1>
            <p>
              The first step in creating a new HAP ID Number is searching to see
              whether you have an existing HAP file. The second step is
              conducting a evaluation exercise of the downstream supply chain
              processes by which you track materials or products and the
              conditions under which they were produced through the supply
              chain.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="request-form">
      <b-container>
        <b-row align-h="center">
          <b-col md="8">
            <div class="cards_layouts" id="request-form-number">
              <b-form @submit.prevent="onSave" v-if="show">
                <b-row>
                  <b-col lg="6">
                    <b-form-group label="country" label-for="country">
                      <b-form-select
                        id="country"
                        class="form-control"
                        v-model="form.country_id"
                        required
                        @change="onCountryChangeHandler"
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
                    <b-form-group label="city" label-for="city">
                      <b-form-input
                        id="city"
                        v-model="form.city"
                        placeholder="city"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group
                      label="Types of Location"
                      label-for="location"
                    >
                      <b-form-input
                        id="location"
                        v-model="form.location"
                        placeholder="location"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group label="address" label-for="address">
                      <b-form-input
                        id="address"
                        v-model="form.address"
                        placeholder="address"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group
                      label="Legal Business Name"
                      label-for="Legal-Business"
                    >
                      <b-form-input
                        id="Legal-Business"
                        v-model="form.legal_business_name"
                        placeholder="Company"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group label="Business Number" label-for="Number">
                      <b-form-input
                        id="Business-Number"
                        v-model="form.business_number"
                        type="number"
                        placeholder="1234567890"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group label="Zip Code" label-for="zip_code">
                      <b-form-input
                        id="zip_code"
                        v-model="form.zip_code"
                        type="number"
                        placeholder="12345"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group
                      label="Contact Person Email"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.contact_email"
                        type="email"
                        placeholder="name@email.com"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6">
                    <div class="request-recaptcha">
                      <Recaptcha />
                    </div>
                  </b-col>
                  <b-col lg="12">
                    <div class="request-button">
                      <b-button type="submit" variant="info" v-if="!isLoading"
                        >Request ID Number</b-button
                      >
                      <b-button type="submit" variant="info" disabled v-else>
                        <b-spinner variant="primary"></b-spinner>
                      </b-button>
                    </div>
                  </b-col>
                  <b-col lg="12" v-if="isSuccess.state">
                    <div>
                      <p>{{ isSuccess.message }}</p>
                    </div>
                  </b-col>
                </b-row>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import ApiClass from "@/Api/Api";
import Recaptcha from "@/components/Recaptcha/Recaptcha.vue";
import "@/assets/css/Forms.css";
export default {
  components: { Recaptcha },
  name: "Request",
  data() {
    return {
      form: {
        country_id: "",
        state_id: "",
        city: "",
        location: "",
        address: "",
        legal_business_name: "",
        business_number: "",
        zip_code: "",
        contact_email: "",
      },
      isSuccess: { state: false, message: ''},
      show: true,
      isLoading: false,
      countries: [],
      states: [],
    };
  },
  methods: {
    // ? ******************************************************************* Countries Data ********************************************************* */
    async allCountries() {
      const result = await ApiClass.getRequest("request/countries", false);
      if (result.data.status_code === "1") {
        return (this.countries = result.data.data);
      }
    },
    // ? ******************************************************************* States Data ********************************************************* */
    async onCountryChangeHandler() {
      const result = await ApiClass.getRequest(
        `request/states/${this.form.country_id}`,
        false
      );
      if (result.data.status_code === "1") {
        return (this.states = result.data.data);
      }
    },
    // ? ******************************************************************* Submit the form ********************************************************* */
    async onSave() {
      this.isLoading = true;
      const result = await ApiClass.postRequest(
        "request/id_number",
        false,
        this.form
      );
      this.isLoading = false;
      if (result.data.status_code === "1") {
        this.onReset();
        // this.$vs.notification({
        //   position: "top-right",
        //   progress: "auto",
        //   color: "success",
        //   title: "Request Added",
        //   text: `${result.data.message}`,
        // });
        this.isSuccess = { state: true, message: result.data.message };
        // return this.$router.push('/');
        return setTimeout(() => this.$router.push({ name: 'Dashboard' }), 3000)
      }
      return this.$vs.notification({
        position: "top-right",
        progress: "auto",
        color: "danger",
        title: "Request Declined",
        text: `${result.data.message}`,
      });
    },
    // ? ******************************************************************* Reset the form ********************************************************* */
    onReset() {
      // Reset our form values
      this.form.country = null;
      this.form.state = null;
      this.form.city = "";
      this.form.location = "";
      this.form.address = "";
      this.form.legal_business_name = "";
      this.form.business_number = "";
      this.form.zip_code = "";
      this.form.contact_email = "";
      // * Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted() {
    this.allCountries();
  },
};
</script>
