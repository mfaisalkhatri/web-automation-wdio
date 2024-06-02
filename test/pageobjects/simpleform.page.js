const { $ } = require("@wdio/globals");
const Page = require('./page');

class SimpleFormPage extends Page {
  get messageField() {
    return $("#user-message");
  }

  get checkValueBtn() {
    return $("#showInput");
  }

  get yourMessageText() {
    return $("#message");
  }

  async enterMessage(message) {
    await this.messageField.setValue(message);
    await this.checkValueBtn.click();
  }

  open(){
    return super.open('simple-form-demo');
  }
}

module.exports = new SimpleFormPage();