const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const CloudflareUserTokensPermissionGroupsApi = require("./user_tokens_permission_groups");


class CloudflareUserTokensApi {
    constructor(api) {
        this._api = api;
        this.permission_groups = new CloudflareUserTokensPermissionGroupsApi(api);
    }


    list(params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}

        let url_slug = "user/tokens";
        return api._get(url_slug, config);
    }

    create(params) {
        let api = this._api;


        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = "user/tokens";
        return api._post(url_slug, params);
    }


    read(token_id) {
        let api = this._api;

        let url_slug = `user/tokens/${token_id}`;
        return api._get(url_slug);
    }

    edit(token_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `user/tokens/${token_id}`;

        return api._put(url_slug, params);
    }

    delete(token_id) {
        let api = this._api;

        let url_slug = `user/tokens/${token_id}`;
        return api._delete(url_slug);
    }

    roll(token_id) {
        let api = this._api;


        let url_slug = `user/tokens/${token_id}/value`;

        return api._put(url_slug);
    }

    verify() {
        let api = this._api;

        let url_slug = `user/tokens/verify`;
        return api._get(url_slug);
    }


}

module.exports = CloudflareUserTokensApi;