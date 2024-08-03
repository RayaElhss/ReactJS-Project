import styles from '../ToursPage.module.css';

export default function Tours() {
    return (
        <section className={styles.toursList}>

            <div className={styles.tourCard}>
                <div className="position-relative">
                    <img src="/img/explore-tour-5.jpg" alt="Family Tour" className={`${styles.tourImg} img-fluid rounded-start`} />
                    <div className={styles.priceTag}>$649.00</div>
                </div>
                <div className={styles.tourDetails}>
                    <h2>Paris</h2>
                    <div className={`${styles.offer} ${styles.offerWarning}`}>50% Off</div>
                    <button className={styles.btn}>View Details</button>
                </div>
            </div>
            <div className={styles.tourCard}>
                <div className="position-relative">
                    <img src="/img/explore-tour-4.jpg" alt="Adventure Family Tour" className={`${styles.tourImg} img-fluid rounded-start`} />
                    <div className={styles.priceTag}>$799.00</div>
                </div>
                <div className={styles.tourDetails}>
                    <h2>Italy</h2>
                    <div className={`${styles.offer} ${styles.offerInfo}`}>20% Off</div>
                    <button className={styles.btn}>View Details</button>
                </div>
            </div>
        </section>
    );
}