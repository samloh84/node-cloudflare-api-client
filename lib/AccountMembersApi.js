const _ = require('lodash');
module.exports = class AccountMembersApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'members'], params, config);
    }


    add(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['account', accountId, 'members'], data, config);
    }

    read(accountId, memberId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'members', memberId], data, config);
    }


    update(accountId, memberId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['account', accountId, 'members', memberId], data, config);
    }

    delete(accountId, memberId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['account', accountId, 'members', memberId], data, config);
    }

};

