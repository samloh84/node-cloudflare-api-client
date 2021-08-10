const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');



class CloudflareMembershipsApi {
    constructor(api) {
        this._api = api;

    }


    list(params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}

        let url_slug = "memberships";
        return api._get(url_slug, config);
    }


    read(membership_id) {
        let api = this._api;

        let url_slug = `memberships/${membership_id}`;
        return api._get(url_slug);
    }

    update(membership_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `memberships/${membership_id}`;
        return api._put(url_slug, params);
    }


    delete(membership_id) {
        let api = this._api;

        let url_slug = `memberships/${membership_id}`;
        return api._delete(url_slug);
    }

}

module.exports = CloudflareMembershipsApi;