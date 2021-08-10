const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareAccountAccessLogAccessRequestsApi {
    constructor(api) {
        this._api = api;
    }


    list(account_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}


        let url_slug = `accounts/${account_id}/access/logs/access_requests`;
        return api._get(url_slug, config);
    }


}

module.exports = CloudflareAccountAccessLogAccessRequestsApi;