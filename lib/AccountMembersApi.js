const _ = require('lodash');
module.exports = class AccountMembersApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'members'], params, config);
    }


    add(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'members'], data, config);
    }

    read(accountId, memberId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'members', memberId], data, config);
    }


    update(accountId, memberId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'members', memberId], data, config);
    }

    delete(accountId, memberId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'members', memberId], data, config);
    }

};

