import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../api/blogs-api";
import styles from "./BlogDetails.module.css";
import CommentForm from "../comment-form/CommentForm";


export default function BlogDetails() {
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [likedPosts, setLikedPosts] = useState({});
    const [comments, setComments] = useState([]);
    const [commentsVisible, setCommentsVisible] = useState(false);
    const [commentFormVisible, setCommentFormVisible] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blogData = await getBlogById(blogId);
                setBlog(blogData);
                setComments(blogData.comments || []);
            } catch (err) {
                console.error("Error fetching blog details:", err);
                setError("Failed to load blog details.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [blogId]);

    const handleLike = async () => {
        if (likedPosts[blogId]) {
            alert("You've already liked this post!");
            return
        };


        setBlog((prevBlog) => ({
            ...prevBlog,
            likes: (prevBlog.likes || 0) + 1,
        }));

        setLikedPosts((prevLikedPosts) => ({
            ...prevLikedPosts,
            [blogId]: true,
        }));
    };

    const handleCommentSubmit = (comment) => {
        const newComment = {
            author: "Anonymous", // Default author for new comments
            content: comment,
        };
        setComments((prevComments) => [...prevComments, newComment]);
    }

    const toggleCommentsVisibility = () => {
        setCommentsVisible((prevVisibility) => !prevVisibility);
    };

    const toggleCommentFormVisibility = () => {
        setCommentFormVisible((prevVisibility) => !prevVisibility);
    };


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.pageBackground}>
            <div className={styles.blogDetails}>
                <h1>{blog.title}</h1>
                <img src={blog.imageUrl} alt={blog.title} className={styles.image} />
                <p><strong>Posted By:</strong> {blog.author}</p>
                <p><strong>Date:</strong> {new Date(blog._createdOn).toLocaleDateString()}</p>
                <p><strong>Description:</strong> {blog.description}</p>
                <div className={styles.interactions}>

                    <button className={styles.interactionButton} onClick={handleLike} disabled={likedPosts[blogId]}>
                        <i className="fa fa-thumbs-up" /> {blog.likes || 0} Likes
                    </button>

                    <button className={styles.interactionButton} onClick={toggleCommentsVisibility}>
                        <i className="fa fa-comments" /> {comments.length || 0} Comments

                    </button>

                    <button className={styles.interactionButton} onClick={toggleCommentFormVisibility}>
                        <i className="fa fa-plus" /> Add Comment
                    </button>
                </div>


                {commentsVisible && (
                    <ul>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <li key={index}>
                                    <strong>{comment.author}:</strong> {comment.content}
                                </li>
                            ))
                        ) : (
                            <li>No comments yet.</li>
                        )}
                    </ul>
                )}

                {commentFormVisible && (
                    <CommentForm onSubmit={handleCommentSubmit} />
                )}

            </div>
        </div>
    );
}