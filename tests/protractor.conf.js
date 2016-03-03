var cwd = process.cwd();
var seleniumFolder = cwd + '/node_modules/protractor/selenium/';
var seleniumServerJar = require('fs').readdirSync(seleniumFolder).filter((elt) => {
  return /selenium-server-standalone-[\.\d]+\.jar/.test(elt);
})[0];

exports.config = {
  specs: ['protractor/**/*.spec.js'],
  seleniumServerJar: seleniumFolder + '/' + seleniumServerJar,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  maxSessions: 1,
  multiCapabilities: [
    {browserName: 'chrome'}
  ]
};