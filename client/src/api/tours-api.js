import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/tours';

export const getAllTours = async () => {
    const result = await request.get(baseUrl);
    console.log("Fetched Tours:", result);
    const tours = Object.values(result);

    return tours;
}

export const getTourById = async (id) => {
    return await request.get(`${baseUrl}/${id}`);
}
