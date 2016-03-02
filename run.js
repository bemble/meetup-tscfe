var fs = require('fs'), path = require('path');
var Mocha = require('mocha');
var mocha = new Mocha();
var mochaTestDir = 'tests/mocha';

fs.readdirSync(mochaTestDir).filter((file) => {
  return file.substr(-8) === '.spec.js';
}).forEach((file) => {
  mocha.addFile(path.join(mochaTestDir, file));
});

mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures);
  });
});
