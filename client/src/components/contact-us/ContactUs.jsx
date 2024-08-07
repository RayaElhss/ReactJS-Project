import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Contact Us</h2>
                <p className={styles.subtitle}>
                    We would love to hear from you! Reach out to us via any of the methods below.
                </p>

                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <h3>Address</h3>
                        <p>123 Main Street</p>
                        <p>Sofia, Bulgaria, 1307</p>
                    </div>

                    <div className={styles.contactItem}>
                        <h3>Phone</h3>
                        <p>(359) 89-3026747</p>
                    </div>

                    <div className={styles.contactItem}>
                        <h3>Email</h3>
                        <p>TripTales@gmail.com</p>
                    </div>

                    <div className={styles.contactItem}>
                        <h3>Follow Us</h3>
                        <div className={styles.socialLinks}>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
