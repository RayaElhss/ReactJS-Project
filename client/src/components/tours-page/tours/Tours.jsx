import { Link, useParams } from 'react-router-dom';
import styles from '../ToursPage.module.css';
import { useEffect, useState } from 'react';
import { getAllTours } from '../../../api/tours-api';

export default function Tours({ tours: initialTours }) {
    const { category } = useParams();
    const [tours, setTours] = useState(initialTours || []);

    useEffect(() => {
        // Fetch tours if not passed as initial props
        if (initialTours.length === 0) {
            getAllTours()
                .then(fetchedTours => {
                    console.log("Fetched Tours:", fetchedTours);

                    // Filter tours based on category, ensure case-insensitivity
                    const filtered = fetchedTours.filter(tour =>
                        tour.category.toLowerCase() === category.toLowerCase()
                    );

                    console.log("Filtered Tours after Fetch:", filtered);

                    // Set tours to the filtered results
                    setTours(filtered);
                })
                .catch(error => console.log('Failed to fetch tours', error));
        } else {
            // Filter initial tours by category
            const filtered = initialTours.filter(tour =>
                tour.category.toLowerCase() === category.toLowerCase()
            );

            // Set tours to the filtered results
            setTours(filtered);
        }
    }, [initialTours, category]);

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
                </p>
            )}
        </section>
    );
}
