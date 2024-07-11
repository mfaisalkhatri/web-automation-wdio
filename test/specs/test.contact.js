const { browser } = require("@wdio/globals");
const ContactFormPage = require("../pageobjects/contact.page");

describe("Practices of Software Testing website", () => {
  it("should test the contact form", async () => {

    await browser.url('https://practicesoftwaretesting.com/contact');
    await expect(ContactFormPage.contactText).toHaveText("Contact");

    let message = "This is a demo message entered to check the contact form";

    await ContactFormPage.fillContactForm(
      "John",
      "Doe",
      "johndoe@demo.com",
      "Payments",
      message
    );

    await expect(ContactFormPage.alertMessageText).toHaveText("Thanks for your message! We will contact you shortly.");
  });
});
