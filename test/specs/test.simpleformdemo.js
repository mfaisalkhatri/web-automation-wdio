import {expect} from '@wdio/globals';

import SimpleFormPage from "../pageobjects/simpleform.page";


describe ('LambdaTest Selenium Playground website', () => {
it('should check the simple input field', async() => {

    let message = 'This is an automated test using Wdio';

    await SimpleFormPage.open();
    await SimpleFormPage.enterMessage(message);
    
    await expect(SimpleFormPage.yourMessageText).toHaveText(message);

});
});