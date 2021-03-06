const _ = require('lodash');
module.exports = class ZoneWafOverridesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'firewall', 'waf', 'overrides'], params, config);
    }

    create(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zones', zoneId, 'firewall', 'waf', 'overrides'], data, config);
    }

    read(zoneId, overrideId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'firewall', 'waf', 'overrides', overrideId], params, config);
    }


    update(zoneId, overrideId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zones', zoneId, 'firewall', 'waf', 'overrides', overrideId], data, config);
    }

    delete(zoneId, overrideId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zones', zoneId, 'firewall', 'waf', 'overrides', overrideId], params, config);
    }
};

