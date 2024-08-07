import { Link } from "react-router-dom";
import styles from "./Blog.module.css";
import useBlogs from "../../hooks/useBlogs";
import { useAuthContext } from "../../contexts/AuthContext";
import { deleteBlogPost } from "../../api/blogs-api";
import { useEffect, useState } from "react";

export default function OurBlog() {
    const { blogs, loading, error } = useBlogs();
    const { username, userId, accessToken, isAuthenticated } = useAuthContext();

    console.log("Current User's userId:", userId);

    const [localBlogs, setLocalBlogs] = useState(blogs);

    useEffect(() => {
        setLocalBlogs(blogs);
    }, [blogs])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;


    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog post?")) {
            try {
                setLocalBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
                await deleteBlogPost(id, accessToken);
                alert("Blog post deleted successfully.");


                setLocalBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
            } catch (error) {
                console.error("Failed to delete blog post:", error);
                alert("Failed to delete the blog post.");
            }
        }
    };

    const isBlogsPage = location.pathname === '/blogs';

    return (
        <div className={`container-fluid blog py-5 ${styles.blog}`}>
            <div className="container py-5">
                <div
                    className="mx-auto text-center mb-5"
                    style={{
                        maxWidth: '900px'
                    }}
                >
                    <h5 className="section-title px-3">
                        Our Blog
                    </h5>
                    <h1 className="mb-4">
                        Popular Travel Blogs
                    </h1>
                    <p className="mb-0">
                        Dive into expert advice, insider tips, and inspiring journeys that will ignite your wanderlust
                        and help you plan your next adventure. Whether you're a seasoned traveler or just starting your
                        journey, our blog is your go-to resource for everything travel-related.
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    {localBlogs.map((blog) => (
                        <div className="col-lg-4 col-md-6" key={blog._id}>
                            <div className={styles["blog-item"]}>
                                <div className={styles["blog-img"]}>
                                    <div className={styles["blog-img-inner"]}>
                                        <img
                                            alt={blog.title}
                                            className="img-fluid w-100 rounded-top"
                                            src={blog.imageUrl}
                                        />
                                        <div className={styles["blog-icon"]}>
                                            <Link
                                                className="my-auto"
                                                to={`/blogs/${blog._id}`}
                                            >
                                                <i className="fas fa-link fa-2x text-white" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={`${styles["blog-info"]} d-flex align-items-center border border-start-0 border-end-0`}>
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fa fa-calendar-alt text-primary me-2" />
                                            {new Date(blog._createdOn).toLocaleDateString()}
                                        </small>
                                        <Link
                                            className="btn-hover flex-fill text-center text-white border-end py-2"
                                            to={`/blogs/${blog._id}`}
                                        >
                                            <i className="fa fa-thumbs-up text-primary me-2" />
                                            {blog.likes || 0} {/* likes count */}
                                        </Link>
                                        <Link
                                            className="btn-hover flex-fill text-center text-white py-2"
                                            to={`/blogs/${blog._id}`}
                                        >
                                            <i className="fa fa-comments text-primary me-2" />
                                            {blog.comments?.length || 0}
                                        </Link>
                                    </div>
                                </div>
                                <div className="blog-content border border-top-0 rounded-bottom p-4">
                                    <p className="mb-3">
                                        Posted By: {blog.author || username}
                                    </p>
                                    <a
                                        className="h4"
                                        href="#"
                                    >
                                        {blog.title}
                                    </a>
                                    <p className="my-3">
                                        {blog.description}
                                    </p>
                                    <Link
                                        className="btn btn-primary rounded-pill py-2 px-4"
                                        to={`/blogs/${blog._id}`}
                                    >
                                        View post
                                    </Link>

                                    {blog._ownerId === userId && (
                                        <>
                                            <Link
                                                className="btn btn-secondary rounded-pill py-2 px-4 ms-2"
                                                to={`/blogs/edit/${blog._id}`}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger rounded-pill py-2 px-4 ms-2"
                                                onClick={() => handleDelete(blog._id)}
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
            <div className="d-flex justify-content-center mt-4 button-container">
                {!isBlogsPage && ( // Render the "View All Blogs" button only if not on the blogs page
                    <Link to="/blogs" className="btn btn-primary mx-2">
                        View All Blogs
                    </Link>
                )}
                {isAuthenticated && (
                    <Link to="/createBlog" className="btn btn-primary mx-2">
                        Create Blog
                    </Link>
                )}
            </div>
        </div>
    );
}