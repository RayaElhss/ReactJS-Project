import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './PackageDetails.module.css';
import Modal from '../modal/Modal';
import { useParams } from 'react-router-dom';
import * as packagesAPI from '../../api/packages-api';

export default function PackageDetails() {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    packagesAPI.getPackageById(id)
      .then((result) => {
        setPackageDetails(result);
        setLoading(false);
      }).catch((err) => {
        setError('Error loading package details.');
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!packageDetails) {
    return <div>Error loading package details.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Discover {packageDetails.country}</h1>
      </div>

      <Carousel
        className={styles.gallery}
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
      >
        {packageDetails.imageUrl.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`${packageDetails.city} Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      <div className={styles.packageInfo}>
        <h2>Package Information</h2>
        <div className={`${styles.infoItem}`}>
          <strong>Price:</strong> <span className={styles.price}>${packageDetails.price}</span>
        </div>
        <div className={styles.infoItem}>
          <strong>Duration:</strong> <span>{packageDetails.duration} days</span>
        </div>
        <div className={styles.infoItem}>
          <strong>Persons:</strong> <span>{packageDetails.peopleCount}</span>
        </div>
        <div className={`${styles.infoItem} ${styles.description}`}>
          <strong>Description:</strong> <span>{packageDetails.description}</span>
        </div>
      </div>
      <div className={styles.itinerary}>
        <h2>Itinerary</h2>
        <ul>
          {packageDetails.itinerary.map((day, index) => (
            <li key={index}>
              <strong>Day {day.day}:</strong> {day.title}
              <span>{day.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <Modal />
    </div>
  );
}
