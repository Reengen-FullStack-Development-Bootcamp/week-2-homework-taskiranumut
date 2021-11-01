<script>
import { validation } from "@/mixins/validation";

export default {
  name: "InfoFormItem",
  props: ["reservationInfo", "formIndex"],
  mixins: [validation],
  data() {
    return {
      infoForm: {
        index: null,
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        year: null,
        tcNumber: null,
        hesNumber: null,
        gender: null,
        isValid: null,
      },
      genderOption: [
        { value: "male", text: "Male" },
        { value: "female", text: "Female" },
      ],
      yearOption: [],
    };
  },
  created() {
    this.infoForm.index = this.formIndex;
    this.fillYearOption();
  },
  watch: {
    infoForm: {
      handler() {
        this.infoForm.isValid = !this.$v.$invalid;
        this.$emit("infoForm", this.infoForm);
      },
      deep: true,
    },
  },
  methods: {
    fillYearOption() {
      for (let i = 2021; i >= 1900; i--) {
        this.yearOption.push({ value: i, text: i });
      }
    },
  },
};
</script>

<template>
  <div class="p-4 my-5 form-container">
    <h3 v-if="formIndex === 1">Reservation Owner</h3>
    <h3 v-else>Guest - {{ formIndex - 1 }}</h3>

    <b-row class="my-4">
      <b-col>
        <!-- First Name -->
        <label for="firstName">First name</label>
        <b-form-input
          ref="firstNameRef"
          id="firstName"
          v-model.trim="$v.infoForm.firstName.$model"
          placeholder="Ex: John"
          :class="{ 'error-border': $v.infoForm.firstName.$anyError }"
        ></b-form-input>
        <div v-if="$v.infoForm.firstName.$anyError" class="error-color">
          <small>* First name length must be at least 2 characters!</small>
        </div>
      </b-col>
      <b-col>
        <!-- Last Name -->
        <label for="lastName">Last name</label>
        <b-form-input
          id="lastName"
          v-model.trim="$v.infoForm.lastName.$model"
          placeholder="Ex: Doe"
          :class="{ 'error-border': $v.infoForm.lastName.$anyError }"
        ></b-form-input>
        <div v-if="$v.infoForm.lastName.$anyError" class="error-color">
          <small>* Last name length must be at least 2 characters!</small>
        </div>
      </b-col>
    </b-row>

    <b-row class="my-4">
      <b-col>
        <!-- Email -->
        <label for="email">E-mail address</label>
        <b-form-input
          id="email"
          v-model.trim="$v.infoForm.email.$model"
          placeholder="Ex: person@gmail.com"
          :class="{ 'error-border': $v.infoForm.email.$anyError }"
        ></b-form-input>
        <div v-if="$v.infoForm.email.$anyError" class="error-color">
          <small>* E-mail address must be in the correct format!</small>
        </div>
      </b-col>
      <b-col>
        <!-- Phone Number -->
        <label for="phoneNumber">Phone number</label>
        <b-form-input
          id="phoneNumber"
          v-model.trim="$v.infoForm.phoneNumber.$model"
          placeholder="Ex: 05112223344"
          :class="{ 'error-border': $v.infoForm.phoneNumber.$anyError }"
        ></b-form-input>
        <div v-if="$v.infoForm.phoneNumber.$anyError" class="error-color">
          <small>* Phone number must be in the correct format!</small>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col>
        <!-- TC Number -->
        <label for="tcNumber">TC number</label>
        <b-form-input
          id="tcNumber"
          v-model.trim="$v.infoForm.tcNumber.$model"
          placeholder="Ex: 11111111111"
          :class="{ 'error-border': $v.infoForm.tcNumber.$anyError }"
        ></b-form-input>
        <div v-if="$v.infoForm.tcNumber.$anyError" class="error-color">
          <small>* TC number must be in the correct format!</small>
        </div>
      </b-col>
      <b-col>
        <!-- HES Number -->
        <label for="hesNumber">HES number</label>
        <b-form-input
          id="hesNumber"
          v-model.trim="$v.infoForm.hesNumber.$model"
          placeholder="Ex: A1B1222233"
          :class="{ 'error-border': $v.infoForm.hesNumber.$anyError }"
        ></b-form-input>
        <div v-if="$v.infoForm.hesNumber.$anyError" class="error-color">
          <small>* HES number must be in the correct format!</small>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col>
        <!-- Age -->
        <label for="age">Birth year</label>
        <b-form-select
          v-model="$v.infoForm.year.$model"
          :options="yearOption"
          :class="{ 'error-border': $v.infoForm.year.$anyError }"
        ></b-form-select>
        <div v-if="$v.infoForm.year.$anyError" class="error-color">
          <small>* Age cannot be younger than 6!</small>
        </div>
      </b-col>
      <b-col>
        <!-- Gender -->
        <label for="gender">Gender</label>
        <b-form-select
          v-model="$v.infoForm.gender.$model"
          :options="genderOption"
          :class="{ 'error-border': $v.infoForm.gender.$anyError }"
        ></b-form-select>
        <div v-if="$v.infoForm.gender.$anyError" class="error-color">
          <small>* Gender cannot be empty!</small>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.form-container {
  background-color: #f4f4f2;
  border-radius: 5px;
}
</style>
