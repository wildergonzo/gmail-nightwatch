var loginCommands = {
  login: function(email, password) {
    this.waitForElementVisible('@email')
        .setValue('@email', email)
        .click('@next')
        .api.pause(1000);
    this.waitForElementVisible('@password')
        .setValue('@password', password)
        .click('@next');
    return this;
  }
};

module.exports = {
    url: 'https://www.google.com/gmail/',
    commands: [loginCommands],
    elements: {
        email: {
            selector: '#identifierId'
        },
        next: {
            selector: 'span.RveJvd.snByac'
        },
        password: {
            selector: 'input.whsOnd.zHQkBf'
        } 
    }
};
