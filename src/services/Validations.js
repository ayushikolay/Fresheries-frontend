export default class Validations {
  static checkEmail(email) {
    let filter =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (filter.test(email)) {
      return true;
    }
    return false;
  }

  static minLength(name, minLength) {
    let pattern = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
    if (name.length < minLength || !pattern.test(name)) {
      return false;
    }
    return true;
  }

  static checkFullName(name) {
    if (/^[A-Za-z\s]+$/.test(name)) return true;
    return false;
  }

  static checkConfirmPassword(cpass, minLength, password) {
    let pattern = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
    if (
      cpass.length < minLength ||
      !pattern.test(cpass) ||
      cpass !== password
    ) {
      return false;
    }
    return true;
  }
}
