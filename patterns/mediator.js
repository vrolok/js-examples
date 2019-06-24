// Mediator Pattern

var Tower = {
  queue: [],

  inQueue(plane) {
    if (!this.queue.includes(plane)) {
      this.queue.push(plane);
    }
    let mode = plane.mode ? 'take off.' : 'landing.';
    console.log(plane.flight + ' queued for ' + mode);
  },

  deQueue() {
    if (this.queue.length > 0) {
      var nextPlaneInLine = this.queue.shift();
      if (nextPlaneInLine.mode) {
        console.log(nextPlaneInLine.flight + ' is ready to take off.');
        nextPlaneInLine.takeoff();
      } else {
        nextPlaneInLine.land();
        console.log(nextPlaneInLine.flight + ' arrived.');
      }
    }
  }
}

var Airplane = {
  flight: '',
  mode: false,
  land() {
    this.mode = !this.mode;
    console.log(this.flight + ' touch down');
  },

  takeoff() {
    this.mode = !this.mode;
    console.log(this.flight + ' airborne');
  }
}

var TAS = Object.create(Tower);

var p1 = Object.assign(Object.create(Airplane), {"flight": "A1111"});
var p2 = Object.assign(Object.create(Airplane), {"flight": "B2222", "mode": true});
var p3 = Object.assign(Object.create(Airplane), {"flight": "C3333"});
var p4 = Object.assign(Object.create(Airplane), {"flight": "D4444", "mode": true});

// Let's add & process all planes to a queue
TAS.inQueue(p1); // A1111 queued for landing.
TAS.inQueue(p2); // B2222 queued for take off.
TAS.inQueue(p3); // C3333 queued for landing.
TAS.inQueue(p4); // D4444 queued for take off.

TAS.deQueue(); // A1111 touch down, => arrived.
TAS.deQueue(); // B2222 is ready to take off. => airborne
TAS.deQueue(); // ...
TAS.deQueue(); // ...

TAS.inQueue(p2); // B2222 queued for landing.
TAS.inQueue(p4); // D4444 queued for landing.
TAS.deQueue(); // B2222 is ready to take off. => airborne
TAS.deQueue(); // ...