const _ = require('lodash');
const UserAccountMembershipsApi = require("./UserAccountMembershipsApi");
const UserApiTokensApi = require("./UserApiTokensApi");
const UserAuditLogsApi = require("./UserAuditLogsApi");
const UserBillingHistoryApi = require("./UserBillingHistoryApi");
const UserBillingProfileApi = require("./UserBillingProfileApi");
const UserFirewallAccessRulesApi = require("./UserFirewallAccessRulesApi");
const UserPermissionGroupsApi = require("./UserPermissionGroupsApi");
const UserSubscriptionsApi = require("./UserSubscriptionsApi");
module.exports = class UserApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
        this.accountMemberships = new UserAccountMembershipsApi(apiClient);
        this.apiTokens = new UserApiTokensApi(apiClient);
        this.auditLogs = new UserAuditLogsApi(apiClient);
        this.billingHistory = new UserBillingHistoryApi(apiClient);
        this.billingProfile = new UserBillingProfileApi(apiClient);
        this.firewallAccessRules = new UserFirewallAccessRulesApi(apiClient);
        this.permissionGroups = new UserPermissionGroupsApi(apiClient);
        this.subscriptions = new UserSubscriptionsApi(apiClient);


    }

    read(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user'], params, config);
    }

    update(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['user'], data, config);
    }


};

