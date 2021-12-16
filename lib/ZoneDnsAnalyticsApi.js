const _ = require('lodash');
module.exports = class ZoneDnsAnalyticsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    listTable(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'dns_analytics','report'], params, config);
    }
    listByTime(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'dns_analytics','report','bytime'], params, config);
    }

};

