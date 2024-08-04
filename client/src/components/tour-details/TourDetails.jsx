import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './TourDetails.module.css';
import Modal from '../modal/Modal';
import { useParams } from 'react-router-dom';
import { getTourById } from '../../api/tours-api';

const TourDetails = () => {

    const { id } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        getTourById(id)
            .then(setTour)
            .catch((error) => console.log('error:', error));
    }, [id]);

    if (!tour) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{tour.title}</h1>
            <p className={styles.category}>{tour.category}</p>

            {/* Carousel for Tour Images */}
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                {tour.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`} className={styles.image} />
                    </div>
                ))}
            </Carousel>

            <p className={styles.description}>{tour.description}</p>
            <h2 className={styles.price}>
                ${tour.price}
                {tour.offer && <small className={`text-${tour.offerColor}`}> ({tour.offer})</small>}
            </h2>

            <Modal />

            <h3 className="box-title mt-5">Key Highlights</h3>
            <ul className="list-unstyled">
                {tour.highlights.map((highlight, index) => (
                    <li key={index}><i className="fa fa-check text-success"></i> {highlight}</li>
                ))}
            </ul>

            <h3 className="box-title mt-5">Itinerary</h3>
            <ul>
                {tour.itinerary.map((item, index) => (
                    <li key={index}>
                        <strong>{item.day}</strong>: {item.activities}
                    </li>
                ))}
            </ul>

            <h3 className="box-title mt-5">Inclusions</h3>
            <ul className="list-unstyled">
                {tour.inclusions.map((item, index) => (
                    <li key={index}><i className="fa fa-check text-success"></i> {item}</li>
                ))}
            </ul>

            <h3 className="box-title mt-5">Exclusions</h3>
            <ul className="list-unstyled">
                {tour.exclusions.map((item, index) => (
                    <li key={index}><i className="fa fa-times text-danger"></i> {item}</li>
                ))}
            </ul>



            <h3 className="box-title mt-5">Travel Tips</h3>
            <ul className="list-unstyled">
                {tour.tips.map((tip, index) => (
                    <li key={index}><i className="fa fa-info-circle text-info"></i> {tip}</li>
                ))}
            </ul>

            <h3 className="box-title mt-5">Contact Information</h3>

        </div>
    );
};

export default TourDetails;
