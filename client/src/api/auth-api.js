import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => request.post(`${baseUrl}/login`, { email, password });

export const register = (username, email, password) => request.post(`${baseUrl}/register`, { username, email, password });


// authenticated get request
export const logout = async () => request.get(`${baseUrl}/logout`);