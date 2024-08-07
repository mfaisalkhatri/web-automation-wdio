const { browser } = require("@wdio/globals");

describe("Learning WebdriverIO - Radio Buttons", () => {
    it("should tick the Male radio button", async () => {
        await browser.url("https://www.lambdatest.com/selenium-playground/");

        const radioButtonDemoLink = await $('=Radio Buttons Demo');
        await radioButtonDemoLink.click();

        let pageHeader = await $("<h1 />");
        await expect(pageHeader).toHaveText("Radio button Demo");

        const maleRadioBtn = await $("input[value=Male][name=optradio]");
        await maleRadioBtn.click();

        await expect(maleRadioBtn).toBeSelected();

        const getValueBtn = await $('#buttoncheck');
        await getValueBtn.click();

        const outputText = await $('p.radiobutton');
        await expect(outputText).toHaveText("Radio button 'Male' is checked");
    });

    it("should tick the Female radio button", async () => {
        await browser.url("https://www.lambdatest.com/selenium-playground/radiobutton-demo");

        let pageHeader = await $("<h1 />");
        await expect(pageHeader).toHaveText("Radio button Demo");

        const femaleRadioBtn = await $("input[value=Female][name=optradio]");
        await femaleRadioBtn.click();

        await expect(browser.isElementSelected(femaleRadioBtn)).toBeTruthy();

        const getValueBtn = await $('#buttoncheck');
        await getValueBtn.click();

        const outputText = await $('p.radiobutton');
        await expect(outputText).toHaveText("Radio button 'Female' is checked");

        const maleRadioBtn = await $("input[value=Male][name=optradio]");
        await expect(maleRadioBtn).not.toBeSelected();
    });
});
