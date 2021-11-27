const _ = require('lodash');
module.exports = class UserPermissionGroupsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'tokens', 'permission_groups'], params, config);
    }

};

