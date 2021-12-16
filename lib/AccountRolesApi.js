const _ = require('lodash');
module.exports = class AccountRolesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'roles'], params, config);
    }

    read(accountId, roleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'roles', roleId], data, config);
    }


};

