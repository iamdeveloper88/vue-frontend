<template>
  <div>
    <section class="hap_id_number_pages">
      <b-container>
        <b-row>
          <b-col md="12">
            <h1 class="p-0">
              Welcome to the
              <span
                ><span>H<span class="hap_color_heading">A</span>P</span> ID
                Number</span
              >
              Government Request Portal
            </h1>
            <h3>For Customs, Import Safety and Trade Authorities</h3>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="hap_id_number_results">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="cards_layouts_suspendisse">
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                consequat est. Etiam aliquet dui urna, quis facilisis massa
                ullamcorper vel. Proin a dignissim arcu. Curabitur ullamcorper
                gravida lorem vitae finibus. Etiam gravida urna at nulla
                facilisis blandit blandit sed sem. Donec vitae ante mi. Etiam
                commodo felis id orci semper, at congue augue imperdiet.
              </h6>
              <h6>
                Suspendisse faucibus ut dolor quis pulvinar. Aliquam aliquam
                porta libero at bibendum. Vivamus non augue at sem sollicitudin
                porta. Morbi fringilla at augue ut interdum. Cras tincidunt
                posuere est non hendrerit. Suspendisse facilisis, risus at
                efficitur egestas, velit sem tempus urna, eget faucibus est ante
                nec sem. Duis pellentesque quam et blandit tempus. Quisque id
                ornare libero. Nulla dignissim nisi a nisl facilisis porta.
                Nullam maximus, tortor eu interdum convallis, neque mi laoreet
                mi, ac tristique eros ex vitae leo. Etiam massa purus, laoreet
                et metus ac, maximus rhoncus mi. Fusce aliquam, tortor at
                interdum imperdiet, turpis risus porta ante, in malesuada lacus
                turpis nec elit. Sed placerat, massa sed tempor malesuada,
                libero metus dapibus est, non porta est elit in lectus. Praesent
                lacus ex, placerat a tortor id, mollis accumsan ligula. Sed
                porttitor efficitur neque, nec consequat nulla tempus ut.
              </h6>
              <div class="suspendisse_button">
                <b-button pill type="submit" variant="info">
                  Request Access <i class="fas fa-arrow-right"></i>
                </b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "GovernmentMeeting",
  data() {
    return {};
  },
};
</script>
<style>
.cards_layouts_suspendisse h6 {
  font-size: 18px;
  font-weight: 300;
  color: #343838;
  line-height: inherit;
}
.suspendisse_button {
  text-align: center;
}
.suspendisse_button .btn-info {
  padding: 0 45px;
  font-weight: 400;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 20px;
}
.suspendisse_button .btn-info i {
  padding-left: 5px;
}
</style>
