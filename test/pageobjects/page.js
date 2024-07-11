import {browser} from "@wdio/globals";

export default class Page {
  async open(path) {
    //return browser.url(`https://www.lambdatest.com/selenium-playground/${path}`);
     await browser.url(`https://practicesoftwaretesting.com/auth/${path}`);
  }
}