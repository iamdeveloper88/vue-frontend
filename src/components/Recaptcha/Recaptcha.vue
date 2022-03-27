<template>
  <vue-recaptcha ref="recaptcha" :sitekey="sitekey" />
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';

export default {
  components: { VueRecaptcha },
  data() {
    return {
      sitekey: "6Le4IA0eAAAAALj30pYX-Xg_GqyB823NQgtHxqUJ",
    };
  },
  methods: {
    onEvent() {
        // when you need a reCAPTCHA challenge
        this.$refs.recaptcha.execute();
      }
  }
};
</script>
