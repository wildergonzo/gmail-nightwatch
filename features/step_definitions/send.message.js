const { credentials, message } = require('../../config/config.json');
const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const loginPage = client.page.Login();
const gmailPage = client.page.Gmail();
const composerPopup = client.page.Composer();
const subject = `test automated ${new Date()}`;
const messageBody = 'software testing rocks!';

Given(/^User is logged into Gmail$/, () => {
  	return loginPage
    	.navigate()
      .login(credentials.email, credentials.password);
});

When(/^User clicks on Compose button$/, () => {
  	return gmailPage
    	.navigate()
      .waitForElementVisible("@btnCompose")
      .click('@btnCompose')
      .api.pause(1000);
});

When(/^User enters a recipient$/, () => {
  	return composerPopup
      .waitForElementVisible('@txtTo')
      .setValue('@txtTo', message.to);
});

When(/^User enters a message subject$/, () => {
  	return composerPopup
    	.waitForElementVisible('@txtSubject')
      .setValue('@txtSubject', subject);
});

When(/^User enters a message body$/, () => {
    return composerPopup
      .waitForElementVisible('@txaBody')
      .setValue('@txaBody', messageBody);
});

When(/^User clicks on Send button$/, () => {
    return composerPopup
      .waitForElementPresent("@btnSend")
      .click('@btnSend')
      .api.pause(1000);
});

Then(/^message should be sent to recipient$/, () => {
  	return gmailPage
      .waitForElementPresent("@lnkViewMessage");
});