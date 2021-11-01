import { required } from "vuelidate/lib/validators";

export const reservationFormValidation = {
  validations: {
    ownerForm: {
      startDate: {
        required,
      },
      endDate: {
        required,
      },
    },
  },
};
