const _ = require('lodash');
module.exports = class ZoneFirewallLockdownRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId,  params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId,'firewall', 'lockdowns'], params, config);
    }


    create(zoneId,  data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zone', zoneId,'firewall', 'lockdowns'], data, config);
    }

    read(zoneId,  ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'firewall', 'lockdowns', ruleId], params, config);
    }

    update(zoneId,  ruleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zone', zoneId, 'firewall', 'lockdowns', ruleId], data, config);
    }


    delete(zoneId,  ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zone', zoneId, 'firewall', 'lockdowns', ruleId], params, config);
    }

};

