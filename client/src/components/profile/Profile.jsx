import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import useBlogs from '../../hooks/useBlogs';
import styles from './Profile.module.css';

export default function Profile() {
    const { username, userId } = useAuthContext();
    const { blogs, loading, error } = useBlogs();

    const [followersCount, setFollowersCount] = useState(0);
    const [userBlogs, setUserBlogs] = useState([]);
    const [hasFollowed, setHasFollowed] = useState(false); // Track follow status

    // Filter the blogs to show only those created by the current user
    useEffect(() => {
        if (blogs) {
            setUserBlogs(blogs.filter(blog => blog._ownerId === userId));
        }
    }, [blogs, userId]);

    const handleFollow = () => {
        if (!hasFollowed) {
            setFollowersCount(followersCount + 1);
            setHasFollowed(true); // Prevent further follows
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={`container py-5 ${styles.profile}`}>
            <div className={`card ${styles.profileCard}`}>
                <div className="card-body text-center">
                    <h2 className="card-title">Username: {username}</h2>
                    <button
                        className="btn btn-primary mt-3"
                        onClick={handleFollow}
                        disabled={hasFollowed} // Disable button if already followed
                    >
                        {hasFollowed ? 'Following' : 'Follow'}
                    </button>
                    <p className="mt-2">Followers: {followersCount}</p>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="mb-4">Your Blog Posts</h3>
                {userBlogs.length > 0 ? (
                    <div className="row">
                        {userBlogs.map(blog => (
                            <div className="col-md-4 mb-4" key={blog._id}>
                                <div className={`card ${styles.blogCard}`}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src={blog.imageUrl}
                                            alt={blog.title}
                                            className={`card-img-top ${styles.blogImage}`}
                                        />
                                    </div>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">{blog.title}</h5>
                                        <p className={`card-text ${styles.cardText}`}>
                                            {blog.description}
                                        </p>
                                        <Link
                                            to={`/blogs/${blog._id}`}
                                            className="btn btn-primary mt-auto"
                                        >
                                            View Post
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>You have not created any blog posts yet.</p>
                )}
            </div>
        </div>
    );
}
