import { expect } from "@wdio/globals";
import { alertIsPresent } from "wdio-wait-for";

describe("Learning to handle JavaScript ALerts using WebdriverIO", () => {
  it("should accept the JS ALert", async () => {
    await browser.url(
      "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
    );
    const jsAlertClickMeBtn = $("button.my-30");
    await jsAlertClickMeBtn.click();

    await browser.waitUntil(alertIsPresent, {
      timeout: 5000,
      timeoutMsg: "Failed, after waiting for the alert to be present",
    });
    const alertText = await browser.getAlertText();
    await expect(alertText).toEqual("I am an alert box!");

    await browser.acceptAlert();
  });

  it("should accept the confirmation alert", async () => {
    await browser.url(
      "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
    );
    const confirmBoxClickMeBtn = $(".container .mt-30:nth-child(2) button");
    await confirmBoxClickMeBtn.click();

    await browser.waitUntil(alertIsPresent, {
      timeout: 5000,
      timeoutMsg: "Failed, after waiting for the alert to be present",
    });
    const alertText = await browser.getAlertText();
    await expect(alertText).toEqual("Press a button!");

    await browser.acceptAlert();

    const confirmMessage = $("#confirm-demo");
    await expect(confirmMessage).toHaveText("You pressed OK!");
  });

  it("should dismiss the confirmation alert", async () => {
    await browser.url(
      "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
    );
    const confirmBoxClickMeBtn = $(".container .mt-30:nth-child(2) button");
    await confirmBoxClickMeBtn.click();

    await browser.waitUntil(alertIsPresent, {
      timeout: 5000,
      timeoutMsg: "Failed, after waiting for the alert to be present",
    });
    const alertText = await browser.getAlertText();
    await expect(alertText).toEqual("Press a button!");
    
    await browser.dismissAlert();

    const confirmMessage = $("#confirm-demo");
    await expect(confirmMessage).toHaveText("You pressed Cancel!");
  });

});
