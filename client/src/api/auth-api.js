import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => request.post(`${baseUrl}/login`, { email, password });

export const register = (username, email, password) => request.post(`${baseUrl}/register`, { username, email, password });

export const logout = async () => {
    try {
        return await request.get(`${baseUrl}/logout`, true);
    } catch (error) {
        console.error("Logout error:", error.message || error);
        throw error;
    }
}