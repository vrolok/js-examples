// Builder Pattern

class Burger {
  constructor(size) {
    this.size = size;

    this.cheese = false;
    this.letuce = false;
    this.tomato = false;
    this.onions = false;
  }
}

class BurgerBuilder extends Burger {
  addCheese() {
    this.cheese = true;
    return this;
  }

  addLetuce() {
    this.letuce = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  addOnions() {
    this.onions = true;
    return this;
  }
}

var burder = new BurgerBuilder(1);

burder.addCheese().addLetuce().addTomato().addOnions();

console.log(burder);
