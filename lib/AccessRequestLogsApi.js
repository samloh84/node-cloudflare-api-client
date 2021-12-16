const _ = require('lodash');
module.exports = class AccessRequestLogsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'logs', 'access_requests'], params, config);
    }


};

