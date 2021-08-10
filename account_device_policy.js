const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountDevicePolicyApi {
    constructor(api) {
        this._api = api;
    }


    setDomainFallbackList(account_id, params) {
        let api = this._api;

        if(_.isEmpty(params)){
            params = {}
        }

        let url_slug = `accounts/${account_id}/devices/policy/fallback_domains`;
        return api._put(url_slug, params);
    }

    getDomainFallbackList(account_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/devices/policy/fallback_domains`;
        return api._get(url_slug);
    }



    setSplitTunnelExcludeList(account_id, params) {
        let api = this._api;

        if(_.isEmpty(params)){
            params = {}
        }

        let url_slug = `accounts/${account_id}/devices/policy/exclude`;
        return api._put(url_slug, params);
    }

    getSplitTunnelExcludeList(account_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/devices/policy/exclude`;
        return api._get(url_slug);
    }



    read(account_id, posture_rule_uuid) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/devices/posture/${posture_rule_uuid}`;
        return api._get(url_slug);
    }



    create(account_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/devices/posture`;


        return api._post(url_slug, params);
    }


    update(account_id, posture_rule_uuid, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/devices/posture/${posture_rule_uuid}`;


        return api._put(url_slug, params);
    }



    delete(account_id, posture_rule_uuid) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/devices/posture/${posture_rule_uuid}`;

        return api._delete(url_slug);
    }



}

module.exports = CloudflareAccountDevicePolicyApi;