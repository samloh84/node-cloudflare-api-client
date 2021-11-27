const _ = require('lodash');
module.exports = class ZoneWafRuleGroupsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId, packageId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'firewall', 'waf', 'packages', packageId, 'groups'], params, config);
    }

    read(zoneId, packageId, groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'firewall', 'waf', 'packages', packageId, 'groups', groupId], params, config);
    }


    update(zoneId, packageId, groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zone', zoneId, 'firewall', 'waf', 'packages', packageId, 'groups', groupId], data, config);
    }
};

