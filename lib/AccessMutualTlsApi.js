const _ = require('lodash');
module.exports = class AccessMutualTlsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'certificates'], params, config);
    }


    read(accountId, certificateId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'certificates', certificateId], params, config);
    }


    create(accountId, certificateId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'access', 'certificates'], data, config);
    }


    update(accountId, certificateId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId, 'access', 'certificates', certificateId], data, config);
    }

    delete(accountId, certificateId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'access', 'certificates', certificateId], params, config);
    }

};

