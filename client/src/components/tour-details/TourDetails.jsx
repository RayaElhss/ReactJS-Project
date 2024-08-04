import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './TourDetails.module.css';
import Modal from '../modal/Modal';

const TourDetails = () => {

    const tour = {
        title: "Romantic Paris Experience",
        category: "City Tour",
        description:
            "Experience the romance and charm of Paris with our exclusive tour. This comprehensive package takes you through the most iconic landmarks, delightful dining experiences, and offers a glimpse into the artistic and cultural beauty that Paris is renowned for.",
        price: 1299.00,
        offer: "10% Off",
        offerColor: "success",
        duration: "5 Days / 4 Nights",
        images: [
            "https://www.bootdey.com/image/1352x300/00FFFF/000000",
            "https://www.bootdey.com/image/580x380/00FFFF/000000",
            "https://www.bootdey.com/image/580x380/FF69B4/000000",
            "https://www.bootdey.com/image/580x380/FFD700/000000"
        ],
        highlights: [
            "Visit to the Eiffel Tower with priority access",
            "Seine River Cruise with dinner",
            "Guided tour of the Louvre Museum",
            "Explore the charming neighborhood of Montmartre",
            "Day trip to Versailles Palace",
            "Experience a classic Parisian cabaret show"
        ],
        itinerary: [
            { day: "Day 1", description: "Arrival and check-in at the hotel" },
            { day: "Day 2", description: "Eiffel Tower and Louvre Museum tour" },
            { day: "Day 3", description: "Montmartre and Notre-Dame Cathedral" },
            { day: "Day 4", description: "Versailles Day Trip" },
            { day: "Day 5", description: "Departure" }
        ],
        inclusions: [
            "Round-trip airport transfers",
            "4 nights’ accommodation in a 4-star hotel",
            "Daily breakfast",
            "Seine River Cruise with dinner",
            "Priority access to the Eiffel Tower",
            "Guided tours as per the itinerary",
            "Dinner and show at the Moulin Rouge"
        ],
        exclusions: [
            "International airfare",
            "Travel insurance",
            "Personal expenses",
            "Meals not mentioned in the itinerary"
        ],
        tips: [
            "Bring comfortable walking shoes for city tours.",
            "Learn a few basic French phrases for easier communication."
        ]
    };

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
            <ul className="list-unstyled">
                {tour.itinerary.map((item, index) => (
                    <li key={index}><strong>{item.day}</strong>: {item.description}</li>
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
