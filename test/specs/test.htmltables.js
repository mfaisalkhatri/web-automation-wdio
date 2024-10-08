import {browser} from "@wdio/globals";

describe("Learning WebdriverIO - Handling data from HTML Tables", () => {
  it("should fetch the record from first row and perform assertion", async () => {
    await browser.url("https://the-internet.herokuapp.com/tables");

    let pageHeader = await $("<h3 />");
    await expect(pageHeader).toHaveText("Data Tables");

    let tableOne = await $("#table1");
    let rowOne = await tableOne.$("tbody tr:nth-child(1)");
    let firstRowLastName = await rowOne.$("td:nth-child(1)");
    await expect(firstRowLastName).toHaveText("Smith");

    let firstRowFirstName = await rowOne.$("td:nth-child(2)");
    await expect(firstRowFirstName).toHaveText("John");

    let firstRowEmail = await rowOne.$("td:nth-child(3)");
    await expect(firstRowEmail).toHaveText("jsmith@gmail.com");

    let firstRowDue = await rowOne.$("td:nth-child(4)");
    await expect(firstRowDue).toHaveText("$50.00");

    let firstRowWebSite = await rowOne.$("td:nth-child(5)");
    await expect(firstRowWebSite).toHaveText("http://www.jsmith.com");
  });

  it("should print the data from the tables using for loop", async () => {
    await browser.url("https://the-internet.herokuapp.com/tables");

    let pageHeader = await $("<h3 />");
    await expect(pageHeader).toHaveText("Data Tables");

    let tableOne = await $("#table1 tbody");
    let rows = await tableOne.$$("<tr />");

    for (let i = 0; i < rows.length; i++) {
      let columns = await rows[i].$$("<td />");

      for (let j = 0; j < columns.length; j++) {
        console.log(await columns[j].getText());
      }
    }
  });

  it("should search for a record and verify it", async () => {
    await browser.url(
      "https://www.lambdatest.com/selenium-playground/table-sort-search-demo"
    );

    let searchBox = await $("input[type=search]");
    await searchBox.setValue("Bennet");

    let table = await $("#example tbody");
    let fetchedRecord = await table.$("tr td:nth-child(1)");

    await expect(fetchedRecord).toHaveText("A. Bennett");
  });

  it("should sort the table records on Name column and verify the data", async () => {
    await browser.url(
      "https://www.lambdatest.com/selenium-playground/table-sort-search-demo"
    );

    async function getNamesFromPage() {
      const names = [];
      const nameElements = await $$("#example tbody tr td:nth-child(1)");
      for (let element of nameElements) {
        names.push(await element.getText());
      }
      return names;
    }

    let allNames = [];
    let isLastPage = false;

    while (!isLastPage) {
      const names = await getNamesFromPage();
      allNames = allNames.concat(names);

      const nextButton = await $("#example_paginate a.next");
      const nextButtonClassName = (
        await nextButton.getAttribute("class")
      ).split(" ");

      if (!nextButtonClassName.includes("disabled")) {
        await nextButton.click();
        await browser.pause(2000);
      } else {
        isLastPage = true;
      }
    }
    const allNamesInDescendingOrder = allNames.sort().reverse();
    const firstTenNames = allNames.slice(0, 10);

    const pageOnNavigationBtn = await $('a.paginate_button[data-dt-idx="1"]');
    await pageOnNavigationBtn.click();

    const nameColumnHeader = await $("#example th:nth-child(1)");
    await nameColumnHeader.waitForClickable({ timeout: 3000 });
    await nameColumnHeader.click();
    const sortedNames = await getNamesFromPage();

    await expect(firstTenNames).toEqual(sortedNames);
  });
});
