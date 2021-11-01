import {
  required,
  minLength,
  email,
  numeric,
  helpers,
} from "vuelidate/lib/validators";

const checkHesNumber = helpers.regex(
  "checkHesNumber",
  /^[A-Za-z][0-9][A-Za-z][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/
);

const checkPhoneNumber = helpers.regex(
  "checkPhoneNumber",
  /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/
);

const checkTcNumber = helpers.regex(
  "checkTcNumber",
  /^[1-9]{1}[0-9]{9}[02468]{1}$/
);

const ageCheck = (value) => 2021 - value >= 6;

export const validation = {
  validations: {
    infoForm: {
      firstName: {
        required,
        minLength: minLength(2),
      },
      lastName: {
        required,
        minLength: minLength(2),
      },
      email: {
        required,
        email,
      },
      phoneNumber: {
        required,
        numeric,
        checkPhoneNumber,
      },
      year: {
        required,
        numeric,
        ageCheck,
      },
      tcNumber: {
        required,
        numeric,
        checkTcNumber,
      },
      hesNumber: {
        required,
        checkHesNumber,
      },
      gender: {
        required,
      },
    },
  },
};
