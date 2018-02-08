const {credentials} = require('../config/config.json');

module.exports = {
  'Login Gmail': function (client) {   
    const loginPage = client.page.Login();

    loginPage.navigate()
      .assert.title('Gmail')
      .assert.visible('@txtEmail')
      .setValue('@txtEmail', credentials.email)
      .click('@btnNext')
      .assert.visible('@txtPassword')
      .setValue('@txtPassword', credentials.password)
      .click('@btnNext');
    client.end();
  }
};