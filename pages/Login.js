var loginCommands = {
  login: function(email, password) {
    this.waitForElementVisible('@txtEmail')
        .setValue('@txtEmail', email)
        .click('@btnNext')
        .api.pause(1000);
    this.waitForElementVisible('@txtPassword')
        .setValue('@txtPassword', password)
        .click('@btnNext');
    return this;
  }
};

module.exports = {
    url: 'https://www.google.com/gmail/',
    commands: [loginCommands],
    elements: {
        txtEmail: { selector: '#identifierId' },
        btnNext: { selector: 'span.RveJvd.snByac' },
        txtPassword: { selector: 'input.whsOnd.zHQkBf'}
    }
};
