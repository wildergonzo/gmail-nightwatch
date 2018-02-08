const {extension} = require('./config/config.json');

module.exports = (function (settings) {

  settings.test_settings.default.desiredCapabilities.chromeOptions = {
    'extensions': [ encode(extension.path) ]
  }
  return settings;

})(require('./nightwatch.json'));

function encode(file) {
  var stream = require('fs').readFileSync(file);
  return new Buffer(stream).toString('base64');
}