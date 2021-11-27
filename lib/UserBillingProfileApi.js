const _ = require('lodash');
module.exports = class UserBillingProfileApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    read( params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user',  'billing', 'profile'], params, config);
    }


};

