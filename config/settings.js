(function(){
    'use strict';

    let settings = {};

    if (process.env.MIOS_VERA_IP_RANGE){
        settings.miosIpRange = process.env.MIOS_VERA_IP_RANGE; 
    } else {
        settings.miosIpRange = "1-254";
    }
    exports.miosSettings = {
        ipRange: settings.miosIpRange
    };
})();