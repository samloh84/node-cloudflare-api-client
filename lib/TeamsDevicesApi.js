const _ = require('lodash');
module.exports = class TeamsDevicesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId,  'devices'], params, config);
    }


    read(accountId, deviceId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId,  'devices', deviceId], params, config);
    }
    

    revoke(accountId, deviceId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId,  'devices', deviceId], params, config);
    }

    getLocalDomainFallbackList(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId,  'devices', 'policy', 'fallback_domains'], params, config);
    }

    setLocalDomainFallbackList(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId,  'devices', 'policy', 'fallback_domains'], params, config);
    }


    getSplitTunnelExcludeList(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId,  'devices', 'policy', 'exclude'], params, config);
    }

    setSplitTunnelExcludeList(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId,  'devices', 'policy', 'exclude'], params, config);
    }

    getSplitTunnelIncludeList(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId,  'devices', 'policy', 'include'], params, config);
    }

    setSplitTunnelIncludeList(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId,  'devices', 'policy', 'include'], params, config);
    }

};

