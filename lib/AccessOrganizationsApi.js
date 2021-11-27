const _ = require('lodash');
module.exports = class AccessOrganizationsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    read(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'access', 'organizations'], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['account', accountId, 'access', 'organizations'], data, config);
    }

    update(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['account', accountId, 'access', 'organizations'], data, config);
    }

    revokeUserAccessTokens(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['account', accountId, 'access', 'organizations', 'revoke_user'], data, config);
    }

};

