const {credentials} = require('../config/config.json');

module.exports = {
  'Login Gmail': function (client) {   
    var loginPage = client.page.Login();

    loginPage.navigate()
      .assert.title('Gmail')
      .assert.visible('@email')
      .setValue('@email', credentials.email)
      .click('@next')
      .assert.visible('@password')
      .setValue('@password', credentials.password)
      .click('@next');
    client.end();
  }
};