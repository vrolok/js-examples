// const initHeapUsed = process.memoryUsage().heapUsed || 1;

// Flyweight Pattern

// extrinsic state - customer
// intrinsic state - name

// Classes
// BaseDrink <- Flyweight Object
// MakeDrink <- Flyweight Factory

class BaseDrink {
  // wow
  #recipes;

  constructor(name) {
    this.name = name;
    this.recipe = [];
    this.#recipes = {
      'regular tea': ['hot', 'dark', 'bitter'],
      'sweet tea': ['cold', 'dark', 'sweet'],
      'green tea': ['cold', 'light', 'plain'],
      'black coffee': ['hot', 'dark', 'bitter']
    };

    this.compose(name);
  }

  compose(name) {
    if (this.#recipes.hasOwnProperty(name)) {
      this.recipe = this.#recipes[name];
    }
    else {
      this.recipe = ['unknown'];
    }
  }

  serve(customer) {
    console.log(`serving ${this.recipe[0]} ${this.name} to the customer ${customer}`);
  }
}


class MakeDrink {
  constructor() {
    this._brewedDrinks = {};
  }

  brew(drink) {
    if (this._brewedDrinks.hasOwnProperty(drink)) {
      console.log(`pouring pre made ${drink}`);
      return this._brewedDrinks[drink];
    } else {
      console.log(`making fresh ${drink}`);
      this._brewedDrinks[drink] = new BaseDrink(drink);
      return this._brewedDrinks[drink];
    }
  }
}


const coffeShop = new MakeDrink();

var c = coffeShop.brew('black coffee'); // making fresh black coffee
c.serve(1); // serving hot black coffee to the customer 1
var c = coffeShop.brew('black coffee'); // pouring pre made black coffee
c.serve(2); // serving hot black coffee to the customer 2

// Memory Stats
// const finalHeapUsed = process.memoryUsage().heapUsed || 1;
// console.log((finalHeapUsed - initHeapUsed) / 1000000);
