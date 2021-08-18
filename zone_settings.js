const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


class CloudflareZoneSettingsApi {
    constructor(api) {
        this._api = api;

    }


    list(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings`;

        return api._get(url_slug);
    }

    get_advanced_ddos(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/advanced_ddos`;

        return api._get(url_slug);
    }

    get_always_online(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/always_online`;

        return api._get(url_slug);
    }

    update_always_online(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/always_online`;

        return api._patch(url_slug, params);
    }


    get_always_use_https(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/always_use_https`;

        return api._get(url_slug);
    }

    update_always_use_https(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/always_use_https`;

        return api._patch(url_slug, params);
    }



    get_opportunistic_onion(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/opportunistic_onion`;

        return api._get(url_slug);
    }


    update_opportunistic_onion(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/opportunistic_onion`;

        return api._patch(url_slug, params);
    }


    get_orange_to_orange(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/orange_to_orange`;

        return api._get(url_slug);
    }

    update_orange_to_orange(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/orange_to_orange`;

        return api._patch(url_slug, params);
    }



    get_automatic_https_rewrites(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/automatic_https_rewrites`;

        return api._get(url_slug);
    }

    update_automatic_https_rewrites(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/automatic_https_rewrites`;

        return api._patch(url_slug, params);
    }



    get_browser_cache_ttl(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/browser_cache_ttl`;

        return api._get(url_slug);
    }


    update_browser_cache_ttl(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/browser_cache_ttl`;

        return api._patch(url_slug, params);
    }


    get_browser_check(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/browser_check`;

        return api._get(url_slug);
    }


    update_browser_check(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/browser_check`;

        return api._patch(url_slug, params);
    }



    get_cache_level(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/cache_level`;

        return api._get(url_slug);
    }


    update_cache_level(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/cache_level`;

        return api._patch(url_slug, params);
    }




    get_challenge_ttl(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/challenge_ttl`;

        return api._get(url_slug);
    }


    update_challenge_ttl(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/challenge_ttl`;

        return api._patch(url_slug, params);
    }



    get_development_mode(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/development_mode`;

        return api._get(url_slug);
    }

    update_development_mode(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/development_mode`;

        return api._patch(url_slug, params);
    }


    get_email_obfuscation(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/email_obfuscation`;

        return api._get(url_slug);
    }


    update_email_obfuscation(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/email_obfuscation`;

        return api._patch(url_slug, params);
    }



    get_hotlink_protection(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/hotlink_protection`;

        return api._get(url_slug);
    }


    update_hotlink_protection(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/hotlink_protection`;

        return api._patch(url_slug, params);
    }





    get_ip_geolocation(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/ip_geolocation`;

        return api._get(url_slug);
    }


    update_ip_geolocation(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/ip_geolocation`;

        return api._patch(url_slug, params);
    }



    get_ipv6(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/ipv6`;

        return api._get(url_slug);
    }


    update_ipv6(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/ipv6`;

        return api._patch(url_slug, params);
    }



    get_minify(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/minify`;

        return api._get(url_slug);
    }


    update_minify(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/minify`;

        return api._patch(url_slug, params);
    }



    get_mobile_redirect(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/mobile_redirect`;

        return api._get(url_slug);
    }


    update_mobile_redirect(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/mobile_redirect`;

        return api._patch(url_slug, params);
    }



    get_mirage(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/mirage`;

        return api._get(url_slug);
    }


    update_mirage(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/mirage`;

        return api._patch(url_slug, params);
    }



    get_origin_error_page_pass_thru(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/origin_error_page_pass_thru`;

        return api._get(url_slug);
    }


    update_origin_error_page_pass_thru(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/origin_error_page_pass_thru`;

        return api._patch(url_slug, params);
    }

    get_opportunistic_encryption(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/opportunistic_encryption`;

        return api._get(url_slug);
    }

    update_opportunistic_encryption(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/opportunistic_encryption`;

        return api._patch(url_slug, params);
    }


    get_polish(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/polish`;

        return api._get(url_slug);
    }


    update_polish(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/polish`;

        return api._patch(url_slug, params);
    }



    get_webp(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/webp`;

        return api._get(url_slug);
    }



    update_webp(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/webp`;

        return api._patch(url_slug, params);
    }



    get_brotli(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/brotli`;

        return api._get(url_slug);
    }


    update_brotli(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/brotli`;

        return api._patch(url_slug, params);
    }



    get_prefetch_preload(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/prefetch_preload`;

        return api._get(url_slug);
    }

    update_prefetch_preload(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/prefetch_preload`;

        return api._patch(url_slug, params);
    }




    get_privacy_pass(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/privacy_pass`;

        return api._get(url_slug);
    }

    update_privacy_pass(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/privacy_pass`;

        return api._patch(url_slug, params);
    }


    get_response_buffering(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/response_buffering`;

        return api._get(url_slug);
    }

    update_response_buffering(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/response_buffering`;

        return api._patch(url_slug, params);
    }


    get_rocket_loader(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/rocket_loader`;

        return api._get(url_slug);
    }

    update_rocket_loader(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/rocket_loader`;

        return api._patch(url_slug, params);
    }


    get_security_header(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/security_header`;

        return api._get(url_slug);
    }


    update_security_header(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/security_header`;

        return api._patch(url_slug, params);
    }



    get_security_level(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/security_level`;

        return api._get(url_slug);
    }

    update_security_level(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/security_level`;

        return api._patch(url_slug, params);
    }


    get_server_side_exclude(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/server_side_exclude`;

        return api._get(url_slug);
    }

    update_server_side_exclude(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/server_side_exclude`;

        return api._patch(url_slug, params);
    }


    get_sort_query_string_for_cache(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/sort_query_string_for_cache`;

        return api._get(url_slug);
    }

    update_sort_query_string_for_cache(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/sort_query_string_for_cache`;

        return api._patch(url_slug, params);
    }


    get_ssl(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/ssl`;

        return api._get(url_slug);
    }

    update_ssl(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/ssl`;

        return api._patch(url_slug, params);
    }


    get_min_tls_version(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/min_tls_version`;

        return api._get(url_slug);
    }

    update_min_tls_version(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/min_tls_version`;

        return api._patch(url_slug, params);
    }



    get_ciphers(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/ciphers`;

        return api._get(url_slug);
    }


    update_ciphers(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/ciphers`;

        return api._patch(url_slug, params);
    }



    get_tls_1_3(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/tls_1_3`;

        return api._get(url_slug);
    }


    update_tls_1_3(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/tls_1_3`;

        return api._patch(url_slug, params);
    }



    get_tls_client_auth(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/tls_client_auth`;

        return api._get(url_slug);
    }


    update_tls_client_auth(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/tls_client_auth`;

        return api._patch(url_slug, params);
    }



    get_true_client_ip_header(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/true_client_ip_header`;

        return api._get(url_slug);
    }


    update_true_client_ip_header(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/true_client_ip_header`;

        return api._patch(url_slug, params);
    }



    get_waf(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/waf`;

        return api._get(url_slug);
    }


    update_waf(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/waf`;

        return api._patch(url_slug, params);
    }




    get_http2(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/http2`;

        return api._get(url_slug);
    }


    update_http2(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/http2`;

        return api._patch(url_slug, params);
    }



    get_http3(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/http3`;

        return api._get(url_slug);
    }


    update_http3(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/http3`;

        return api._patch(url_slug, params);
    }



    get_0rtt(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/0rtt`;

        return api._get(url_slug);
    }


    update_0rtt(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/0rtt`;

        return api._patch(url_slug, params);
    }



    get_pseudo_ipv4(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/pseudo_ipv4`;

        return api._get(url_slug);
    }


    update_pseudo_ipv4(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/pseudo_ipv4`;

        return api._patch(url_slug, params);
    }



    get_websockets(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/websockets`;

        return api._get(url_slug);
    }


    update_websockets(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/websockets`;

        return api._patch(url_slug, params);
    }



    get_image_resizing(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/image_resizing`;

        return api._get(url_slug);
    }


    update_image_resizing(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/image_resizing`;

        return api._patch(url_slug, params);
    }



    get_h2_prioritization(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/h2_prioritization`;

        return api._get(url_slug);
    }


    update_h2_prioritization(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/h2_prioritization`;

        return api._patch(url_slug, params);
    }



    get_automatic_platform_optimization(zone_id) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/automatic_platform_optimization`;

        return api._get(url_slug);
    }


    update_automatic_platform_optimization(zone_id, params) {
        let api = this._api;

        let url_slug = `zones/${zone_id}/settings/automatic_platform_optimization`;

        return api._patch(url_slug, params);
    }




    update(zone_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }


        let url_slug = `zones/${zone_id}/settings`;
        return api._patch(url_slug, params);
    }


}

module.exports = CloudflareZoneSettingsApi;