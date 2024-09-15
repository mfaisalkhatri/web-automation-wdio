import { browser } from "@wdio/globals";

describe("Learning WebdriverIO - Double click a button", () => {
  it("should double click on a button", async () => {
    await browser.url("https://demoqa.com/buttons");

    let doubleClickMeBtn = await $('#doubleClickBtn');
    await doubleClickMeBtn.scrollIntoView();    
    await doubleClickMeBtn.doubleClick();

    const message = await $('#doubleClickMessage');
    await expect(message).toHaveText('You have done a double click');
  });
});
