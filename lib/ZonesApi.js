const _ = require('lodash');
const ZoneDnsAnalyticsApi = require("./ZoneDnsAnalyticsApi");
const ZonesCacheSettingsApi = require("./ZonesCacheSettingsApi");
const ZoneAnalyticsApi = require("./ZoneAnalyticsApi");
const ZoneDnsRecordsApi = require("./ZoneDnsRecordsApi");
const ZoneFirewallAccessRulesApi = require("./ZoneFirewallAccessRulesApi");
const ZoneFirewallLockdownRulesApi = require("./ZoneFirewallLockdownRulesApi");
const ZoneFirewallRulesApi = require("./ZoneFirewallRulesApi");
const ZoneFirewallUserAgentRulesApi = require("./ZoneFirewallUserAgentRulesApi");
const ZoneWafOverridesApi = require("./ZoneWafOverridesApi");
const ZoneWafRuleGroupsApi = require("./ZoneWafRuleGroupsApi");
const ZoneWafRulePackagesApi = require("./ZoneWafRulePackagesApi");
const ZoneWafRulesApi = require("./ZoneWafRulesApi");
const ZoneRateLimitsApi = require("./ZoneRateLimitsApi");
const ZoneRatePlanApi = require("./ZoneRatePlanApi");
const ZoneSettingsApi = require("./ZoneSettingsApi");
const ZoneSubscriptionsApi = require("./ZoneSubscriptionsApi");
const ZoneRulesetsApi = require("./ZoneRulesetsApi");
module.exports = class ZonesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;

        this.analytics = new ZoneAnalyticsApi(apiClient);
        this.cacheSettings = new ZonesCacheSettingsApi(apiClient);
        this.dnsAnalytics = new ZoneDnsAnalyticsApi(apiClient);
        this.dnsRecords = new ZoneDnsRecordsApi(apiClient);
        this.firewall = {
            accessRules: new ZoneFirewallAccessRulesApi(apiClient),
            lockdownRules: new ZoneFirewallLockdownRulesApi(apiClient),
            rules: new ZoneFirewallRulesApi(apiClient),
            userAgentRules: new ZoneFirewallUserAgentRulesApi(apiClient),
            waf: {
                overrides: new ZoneWafOverridesApi(apiClient),
                ruleGroups: new ZoneWafRuleGroupsApi(apiClient),
                rulePackages: new ZoneWafRulePackagesApi(apiClient),
                rules: new ZoneWafRulesApi(apiClient)
            }
        }

        this.rateLimits = new ZoneRateLimitsApi(apiClient)
        this.ratePlan = new ZoneRatePlanApi(apiClient)
        this.settings = new ZoneSettingsApi(apiClient)
        this.subscriptions = new ZoneSubscriptionsApi(apiClient)
        this.rulesets = new ZoneRulesetsApi(apiClient);
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones'], params, config);
    }


    create(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zones'], data, config);
    }


    read(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId], params, config);
    }

    update(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId], data, config);
    }

    delete(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zones', zoneId], params, config);
    }


    checkActivation(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zones', zoneId, 'activation_check'], data, config);
    }


    purgeCache(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zones', zoneId, 'purge_cache'], data, config);
    }


};

