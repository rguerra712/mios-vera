# mios-vera

Communicate with a vera-lite mios mi casa verde api to control home automation

# Usage
1. Install the npm package `npm install mios-vera`
1. If you know what range of ports your vera device is running, add it to the environment variable `MIOS_VERA_IP_RANGE`
  1. e.g. `MIOS_VERA_IP_RANGE=100-140`
1. Send commands, for example:
```
var mios = require('mios-vera');

function onError(error) {
  console.log(error);
}

mios.sendCommand('light', true, onError);
```
