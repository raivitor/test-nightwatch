var config = require('../../nightwatch.conf.BASIC.js');
console.log(config)

module.exports = { // adapted from: https://git.io/vodU0
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .assert.title('I am a page title - Sauce Labs')
      .saveScreenshot(config.SCREENSHOT_PATH + 'guinea-pig-test.png')
      .end();
  }
};