const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareInvitesApi {
    constructor(api) {
        this._api = api;
        this.tokens = new CloudflareInvitesTokenApi(api);
    }


    list() {
        let api = this._api;

        let url_slug = "invites";
        return api._get(url_slug);
    }


    read(invite_id) {
        let api = this._api;

        let url_slug = `invites/${invite_id}`;
        return api._get(url_slug);
    }

    respond(invite_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `invites/${invite_id}`;
        return api._patch(url_slug, params);
    }


}

module.exports = CloudflareInvitesApi;