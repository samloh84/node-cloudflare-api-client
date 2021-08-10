const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})


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