const _ = require('lodash');
module.exports = class AccessServiceTokensApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'access', 'service_tokens'], params, config);
    }

    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['account', accountId, 'access', 'service_tokens'], data, config);
    }

    update(accountId,serviceTokenId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['account', accountId, 'access', 'service_tokens', serviceTokenId], data, config);
    }

    delete(accountId,serviceTokenId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['account', accountId, 'access', 'service_tokens', serviceTokenId], params, config);
    }



};

