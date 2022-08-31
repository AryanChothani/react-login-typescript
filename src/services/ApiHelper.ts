import Session from 'store2';
import { BASE_URL } from './Apiconfig';
// import { BASE_URL, CRYPTO_SECRET } from './Apiconfig';
// var CryptoJS = require("crypto-js");


class ApiHelper {

    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    static GetToken() {
        return Session.session('userAccessToken');
    }

    static GetSessionToken() {
        return Session.session('session_token');
    }

    static postAuthenticated(route: string, params: object) {
        return this.xhr(route, params, ApiHelper.GetToken(), null, 'POST');
    }

    static postAnonymous(route: string, params: object) {
        return this.xhr(route, params, null, null, 'POST');
    }

    static postAnonymousOTP(route: string, params: object) {
        return this.xhr(route, params, null, ApiHelper.GetSessionToken(), 'POST');
    }

    static async xhr(route: string, params: object | null, token = "" || null, session_token = "" || null, verb: string) {

        const host = BASE_URL;
        var url = route == "translate" ? "https://libretranslate.de/" + route : host + route;
        let options: any = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);

        options.headers = ApiHelper.headers();
        if (token) {
            options.headers = {
                ...options.headers,
                'Authorization': 'Bearer ' + token
            }
        }
        if (session_token) {
            options.headers = {
                ...options.headers,
                'sessiontoken': session_token
            }
        }

        return fetch(url, options).then(resp => {
            if (resp.status === 401) {
                return resp.text().then(text => {
                    return text && JSON.parse(text);
                });
            }
            if (resp.status === 500) {
                return resp.text().then(text => {
                    return text && JSON.parse(text);
                });
            }
            if (resp.status === 422) {
                return resp.text().then(text => {
                    return text && JSON.parse(text);
                });
            }
            if (resp.status === 403) {
                return resp.text().then(text => {
                    return text && JSON.parse(text);
                });
            }


            let json = resp.json();
            if (resp.ok) {
                return json;
            }
            return json.then(err => { throw err });
        });
    }
}

export default ApiHelper;