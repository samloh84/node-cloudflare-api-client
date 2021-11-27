const _ = require('lodash');
module.exports = class InvitesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['invites'], params, config);
    }


    read(inviteId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['invites', inviteId], params, config);
    }

    respond(inviteId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['invites', inviteId], data, config);
    }


};

