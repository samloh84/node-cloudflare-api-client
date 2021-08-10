const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountAccessShortLivedCertificatesApi {
    constructor(api) {
        this._api = api;
    }


    list(account_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/access/apps/ca`;
        return api._get(url_slug);
    }


    read(account_id, app_uuid) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}/ca`;
        return api._get(url_slug);
    }


    create(account_id, app_uuid, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}/ca`;


        return api._post(url_slug, params);
    }


    delete(account_id, app_uuid) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}/ca`;

        return api._delete(url_slug);
    }

}

module.exports = CloudflareAccountAccessShortLivedCertificatesApi;