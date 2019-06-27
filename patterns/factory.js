// Factory Pattern

function VirtualServer(options) {
  this.cores = options.cpu || 1;
  this.ram = options.ram || 512;
  this.disk = options.disk || '25GB';
}

function PhysicalServer(options) {
  this.cpu = options.cpu || 'AMD Opteron';
  this.ram = options.ram || '32GB';
  this.disk = options.disk || '250GB';
  this.raid = options.raid || 'none';
}

function ServerFactory() {}

ServerFactory.prototype.serverClass = VirtualServer;

// the meat
ServerFactory.prototype.createServer = function serverFactory(options) {
  switch(options.serverType) {
    case 'virtual':
      this.serverClass = VirtualServer;
      break;
    case 'physical':
      this.serverClass = PhysicalServer;
      break;
  }
  
  return new this.serverClass(options);
}

var factory = new ServerFactory();

var v1 = factory.createServer({
  serverType: 'virtual',
  disk: '50GB',
  ram: 1024
});

console.log(v1); // VirtualServer { cores: 1, ram: 1024, disk: '50GB' }

// Abstract Factory

var abstractServerFactory = (function abstractFactory(){
  var types = {};

  return {
    getFactory(type, obj) {
      var Factory = types[type];

      return Factory ? new Factory(obj) : undefined;
    },
    registerFactory(type, Factory) {
      types[type] = Factory;

      return abstractServerFactory;
    }
  }
}());

function StorageServer(options) {
  this.disk = options.disk || '1TB';
  this.raid = options.raid || 5;
}

abstractServerFactory.registerFactory('storage', StorageServer);
abstractServerFactory.registerFactory('physical', PhysicalServer);

var bucket = abstractServerFactory.getFactory('storage', {
  disk: '2TB',
  raid: 6
})

var p1 = abstractServerFactory.getFactory('physical', {
  cpu:'Intel Xeon',
  ram: '64GB'
})

console.log(bucket);
console.log(p1);