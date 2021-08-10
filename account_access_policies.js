const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountAccessPoliciesApi {
    constructor(api) {
        this._api = api;
    }


    list(account_id, app_uuid) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}/policies`;
        return api._get(url_slug);
    }


    read(account_id, app_uuid, policy_uuid) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}/policies/${policy_uuid}`;
        return api._get(url_slug);
    }


    create(account_id, app_uuid, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}/policies`;


        return api._post(url_slug, params);
    }


    update(account_id, app_uuid, policy_uuid, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}/policies/${policy_uuid}`;


        return api._put(url_slug, params);
    }


    delete(account_id, app_uuid, policy_uuid) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/access/apps/${app_uuid}/policies/${policy_uuid}`;

        return api._delete(url_slug);
    }


}

module.exports = CloudflareAccountAccessPoliciesApi;