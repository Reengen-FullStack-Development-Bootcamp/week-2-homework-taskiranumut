<script>
import { reservationFormValidation } from "@/mixins/reservationFormValidation.js";

export default {
  name: "ReservationForm",
  mixins: [reservationFormValidation],
  data() {
    return {
      ownerForm: {
        startDate: null,
        endDate: null,
        personNumber: 1,
        dayNumber: null,
      },
    };
  },
  computed: {
    dayNumberError() {
      if (this.ownerForm.startDate && this.ownerForm.endDate) {
        const dayNumber = this.calculateDayNumber();
        if (dayNumber > 0) return false;
        else return true;
      } else return false;
    },
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.ownerForm.dayNumber = this.calculateDayNumber();
      if (this.ownerForm.dayNumber > 0) this.$emit("ownerForm", this.ownerForm);
    },
    calculateDayNumber() {
      const timeDifference =
        this.ownerForm.endDate.getTime() - this.ownerForm.startDate.getTime();
      return timeDifference / (1000 * 3600 * 24);
    },
    disableStartDate(ymd, date) {
      return date < new Date() - 1000 * 3600 * 24;
    },
    disableEndDate(ymd, date) {
      return date <= this.ownerForm.startDate;
    },
  },
};
</script>

<template>
  <div class="p-4 my-5 form-container">
    <h2 class="mb-4">Reservation Form</h2>
    <div>
      <b-form @submit="submitForm">
        <!-- Start date start -->
        <b-row class="my-4">
          <b-col>
            <label for="datepicker-dateformat1">Start date</label>
            <b-form-datepicker
              id="datepicker-dateformat1"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              locale="en"
              :value-as-date="true"
              :date-disabled-fn="disableStartDate"
              v-model="$v.ownerForm.startDate.$model"
              :class="{ 'error-border': dayNumberError }"
            ></b-form-datepicker
          ></b-col>
          <!-- Start date finish -->

          <!-- End date start -->
          <b-col>
            <label for="datepicker-dateformat2">End date</label>
            <b-form-datepicker
              id="datepicker-dateformat2"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              locale="en"
              :value-as-date="true"
              :date-disabled-fn="disableEndDate"
              v-model="$v.ownerForm.endDate.$model"
              :disabled="$v.ownerForm.startDate.$invalid"
              :class="{ 'error-border': dayNumberError }"
            ></b-form-datepicker>
          </b-col>
          <!-- End date finish -->

          <!-- Person number start -->
          <b-col>
            <label for="sb-default">Person number</label>
            <b-form-spinbutton
              id="sb-default"
              v-model="ownerForm.personNumber"
              placeholder="1"
              class="mb-2"
            ></b-form-spinbutton>
          </b-col>
        </b-row>
        <!-- Person number finish -->

        <!-- Error message start-->
        <b-row class="my-n4" v-if="dayNumberError">
          <b-col>
            <p class="error-color">
              <small>* End date cannot be earlier than start date!</small>
            </p>
          </b-col>
        </b-row>
        <!-- Error message finish-->

        <!-- Submit button start -->
        <b-row class="my-4">
          <b-col>
            <b-button
              block
              :disabled="$v.$invalid"
              type="submit"
              variant="none"
              class="btn submit-btn"
              >Create reservation</b-button
            >
          </b-col>
        </b-row>
        <!-- Submit button finish -->
      </b-form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  width: 70%;
  margin: auto;
  background-color: #f4f4f2;
  border-radius: 5px;
}
</style>
