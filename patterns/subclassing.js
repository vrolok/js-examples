// Subclassing

// ====================Factory Functions===================
// ========================================================
function Console(model) {
  this.model = model;
  this.architecture = '8bit';
  this.running = false;
}

Console.prototype.on = function on() {
  this.running = true;
  console.log(`starting ${this.model}`);
};

Console.prototype.load = function load(game) {
  if (this.running) {
    console.log(`loading ${this.game}`);
  }
};

function NextGenConsole(model) {
  // 1. "borrow" attrs from a Console constructor.
  Console.call(this, model);

  this.architecture = '128bit';
  this.memory = [];
}

// 2. "borrow" methods
NextGenConsole.prototype = Object.create(Console.prototype);

Console.prototype.save = function save(game) {
  if (this.running) {
    console.log(`saving game ${game}`);
    this.memory.push(game);
  }
};

var nes = new Console('NES');
nes.on();

var ps2 = new NextGenConsole('Sony PlayStation 2');
ps2.on();
ps2.save('Tekken 5');

// =========================ES2015=========================
// ========================================================

class ConsoleES5 {
  constructor(model) {
    this.model = model;
    this.architecture = '8bit';
    this.running = false;
  }

  on() {
    this.running = true;
    console.log(`starting ${this.model}`);
  }

  load() {
    if (this.running) {
      console.log(`loading ${this.game}`);
    }
  }
}

class NextGenConsoleES5 extends ConsoleES5 {
  constructor(model) {
    super(model);

    this.architecture = '128bit';
    this.memory = [];
  }

  save(game) {
    if (this.running) {
      console.log(`saving game ${game}`);
      this.memory.push(game);
    }
  }
}

var nesES5 = new ConsoleES5('NES es5');
nesES5.on();

var ps2ES5 = new NextGenConsoleES5('Sony PlayStation 2 es5');
ps2ES5.on();
ps2ES5.save('Final Fantasy');
