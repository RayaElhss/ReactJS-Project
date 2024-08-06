import { useState } from "react";
import { Link } from "react-router-dom";
import BlogModal from "./blog-modal/BlogModal";

const mockBlogs = [
    {
        id: 1,
        title: "Adventures Trip",
        postedBy: "Royal Hamblin",
        date: "28 Jan 2050",
        imageUrl: "img/blog-1.jpg",
        summary: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos",
        likes: 1700,
        comments: 1000
    },
    // Additional mock blog data
];


export default function OurBlog() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container-fluid blog py-5">
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
                    <h1 className="mb-4" style={{ color: 'black' }}>
                        Popular Travel Blogs
                    </h1>
                    <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente                atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error                obcaecati ducimus officia maiores.
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    {mockBlogs.map(blog => (
                        <div className="col-lg-4 col-md-6" key={blog.id}>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <div className="blog-img-inner">
                                        <img
                                            alt={blog.title}
                                            className="img-fluid w-100 rounded-top"
                                            src={blog.imageUrl}
                                        />
                                        <div className="blog-icon">
                                            <a
                                                className="my-auto"
                                                href="#"
                                            >
                                                <i className="fas fa-link fa-2x text-white" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fa fa-calendar-alt text-primary me-2" />
                                            {blog.date}
                                        </small>
                                        <a
                                            className="btn-hover flex-fill text-center text-white border-end py-2"
                                            href="#"
                                        >
                                            <i className="fa fa-thumbs-up text-primary me-2" />
                                            {blog.likes}
                                        </a>
                                        <a
                                            className="btn-hover flex-fill text-center text-white py-2"
                                            href="#"
                                        >
                                            <i className="fa fa-comments text-primary me-2" />
                                            {blog.comments}
                                        </a>
                                    </div>
                                </div>
                                <div className="blog-content border border-top-0 rounded-bottom p-4">
                                    <p className="mb-3">
                                        Posted By: {blog.postedBy}
                                    </p>
                                    <a
                                        className="h4"
                                        href="#"
                                    >
                                        {blog.title}
                                    </a>
                                    <p className="my-3">
                                        {blog.summary}
                                    </p>
                                    <button
                                        className="btn btn-primary rounded-pill py-2 px-4"
                                        onClick={openModal}
                                    >
                                        View post
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center mt-4 button-container">
                    <button type="button" className="btn btn-primary mx-2">
                        View All Blogs
                    </button>
                    <Link to="/createBlog" className="btn btn-primary mx-2">
                        Create Blog
                    </Link>
                </div>
            </div>

            {/* Modal for viewing blog details */}
            {isModalOpen && <BlogModal onClose={closeModal} />}
        </div>
    );
}