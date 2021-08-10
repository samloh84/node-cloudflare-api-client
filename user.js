const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const CloudflareUserTokensApi = require("./user_tokens");


class CloudflareUserApi {
    constructor(api) {
        this._api = api;
        this.tokens = new CloudflareUserTokensApi(api);
    }


    read() {
        let api = this._api;


        let url_slug = "user";
        return api._get(url_slug);
    }


    edit(params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let url_slug = "user";
        return api._patch(url_slug, params);
    }


}

module.exports = CloudflareUserApi;