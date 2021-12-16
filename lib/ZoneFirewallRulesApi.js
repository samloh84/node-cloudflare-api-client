const _ = require('lodash');
module.exports = class ZoneFirewallRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId, packageId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'firewall', 'rules'], params, config);
    }


    create(zoneId, packageId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zones', zoneId, 'firewall', 'rules'], data, config);
    }

    read(zoneId, packageId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'firewall', 'rules', ruleId], params, config);
    }

    updateRules(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zones', zoneId, 'firewall', 'rules'], data, config);
    }

    update(zoneId, ruleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zones', zoneId, 'firewall', 'rules', ruleId], data, config);
    }

    deleteRules(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zones', zoneId, 'firewall', 'rules'], params, config);
    }


    delete(zoneId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zones', zoneId, 'firewall', 'rules', ruleId], params, config);
    }

};

