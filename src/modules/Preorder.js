import 'url-search-params-polyfill';

export default class Preorder {
    _getParameterByName(param, urlSearch = window.location.search) {
        const searchParams = new URLSearchParams(urlSearch);

        return searchParams.get(param);
    }

    _getAlias() {
        return window.location.pathname.match(/([^/]*)\/*$/)[1];
    }

    _getHostName(host = '') {
        const a = document.createElement('a');
        a.href = host;

        return encodeURIComponent(a.hostname.replace(/\./g, '-'));
    }

    _makeLinkCheckout(params) {
        const url = 'https://oplata.qiwi.com/create';
        const parsedParams = new URLSearchParams(params);

        return `${url}?${parsedParams.toString()}`;
    }

    _makeRequest() {
        let url = 'https://my.qiwi.com/partners_api/merchant_widget_info';

        /* if (
            process.env.NODE_ENV === 'development' ||
            process.env.NODE_ENV === 'test'
        ) {
            url = 'http://s3705.qiwi.com/partners_api/merchant_widget_info';
        } */

        let param = `merchant_public_key=${this._merchantId}`;

        if (this._merchantAlias && !this._merchantId) {
            param = `merchant_alias_code=${this._merchantAlias}`;
        }

        return fetch(`${url}?${param}`, {
            mode: 'cors'
        })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('LoadError');
                }
                return response;
            })
            .then((response) => response.json());
    }

    async getMerchantInfo() {
        this._merchantId = this._getParameterByName('public_key');

        this._merchantAlias = this._getAlias();

        if (this._merchantId || this._merchantAlias) {
            try {
                const data = await this._makeRequest();

                this._merchantInfo = data.result;

                return data.result;
            } catch (err) {
                console.warn('Widget is disabled by: ', err);
            }
        }
    }

    redirect = (amount) => {
        const extra_widget_refferer = this._getHostName(document.referrer);

        const public_key = this._merchantInfo.merchant_public_key;

        const success_url = this._merchantInfo.merchant_success_url || '';

        const fail_url = this._merchantInfo.merchant_fail_url || '';

        if (public_key) {
            const checkoutParams = {
                public_key,
                amount,
                success_url,
                fail_url,
                extra_widget_refferer
            };

            window.open(this._makeLinkCheckout(checkoutParams), '_blank');
        }
    };
}