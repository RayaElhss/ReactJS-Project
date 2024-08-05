import blogsAPI from "../api/blogs-api";

export function useCreateBlog() {
    const blogCreateHandler = (blogData) => blogsAPI.create(blogData)

    return blogCreateHandler;
}