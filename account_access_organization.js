const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountAccessOrganizationApi {
    constructor(api) {
        this._api = api;
    }


    read(account_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/access/organizations`;
        return api._get(url_slug);
    }

    create(account_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/organizations`;

        return api._post(url_slug, params);
    }

    update(account_id, organization_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/organizations/${organization_id}`;

        return api._put(url_slug, params);
    }

    revoke_user_token(account_id, params) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/access/organizations`;

        return api._post(url_slug, params);
    }

}

module.exports = CloudflareAccountAccessOrganizationApi;