import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/blogs';

export const create = (blogData) => request.post(`${baseUrl}`, blogData, true);

const blogsAPI = {
    create
};

export default blogsAPI;

export const getAllBlogs = async () => {
    try {
        const result = await request.get(baseUrl);
        const blogs = Object.values(result);
        return blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
}

export const getBlogById = async (id) => {
    try {
        const blogData = await request.get(`${baseUrl}/${id}`);
        return blogData;
    } catch (error) {
        console.error('Error fetching blog by ID:', error);
        throw error;
    }
};