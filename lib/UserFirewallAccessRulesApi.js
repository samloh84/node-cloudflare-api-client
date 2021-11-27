const _ = require('lodash');
module.exports = class UserFirewallAccessRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'firewall', 'access_rules', 'rules'], params, config);
    }

    create(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['user', 'firewall', 'access_rules', 'rules'], data, config);
    }


    update(ruleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['user', 'firewall', 'access_rules', 'rules', ruleId], data, config);
    }

    delete(ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['user', 'firewall', 'access_rules', 'rules', ruleId], params, config);
    }


};

