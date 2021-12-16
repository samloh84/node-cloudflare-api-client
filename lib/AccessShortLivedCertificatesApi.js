const _ = require('lodash');
module.exports = class AccessShortLivedCertificatesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(accountId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'apps', 'ca'], params, config);
    }


    read(accountId, shortLivedCertificateId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['accounts', accountId, 'access', 'apps', shortLivedCertificateId, 'ca'], params, config);
    }


    create(accountId, shortLivedCertificateId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['accounts', accountId, 'access', shortLivedCertificateId, 'ca'], data, config);
    }


    delete(accountId, shortLivedCertificateId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['accounts', accountId, 'access', shortLivedCertificateId, 'ca'], params, config);
    }


};

