const _ = require('lodash');
module.exports = class UserAccountMembershipsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['memberships'], params, config);
    }


    read(membershipId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['memberships', membershipId], params, config);
    }

    update(membershipId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['memberships', membershipId], data, config);
    }

    delete(membershipId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['memberships', membershipId], params, config);
    }


};

