const _ = require('lodash');
module.exports = class AccessPoliciesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, appId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'apps', appId, 'policies'], params, config);
    }


    read(accountId, appId, policyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'apps', appId, 'policies', policyId], params, config);
    }


    create(accountId, appId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'access', 'apps', appId, 'policies'], data, config);
    }

    update(accountId, appId, policyId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'access', 'apps', appId, 'policies', policyId], data, config);
    }

    delete(accountId, appId, policyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'access', 'apps', appId, 'policies', policyId], params, config);
    }


};

