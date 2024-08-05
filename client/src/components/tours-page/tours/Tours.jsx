import { Link, useParams } from 'react-router-dom';
import styles from '../ToursPage.module.css';
import { useEffect, useState } from 'react';
import { getAllTours } from '../../../api/tours-api';

export default function Tours({ tours: initialTours }) {

    const [tours, setTours] = useState(initialTours || []);

    useEffect(() => {
        if (initialTours.length === 0) {
            getAllTours()
                .then(setTours)
                .catch((error) => console.log('failed to fetch tourss', error));
        }
    }, [initialTours])

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
                            <Link to={`/tours/${tour._id}`}>
                                <button className={styles.btn}>View Details</button>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <p style={{ fontSize: '40px', fontFamily: 'Bowlby One SC' }}>
                    No tours available for this category! :(
                </p>)}
        </section>
    );
}