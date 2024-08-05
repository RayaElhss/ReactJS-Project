import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/blogs';

export const create = (blogData) => request.post(`${baseUrl}`, blogData);

const blogsAPI = {
    create
};

export default blogsAPI;