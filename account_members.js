const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const CloudflareAccountsTokenApi = require("./accounts_tokens");


class CloudflareAccountMembersApi {
    constructor(api) {
        this._api = api;
        this.tokens = new CloudflareAccountsTokenApi(api);
    }


    list(account_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}


        let url_slug = `accounts/${account_id}/members`;
        return api._get(url_slug, config);
    }


    read(account_id, member_id) {
        let api = this._api;

        let url_slug = `accounts/${account_id}/members/${member_id}`;

        return api._get(url_slug);
    }

    add(account_id, member_id, params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = `accounts/${account_id}/members/${member_id}`;

        return api._post(url_slug, params);
    }

    update(account_id, member_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `accounts/${account_id}/members/${member_id}`;
        return api._put(url_slug, params);
    }

    delete(account_id, member_id) {
        let api = this._api;


        let url_slug = `accounts/${account_id}/members/${member_id}`;
        return api._delete(url_slug);
    }


}

module.exports = CloudflareAccountMembersApi;