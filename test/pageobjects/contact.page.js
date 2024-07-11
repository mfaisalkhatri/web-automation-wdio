const { $ } = require("@wdio/globals");

class ContactPage {
  get contactText() {
    return $("h3=Contact");
  }

  get firstNameField() {
    return $("#first_name");
  }

  get lastNameField() {
    return $("#last_name");
  }

  get emailAddressField() {
    return $("#email");
  }

  get subjectField() {
    return $("#subject");
  }

  get messageField() {
    return $("#message");
  }

  get sendBtn() {
    return $('input[type="submit"]');
  }

  get alertMessageText () {
    return $('div[role="alert"]');
  } 

  async fillContactForm(firstname, lastname, emailAddress, subject, message) {
    await this.firstNameField.setValue(firstname);
    await this.lastNameField.setValue(lastname);
    await this.emailAddressField.setValue(emailAddress);
    await this.subjectField.selectByVisibleText(subject);
    await this.messageField.setValue(message);
    await this.sendBtn.click();
  }
}
module.exports = new ContactPage();