const _ = require('lodash');
module.exports = class AccessApplicationsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'access', 'apps'], params, config);
    }


    read(accountId, appId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'access', 'apps', appId], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['account', accountId, 'access', 'apps'], data, config);
    }

    update(accountId,appId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['account', accountId, 'access', 'apps', appId], data, config);
    }

    delete(accountId,appId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['account', accountId, 'access', 'apps', appId], params, config);
    }



};

