const _ = require('lodash');
module.exports = class AccountAuditLogsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    listAccountAuditLogs(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account',accountId, 'audit_logs'], params, config);
    }



};

