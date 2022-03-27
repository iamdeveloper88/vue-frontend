<template>
  <b-modal
    id="modal-1"
    :title="title"
    :hide-header="!isHeader"
    :hide-footer="!isFooter"
  >
    <p class="my-4">{{ isHeader }}</p>
    <!-- For the footer work of the modal -->
    <template #modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="success" @click="ok()">
        submit form
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()"> Cancel </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "Modal",
  props: { title: String, isHeader: Boolean, isFooter: Boolean },
  data: () => {
    return {};
  },
};
</script>
