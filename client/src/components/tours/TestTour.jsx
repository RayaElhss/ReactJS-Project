import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './TestTour.module.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/explore-tour-5.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/explore-tour-4.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/explore-tour-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default function TestTour() {
  return (
    <div className={styles.tourDetailsContainer}>
      <ControlledCarousel />
      <div className="card mb-3">
        <div className="row g-0">
          
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">FRANCE - PARIS</h5>
              <p className="card-text">Discover one of the famous vineyards of the Rhône Valley: Châteauneuf du Pape is renowned for its full-bodied and powerful red wines.</p>
              <ul className={styles.detailsList}>
                <li>Visit a winery of the Rhone Valley</li>
                <li>Go to a winery of the Châteauneuf-du-Pape AOC</li>
                <li>Learn how to identify the famous wines of southern France</li>
              </ul>
              <h5 className="card-title">Full Description</h5>
              <p className="card-text">Enjoy a wine-tasting experience in a prestigious cellar of the village of Châteauneuf du Pape. Combine tasting with expert instruction about the wines of the Rhône Valley, and learn about the terroir and French system of quality certification known as AOC (Appellation d'origine contrôlée). Explore the agriculture, geography, and vineyards of the Rhône, known for their dry, crisp, and refreshing taste that is perfect for a summer's day.</p>
              <h5 className="card-title">Includes</h5>
              <ul className={styles.detailsList}>
                <li>Transportation by air-conditioned minibus (8 seats)</li>
                <li>English-speaking professional driver/guide</li>
                <li>Wine expert</li>
                <li>Wine tasting</li>
                <li>Food and drinks, unless specified</li>
                <li>Personal expenses</li>
                <li>Gratuities (optional)</li>
              </ul>
              <h5 className="card-title">Meeting Point</h5>
              <p className="card-text">In front of the tourist information center of Avignon, 41 cours Jean Jaurès.</p>
              <h5 className="card-title">Important Information</h5>
              <ul className={styles.detailsList}>
                <li>Comfortable shoes, sunglasses, sun hat, sunscreen</li>
                <li>No pets allowed, no smoking</li>
                <li>Minimum of 2 passengers, solo travelers accepted</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
