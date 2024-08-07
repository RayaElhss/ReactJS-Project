import { useEffect, useState } from "react";
import { getBlogById } from "../api/blogs-api";

export function useBlogEdit(blogId) {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await getBlogById(blogId);
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
                setError("Failed to load blog data");
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        }
        fetchBlog();
    }, [blogId]);
    return { blog, loading, error };
}