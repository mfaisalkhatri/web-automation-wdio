import { expect } from "@wdio/globals";
import RegistrationPage from "../pageobjects/registration-page";
import LoginPage from "../pageobjects/login-page";

describe("Register user test", () => {
  it("should create a new user", async () => {
    await RegistrationPage.open();

    await RegistrationPage.createAccount(
      "Steven",
      "Jones",
      "07/02/1991",
      "123 South Mass",

      "33803",
      "Lakeland",
      "FL",
      "US",
      "8637775555",
      "stee388jj23@gmail.com",
      "Magical123$"
    );

    await expect(LoginPage.loginHeader).toHaveText("Login");
  });
});
