const _ = require('lodash');
module.exports = class ZoneSubscriptionsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    create(zoneId, subscriptionId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zones', zoneId, 'subscription', subscriptionId], data, config);
    }

    read(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'subscription'], params, config);
    }

    update(zoneId, subscriptionId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zones', zoneId, 'subscription', subscriptionId], data, config);
    }

};

