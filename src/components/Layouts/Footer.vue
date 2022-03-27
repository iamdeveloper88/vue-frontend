<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col md="12">
            <div class="footer_contact">
                <ul>
          <li>© HAP / HireAPartner Inc. {{ new Date().getFullYear() }}</li>
          <li>All Rights Reserved.</li>

                </ul>
            </div>
        </b-col>
      </b-row>
      <!-- <b-row>
                <b-col lg="2" md="4" sm="6">
                    <div class="logo_footer">
                        <img src="@/assets/images/home/logo_footer.png" alt="Logo">
                    </div>
                </b-col>
                <b-col lg="2" md="4" sm="6">
                    <div class="footer_contact">
                        <h3>Join</h3>
                        <ul>
                            <li><router-link to="/">Join as an Auditor</router-link></li>
                            <li><router-link to="/">Join as a Company</router-link></li>
                            <li><router-link to="/">Internships</router-link></li>
                        </ul>
                    </div>
                </b-col>
                <b-col lg="2" md="4" sm="6">
                     <div class="footer_contact">
                        <h3><router-link to="/">Contact us</router-link></h3>
                        <ul>
                            <li><router-link to="/">Brands/Companies</router-link></li>
                            <li><router-link to="/">Auditors</router-link></li>
                        </ul>
                    </div>
                </b-col>
                <b-col lg="2" md="4" sm="6">
                     <div class="footer_contact">
                        <h3><router-link to="/">Terms of Use</router-link></h3>
                        <ul>
                            <li><router-link :to="{name:'TermsCond'}">Terms & Conditions</router-link></li>
                            <li><router-link to="/">Privacy Policy </router-link></li>
                        </ul>
                    </div>
                </b-col>
                <b-col lg="4" md="6" sm="12">
                    <div class="social_icon">
                        <router-link to="/"><i class="fab fa-facebook-square"></i></router-link>
                        <router-link to="/"><i class="fab fa-linkedin"></i></router-link>
                        <router-link to="/"><i class="fab fa-twitter"></i></router-link>
                        <router-link to="/"><i class="fab fa-instagram"></i></router-link>
                    </div>
                    <div class="footer_contact rights-reserved">
                        <ul>
                            <li>© HAP / HireAPartner Inc. {{ new Date().getFullYear() }}</li>
                            <li>All Rights Reserved.</li>
                        </ul>
                    </div>
                </b-col>
            </b-row> -->
    </b-container>
  </footer>
</template>

<script>
import "@/assets/css/Footer.css";
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
