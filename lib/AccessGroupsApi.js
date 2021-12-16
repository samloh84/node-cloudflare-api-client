const _ = require('lodash');
module.exports = class AccessGroupsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'groups'], params, config);
    }


    read(accountId, groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'groups', groupId], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'access', 'groups'], data, config);
    }

    update(accountId,groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'access', 'groups', groupId], data, config);
    }

    delete(accountId,groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'access', 'groups', groupId], params, config);
    }



};

