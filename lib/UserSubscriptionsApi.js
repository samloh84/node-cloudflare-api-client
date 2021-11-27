const _ = require('lodash');
module.exports = class UserSubscriptionsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'subscriptions'], params, config);
    }


    update(subscriptionId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['user', 'subscriptions', subscriptionId], data, config);
    }

    delete(subscriptionId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['user', 'subscriptions', subscriptionId], data, config);
    }

};

