const _ = require('lodash');
module.exports = class ZoneDnsRecordsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'dns_records'], params, config);
    }


    read(zoneId, dnsRecordId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'dns_records', dnsRecordId], params, config);
    }


    create(zoneId, dnsRecordId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['zone', zoneId, 'dns_records'], data, config);
    }


    update(zoneId, dnsRecordId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zone', zoneId, 'dns_records', dnsRecordId], data, config);
    }

    delete(zoneId, dnsRecordId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['zone', zoneId, 'dns_records', dnsRecordId], params, config);
    }

    import(zoneId,data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['zone', zoneId, 'dns_records', 'import'], data, config);
    }

    export(zoneId,params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zone', zoneId, 'dns_records', 'export'], params, config);
    }

};

