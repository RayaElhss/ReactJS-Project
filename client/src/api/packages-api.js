import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/packages';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    const packages = Object.values(result);

    return packages;
}