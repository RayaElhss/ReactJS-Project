import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/guides';

export const getAllGuides = async () => {
    try {
        const result = await request.get(baseUrl);
        const guides = Object.values(result);
        return guides;
    } catch (error) {
        console.error('Error fetching guides:', error);
        throw error;
    }
};