import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ToursPage.module.css';
import Testimonials from '../testimonials/Testimonials';
import Tours from './tours/Tours';
import * as tourCategoriesAPI from '../../api/tourCategories-api';
import * as toursAPI from '../../api/tours-api';


export default function ToursPage({ description }) {
    const { category } = useParams();
    console.log("Category from URL:", category);

    const [tourCategories, setTourCategories] = useState([]);
    const [tours, setTours] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        tourCategoriesAPI.getAllTourCategories().then(result => {
            setTourCategories(result);
            // setLoading(false);
        }).catch(err => {
            console.error(err);
            setError(err);
        });

        toursAPI.getAllTours()
            .then(result => {
                setTours(result);
            })
            .catch(err => {
                console.error(err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [])


    if (loading) {
        return <p>Loading tours...</p>;
    }

    if (error) {
        return <p>Error loading tours: {error.message}</p>;
    }

    // Filter tours based on the category from the URL
    const filteredTourCategories = tourCategories.filter(tour => tour.category.toLowerCase() === category.toLowerCase());
    const filteredTours = tours.filter(tour => tour.category.toLowerCase() === category.toLowerCase());

    const tourDetails = filteredTourCategories.length > 0 ? filteredTourCategories[0] : {};

    console.log('Filtered Tour Categories:', filteredTourCategories);
    console.log('Filtered Tours:', filteredTours);


    return (
        <div>
            <header className={styles.categoryHeader}>
                <div className={styles.banner}>
                    <img src={tourDetails.imageUrl} alt={`${category} Tours className=${styles.bannerImg}`} />
                    <div className={styles.overlay}></div>
                    <div className={styles.bannerContent}>
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                            <h5 className="section-title px-3">
                                Tours
                            </h5>
                            <h1 className="mb-4">
                                {category} Tours
                            </h1>
                            <p className="mb-0">
                                {tourDetails.description}
                            </p>
                        </div>
                        {tourDetails.offer && (
                            <div className={styles.specialOffer}>
                                Special Offer: {tourDetails.offer} Off on {category} Tours
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <h2 style={{ marginLeft: '20px', fontFamily: 'Bowlby One SC' }}>
                Latest Tours:
            </h2>

            {/* Pass the filtered tours to the Tours component */}
            <Tours tours={filteredTours} />

            <Testimonials />

            <section className={styles.additionalInfo}>
                <h2>Travel Tips</h2>
                <ul>
                    <li>Pack light but bring essentials for kids.</li>
                    <li>Best time to visit is during school holidays.</li>
                </ul>
            </section>
        </div>
    );
}
