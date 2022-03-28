const _ = require('lodash');
module.exports = class ZoneRulesetsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId, rulesetId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'rulesets'], params, config);
    }


    create(zoneId, rulesetId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zones', zoneId, 'rulesets'], data, config);
    }

    read(zoneId, rulesetId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'rulesets', ruleId], params, config);
    }

    readVersion(zoneId, ruelesetId, rulesetVersion, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'rulesets', ruelesetId, 'versions', rulesetVersion], params, config);
    }

    update(zoneId, ruleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zones', zoneId, 'rulesets', ruleId], data, config);
    }

    delete(zoneId, ruleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zones', zoneId, 'rulesets', ruleId], params, config);
    }

    deleteVersion(zoneId, ruelesetId, rulesetVersion, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zones', zoneId, 'rulesets', ruelesetId, 'versions', rulesetVersion], params, config);
    }

    getEntrypointRuleset(zoneId, rulesetPhase, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'rulesets', 'phases', rulesetPhase, 'entrypoint'], params, config);
    }

    updateEntrypointRuleset(zoneId, rulesetPhase, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zones', zoneId, 'rulesets', 'phases', rulesetPhase, 'entrypoint'], data, config);
    }

    getEntrypointRulesetVersion(zoneId, rulesetPhase, rulesetVersion, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'rulesets', 'phases', rulesetPhase, 'entrypoint', 'versions', rulesetVersion], params, config);
    }

    listEntrypointRulesetVersions(zoneId, rulesetPhase, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'rulesets', 'phases', rulesetPhase, 'entrypoint', 'versions'], params, config);
    }



};

