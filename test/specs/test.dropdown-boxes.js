const { browser } = require("@wdio/globals");

describe("Learning WebdriverIO - Handling Dropdown Boxes", () => {
  it("should select a value from single dropdown box using Visible Text", async () => {
    await browser.url(
      "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
    );

    let pageHeader = await $("h1=Dropdown Demo");
    await expect(pageHeader).toHaveText("Dropdown Demo");

    let singleDropdown = await $("#select-demo");

    await singleDropdown.selectByVisibleText("Wednesday");
    const selectedValue = await singleDropdown.getValue();

    await expect(selectedValue).toEqual("Wednesday");
  });

  it("should select a value from single dropdown box using Index", async () => {
    await browser.url(
      "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
    );

    let pageHeader = await $("h1=Dropdown Demo");
    await expect(pageHeader).toHaveText("Dropdown Demo");

    let singleDropdown = await $("#select-demo");
    await singleDropdown.selectByIndex(5);

    const selectedValue = await singleDropdown.getValue();
    await expect(selectedValue).toEqual("Thursday");
  });
  it("should select a value from single dropdown box using attributes", async () => {
    await browser.url(
      "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
    );

    let pageHeader = await $("h1=Dropdown Demo");
    await expect(pageHeader).toHaveText("Dropdown Demo");

    let singleDropdown = await $("#select-demo");
    await singleDropdown.selectByAttribute("value", "Saturday");

    const selectedValue = await singleDropdown.getValue();
    await expect(selectedValue).toEqual("Saturday");
  });
});
