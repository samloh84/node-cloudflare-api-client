const _ = require('lodash');
module.exports = class AccessKeysConfigurationApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'keys'], params, config);
    }


    update(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'access', 'keys'], data, config);
    }

    rotate(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'access', 'keys', 'rotate'], data, config);
    }


};

