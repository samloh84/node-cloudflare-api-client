const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountRolesApi {
    constructor(api) {
        this._api = api;
    }


    list(account_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}


        let url_slug = `accounts/${account_id}/roles`;
        return api._get(url_slug, config);
    }


    read(account_id, roles_id) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/roles/${roles_id}`;

        return api._get(url_slug);
    }

}

module.exports = CloudflareAccountRolesApi;