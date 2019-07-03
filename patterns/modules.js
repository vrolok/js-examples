// Revealing Module Pattern

var module = (function iefe() {
  var privateVar = 'private';

  var privateFunc = () => { console.log('function'); };

  return {
    getVar: () => privateVar,
    setVar: (val) => { privateVar = val; return privateVar; },
    runme: privateFunc
  };
}());

module.setVar('not private');
console.log(module.getVar());
module.runme();
