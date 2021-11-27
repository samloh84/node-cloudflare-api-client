const _ = require('lodash');
module.exports = class ZoneWafRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId, packageId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'firewall', 'waf', 'packages', packageId, 'rules'], params, config);
    }

    read(zoneId, packageId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'firewall', 'waf', 'packages', packageId, 'rules', ruleId], params, config);
    }


    update(zoneId, packageId, ruleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zone', zoneId, 'firewall', 'waf', 'packages', packageId, 'rules', ruleId], data, config);
    }
};

