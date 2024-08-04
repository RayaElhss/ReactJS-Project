import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/packages';

export const getAllPackages = async () => {
    const result = await request.get(baseUrl);

    const packages = Object.values(result);

    return packages;
}

export const getPackageById = async (id) => {
    const result = await request.get(`${baseUrl}/${id}`);

    return result;
};