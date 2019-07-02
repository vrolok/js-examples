// Simple Decorator Pattern

class Ticket {
  constructor(config) {
    // class 3 - economy, 2 - business, 1 - first
    this.class = config.class || 3;
    this.price = config.price;
  }
}

function upgradeTicketClass(ticket) {
  if (ticket.class > 1) {
    ticket.class--;
    ticket.price += 1000;
  }
}

var t = new Ticket({ price: 999 });

upgradeTicketClass(t);
upgradeTicketClass(t);
upgradeTicketClass(t);
upgradeTicketClass(t);

console.log(t); // Ticket { class: 1, price: 2999 }

// =================================================
// =================================================

class Pasta {
  constructor(kind) {
    this.kind = kind || 'dry';
  }

  cook(type = 'dough') {
    if (this.kind === 'dry') {
      console.log(`cooking ${this.kind} ${type} for 10min`);
    } else if (this.kind === 'fresh') {
      console.log(`cooking ${this.kind} ${type} for 5min`);
    }
    return this;
  }
}

class Spaghetti extends Pasta {
  constructor(kind, variety) {
    super(kind);

    this.variety = variety;
    this.plate = variety;
  }

  cook() {
    super.cook(this.variety);
  }

  combine(str) {
    this.plate = `${this.plate} with ${str} `;
    return this;
  }
}

class Sauce {
  static add(name, pasta) {
    console.log(`${name} added to your ${pasta.variety}`);
    pasta.combine(name + ' 🍝');
    return pasta;
  }
}

class Cheese {
  static add(name, pasta) {
    console.log(`shreded ${name} added to your ${pasta.variety}`);
    pasta.combine(name + ' 🧀');
    return pasta;
  }
}

var spaghetti = new Spaghetti('dry', 'Pappardelle');

spaghetti.cook();

// Let's decorate our spaghetti 😋
Sauce.add('marinara', spaghetti);
Cheese.add('parmesan', spaghetti);

console.log(spaghetti.plate);
