import { apiUrl } from '../config';

export default class ApiClient {
    constructor({ prefix = 'v1/' } = {}) {
        this.prefix = prefix;
    }

    async get(requestUrl) {
        return this.request({
            url    : requestUrl,
            method : 'get'
        });
    }

    async post(requestUrl, payload = {}) {
        return this.request({
            url    : requestUrl,
            method : 'post',
            body   : payload
        });
    }

    async put(requestUrl, payload = {}) {
        return this.request({
            url    : requestUrl,
            method : 'put',
            body   : payload
        });
    }

    async request({ url, method, params, body }) {
        const response = await fetch(
            `${apiUrl}${this.prefix}${url}${params ? params : ''}`,
            {
                method,
                headers : {
                    'Content-Type'  : 'application/json',
                    'Authorization' : `JWT ${localStorage.getItem('token')}`,
                    'Cache-Control' : 'no-cache',
                    'pragma'        : 'no-cache'
                },
                withCredentials : true,
                crossDomain     : false,
                body            : method !== 'GET' ? JSON.stringify(body) : undefined
            }
        );
        const json = await response.json();

        return json;
    }

    setAuthToken(authToken) {
        this.authToken = authToken;
    }
}
