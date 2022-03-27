<template>
  <div
    class="
      login_page
      height_layout
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <b-container>
      <b-row align-h="center" align-v="center">
        <div class="welcome_requesting_layouts">
          <div class="cards_layouts">
            <div class="register_body_info" id="requesting-layouts-info">
              <div class="login_logo">
                <router-link :to="{ name: 'Index' }">
                  <img src="@/assets/images/logo.png" alt="logo" />
                </router-link>
              </div>
              <h2>
                Thank you for requesting an
                <span
                  >H<span class="hap_color_heading">A</span>P ID Number</span
                >
              </h2>
              <h6>Our team will contact you in 72 hour.</h6>
              <h6 class="sincerely-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                consequat dictum tincidunt. Maecenas semper aliquam elit.
              </h6>
              <h6>Sincerely, <span>The HAP Team</span></h6>
            </div>
            <div class="requesting-notification">
              <hr />
              <h5>
                This email was sent from a notification-only address that cannot
                accept incoming email. Please do not reply to this message.
              </h5>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  name: "ThankRequesting",
  data() {
    return {};
  },
};
</script>

<style>
.welcome_requesting_layouts {
  width: 600px;
  flex: 0 0 600px;
}
#requesting-layouts-info {
  color: #343838;
}
#requesting-layouts-info h2 span {
  font-weight: bold;
}
#requesting-layouts-info h6 {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  line-height: inherit;
}
#requesting-layouts-info h6 span {
  display: block;
}
#requesting-layouts-info .sincerely-title {
  padding: 30px 0;
}
.requesting-notification {
  padding-top: 25px;
}
.requesting-notification h5 {
  font-size: 12px;
  color: #696666;
  font-weight: 400;
  text-align: center;
  padding-top: 15px;
}
</style>