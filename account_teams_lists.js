const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountTeamsListsApi {
    constructor(api) {
        this._api = api;
    }


    list(account_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/gateway/lists`;
        return api._get(url_slug);
    }



    read(account_id, list_uuid) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/gateway/lists/${list_uuid}`;
        return api._get(url_slug);
    }


    list_items(account_id,list_uuid) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/gateway/lists/${list_uuid}/items`;
        return api._get(url_slug);
    }

    create(account_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/gateway/lists`;


        return api._post(url_slug, params);
    }


    update(account_id, list_uuid, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/gateway/lists/${list_uuid}`;


        return api._put(url_slug, params);
    }



    patch(account_id, list_uuid, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/gateway/lists/${list_uuid}`;


        return api._patch(url_slug, params);
    }


    delete(account_id, list_uuid) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/gateway/lists/${list_uuid}`;

        return api._delete(url_slug);
    }



}

module.exports = CloudflareAccountTeamsListsApi;