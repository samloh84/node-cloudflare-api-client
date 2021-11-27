const _ = require('lodash');
module.exports = class ZoneWafRulePackagesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'firewall', 'waf', 'packages'], params, config);
    }

    read(zoneId, packageId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'firewall', 'waf', 'packages', packageId], params, config);
    }


    update(zoneId, packageId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zone', zoneId, 'firewall', 'waf', 'packages', packageId], data, config);
    }
};

