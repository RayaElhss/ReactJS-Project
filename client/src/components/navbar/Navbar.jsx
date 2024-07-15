export default function Navbar() {
    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a
                    className="navbar-brand p-0"
                    href=""
                >
                    <h1 className="m-0">
                        <i className="fa fa-map-marker-alt me-3" />
                        TripTales
                    </h1>
                </a>
                <button
                    className="navbar-toggler"
                    data-bs-target="#navbarCollapse"
                    data-bs-toggle="collapse"
                    type="button"
                >
                    <span className="fa fa-bars" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarCollapse"
                >
                    <div className="navbar-nav ms-auto py-0">
                        <a
                            className="nav-item nav-link active"
                            href="index.html"
                        >
                            Home
                        </a>
                        <a
                            className="nav-item nav-link"
                            href="about.html"
                        >
                            About
                        </a>
                        <a
                            className="nav-item nav-link"
                            href="packages.html"
                        >
                            Packages
                        </a>
                        <a
                            className="nav-item nav-link"
                            href="blog.html"
                        >
                            Blog
                        </a>
                        <div className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                href="#"
                            >
                                Pages
                            </a>
                            <div className="dropdown-menu m-0">
                                <a
                                    className="dropdown-item"
                                    href="destination.html"
                                >
                                    Destination
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="tour.html"
                                >
                                    Explore Tour
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="booking.html"
                                >
                                    Travel Booking
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="gallery.html"
                                >
                                    Our Gallery
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="guides.html"
                                >
                                    Travel Guides
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="testimonial.html"
                                >
                                    Testimonial
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="404.html"
                                >
                                    404 Page
                                </a>
                            </div>
                        </div>
                        <a
                            className="nav-item nav-link"
                            href="contact.html"
                        >
                            Contact
                        </a>
                    </div>
                    <a
                        className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4"
                        href=""
                    >
                        Book Now
                    </a>
                </div>
            </nav>
        </div>
    );
}