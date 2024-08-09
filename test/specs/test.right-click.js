const { browser } = require("@wdio/globals");

describe("Learning WebdriverIO - Right Click", () => {
  it("should perform right click", async () => {
    await browser.url("https://demoqa.com/buttons");


    let rightClickBtn = await $("#rightClickBtn");
    await rightClickBtn.scrollIntoView();
    await rightClickBtn.click({ button: "right" });

    const message = await $('#rightClickMessage');
    await expect(message).toHaveText('You have done a right click');
  });
});
