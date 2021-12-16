const _ = require('lodash');
module.exports = class AccountSubscriptionsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'subscriptions'], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'subscriptions'], data, config);
    }

    update(accountId, subscriptionId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'subscriptions', subscriptionId], data, config);
    }

    delete(accountId, subscriptionId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'subscriptions', subscriptionId], data, config);
    }

};

