import styles from './BlogModal.module.css';

export default function BlogModal({ onClose }) {
    // Hardcoded blog data for demonstration
    const blog = {
        title: "Adventures Trip",
        postedBy: "Royal Hamblin",
        date: "28 Jan 2050",
        imageUrl: "img/blog-1.jpg",
        summary: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos",
        likes: 1700,
        comments: 1000,
        commentsData: [
            { id: 1, author: "John Doe", text: "Great post! Really enjoyed it." },
            { id: 2, author: "Jane Smith", text: "Informative and well-written. Thanks!" }
        ]
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <div className={styles.blogDetails}>
                    <img src={blog.imageUrl} alt={blog.title} className={styles.blogImageLarge} />
                    <h2>{blog.title}</h2>
                    <p><strong>Posted By:</strong> {blog.postedBy}</p>
                    <p><strong>Date:</strong> {blog.date}</p>
                    <p>{blog.summary}</p>
                    <div className={styles.interactions}>
                        <button className={styles.interactionButton}>
                            <i className="fa fa-thumbs-up" /> {blog.likes} Likes
                        </button>
                        <button className={styles.interactionButton}>
                            <i className="fa fa-comments" /> {blog.comments} Comments
                        </button>
                    </div>
                    <h3>Comments</h3>
                    <ul className={styles.commentsList}>
                        {blog.commentsData.map(comment => (
                            <li key={comment.id}>
                                <strong>{comment.author}:</strong> {comment.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}