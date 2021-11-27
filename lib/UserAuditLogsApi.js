const _ = require('lodash');
module.exports = class UserAuditLogsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    listUserAuditLogs(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'audit_logs'], params, config);
    }

    listAccountAuditLogs(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'audit_logs'], params, config);
    }


};

