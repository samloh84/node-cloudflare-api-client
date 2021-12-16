const _ = require('lodash');
module.exports = class ZoneFirewallAccessRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'firewall', 'access_rules', 'rules'], params, config);
    }

    create(zoneId,  data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zones', zoneId, 'firewall', 'access_rules', 'rules'], data, config);
    }


    update(zoneId, ruleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'firewall', 'access_rules', 'rules', ruleId], data, config);
    }

    delete(zoneId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zones', zoneId, 'firewall', 'access_rules', 'rules', ruleId], params, config);
    }


};

