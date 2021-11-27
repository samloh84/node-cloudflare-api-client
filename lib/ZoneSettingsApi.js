const _ = require('lodash');
module.exports = class ZoneSettingsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings'], params, config);
    }


    getAdvancedDdosSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'advanced_ddos'], params, config);
    }

    getAlwaysOnlineSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'always_online'], params, config);
    }

    getOpportunisticOnionSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'opportunistic_onion'], params, config);
    }


    getOrangeToOrangeSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'orange_to_orange'], params, config);
    }


    getAutomaticHttpsRewritesSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'automatic_https_rewrites'], params, config);
    }

    getBrowserCacheTtlSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'browser_cache_ttl'], params, config);
    }


    getBrowserCheckSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'browser_check'], params, config);
    }


    getCacheLevelSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'cache_level'], params, config);
    }


    getChallengeTtlSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'challenge_ttl'], params, config);
    }


    getDevelopmentModeSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'development_mode'], params, config);
    }


    getEmailObfuscationSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'email_obfuscation'], params, config);
    }

    getHotlinkProtectionSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'hotlink_protection'], params, config);
    }


    getIpGeolocationSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'ip_geolocation'], params, config);
    }


    getIpv6Setting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'ipv6'], params, config);
    }

    getMinifySetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'minify'], params, config);
    }

    getMobileRedirectSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'mobile_redirect'], params, config);
    }

    getMirageSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'mirage'], params, config);
    }

    getOriginErrorPagePassThruSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'origin_error_page_pass_thru'], params, config);
    }


    getOpportunisticEncryptionSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'opportunistic_encryption'], params, config);
    }


    getPolishSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'polish'], params, config);
    }


    getWebpSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'webp'], params, config);
    }


    getBrotliSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'brotli'], params, config);
    }


    getPrefetchPreloadSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'prefetch_preload'], params, config);
    }


    getPrivacyPassSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'privacy_pass'], params, config);
    }


    getResponseBufferingSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'response_buffering'], params, config);
    }


    getRocketLoaderSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'rocket_loader'], params, config);
    }


    getSecurityHeaderSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'security_header'], params, config);
    }


    getSecurityLevelSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'security_level'], params, config);
    }


    getServerSideExcludeSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'server_side_exclude'], params, config);
    }


    getSortQueryStringForCacheSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'sort_query_string_for_cache'], params, config);
    }

    getSslSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'ssl'], params, config);
    }

    getSslRecommenderSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'ssl_recommender'], params, config);
    }

    getMinTlsVersionSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'min_tls_version'], params, config);
    }


    getCiphersSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'ciphers'], params, config);
    }


    getTls1_3Setting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'tls_1_3'], params, config);
    }


    getTlsClientAuthSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'tls_client_auth'], params, config);
    }

    getTrueClientIpHeaderSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'true_client_ip_header'], params, config);
    }


    getProxyReadTimeoutSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'proxy_read_timeout'], params, config);
    }


    getWafSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'waf'], params, config);
    }

    getHttp2Setting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'http2'], params, config);
    }


    getHttp3Setting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'http3'], params, config);
    }


    get0RttSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', '0rtt'], params, config);
    }


    getPseudoIpv4Setting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'pseudo_ipv4'], params, config);
    }


    getWebsocketsSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'websockets'], params, config);
    }


    getImageResizingSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'image_resizing'], params, config);
    }


    getHttp2EdgePrioritizationSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'h2_prioritization'], params, config);
    }

    getAutomaticPlatformOptimizationSetting(zoneId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['zones', zoneId, 'settings', 'automatic_platform_optimization'], params, config);
    }


    edit(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings'], data, config);
    }


    updateAdvancedDdosSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'advanced_ddos'], data, config);
    }

    updateAlwaysOnlineSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'always_online'], data, config);
    }

    updateOpportunisticOnionSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'opportunistic_onion'], data, config);
    }


    updateOrangeToOrangeSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'orange_to_orange'], data, config);
    }


    updateAutomaticHttpsRewritesSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'automatic_https_rewrites'], data, config);
    }

    updateBrowserCacheTtlSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'browser_cache_ttl'], data, config);
    }


    updateBrowserCheckSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'browser_check'], data, config);
    }


    updateCacheLevelSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'cache_level'], data, config);
    }


    updateChallengeTtlSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'challenge_ttl'], data, config);
    }


    updateDevelopmentModeSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'development_mode'], data, config);
    }


    updateEmailObfuscationSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'email_obfuscation'], data, config);
    }

    updateHotlinkProtectionSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'hotlink_protection'], data, config);
    }


    updateIpGeolocationSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'ip_geolocation'], data, config);
    }


    updateIpv6Setting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'ipv6'], data, config);
    }

    updateMinifySetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'minify'], data, config);
    }

    updateMobileRedirectSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'mobile_redirect'], data, config);
    }

    updateMirageSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'mirage'], data, config);
    }

    updateOriginErrorPagePassThruSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'origin_error_page_pass_thru'], data, config);
    }


    updateOpportunisticEncryptionSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'opportunistic_encryption'], data, config);
    }


    updatePolishSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'polish'], data, config);
    }


    updateWebpSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'webp'], data, config);
    }


    updateBrotliSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'brotli'], data, config);
    }


    updatePrefetchPreloadSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'prefetch_preload'], data, config);
    }


    updatePrivacyPassSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'privacy_pass'], data, config);
    }


    updateResponseBufferingSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'response_buffering'], data, config);
    }


    updateRocketLoaderSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'rocket_loader'], data, config);
    }


    updateSecurityHeaderSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'security_header'], data, config);
    }


    updateSecurityLevelSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'security_level'], data, config);
    }


    updateServerSideExcludeSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'server_side_exclude'], data, config);
    }


    updateSortQueryStringForCacheSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'sort_query_string_for_cache'], data, config);
    }

    updateSslSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'ssl'], data, config);
    }

    updateSslRecommenderSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'ssl_recommender'], data, config);
    }

    updateMinTlsVersionSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'min_tls_version'], data, config);
    }


    updateCiphersSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'ciphers'], data, config);
    }


    updateTls1_3Setting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'tls_1_3'], data, config);
    }


    updateTlsClientAuthSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'tls_client_auth'], data, config);
    }

    updateTrueClientIpHeaderSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'true_client_ip_header'], data, config);
    }


    updateProxyReadTimeoutSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'proxy_read_timeout'], data, config);
    }


    updateWafSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'waf'], data, config);
    }

    updateHttp2Setting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'http2'], data, config);
    }


    updateHttp3Setting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'http3'], data, config);
    }


    update0RttSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', '0rtt'], data, config);
    }


    updatePseudoIpv4Setting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'pseudo_ipv4'], data, config);
    }


    updateWebsocketsSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'websockets'], data, config);
    }


    updateImageResizingSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'image_resizing'], data, config);
    }


    updateHttp2EdgePrioritizationSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'h2_prioritization'], data, config);
    }

    updateAutomaticPlatformOptimizationSetting(zoneId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['zones', zoneId, 'settings', 'automatic_platform_optimization'], data, config);
    }


};

