const _ = require('lodash');
module.exports = class ZoneRatePlanApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    listAvailableRatePlans(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'available_rate_plans'], params, config);
    }

    listAvailablePlans(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'available_plans'], params, config);
    }

    readPlan(zoneId, availablePlanId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'available_plans', availablePlanId], params, config);
    }

};

