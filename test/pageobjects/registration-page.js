import { $ } from "@wdio/globals";
import Page from "./page";

class RegistrationPage extends Page {
  get firstNameField() {
    return $("#first_name");
  }

  get lastNameField() {
    return $("#last_name");
  }

  get dobField() {
    return $("#dob");
  }

  get addressField() {
    return $("#address");
  }

  get postCodeField() {
    return $("#postcode");
  }

  get cityField() {
    return $("#city");
  }

  get stateField() {
    return $("#state");
  }

  get phoneNumberField() {
    return $("#phone");
  }

  get emailField() {
    return $("#email");
  }

  get passwordField() {
    return $("#password");
  }

  get countryField() {
    return $("#country");
  }

  get registerButton() {
    return $('button[data-test="register-submit"]');
  }

  async createAccount(
    firstName,
    lastName,
    dob,
    address,
    postCode,
    city,
    state,
    country,
    phoneNumber,
    email,
    pass
  ) {
    await this.firstNameField.setValue(firstName);

    await this.lastNameField.setValue(lastName);

    await this.dobField.setValue(dob);

    await this.addressField.setValue(address);

    await this.postCodeField.setValue(postCode);

    await this.cityField.setValue(city);

    await this.stateField.setValue(state);

    await this.countryField.selectByAttribute("value", country);

    await this.phoneNumberField.setValue(phoneNumber);

    await this.emailField.setValue(email);

    await this.passwordField.setValue(pass);

    await this.registerButton.click();
  }

  async open() {
    return await super.open("register");
  }
}
export default new RegistrationPage();
