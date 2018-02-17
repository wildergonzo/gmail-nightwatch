const { credentials, message } = require('../../config/config.json');
const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const loginPage = client.page.Login();
const gmailPage = client.page.Gmail();

Given(/^User is on Gmail login page$/, () => {
  	return loginPage
    	.navigate()
    	.waitForElementVisible('body', 1000);
});

When(/^User enters a valid email$/, () => {
  	return loginPage
    	.setValue('@txtEmail', credentials.email);
});

When(/^clicks on Next button$/, () => {
  	return loginPage
		.click('@btnNext')
		.api.pause(1000);
});

When(/^User enters a valid password$/, () => {
  	return loginPage
    	.setValue('@txtPassword', credentials.password);
});

Then(/^User should be redirected to Gmail inbox$/, () => {
  	return gmailPage
      .navigate()
  		.waitForElementVisible("@btnCompose");
});