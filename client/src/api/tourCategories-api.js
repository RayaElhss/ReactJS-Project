import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/tourCategories';

export const getAllTourCategories = async () => {

    try {
        const result = await request.get(baseUrl);
        const tourCategories = Object.values(result);
        console.log(tourCategories);
        
        return tourCategories;
    } catch (err) {
        console.log(err.message);
    }

}