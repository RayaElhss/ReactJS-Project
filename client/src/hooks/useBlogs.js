import { useEffect, useState } from "react";
import blogsAPI, { getAllBlogs } from "../api/blogs-api";

export function useCreateBlog() {
    const blogCreateHandler = async (blogData) => await blogsAPI.create(blogData)

    return blogCreateHandler;
}

export default function useBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const blogData = await getAllBlogs();
                setBlogs(blogData);
            } catch (error) {
                setError('Failed to load blogs');
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs()
    }, []);
    return { blogs, loading, error };
}