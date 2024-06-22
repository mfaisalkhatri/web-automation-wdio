exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  specs: [ './test/specs/**/*.js'],
  exclude: [],
  reporters: ['spec'],
  
  capabilities: [{
    "browserName": "Chrome",
    "browserVersion": "125",
    "LT:Options": {
      "username": process.env.LT_USERNAME,
      "accessKey": process.env.LT_ACCESS_KEY,
      "platformName": "Windows 10",
      "project": "WebdriverIO demo",
      "build": "Simple Form demo",
      "name": "First WebdriverIO test on LambdaTest",
      "selenium_version": "4.0.0",
      "w3c": true
    }
  }],  
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 50000,
  }
};