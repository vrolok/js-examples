// Command Pattern

var Administrator = {
  osSupported: {
    linux: ['Ubuntu', 'Debian', 'RHEL'],
    windows: ['Windows Server 2019']
  },
  serverPharm: [],

  deploy(serverName, os) {
    // check if OS is supported
    for (let osFamily in this.osSupported) {
      if (this.osSupported[osFamily].includes(os)) {
        console.log(`deploying ${os} on ${serverName}`);
        this.serverPharm.push({ serverName, os });
        return;
      } else {
        console.log(`${os} is not supported`);
      }
    }
  },

  destroy(serverName) {
    // find server in the serverPharm array and return index || -1
    var srvIndex = this.serverPharm.findIndex(s => s.serverName === serverName);

    if (srvIndex > -1) {
      console.log(`destroying ${serverName}`);
      this.serverPharm.splice(srvIndex, 1);
      return;
    }
    console.log(`server ${serverName} not found`);
  },

  execute(command) {
    var args = Array.from(arguments);
    this[command].apply(this, args.slice(1));
  }
};

var me = Object.create(Administrator);

me.execute('deploy', 'Zeus', 'RHEL'); // deploying RHEL on Zeus
me.execute('destroy', 'Zeus'); // destroying Zeus
