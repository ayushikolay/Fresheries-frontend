import Validations from "./Validations";

export default class SignupValidations {
  constructor(email, password, name, cpassword) {
    (this.email = email),
      (this.password = password),
      (this.name = name),
      (this.cpassword = cpassword);
  }

  checkValidations() {
    let errors = [];
    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Invalid Email";
    }

    if (!Validations.minLength(this.password, 8)) {
      errors["password"] =
        "Password should be of 8 characters including atleast one UpperCase, Lowercase, Number and special characters";
    }

    return errors;
  }

  checkSignupValidations() {
    let errors = [];

    if (!Validations.checkFullName(this.name)) {
      errors["name"] = "Name should contain atleast one character";
    }
    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Invalid Email";
    }

    if (!Validations.minLength(this.password, 8)) {
      errors["password"] =
        "Password should be of 8 characters including atleast one UpperCase, Lowercase, Number and special characters";
    }

    if (!Validations.checkConfirmPassword(this.cpassword, 8, this.password)) {
      errors["cpassword"] =
        "Confirm password should be matched to the password";
    }

    return errors;
  }
}
