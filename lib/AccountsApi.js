const _ = require('lodash');
const AccountMembersApi = require("./AccountMembersApi");
const AccountSubscriptionsApi = require("./AccountSubscriptionsApi");
const AccountRolesApi = require("./AccountRolesApi");
const AccountFirewallAccessRulesApi = require("./AccountFirewallAccessRulesApi");
const AccessApplicationsApi = require("./AccessApplicationsApi");
const AccessGroupsApi = require("./AccessGroupsApi");
const AccessIdentityProvidersApi = require("./AccessIdentityProvidersApi");
const AccessKeysConfigurationApi = require("./AccessKeysConfigurationApi");
const AccessMutualTlsApi = require("./AccessMutualTlsApi");
const AccessOrganizationsApi = require("./AccessOrganizationsApi");
const AccessPoliciesApi = require("./AccessPoliciesApi");
const AccessRequestLogsApi = require("./AccessRequestLogsApi");
const AccessServiceTokensApi = require("./AccessServiceTokensApi");
const AccessShortLivedCertificatesApi = require("./AccessShortLivedCertificatesApi");
const AccountBillingProfileApi = require("./AccountBillingProfileApi");
const TeamsDevicePostureRulesApi = require("./TeamsDevicePostureRulesApi");
const TeamsDevicesApi = require("./TeamsDevicesApi");
const TeamsListsApi = require("./TeamsListsApi");
const TeamsLocationsApi = require("./TeamsLocationsApi");
const TeamsRulesApi = require("./TeamsRulesApi");
const RulesListsApi = require("./RulesListsApi");
const AccountAuditLogsApi = require("./AccountAuditLogsApi");
module.exports = class AccountsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;

        this.members = new AccountMembersApi(apiClient);
        this.roles = new AccountRolesApi(apiClient);
        this.subscriptions = new AccountSubscriptionsApi(apiClient);
        this.firewallAccessRules = new AccountFirewallAccessRulesApi(apiClient);
        this.billingProfile = new AccountBillingProfileApi(apiClient);
        this.auditLogs = new AccountAuditLogsApi(apiClient);

        this.access = {
            applications: new AccessApplicationsApi(apiClient),
            groups: new AccessGroupsApi(apiClient),
            identityProviders: new AccessIdentityProvidersApi(apiClient),
            keysConfiguration: new AccessKeysConfigurationApi(apiClient),
            mutualTls: new AccessMutualTlsApi(apiClient),
            organizations: new AccessOrganizationsApi(apiClient),
            policies: new AccessPoliciesApi(apiClient),
            requestLogs: new AccessRequestLogsApi(apiClient),
            serviceTokens: new AccessServiceTokensApi(apiClient),
            shortLiveCertificates: new AccessShortLivedCertificatesApi(apiClient),
        };

        this.rules = {
            lists: new RulesListsApi(apiClient)
        }

        this.gateway = {
            devicePostureRules: new TeamsDevicePostureRulesApi(apiClient),
            devices: new TeamsDevicesApi(apiClient),
            lists: new TeamsListsApi(apiClient),
            locations: new TeamsLocationsApi(apiClient),
            rules: new TeamsRulesApi(apiClient)
        }
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts'], params, config);
    }


    read(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId], params, config);
    }

    update(accountId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['accounts', accountId], data, config);
    }


};

