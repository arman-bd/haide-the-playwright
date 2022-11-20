import fs from 'fs';

/**
 * @class ProxyController
 * @classdesc ProxyController is a class that manages the proxy settings.
 * It reads the proxy settings from the config file and provides
 * the proxy settings to the rest of the application.
 */
export default class ProxyController {

    static _instance: ProxyController;
    _proxies: string[];

    static getInstance() {
        if (!ProxyController._instance) {
            ProxyController._instance = new ProxyController();
            ProxyController._instance.loadProxy();
        }
        return ProxyController._instance;
    }

    /**
     * Load proxies from .proxies file
    */
    loadProxy() {
        this._proxies = fs.readFileSync('.proxies', 'utf-8').split('\n');
    }

    /**
     * Get a Random Proxy
     * @memberof ProxyController
     * @example
     * const proxy = new ProxyController().getRandomProxy;
     */
    get getRandomProxy() {
        // Reload
        this.loadProxy();
        
        if (!this._proxies) {
            return null;
        }

        if (this._proxies.length === 0) {
            return null;
        }

        const random_proxy = this._proxies[Math.floor(Math.random() * this._proxies.length)];

        // Extract Proxy Details
        if (random_proxy.indexOf('@') > -1) {
            const proxy_details = random_proxy.split('@');
            const proxy_auth = proxy_details[0].split(':');
            const proxy_host = proxy_details[1];
            return {
                server: proxy_host,
                username: proxy_auth[0],
                password: proxy_auth[1]
            };
        } else {
            return {
                server: random_proxy
            };
        }
    }

}