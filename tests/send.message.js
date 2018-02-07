const {credentials, message} = require('../config/config.json');

module.exports = {
  before : function(client) {
    const loginPage = client.page.Login();
    loginPage.navigate()
      .login(credentials.email, credentials.password);
  },
  after : function(client) {
    client.end();
  },

  'Send Message': function (client) {   
    const gmailPage = client.page.Gmail();
    const composerPopup = client.page.Composer();
    const subject = `test automated ${new Date()}`;
    const messageBody = 'software testing rocks!';

    gmailPage.navigate()
      .waitForElementVisible("@btnCompose")
      .click('@btnCompose')
      .api.pause(1000);
    composerPopup.composeMessage(message.to, subject, messageBody)
      .waitForElementPresent("@btnSend")
      .click('@btnSend')
      .api.pause(1000);
  }
};