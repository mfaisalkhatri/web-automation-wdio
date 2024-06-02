const { browser } = require("@wdio/globals");

module.exports = class Page {

  open(path) {
    return browser.url(`https://www.lambdatest.com/selenium-playground/${path}`);
  }
};