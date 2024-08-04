import styles from '../ToursPage.module.css';

export default function Tours({ tours }) {
    return (
        <section className={styles.toursList}>
            {tours.length > 0 ? (
                tours.map((tour) => (
                    <div key={tour._id} className={styles.tourCard}>
                        <div className="position-relative">
                            <img
                                src={tour.images && tour.images.length > 0 ? tour.images[0] : '/img/default-tour.jpg'} // Fallback to a default image if none available
                                alt={tour.title}
                                className={`${styles.tourImg} img-fluid rounded-start`}
                            />
                            <div className={styles.priceTag}>${tour.price}</div>
                        </div>
                        <div className={styles.tourDetails}>
                            <h2>{tour.title}</h2>
                            {tour.offer && (
                                <div className={`${styles.offer} ${styles.offerInfo}`}>{tour.offer}</div>
                            )}
                            <button className={styles.btn}>View Details</button>
                        </div>
                    </div>
                ))
            ) : (
                <p style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif' }}>
                    No tours available for this category.
                </p>)}
        </section>
    );
}