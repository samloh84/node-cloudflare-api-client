const _ = require('lodash');
module.exports = class AccessIdentityProvidersApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'access', 'identity_providers'], params, config);
    }


    read(accountId, identityProviderId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'access', 'identity_providers', identityProviderId], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['account', accountId, 'access', 'identity_providers'], data, config);
    }

    update(accountId,identityProviderId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['account', accountId, 'access', 'identity_providers', identityProviderId], data, config);
    }

    delete(accountId,identityProviderId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['account', accountId, 'access', 'identity_providers', identityProviderId], params, config);
    }



};

