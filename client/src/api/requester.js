import { getAccessToken } from "../utils/authUtils";

export default async function requester(method, url, data = null, requiresAuth = false) {
    const options = {
        method, // Directly set the method
        headers: {}
    };

    if (requiresAuth) {
        const accessToken = getAccessToken();
        console.log("Token used for request:", accessToken);
        if (accessToken) {
            options.headers['X-Authorization'] = accessToken;
        } else {

            throw new Error("No access token found. Please log in.");
        }
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';

        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        if (response.status === 204) {
            return;
        }
        const result = await response.json();

        if (!response.ok) {
            throw result;
        }
        return result;

    } catch (error) {
        console.error('Network request failed:', error);
        throw error;
    }

};

export const get = (url, requiresAuth = false) => requester('GET', url, null, requiresAuth);
export const post = (url, data, requiresAuth = false) => requester('POST', url, data, requiresAuth);
export const put = (url, data, requiresAuth = false) => requester('PUT', url, data, requiresAuth);
export const del = (url, requiresAuth = false) => requester('DELETE', url, null, requiresAuth);
export const patch = (url, data, requiresAuth = false) => requester('PATCH', url, data, requiresAuth);
