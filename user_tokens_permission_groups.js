const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareUserTokensPermissionGroupsApi {
    constructor(api) {
        this._api = api;
    }


    list() {
        let api = this._api;

        let url_slug = "user/tokens/permission_groups";
        return api._get(url_slug);
    }

}

module.exports = CloudflareUserTokensPermissionGroupsApi;