const _ = require('lodash');
module.exports = class AccessOrganizationsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    read(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'organizations'], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'access', 'organizations'], data, config);
    }

    update(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'access', 'organizations'], data, config);
    }

    revokeUserAccessTokens(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'access', 'organizations', 'revoke_user'], data, config);
    }

};

