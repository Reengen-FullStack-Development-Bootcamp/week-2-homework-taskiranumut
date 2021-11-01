<script>
import PersonInfoForm from "@/components/PersonInfoForm.vue";
import PaymentModal from "@/components/PaymentModal.vue";

export default {
  name: "ReservationPage",
  props: ["reservationInfo"],
  components: {
    PersonInfoForm,
    PaymentModal,
  },
  data() {
    return {
      reservationInfoFromStorage: null,
      paymentModalStatus: false,
      infoFormList: [],
    };
  },
  created() {
    if (this.reservationInfo) this.setLocalStorage();
    this.reservationInfoFromStorage = this.getLocalStorage();
  },
  computed: {
    isValidAllForms() {
      return this.infoFormList.every((item) => item.isValid === true);
    },
  },
  methods: {
    showPaymentModal(status) {
      this.paymentModalStatus = status;
    },
    holdInfoForms(infoForm) {
      if (this.infoFormList.length !== 0) {
        if (this.isThereTheInfoFormInList(infoForm)) {
          this.infoFormList.forEach((item) => {
            if (item.index === infoForm.index) item = { ...infoForm };
          });
        } else this.infoFormList.push(infoForm);
      } else this.infoFormList.push(infoForm);
    },
    isThereTheInfoFormInList(infoForm) {
      return this.infoFormList.some((item) => item.index === infoForm.index);
    },
    setLocalStorage() {
      localStorage.setItem(
        "reservationInfo",
        JSON.stringify(this.reservationInfo)
      );
    },
    getLocalStorage() {
      return JSON.parse(localStorage.getItem("reservationInfo"));
    },
  },
};
</script>

<template>
  <div>
    <PersonInfoForm
      @modalStatus="showPaymentModal"
      :reservationInfo="reservationInfoFromStorage"
      @infoForm="holdInfoForms"
      :isValidAllForms="isValidAllForms"
    />
    <PaymentModal
      v-if="paymentModalStatus"
      @modalStatus="showPaymentModal"
      :reservationInfo="reservationInfoFromStorage"
      :infoFormList="infoFormList"
    />
  </div>
</template>
