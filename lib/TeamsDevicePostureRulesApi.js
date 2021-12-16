const _ = require('lodash');
module.exports = class TeamsDevicePostureRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'devices', 'posture'], params, config);
    }


    read(accountId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['account', accountId, 'devices', 'posture', ruleId], params, config);
    }


    create(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['account', accountId, 'devices', 'posture'], data, config);
    }

    update(accountId, ruleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['account', accountId, 'devices', 'posture', ruleId], data, config);
    }


    delete(accountId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['account', accountId, 'devices', 'posture', ruleId], params, config);
    }


};

