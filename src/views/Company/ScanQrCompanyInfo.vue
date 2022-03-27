<template>
  <div>
    <h1 v-if="isSomethingWrong">There is some error. Try again Later</h1>
  </div>
</template>
<script>
import ApiClass from "@/Api/Api";

export default {
  name: "ScanQrCompanyInfo",
  data() {
    return {
      isSomethingWrong: false,
      companyHapId: "",
    };
  },
  methods: {
    async companyData() {
      // if (this.$route.params.userType === "user") {
      const result = await ApiClass.getRequest(
        `scan_hap_info/${this.$route.params.companyId}/${this.$route.params.userType}`,
        false
      );
      if (result.data.status_code === "1") {
        this.companyHapId = result.data.data;
        if (this.$route.params.userType === "user") {
          return this.$router.push({
            name: "SearchLook",
            params: { companyHapId: this.companyHapId },
          });
        }
        return this.$router.push({
          name: "ScannedInfo",
          params: { companyHapId: this.companyHapId, userType: this.$route.params.userType },
        });
      }
      return (this.isSomethingWrong = true);
    },
  },
  mounted() {
    this.companyData();
  },
};
</script>
