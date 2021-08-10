const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountSubscriptionsApi {
    constructor(api) {
        this._api = api;
    }


    list(account_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/subscriptions`;
        return api._get(url_slug);
    }

    create(account_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/subscriptions`;

        return api._post(url_slug, params);
    }
    update(account_id, subscription_id,params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/subscriptions/${subscription_id}`;

        return api._put(url_slug, params);
    }

    delete(account_id, subscription_id) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/subscriptions/${subscription_id}`;

        return api._delete(url_slug);
    }

}

module.exports = CloudflareAccountSubscriptionsApi;