import React from 'react';
import styles from './FamilyTours.module.css';

export default function FamilyTours() {
    return (
        <div>
            <header className={styles.categoryHeader}>
                <div className={styles.banner}>
                    <img src="https://qtxasset.com/quartz/qcloud1/media/image/travelagentcentral/1557940433/familyadventuretravel.jpg?VersionId=aqcgSe54ljtA4iZY1_iOOrlZdr8Z0Kn0" alt="Family Tours" className={styles.bannerImg} />
                    <div className={styles.overlay}></div>
                    <div className={styles.bannerContent}>
                        <h1>Family Tours</h1>
                        <p>Fun-filled tours perfect for the whole family. Discover destinations with activities for all ages.</p>
                        <div className={styles.specialOffer}>Special Offer: 50% Off on Family Tours</div>
                    </div>
                </div>
            </header>

            <section className={styles.toursList}>
                <div className={styles.tourCard}>
                    <div className="position-relative">
                        <img src="/img/explore-tour-5.jpg" alt="Family Tour" className={`${styles.tourImg} img-fluid rounded-start`} />
                        <div className={styles.priceTag}>$649.00</div>
                    </div>
                    <div className={styles.tourDetails}>
                        <h2>Family Tour</h2>
                        <p>Fun for the whole family.</p>
                        <p>Enjoy a fun-filled family tour with activities and attractions for all ages.</p>
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
                        <h2>Adventure Family Tour</h2>
                        <p>Exciting adventure for the whole family.</p>
                        <p>Experience thrilling activities and adventures designed for families.</p>
                        <div className={`${styles.offer} ${styles.offerInfo}`}>20% Off</div>
                        <button className={styles.btn}>View Details</button>
                    </div>
                </div>
            </section>
            <section className={styles.reviews}>
                <h2>User Reviews</h2>
                <div className={styles.review}>
                    <p className={styles.rating}>★★★★★</p>
                    <p className={styles.comment}>Amazing family trip! The kids loved it.</p>
                    <p className={styles.user}>- Jane Doe</p>
                </div>
                <div className={styles.review}>
                    <p className={styles.rating}>★★★★☆</p>
                    <p className={styles.comment}>Great experience, but could use more kid-friendly meals.</p>
                    <p className={styles.user}>- John Smith</p>
                </div>
            </section>
            <section className={styles.additionalInfo}>
                <h2>Travel Tips</h2>
                <ul>
                    <li>Pack light but bring essentials for kids.</li>
                    <li>Best time to visit is during school holidays.</li>
                </ul>
                <h2>FAQs</h2>
                <div className={styles.faq}>
                    <p className={styles.question}>Q: Are meals included?</p>
                    <p className={styles.answer}>A: Yes, meals are included in the package.</p>
                </div>
                <div className={styles.faq}>
                    <p className={styles.question}>Q: Is there a discount for children?</p>
                    <p className={styles.answer}>A: Children under 5 travel free.</p>
                </div>
            </section>
        </div>
    );
}
