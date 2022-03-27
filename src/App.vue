<template>
  <div id="app">
    <Header v-if="!$route.meta.hideHeaderFooter" />
    <router-view />
    <Footer v-if="!$route.meta.hideHeaderFooter" />
  </div>
</template>

<script>
import Header from "../src/components/Layouts/Header.vue";
import Footer from "./components/Layouts/Footer.vue";

export default {
  components: { Header, Footer },
  data() {
    return {};
  },
};
</script>
