import {browser} from "@wdio/globals";
import ContactFormPage from "../pageobjects/contact.page.js";

describe("Practices of Software Testing website", () => {
  it("should test the contact form", async () => {

    function getTimeStamp() {
      let date = new Date();
      let dateLocale = date.getTime();
      return dateLocale;
    }

    await browser.url("https://practicesoftwaretesting.com/contact");
    await expect(ContactFormPage.contactText).toHaveText("Contact");

    await browser.saveScreenshot(
      "./screenshots/" + "contactpage" + getTimeStamp() + ".png"
    );

    let message = "This is a demo message entered to check the contact form";

    await ContactFormPage.fillContactForm(
      "John",
      "Doe",
      "johndoe@demo.com",
      "Payments",
      message
    );

    await expect(ContactFormPage.alertMessageText).toHaveText(
      "Thanks for your message! We will contact you shortly."
    );
    await browser.saveScreenshot(
      "./screenshots/" + "contactpage" + getTimeStamp() + ".png"
    );
  });
});
