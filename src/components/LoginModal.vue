<template>
  <div>
    <b-modal size="md"
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

      <ModalLoginForm v-if="componentName == 'Request'" @onLogin="$emit('click', $event)" :isLoading="isLoading" />
      <ModalVerifyOtp v-if="componentName == 'VerifyOtp'" :email="email" @onEnterOtp="$emit('submitOtp', $event)" @otpResend="$emit('resendOtp', $event)" :isValidate="isValidate" :isResend="isResend" :type="type" :userLoginType="userLoginType" />
      <GetHelp v-if="componentName == 'GetHelp'" :isGetHelp="isGetHelp" @getHelp="$emit('getHelp', $event)" />
    </b-modal>
  </div>
</template>

<script>
import ModalLoginForm from "@/views/Authentication/ModalLoginForm.vue";
import ModalVerifyOtp from '../views/Authentication/VerifyOTP/ModalVerifyOtp.vue';
import GetHelp from '../components/Modal/GetHelp.vue';
export default {
  name: "Modal",
  props: {
    title: String,
    isHeader: Boolean,
    isFooter: Boolean,
    componentName: String,
    modalData: String,
    isLoading: Boolean,
    isValidate: Boolean,
    isResend: Boolean,
    isGetHelp: Boolean,
    email: String,
    type: String,
    userLoginType: String,
    onChange: Function,
    click: Function,
    getHelp: Function
  },
  components: { ModalLoginForm, ModalVerifyOtp, GetHelp },
  data: () => {
    return {
    isModalID:'',
      mymodal: ['mymodal']
    };
  },
};
</script>

<style>
.modal-content {
  border: none;
}
header.modal-header {
  padding: 0;
  border: none;
}

button.close {
  position: absolute;
  right: -22px;
  top: -3px;
  font-weight: 100;
  background-color: transparent;
  color: #fff;
  opacity: 1 !important;
  box-shadow: none;
  border: none;
  border-radius: 0px;
}
.modal-body {
  padding: 0;
}
</style>
