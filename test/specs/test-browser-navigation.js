import {browser}  from "@wdio/globals";

describe("Learning WebdriverIO - Handling Browser Navigations", () => {
  it("should perform browser navigations", async () => {
    await browser.url("https://www.lambdatest.com/selenium-playground/");

    const homePageHeader = await $("<h1 />");
    await expect(homePageHeader).toHaveText("Selenium Playground");

    const dataListFilterLink = await $("=Data List Filter");
    await dataListFilterLink.click();

    let dataListFilterPageHeader = await $("<h1 />");
    await expect(dataListFilterPageHeader).toHaveText("Data List Filter");

    await browser.back();
    await expect(homePageHeader).toHaveText("Selenium Playground");

    await browser.forward();
    await expect(dataListFilterPageHeader).toHaveText("Data List Filter");

    await browser.refresh();
    await expect(dataListFilterPageHeader).toHaveText("Data List Filter");
  });
  it("should get title and current url", async () => {
    await browser.url("https://www.lambdatest.com/selenium-playground/");

    const currentTitle = await browser.getTitle();
    console.log(currentTitle);
    await expect(currentTitle).toEqual(
      "Selenium Grid Online | Run Selenium Test On Cloud"
    );

    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toEqual(
      "https://www.lambdatest.com/selenium-playground/"
    );
  });
});
