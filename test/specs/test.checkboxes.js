const { browser } = require("@wdio/globals");

describe("Learning WebdriverIO - Handling Checkboxes", () => {
  it("should tick the checkbox", async () => {
    await browser.url("https://the-internet.herokuapp.com/checkboxes");

    let pageHeader = await $("h3=Checkboxes");
    await expect(pageHeader).toHaveText("Checkboxes");

    let checkboxOne = await $("#checkboxes input:first-child");
    await checkboxOne.click();

    await expect(checkboxOne).toBeSelected();
  });

  it("should un-tick the checkbox", async () => {
    let checkboxTwo = await $("#checkboxes input:last-child");
    await checkboxTwo.click();

    await !expect(checkboxTwo).toBeSelected();
  });
});
