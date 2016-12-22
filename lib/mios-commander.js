(function(){
    'use strict';

    const finder = require('local-device-finder');
    const miosClient = require('../api/mios-client.js');
    const settings = require('../config/settings.js'); 
    
    function scanForIp(onIpObtained){
        let checkCorrectIp = ip =>
            miosClient.findRespondingIp(ip)
                .then(onIpObtained);
     finder.scan(checkCorrectIp, settings.miosSettings.ipRange);
    }

    exports.sendCommand = (name, isOn, onError) => {
        scanForIp(ip => {
            miosClient.setDeviceStatus(ip, name, isOn, onError);
        });
    };

})();