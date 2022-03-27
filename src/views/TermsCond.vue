<template>
  <div>
    <section class="hap_id_number_pages">
      <b-container>
        <b-row>
          <b-col md="12">
            <h1 class="p-0">Terms & Conditions</h1>
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
              <ul class="terms_listing">
                <li v-for="card in cards" :key="card.id" :items="cards">
                  <i class="fas fa-angle-right"></i>{{ card.description }}
                </li>
              </ul>
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
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "TermsCond",
  data() {
    return {
      cards: [
        {
          id: 1,
          description: "Sed vel consequat est",
        },
        {
          id: 2,
          description: "Etiam commodo felis id orci semper, at congue augue imperdiet",
        },
        {
          id: 3,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
    };
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
  width: 240px;
  font-weight: 400;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 20px;
}
.suspendisse_button .btn-info i {
  padding-left: 5px;
}
.terms_listing {
    padding: 5px 0 10px;
}
.terms_listing li {
    font-size: 18px;
    font-weight: 300;
    color: #343838;
}
.terms_listing li i {
    padding-right: 7px;
    color: #14c9e1;
}
</style>