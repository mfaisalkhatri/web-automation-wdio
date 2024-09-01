## Don't forget to give a :star: to make the project popular.

## :question: What is this Repository about?

- This repo contains example code for the following demo website: 
    - [LambdaTest's Selenium Playground](https://www.lambdatest.com/selenium-playground/)
    - [The-internet](https://the-internet.herokuapp.com/)
    - [Practice Software Testing](https://practicesoftwaretesting.com/)
    - [Demo QA](https://demoqa.com/)

- WebdriverIO is used as web automation framework
- This repo showcases how to run the tests on 
    - Chrome browser on local machine
    - Chrome browser on LambdaTest cloud grid
    - Firefox browser on local machine
    - Microsoft Edge browser on local machine

- This repo covers example to run tests in parallel across different browsers
- GitHub Actions has been setup for this project, which runs the tests as soon as code is pushed

## Scenarios covered in the example tests using WebdriverIO
1. Performing browser navigation
1. Ticking and Unticking checkboxes
1. Performing double click action on a WebElement
1. Selecting values using single and multi-select dropdown boxes.
1. Handling JavaScript Alerts covering the following:
    1. Getting Text from alert, 
    1. Accept Alert
    1. Dismiss Alert
    1. Enter text and Confirm alert
1. Working with HTML tables - getting value from rows and columns
    1. Fetch records from rows and columns in table
    1. Printing the data from the table using For Loop
    1. Searching a record from the table and verifying it 
    1. Sort the table records on a particular column and verify the column values
1. Performing Mouse hover over a WebElement
1. Handling multiple windows
1. Ticking and Unticking Radio buttons
1. Performing Right click action
1. Typing values in the textbox
1. Capturing Screenshot of the web page



## Running the Tests
1. Clone the repository in your local machine by running the following command: 

    - `git clone git@github.com:mfaisalkhatri/web-automation-wdio.git`

1. Install the dependencies by running the following command: 

    - `npm install`

1. To run the test on local machine use the following command:

    - `npm run test_local`

1. To run the test on LambdaTest cloud grid
    - Make sure to add the LambdaTest Username and accesskey in the environment variable
    - Checkout the `lambdatest.conf.js` file for the configuration details

    To run the tests use the following command: 
      - `npm run test_cloud`

## 🧬 Need Assistance?

- Discuss your queries by writing to me @ `mohammadfaisalkhatri@gmail.com`
  OR ping me on any of the social media sites using the below link:
    - [Linktree](https://linktr.ee/faisalkhatri)

## :writing_hand: Blog Links

- [How to Run WebdriverIO Tests: Getting Started Tutorial](https://www.lambdatest.com/blog/webdriverio-tutorial-run-your-first-automation-script/)

### :thought_balloon: Checkout the blogs related to Testing on

- [Medium](https://medium.com/@iamfaisalkhatri)
- [LambdaTest blogs](https://www.lambdatest.com/blog/author/mfaisalkhatri/)
- [My Website](https://mfaisalkhatri.github.io)

### :bookmark: Checkout videos related to Software Testing and Test automation tools on [Testing Talks with Faisal Khatri](https://www.youtube.com/@faisalkhatriqa)