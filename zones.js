const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const CloudflareZoneSettingsApi = require("./zone_settings");


class CloudflareZonesApi {
    constructor(api) {
        this._api = api;

        this.settings = new CloudflareZoneSettingsApi()
    }


    list(params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}


        let url_slug = "zones";
        return api._get(url_slug, config);
    }


    create(params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `zones`;

        return api._post(url_slug, params);
    }

    read(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}`;
        return api._get(url_slug);
    }

    update(zone_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `zones/${zone_id}`;
        return api._patch(url_slug, params);
    }


    delete(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}`;
        return api._delete(url_slug);
    }

    purge_cache(zone_id, params) {
        let api = this._api;


        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `zones/${zone_id}/purge_cache`;
        return api._post(url_slug, params);
    }
}

module.exports = CloudflareZonesApi;