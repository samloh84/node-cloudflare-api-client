const _ = require('lodash');
module.exports = class TeamsRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'gateway', 'rules'], params, config);
    }


    read(accountId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'gateway', 'rules', ruleId], params, config);
    }



    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'gateway', 'rules'], data, config);
    }

    update(accountId, ruleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'gateway', 'rules', ruleId], data, config);
    }


    delete(accountId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'gateway', 'rules', ruleId], params, config);
    }


};

