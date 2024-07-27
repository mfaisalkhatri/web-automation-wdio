import { expect } from "@wdio/globals";
import {alertIsPresent} from 'wdio-wait-for';

describe("Learning to handle JavaScript ALerts using WebdriverIO", () => {
  it("should accept the JS ALert", async () => {

    await browser.url('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    const clickMeBtn = $('button.my-30');
    await clickMeBtn.click();

    await browser.waitUntil(alertIsPresent, { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' });
    const alertText = await browser.getAlertText();
    await expect(alertText).toEqual('I am an alert box!');

    await browser.acceptAlert();
  });
});
