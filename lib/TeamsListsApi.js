const _ = require('lodash');
module.exports = class TeamsListsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'gateway', 'lists'], params, config);
    }


    read(accountId, listId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'gateway', 'lists', listId], params, config);
    }


    getListItems(accountId, listId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'gateway', 'lists', listId, 'items'], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['account', accountId, 'gateway', 'lists'], data, config);
    }

    update(accountId, listId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['account', accountId, 'gateway', 'lists', listId], data, config);
    }

    updateListItems(accountId, listId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['account', accountId, 'gateway', 'lists', listId], data, config);
    }

    delete(accountId, listId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['account', accountId, 'gateway', 'lists', listId], params, config);
    }


};

