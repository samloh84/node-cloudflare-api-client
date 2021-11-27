const _ = require('lodash');
module.exports = class AccountFirewallAccessRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'firewall', 'access_rules', 'rules'], params, config);
    }

    create(accountId,  data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'firewall', 'access_rules', 'rules'], data, config);
    }


    update(accountId, ruleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['accounts', accountId, 'firewall', 'access_rules', 'rules', ruleId], data, config);
    }

    delete(accountId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'firewall', 'access_rules', 'rules', ruleId], params, config);
    }


};

