import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/packages';

export const getAllPackages = async () => {
    try {
        const result = await request.get(baseUrl);
        const packages = Object.values(result);
        return packages;
    } catch (error) {
        console.error('Error fetching packages:', error);
        throw error;  // Propagate the error to be handled by the calling component
    }
};

export const getPackageById = async (id) => {
    try {
        const packageData = await request.get(`${baseUrl}/${id}`);
        return packageData;
    } catch (error) {
        console.error('Error fetching package by ID:', error);
        throw error;
    }
};