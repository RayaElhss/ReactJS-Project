import React from 'react';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={`container-fluid ${styles.aboutSection}`}>
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <div className={styles.imageWrapper}>
                            <img
                                alt="About Us"
                                className={`img-fluid ${styles.aboutImage}`}
                                src="img/about.jpeg"
                            />
                        </div>
                    </div>

                    <div
                        className={`col-lg-7 ${styles.textContainer}`}
                        style={{
                            background: 'linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(img/about-img-1.png)',
                        }}
                    >
                        <div className={styles.textWrapper}>
                            <h1 className={styles.sectionTitle}>
                                About Us:
                            </h1>
                            <h1 className="mb-4">
                                Welcome to{' '}
                                <span className="text-primary">
                                    TripTales
                                </span>
                            </h1>
                            <p className="mb-4">
                                At TripTales, we are passionate about making your travel dreams come true. Our mission is to provide
                                unforgettable travel experiences, personalized to meet your unique preferences and interests. Whether
                                you're seeking adventure, relaxation, or cultural exploration, we have the perfect trip for you.
                            </p>
                            <p className="mb-4">
                                Our dedicated team of travel experts is committed to delivering exceptional service and ensuring that
                                every aspect of your journey is seamless and enjoyable. With our extensive knowledge and insider connections,
                                we curate exclusive itineraries that showcase the world's most captivating destinations.
                            </p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        Best Travel Tours
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        Handpicked Packages
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        Oppurtunity to Create Memories
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        Best Cultures around the world
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        Many Premium City Tours
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        24/7 Service
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
