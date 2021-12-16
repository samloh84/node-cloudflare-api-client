const _ = require('lodash');
module.exports = class ZoneRateLimitsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'rate_limits'], params, config);
    }


    read(zoneId, rateLimitId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'rate_limits', rateLimitId], params, config);
    }


    create(zoneId, rateLimitId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zones', zoneId, 'rate_limits'], data, config);
    }


    update(zoneId, rateLimitId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zones', zoneId, 'rate_limits', rateLimitId], data, config);
    }

    delete(zoneId, rateLimitId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zones', zoneId, 'rate_limits', rateLimitId], params, config);
    }


};

