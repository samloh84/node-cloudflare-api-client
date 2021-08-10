const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const CloudflareAccountAccessApplicationsApi = require("./account_access_applications");
const CloudflareAccountAccessCertificatesApi = require("./account_access_certificates");
const CloudflareAccountAccessGroupsApi = require("./account_access_groups");
const CloudflareAccountAccessIdentityProvidersApi = require("./account_access_identity_providers");
const CloudflareAccountAccessOrganizationApi = require("./account_access_organization");
const CloudflareAccountAccessPoliciesApi = require("./account_access_policies");
const CloudflareAccountAccessLogAccessRequestsApi = require("./account_access_requests");
const CloudflareAccountAccessShortLivedCertificatesApi = require("./account_access_short_lived_certificates");
const CloudflareAccountDevicePolicyApi = require("./account_device_policy");
const CloudflareAccountDevicesPostureRulesApi = require("./account_device_posture_rules");
const CloudflareAccountMembersApi = require("./account_members");
const CloudflareAccountAccessServiceTokensApi = require("./account_service_tokens");
const CloudflareAccountSubscriptionsApi = require("./account_subscriptions");
const CloudflareAccountTeamsRulesApi = require("./account_teams_rules");
const CloudflareAccountTeamsLocationsApi = require("./account_teams_locations");
const CloudflareAccountTeamsListsApi = require("./account_teams_lists");
const CloudflareAccountRolesApi = require("./account_roles");


class CloudflareAccountsApi {
    constructor(api) {
        this._api = api;
        this.access = {
            applications: new CloudflareAccountAccessApplicationsApi(api),
            certificates: new CloudflareAccountAccessCertificatesApi(api),
            groups: new CloudflareAccountAccessGroupsApi(api),
            identity_providers: new CloudflareAccountAccessIdentityProvidersApi(api),
            organization: new CloudflareAccountAccessOrganizationApi(api),
            policies: new CloudflareAccountAccessPoliciesApi(api),
            logs: {
                access_requests: new CloudflareAccountAccessLogAccessRequestsApi(api)

            },

            shortLivedCertificates: new CloudflareAccountAccessShortLivedCertificatesApi(api),


        }
        this.teams = {
            device_policy: new CloudflareAccountDevicePolicyApi(api),
            device_posture_rules: new CloudflareAccountDevicesPostureRulesApi(api),
            lists: new CloudflareAccountTeamsListsApi(api),
            locations: new CloudflareAccountTeamsLocationsApi(api),
            rules: new CloudflareAccountTeamsRulesApi(api),
        }


        this.members = new CloudflareAccountMembersApi(api);
        this.roles = new CloudflareAccountRolesApi(api);
        this.service_tokens = new CloudflareAccountAccessServiceTokensApi(api);
        this.subscriptions = new CloudflareAccountSubscriptionsApi(api);
        this.members = new CloudflareAccountMembersApi(api);

    }


    list(params) {
        let api = this._api;
        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}


        let url_slug = "accounts";
        return api._get(url_slug, config);
    }


    read(account_id) {
        let api = this._api;

        let url_slug = `accounts/${account_id}`;
        return api._get(url_slug);
    }

    update(account_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `accounts/${account_id}`;
        return api._put(url_slug, params);
    }


}

module.exports = CloudflareAccountsApi;