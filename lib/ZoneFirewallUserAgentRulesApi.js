const _ = require('lodash');
module.exports = class ZoneFirewallUserAgentRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId,  params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'firewall', 'ua_rules'], params, config);
    }


    create(zoneId,  data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zones', zoneId, 'firewall', 'ua_rules'], data, config);
    }

    read(zoneId,  ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'firewall', 'ua_rules', ruleId], params, config);
    }

    update(zoneId, ruleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zones', zoneId, 'firewall', 'ua_rules', ruleId], data, config);
    }


    delete(zoneId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zones', zoneId, 'firewall', 'ua_rules', ruleId], params, config);
    }

};

