import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const authData = await request.post(`${baseUrl}/login`, { email, password });

    return authData;
}