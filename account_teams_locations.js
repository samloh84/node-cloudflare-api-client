const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountTeamsLocationsApi {
    constructor(api) {
        this._api = api;
    }


    list(account_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/gateway/locations`;
        return api._get(url_slug);
    }



    read(account_id, location_uuid) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/gateway/locations/${location_uuid}`;
        return api._get(url_slug);
    }


    create(account_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/gateway/locations`;


        return api._post(url_slug, params);
    }


    update(account_id, location_uuid, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/gateway/locations/${location_uuid}`;


        return api._put(url_slug, params);
    }




    delete(account_id, location_uuid) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/gateway/locations/${location_uuid}`;

        return api._delete(url_slug);
    }



}

module.exports = CloudflareAccountTeamsLocationsApi;