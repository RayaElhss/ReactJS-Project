import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/gallery';

export const getAllGallery = async () => {
    try {
        const result = await request.get(baseUrl);
        const gallery = Object.values(result);
        return gallery;
    } catch (error) {
        console.error('Error fetching packages:', error);
        throw error;  // Propagate the error to be handled by the calling component
    }
};