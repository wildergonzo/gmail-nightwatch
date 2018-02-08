const {extension} = require('../config/config.json');

module.exports = {
  'Loading chrome extension' : function (browser) {
    browser
      .url("chrome://extensions/")
      .waitForElementVisible(extension.id_locator)
      .end();
  }
};