(function(){
    'use strict';
    
    const unirest = require('unirest');
    
    exports.findRespondingIp = ip => {
        return new Promise((resolve, reject) => {
            unirest.get(`http://${ip}:3480/`)
                    .end(function (response) {
                        if (response.status === 200){
                            resolve(ip);
                        }
                });
        });
    };

    let doDeviceNamesMatch = (name1, name2) => {
        return name1.toLowerCase().replace(' ', '') ===
            name2.toLowerCase().replace(' ', '');
    };

    let getDeviceIdWithName = (ip, name) => {
        return new Promise((resolve, reject) => {
            unirest.get(`http://${ip}:3480/data_request?id=lu_sdata`)
                    .end(function (response) {
                        if (response.status === 200) {
                            let devices = response.body.devices;
                            devices.forEach(device => {
                                if (doDeviceNamesMatch(name, device.name)) {
                                    resolve(device.id);
                                }
                            });
                        }
                });
        });
    };

    exports.setDeviceStatus = (ip, name, isOn, onError) => {
        getDeviceIdWithName(ip, name)
            .then(id => {
                let value = isOn ? 1 : 0;
                let url = `http://${ip}:3480/data_request?id=lu_action&DeviceNum=${id}&serviceId=urn:upnp-org:serviceId:SwitchPower1&action=SetTarget&newTargetValue=${value}`;
                unirest.get(url)
                        .end(function (response) {
                            if (response.status !== 200) {
                                onError('Not successful, ' + response.body);
                            }
                    });    
            });
    };

})();