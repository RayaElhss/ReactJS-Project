import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/tours';

export const getAllTours = async () => {
    const result = await request.get(baseUrl);

    const tours = Object.values(result);

    return tours;
}