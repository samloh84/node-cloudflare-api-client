const _ = require('lodash');
module.exports = class TeamsListsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'gateway', 'lists'], params, config);
    }


    read(accountId, listId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'gateway', 'lists', listId], params, config);
    }


    getListItems(accountId, listId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'gateway', 'lists', listId, 'items'], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'gateway', 'lists'], data, config);
    }

    update(accountId, listId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'gateway', 'lists', listId], data, config);
    }

    updateListItems(accountId, listId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['accounts', accountId, 'gateway', 'lists', listId], data, config);
    }

    delete(accountId, listId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'gateway', 'lists', listId], params, config);
    }


};

