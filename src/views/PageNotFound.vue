<template>
  <b-container>
    <b-row>
      <b-col lg="12" class="page_not_found">
        <h1>
          404 <br />
          Page Not found!
        </h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    data() {
        
    },
}
</script>
<style>
.page_not_found {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page_not_found h1 {
    text-align: center;
    font-size: 120px;
    color: #343838;
    padding: 6px 0;
    line-height: normal;
}
</style>