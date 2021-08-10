const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountAccessApplicationsApi {
    constructor(api) {
        this._api = api;
    }


    list(account_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/access/apps`;
        return api._get(url_slug);
    }


    read(account_id, app_uuid) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}`;
        return api._get(url_slug);
    }


    create(account_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/apps`;


        return api._post(url_slug, params);
    }


    update(account_id, app_uuid, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}`;


        return api._put(url_slug, params);
    }


    delete(account_id, app_uuid) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}`;

        return api._delete(url_slug);
    }


    revoke_tokens(account_id, app_uuid) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}/revoke_tokens`;

        return api._post(url_slug);
    }

}

module.exports = CloudflareAccountAccessApplicationsApi;