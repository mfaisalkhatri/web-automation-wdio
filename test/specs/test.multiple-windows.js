const { browser } = require("@wdio/globals");

describe("Learning WebdriverIO - Handle multiple windows", () => {
  it("should switch to a new window and verify its title", async () => {
    await browser.url("https://the-internet.herokuapp.com/windows");

    let pageHeader = await $("<h3 />");
    await expect(pageHeader).toHaveText("Opening a new window");

    let clickHereLink = await $("=Click Here");
    await clickHereLink.click();

    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);

    const newWindowTitle = await browser.getTitle();
    await expect(newWindowTitle).toEqual("New Window");
    await browser.switchToWindow(handles[0]);
  });

  it("should switch to a new window and check its header", async () => {
    await browser.url("https://the-internet.herokuapp.com/windows");

    let pageHeader = await $("<h3 />");
    await expect(pageHeader).toHaveText("Opening a new window");

    let clickHereLink = await $("=Click Here");
    await clickHereLink.click();

    await browser.switchWindow("New Window");

    const newWindowPageHeader = await $("<h3 />");
    await expect(newWindowPageHeader).toHaveText("New Window");
  });
});
