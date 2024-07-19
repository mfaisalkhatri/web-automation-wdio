import { $ } from "@wdio/globals";
import Page  from "./page";

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

  async open() {
    await super.open("simple-form-demo");
  }
}
export default new SimpleFormPage();
