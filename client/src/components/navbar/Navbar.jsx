// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Navbar() {
    useEffect(() => {
        // jQuery function for sticky navbar
        $(window).scroll(function () {
            if ($(this).scrollTop() > 45) {
                $('.navbar').addClass('sticky-top shadow-sm');
            } else {
                $('.navbar').removeClass('sticky-top shadow-sm');
            }
        });

        // Clean up the event listener on component unmount
        return () => {
            $(window).off('scroll');
        };
    }, []);

    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a className="navbar-brand p-0" href="/">
                    <h1 className="m-0">
                        <i className="fa fa-map-marker-alt me-3" />
                        TripTales
                    </h1>
                </a>
                <button className="navbar-toggler" data-bs-target="#navbarCollapse" data-bs-toggle="collapse" type="button">
                    <span className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a className="nav-item nav-link active" href="/">Home</a>
                        <a className="nav-item nav-link" href="/about">About</a>
                        <a className="nav-item nav-link" href="/packages">Packages</a>
                        <a className="nav-item nav-link" href="/blog">Blog</a>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/pages">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a className="dropdown-item" href="/destinations">Destinations</a>
                                <a className="dropdown-item" href="/tours">Explore Tour</a>
                                <a className="dropdown-item" href="/gallery">Our Gallery</a>
                                <a className="dropdown-item" href="booking.html">Travel Booking</a>
                                <a className="dropdown-item" href="/guides">Travel Guides</a>
                            </div>
                        </div>
                    </div>
                    <a className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4" href="">Contact us</a>
                </div>
            </nav>
        </div>
    );
}