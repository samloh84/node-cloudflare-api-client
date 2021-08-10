const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountAccessGroupsApi {
    constructor(api) {
        this._api = api;
    }


    list(account_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/access/groups`;
        return api._get(url_slug);
    }


    read(account_id, group_uuid) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/access/groups/${group_uuid}`;
        return api._get(url_slug);
    }


    create(account_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/groups`;

        return api._post(url_slug, params);
    }

    update(account_id, group_uuid, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/groups/${group_uuid}`;

        return api._put(url_slug, params);
    }

    delete(account_id, group_uuid) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/access/groups/${group_uuid}`;

        return api._delete(url_slug);
    }

}

module.exports = CloudflareAccountAccessGroupsApi;