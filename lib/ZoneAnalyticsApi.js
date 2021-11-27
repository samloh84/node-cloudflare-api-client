const _ = require('lodash');
module.exports = class ZoneAnalyticsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    getDashboard(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'analytics', 'dashboard'], params, config);
    }

    getAnalyticsByColocations(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'analytics', 'colos'], params, config);
    }


};

