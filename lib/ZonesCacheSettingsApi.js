const _ = require('lodash');
module.exports = class ZonesCacheSettingsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    listVariantsSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'cache','variants'], params, config);
    }

    changeVariantsSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'cache','variants'], data, config);
    }
    deleteVariantsSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'cache','variants'], params, config);
    }




};

