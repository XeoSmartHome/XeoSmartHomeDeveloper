import {API_URL} from "./Routes";

const getRequest = (url, params) => (
    fetch(`${url}?${new URLSearchParams(params)}`, {
        method: 'GET'
    }).then(
        (response) => response.json()
    )
);


const postRequest = (url, params) => (
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then(
        (response) => response.json()
    )
);

const requests_types = {
    'GET': getRequest,
    'POST': postRequest
};

/**
 * @param {String} route.path
 * @param {'POST'|'GET'} route.method
 * @param route
 * @param {{}} params
 * @return Promise
 */
export const apiRequest = (route, params) => (
    requests_types[route.method](`${API_URL}${route.path}`, params)
);
