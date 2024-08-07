import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery';
import { useAuthContext } from '../../contexts/AuthContext';
import ContactUs from '../contact-us/ContactUs';

export default function Navbar() {
    const location = useLocation(); // Get the current location
    const { isAuthenticated } = useAuthContext();

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

    // Determine if the current path is the homepage
    const isHomePage = location.pathname === '/';

    const isActive = (path) => location.pathname === path;

    return (
        <div className="container-fluid position-relative p-0">
            <nav
                className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 ${isHomePage ? 'navbar-home' : 'navbar-not-home'
                    }`}
            >
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
                        <Link className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
                        <Link className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">About</Link>
                        <Link className={`nav-item nav-link ${isActive('/packages') ? 'active' : ''}`} to="/packages">Packages</Link>
                        <Link className={`nav-item nav-link ${isActive('/blogs') ? 'active' : ''}`} to="/blogs">Blog</Link>
                        <div className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${['/tours', '/gallery', '/guides'].includes(location.pathname) ? 'active' : ''}`}
                                data-bs-toggle="dropdown"
                                href="#"
                            >
                                Pages
                            </a>
                            <div className="dropdown-menu m-0">
                                <Link className={`dropdown-item ${isActive('/tours') ? 'active' : ''}`} to="/tours">
                                    Explore Tour
                                </Link>
                                <Link className={`dropdown-item ${isActive('/gallery') ? 'active' : ''}`} to="/gallery">
                                    Our Gallery
                                </Link>
                                <Link className={`dropdown-item ${isActive('/guides') ? 'active' : ''}`} to="/guides">
                                    Travel Guides
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4" to='/contact'>Contact us</Link>


                    {isAuthenticated ?
                        (<div className="dropdown" style={{ color: 'black' }}>
                            <button className="btn btn-secondary dropdown-toggle btn btn-primary rounded-pill py-2 px-4 ms-lg-4 dropbtn"
                                type="button" data-bs-toggle="dropdown">
                                <i className="far fa-user" />
                            </button>
                            <ul className="dropdown-menu" >
                                <li><a href="/profile" className="dropdown-item">
                                    <i className="fas fa-user-alt me-2" /> My Profile
                                </a></li>
                                <Link to="/logout" className="dropdown-item">
                                    <i className="fas fa-power-off me-2" /> Log Out
                                </Link>
                            </ul>
                        </div>) : (<div className="dropdown" style={{ color: 'black' }}>
                            <button className="btn btn-secondary dropdown-toggle btn btn-primary rounded-pill py-2 px-4 ms-lg-4 dropbtn"
                                type="button" data-bs-toggle="dropdown">
                                <i className="far fa-user" />
                            </button>
                            <ul className="dropdown-menu" >
                                <li><a href="/profile" className="dropdown-item">
                                    <i className="fas fa-user-alt me-2" /> My Profile
                                </a></li>
                                <li><a className="dropdown-item" href="/login">Login</a></li>
                                <li><a className="dropdown-item" href="/register">Register</a></li>
                            </ul>
                        </div>)
                    }


                </div>
            </nav >
        </div >
    );
}
