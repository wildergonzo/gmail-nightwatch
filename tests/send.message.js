const {credentials} = require('../config/config.json');

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

    gmailPage.navigate()
      .waitForElementVisible("@btnSend")
      .click('@btnSend')
      .api.pause(1000); // ready to compose
  }
};