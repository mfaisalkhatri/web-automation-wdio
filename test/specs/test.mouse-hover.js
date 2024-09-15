import {browser}  from "@wdio/globals";

describe("Learning WebdriverIO - Mouse Hover", () => {
  it("should perform mouse hover", async () => {
    await browser.url("https://the-internet.herokuapp.com/hovers");

    let pageHeader = await $("<h3 />");
    await expect(pageHeader).toHaveText("Hovers");

    let imageOne = await $("#content > div > div:nth-child(3)");
    await imageOne.moveTo();

    let nameOfImageOne = await $("<h5 />");
    await expect(nameOfImageOne).toHaveText("name: user1");
  });
});
