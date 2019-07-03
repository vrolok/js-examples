// Module Pattern

;(function iefeModule(globalThis) {
  // globalThis - global var that guesses wich global object is in use;
  function MyModule() {
    this.myMethod = function myMethod() {
      console.log('myMethod');
    };
    this.myOtherMethod = function myOtherMethod() {
      console.log('myOtherMethod');
    };
  }

  // expose constructor
  globalThis.MyModule = MyModule;
}(globalThis));

var module1 = new MyModule(); // global execution context will find it :)
module1.myMethod();
module1.myOtherMethod();

// Revealing Module Pattern

var module2 = (function iefeRevModule() {
  var privateVar = 'private';

  var privateFunc = () => { console.log('function'); };

  return {
    getVar: () => privateVar,
    setVar: (val) => { privateVar = val; return privateVar; },
    runme: privateFunc
  };
}());

module2.setVar('not private');
console.log(module2.getVar());
module2.runme();
