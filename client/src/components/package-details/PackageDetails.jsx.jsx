import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './PackageDetails.module.css';
import Modal from '../modal/Modal';

export default function PackageDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Discover Japan</h1>
      </div>

      <Carousel className={styles.gallery} showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Image 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Image 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Image 3" />
        </div>
      </Carousel>

      <div className={styles.packageInfo}>
        <h2>Package Information</h2>
        <div className={`${styles.infoItem}`}>
          <strong>Price:</strong> <span className={styles.price}>$549.00</span>
        </div>
        <div className={styles.infoItem}>
          <strong>Duration:</strong> <span>3 days</span>
        </div>
        <div className={styles.infoItem}>
          <strong>Persons:</strong> <span>2</span>
        </div>
        <div className={`${styles.infoItem} ${styles.description}`}>
          <strong>Description:</strong> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat.</span>
        </div>
      </div>
      <div className={styles.itinerary}>
        <h2>Itinerary</h2>
        <ul>
          <li>
            <strong>Day 1:</strong> Arrival and check-in at the hotel
            <span>Explore local markets and enjoy a welcome dinner.</span>
          </li>
          <li>
            <strong>Day 2:</strong> Guided tour of historical sites
            <span>Visit famous landmarks and enjoy local cuisine.</span>
          </li>
          <li>
            <strong>Day 3:</strong> Free day and departure
            <span>Enjoy leisure activities or optional tours before departure.</span>
          </li>
        </ul>
      </div>

      <Modal />
    </div>
  );
}
