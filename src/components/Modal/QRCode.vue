<template>
  <div>
    <b-modal
      size="sm"
      id="modal-centers"
      centered
      :title="title"
      :hide-header="isHeader"
      :hide-footer="isFooter"
    >
      <template #modal-header="{ close }">
        <!-- Emulate built in modal header close button action -->

        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="fas fa-times"></i>
        </button>
      </template>
      <div class="qr-code-scanner">
        <VueHtml2pdf
          :show-layout="false"
          :float-layout="false"
          :enable-download="true"
          :preview-modal="false"
          :paginate-elements-by-height="600"
          :pdf-quality="1"
          :manual-pagination="false"
          pdf-format="a4"
          pdf-orientation="portrait"
          pdf-content-width="800px"
          ref="html2Pdf"
          :html-to-pdf-options="{ margin: [75, 65, 0, 0],filename: 'HAPIdNumber.pdf' }"
        >
          <section slot="pdf-content">
            <VueQRCodeComponent
              :text="value"
              :size="size"
              color="#000"
              bg-color="#fff"
              error-level="L"
            >
            </VueQRCodeComponent>
          </section>
        </VueHtml2pdf>
        <div class="download-qr-btn">
          <button type="button" class="btn" @click="$refs.html2Pdf.generatePdf()">
          Download as PDF
        </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import VueQRCodeComponent from "vue-qrcode-component";
import VueHtml2pdf from "vue-html2pdf";
export default {
  name: "QRCode",
  data() {
    return {
      size: 265,
    };
  },
  props: {
    title: String,
    isHeader: Boolean,
    isFooter: Boolean,
    componentName: String,
    modalData: String,
    userData: Object,
    isLoading: Boolean,
    companyData: Object,
    value: String,
    click: Function,
  },
  components: {
    VueQRCodeComponent,
    VueHtml2pdf,
  },
  methods: {
    // // ? ******************************************************************* Download Qr as Pdf ************************************************************ */
    // onDownloadAsPdf() {
    //   this.$refs.html2Pdf.generatePdf();
    // },
  },
};
</script>
<style scoped>

.download-qr-btn {
  text-align: center;
}
.download-qr-btn .btn {
    color: #21b8ce;
    font-size: 20px;
    margin-top: 15px;
}
.download-qr-btn .btn-check:focus + .download-qr-btn .btn, .download-qr-btn .btn:focus {
  box-shadow: 0 0 0 0rem rgb(13 110 253 / 25%);
}
</style>