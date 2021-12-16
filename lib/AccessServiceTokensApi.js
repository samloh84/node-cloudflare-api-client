const _ = require('lodash');
module.exports = class AccessServiceTokensApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'service_tokens'], params, config);
    }

    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'access', 'service_tokens'], data, config);
    }

    update(accountId,serviceTokenId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'access', 'service_tokens', serviceTokenId], data, config);
    }

    delete(accountId,serviceTokenId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'access', 'service_tokens', serviceTokenId], params, config);
    }



};

