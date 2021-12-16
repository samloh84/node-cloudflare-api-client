const _ = require('lodash');
module.exports = class AccountBillingProfileApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    read(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'billing', 'profile'], params, config);
    }


};

