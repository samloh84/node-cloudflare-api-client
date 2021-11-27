const _ = require('lodash');
module.exports = class AccountSubscriptionsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'subscriptions'], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['account', accountId, 'subscriptions'], data, config);
    }

    update(accountId, subscriptionId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['account', accountId, 'subscriptions', subscriptionId], data, config);
    }

    delete(accountId, subscriptionId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['account', accountId, 'subscriptions', subscriptionId], data, config);
    }

};

