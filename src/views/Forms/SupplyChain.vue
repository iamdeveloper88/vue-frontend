<template>
  <div>
    <section class="hap_id_number_pages">
      <b-container class="bv-example-row">
        <b-row>
          <b-col md="12">
            <h1>
              View Your
              <span>Supply Chain Connections</span>
            </h1>
            <b-button
              pill
              type="button"
              variant="info"
              @click.prevent="$router.push({ name: 'SearchLook' })"
            >
              Add Connection <i class="fas fa-arrow-right"></i>
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <div class="search_look_up">
              <b-input-group>
                <b-form-input
                  v-model="search"
                  placeholder="Search"
                  @keyup="onSearchConnection"
                >
                </b-form-input>
                <span><i class="fas fa-search"></i></span>
              </b-input-group>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="hap_id_number_results" v-if="connections.length !== 0">
      <b-container>
        <b-row v-if="searchResults.length === 0">
          <b-col
            lg="3"
            md="4"
            sm="6"
            v-for="connection in connections"
            :key="connection.id"
          >
            <div class="cards_layouts_connections">
              <!-- :src="require(`@/assets/images/hap-number/${list.image}`)" -->
              <img
                :src="require(`@/assets/images/hap-number/company-img.png`)"
                alt="Street"
              />
              <h6 class="">Hap Id :
              <span>{{ connection.company.hap_id_number }} </span></h6>
              <h3>{{ connection.company && connection.company.factory }}</h3>

              <p>
                <i class="fas fa-map-marker-alt"></i>
                {{
                  `${connection.company.address}, ${connection.company.city}, ${connection.company.state}, ${connection.company.country}`
                }}
                <!-- old data fetched -->
                <!-- {{
                  `${connection.company.address}, ${
                    connection.company.business_number
                  }, ${connection.company.zip_code}, ${
                    connection.company.city
                  }, ${
                    connection.company.state && connection.company.state.name
                  }, ${
                    connection.company.country &&
                    connection.company.country.name
                  },`
                }} -->
              </p>
              <router-link
                :to="{
                  name: 'CompanyInformation',
                  params: { companyId: connection.company.id },
                }"
              >
                <b-button pill type="button" variant="info"> View </b-button>
              </router-link>
            </div>
          </b-col>
          <b-col md="12">
            <div class="connection_pagination">
              <b-pagination
                :total-rows="rows"
                v-model="currentPage"
                :per-page="perPage"
                first-number
                last-number
                size="sm"
              />
            </div>
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col
            lg="3"
            md="4"
            sm="6"
            v-for="searchResult in searchResults"
            :key="searchResult.id"
          >
            <div class="cards_layouts_connections">
              <!-- :src="require(`@/assets/images/hap-number/${list.image}`)" -->
              <img
                :src="require(`@/assets/images/hap-number/company-img.png`)"
                alt="Street"
              />
              <h3>{{ searchResult.company && searchResult.company.name }}</h3>

              <p>
                <i class="fas fa-map-marker-alt"></i>
                {{
                  `${searchResult.company.address}, ${
                    searchResult.company.business_number
                  }, ${searchResult.company.zip_code}, ${
                    searchResult.company.city
                  }, ${
                    searchResult.company.state &&
                    searchResult.company.state.name
                  }, ${
                    searchResult.company.country &&
                    searchResult.company.country.name
                  },`
                }}
              </p>
              <router-link
                :to="{
                  name: 'QRCompanyInformation',
                  params: { companyId: searchResult.company.id },
                }"
              >
                <!-- <router-link :to="`information/${searchResult.company.id}`"> -->
                <b-button pill type="button" variant="info"> View </b-button>
              </router-link>
            </div>
          </b-col>
          <b-col md="12">
            <div class="connection_pagination">
              <b-pagination
                :total-rows="rows"
                v-model="currentPage"
                :per-page="perPage"
                first-number
                last-number
                size="sm"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="hap_id_number_results hap_id_number_connections" v-else>
      <b-container>
        <b-row>
          <b-col md="12" class="look_results_title text-center">
            <h4>No Connections Found</h4>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import "@/assets/css/SupplyChain.css";
import ApiClass from "@/Api/Api";
export default {
  name: "SupplyChain",
  data() {
    return {
      search: "",
      isEmptyConnections: false,
      currentPage: 1,
      perPage: 1,
      connections: [],
      dataMessage: "",
      searchResults: [],
    };
  },
  computed: {
    rows() {
      return this.connections.length;
    },
  },
  methods: {
    // ? ***************************************************** Show the connections *********************************************** */
    async showConnections() {
      const result = await ApiClass.getRequest(`user/connections`);
      if (result.data.status_code === "1") {
        if (result.data.data.length === 0) {
          return (this.isEmptyConnections = true);
        }
        this.perPage = result.data.per_page;
        return (this.connections = result.data.data);
      }

      return (this.isEmptyConnections = true);
    },
    // ? ****************************************************** Search the connection *********************************************** */
    async onSearchConnection() {
      let parameters = { searchConnection: this.search };
      const result = await ApiClass.getRequest(
        `user/search_connection`,
        true,
        null,
        parameters
      );
      if (result.data.status_code === "1") {
        if (result.data.data.length === 0) {
          return (this.isEmptyConnections = true);
        }
        this.perPage = result.data.per_page;
        return (this.connections = result.data.data);
      }

      return (this.isEmptyConnections = true);
    },
  },
  mounted() {
    this.showConnections();
  },
};
</script>
