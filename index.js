(function(){
    'use strict';

    const miosCommander = require('./lib/mios-commander.js');
    
    exports.sendCommand = (name, isOn, onError) => {
        miosCommander.sendCommand(name, isOn, onError);
    };
    
})();