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
}

Console.prototype.load = function load(game) {
  if (this.running) {
    console.log(`loading ${this.game}`);
  }
}

function nextGenConsole(model) {
  // 1. "borrow" attrs from a Console constructor.
  Console.call(this, model); 

  this.architecture = '128bit'
  this.memory = [];
}

// 2. "borrow" methods
nextGenConsole.prototype = Object.create(Console.prototype);

Console.prototype.save = function save(game) {
  if (this.running) {
    console.log(`saving game ${game}`);
    this.memory.push(game)
  }
}

var nes = new Console('NES');
nes.on();

var ps2 = new nextGenConsole('Sony PlayStation 2');
ps2.on();
ps2.save('Tekken 5');
// ========================================================
// ========================================================
