const _ = require('lodash');
module.exports = class RulesListsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'rules', 'lists'], params, config);
    }


    read(accountId, listId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'rules', 'lists', listId], params, config);
    }


    readListItem(accountId, listId, itemId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'rules', 'lists', listId, 'items', itemId], params, config);
    }

    getBulkOperation(accountId, operationId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'rules', 'lists', 'bulk_operations', operationId], params, config);
    }


    getListItems(accountId, listId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'rules', 'lists', listId, 'items'], params, config);
    }


    createListItems(accountId, listId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'rules', 'lists', listId, 'items'], data, config);
    }


    replaceListItems(accountId, listId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'rules', 'lists', listId, 'items'], data, config);
    }

    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'rules', 'lists'], data, config);
    }

    update(accountId, listId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'rules', 'lists', listId], data, config);
    }


    delete(accountId, listId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'rules', 'lists', listId], params, config);
    }

    deleteListItems(accountId, listId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'rules', 'lists', listId, 'items'], params, config);
    }

};

