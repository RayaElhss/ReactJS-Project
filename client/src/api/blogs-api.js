import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/blogs';

export const create = (blogData) => request.post(`${baseUrl}`, blogData, true);

export const deleteBlogPost = async (id, accessToken) => {
    try {
        const response = await request.del(`${baseUrl}/${id}`, true);
        return response;
    } catch (error) {
        console.error('Error deleting blog post:', error);
        throw error;
    }
}

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

export const updateBlogPost = async (id, updatedData) => {
    try {
        const response = await request.put(`${baseUrl}/${id}`, updatedData, true);
        return response;
    } catch (error) {
        console.error('Error updating blog post:', error);
        throw error;
    }
};



const blogsAPI = {
    create,
    getAllBlogs,
    getBlogById,
    updateBlogPost,
    deleteBlogPost,
}

export default blogsAPI;