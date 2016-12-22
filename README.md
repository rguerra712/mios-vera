# mios-vera

Communicate with a vera-lite mios mi casa verde api to control home automation

# Usage
1. Install the npm package `npm install mios-vera`
1. Send commands, for example:
```
var mios = require('mios-vera');

function onError(error) {
  console.log(error);
}

mios.sendCommand('light', true, onError);
```
