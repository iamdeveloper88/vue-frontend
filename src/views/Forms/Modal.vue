<template>
  <div>
    <b-modal
      :size="size"
      id="modal-center"
      centered
      :title="title"
      :hide-header="isHeader"
      :hide-footer="isFooter"
      :isModalID="isModalID"
    >
      <template #modal-header="{ close }">
        <!-- Emulate built in modal header close button action -->

        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="fas fa-times"></i>
        </button>
      </template>
      <RequestForm
        v-if="componentName == 'Request'"
        :companyData="companyData"
      />
      <EditUser
        v-if="componentName == 'EditUser'"
        :user="userData"
        @onUser="$emit('click', $event)"
        :isLoading="isLoading"
      />

      <AddScreening
        v-if="componentName == 'AddScreening'"
        @addScreening="$emit('onAddScreening', $event)"
        :isAdding="isAdding"
      />
    </b-modal>
  </div>
</template>

<script>
import RequestForm from "@/views/Forms/RequestForm.vue";
import EditUser from "@/views/Forms/EditUser.vue";
import AddScreening from "./AddScreening.vue";
export default {
  name: "Modal",
  props: {
    title: String,
    isHeader: Boolean,
    isFooter: Boolean,
    componentName: String,
    modalData: String,
    userData: Object,
    isLoading: Boolean,
    isAdding: Boolean,
    companyData: Object,
    click: Function,
    onAddScreening: Function,
    size: String,
  },
  components: { RequestForm, EditUser, AddScreening },
  data: () => {
    return {
      isModalID: "",
      myModal: ["myModal"],
    };
  },
  methods: {
    updatedCompanyInfo() {
      this.$parent.getInformation();
    },
  },
};
</script>
