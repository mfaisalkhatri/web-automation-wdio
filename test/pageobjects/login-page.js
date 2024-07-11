import { $ } from "@wdio/globals";
import Page from "./page";

class LoginPage extends Page {
  get loginHeader() {
    return $("h3=Login");
  }
}

export default new LoginPage();
