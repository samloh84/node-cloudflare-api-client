const _ = require('lodash');
module.exports = class TeamsLocationsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'gateway', 'locations'], params, config);
    }


    read(accountId, locationId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'gateway', 'locations', locationId], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'gateway', 'locations'], data, config);
    }

    update(accountId, locationId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'gateway', 'locations', locationId], data, config);
    }
    delete(accountId, locationId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'gateway', 'locations', locationId], params, config);
    }


};

