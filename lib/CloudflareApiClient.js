const _ = require('lodash');
const {ApiClient} = require('@samloh84/api-client-base');
const AccountsApi = require("./AccountsApi");
const ZonesApi = require("./ZonesApi");
const UserApi = require("./UserApi");
const InvitesApi = require("./InvitesApi");

module.exports = class CloudflareApiClient extends ApiClient {
    constructor(params) {
        _.defaults(params, {
            baseUrl: 'https://api.cloudflare.com/client/v4/',
        });
        super(params);

        let apiClient = this;
        this.accounts = new AccountsApi(apiClient);
        this.zones = new ZonesApi(apiClient);
        this.user = new UserApi(apiClient);
        this.invites = new InvitesApi(apiClient);

    }


}

