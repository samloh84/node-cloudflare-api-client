const _ = require('lodash');
module.exports = class AccessPoliciesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'access', 'policies'], params, config);
    }


    read(accountId, policyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'access', 'policies', policyId], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['account', accountId, 'access', 'policies'], data, config);
    }

    update(accountId,policyId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['account', accountId, 'access', 'policies', policyId], data, config);
    }

    delete(accountId,policyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['account', accountId, 'access', 'policies', policyId], params, config);
    }



};

