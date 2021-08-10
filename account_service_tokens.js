const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountAccessServiceTokensApi {
    constructor(api) {
        this._api = api;
    }


    list(account_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/access/service_tokens`;
        return api._get(url_slug);
    }


    create(account_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/service_tokens`;

        return api._post(url_slug, params);
    }

    update(account_id, service_token_uuid, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/access/service_tokens/${service_token_uuid}`;

        return api._put(url_slug, params);
    }

    delete(account_id, service_token_uuid) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/access/service_tokens/${service_token_uuid}`;

        return api._delete(url_slug);
    }

}

module.exports = CloudflareAccountAccessServiceTokensApi;