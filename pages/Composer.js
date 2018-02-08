var composerCommands = {
  composeMessage: function(recipient, subject, body) {
    this.waitForElementVisible('@txtTo')
        .setValue('@txtTo', recipient);
    this.waitForElementVisible('@txtSubject')
        .setValue('@txtSubject', subject);
    this.waitForElementVisible('@txaBody')
        .setValue('@txaBody', body);    
    return this;
  }
};

module.exports = {
    url: 'https://mail.google.com/',
    commands: [composerCommands],
    elements: {
        txtTo: { selector: 'textarea[name="to"]' },
        txtSubject: { selector: 'input[name="subjectbox"]' },
        txaBody: { selector: '.Am.Al.editable.LW-avf' },
        btnSend: {
        	selector: '//div[@class="T-I J-J5-Ji aoO T-I-atl L3"]',
        	locateStrategy: 'xpath'
        }
    }
};