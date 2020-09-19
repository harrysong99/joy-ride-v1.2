// pull in validator and is-empty dependencies
// export the function validateRegisterInput, which takes in data as a parameter
// instantiate our errors object
// convert all empty fields to an empty string before running validation checks
// check for empty fields, valid email formats, password requirements and confirm password equality using validator functions
// return our errors object with any and all errors contained as well as an isValid boolean that checks to see if we have any errors

const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.serviceTime = !isEmpty(data.serviceTime) ? data.serviceTime : "";
  data.driver = !isEmpty(data.driver) ? data.driver : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid Email";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  if (Validator.isEmpty(data.serviceTime)) {
    errors.serviceTime = "Service Time field is required";
  }
  if (Validator.isEmpty(data.driver)) {
    errors.driver = "Driver field is required";
  }
  if (Validator.isEmpty(data.location)) {
    errors.location = "Location field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
