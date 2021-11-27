const _ = require('lodash');
module.exports = class UserApiTokensApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'tokens'], params, config);
    }

    create(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['user', 'tokens'], data, config);
    }

    read(tokenId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'tokens', tokenId], params, config);
    }

    update(tokenId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['user', 'tokens', tokenId], data, config);
    }

    delete(tokenId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['user', 'tokens', tokenId], params, config);
    }

    roll(tokenId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['user', 'tokens', tokenId, 'value'], data, config);
    }


    verify(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'tokens', 'verify'], params, config);
    }


};

