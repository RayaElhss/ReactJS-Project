import { useEffect, useState } from "react";
import * as destinationsAPI  from '../../api/destinations-api';

export default function Destinations() {

    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        destinationsAPI.getAll()
        .then(result => setDestinations(result));
    }, []);
    return (
        <div className="container-fluid destination py-5">
            <div className="container py-5">
                <div
                    className="mx-auto text-center mb-5"
                    style={{
                        maxWidth: '900px'
                    }}
                >
                    <h5 className="section-title px-3">
                        Destination
                    </h5>
                    <h1 className="mb-0">
                        Popular Destination
                    </h1>
                </div>
                <div className="tab-class text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                        <li className="nav-item">
                            <a
                                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                                data-bs-toggle="pill"
                                href="#tab-1"
                            >
                                <span
                                    className="text-dark"
                                    style={{
                                        width: '150px'
                                    }}
                                >
                                    All
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                                data-bs-toggle="pill"
                                href="#tab-2"
                            >
                                <span
                                    className="text-dark"
                                    style={{
                                        width: '150px'
                                    }}
                                >
                                    USA
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                                data-bs-toggle="pill"
                                href="#tab-3"
                            >
                                <span
                                    className="text-dark"
                                    style={{
                                        width: '150px'
                                    }}
                                >
                                    Middle East
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                                data-bs-toggle="pill"
                                href="#tab-4"
                            >
                                <span
                                    className="text-dark"
                                    style={{
                                        width: '150px'
                                    }}
                                >
                                    Europe
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                                data-bs-toggle="pill"
                                href="#tab-5"
                            >
                                <span
                                    className="text-dark"
                                    style={{
                                        width: '150px'
                                    }}
                                >
                                    Asia
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                                data-bs-toggle="pill"
                                href="#tab-6"
                            >
                                <span
                                    className="text-dark"
                                    style={{
                                        width: '150px'
                                    }}
                                >
                                    Africa
                                </span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div
                            className="tab-pane fade show p-0 active"
                            id="tab-1"
                        >
                            <div className="row g-4">
                                <div className="col-xl-8">
                                    <div className="row g-4">

                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img
                                                    alt=""
                                                    className="img-fluid rounded w-100"
                                                    src="img/destination-2.jpg"
                                                />
                                                <div className="destination-overlay p-4">
                                                    <h4 className="text-white mb-2 mt-3">
                                                        Las vegas
                                                    </h4>
                                                    <a
                                                        className="btn-hover text-white"
                                                        href="/lasvegas"
                                                    >
                                                        View All Place{' '}
                                                        <i className="fa fa-arrow-right ms-2" />
                                                    </a>
                                                </div>
                                                <div className="search-icon">
                                                    <a
                                                        data-lightbox="destination-2"
                                                        href="img/destination-2.jpg"
                                                    >
                                                        <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                        <div
                            className="tab-pane fade show p-0"
                            id="tab-2"
                        >
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img
                                            alt=""
                                            className="img-fluid rounded w-100"
                                            src="img/destination-5.jpg"
                                        />
                                        <div className="destination-overlay p-4">
                                            <a
                                                className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                href="#"
                                            >
                                                20 Photos
                                            </a>
                                            <h4 className="text-white mb-2 mt-3">
                                                San francisco
                                            </h4>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                View All Place{' '}
                                                <i className="fa fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                        <div className="search-icon">
                                            <a
                                                data-lightbox="destination-5"
                                                href="img/destination-5.jpg"
                                            >
                                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img
                                            alt=""
                                            className="img-fluid rounded w-100"
                                            src="img/destination-6.jpg"
                                        />
                                        <div className="destination-overlay p-4">
                                            <a
                                                className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                href="#"
                                            >
                                                20 Photos
                                            </a>
                                            <h4 className="text-white mb-2 mt-3">
                                                San francisco
                                            </h4>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                View All Place{' '}
                                                <i className="fa fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                        <div className="search-icon">
                                            <a
                                                data-lightbox="destination-6"
                                                href="img/destination-6.jpg"
                                            >
                                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade show p-0"
                            id="tab-3"
                        >
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img
                                            alt=""
                                            className="img-fluid rounded w-100"
                                            src="img/destination-5.jpg"
                                        />
                                        <div className="destination-overlay p-4">
                                            <a
                                                className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                href="#"
                                            >
                                                20 Photos
                                            </a>
                                            <h4 className="text-white mb-2 mt-3">
                                                San francisco
                                            </h4>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                View All Place{' '}
                                                <i className="fa fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                        <div className="search-icon">
                                            <a
                                                data-lightbox="destination-5"
                                                href="img/destination-5.jpg"
                                            >
                                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img
                                            alt=""
                                            className="img-fluid rounded w-100"
                                            src="img/destination-6.jpg"
                                        />
                                        <div className="destination-overlay p-4">
                                            <a
                                                className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                href="#"
                                            >
                                                20 Photos
                                            </a>
                                            <h4 className="text-white mb-2 mt-3">
                                                San francisco
                                            </h4>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                View All Place{' '}
                                                <i className="fa fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                        <div className="search-icon">
                                            <a
                                                data-lightbox="destination-6"
                                                href="img/destination-6.jpg"
                                            >
                                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade show p-0"
                            id="tab-4"
                        >
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img
                                            alt=""
                                            className="img-fluid rounded w-100"
                                            src="img/destination-5.jpg"
                                        />
                                        <div className="destination-overlay p-4">
                                            <a
                                                className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                href="#"
                                            >
                                                20 Photos
                                            </a>
                                            <h4 className="text-white mb-2 mt-3">
                                                San francisco
                                            </h4>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                View All Place{' '}
                                                <i className="fa fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                        <div className="search-icon">
                                            <a
                                                data-lightbox="destination-5"
                                                href="img/destination-5.jpg"
                                            >
                                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img
                                            alt=""
                                            className="img-fluid rounded w-100"
                                            src="img/destination-6.jpg"
                                        />
                                        <div className="destination-overlay p-4">
                                            <a
                                                className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                href="#"
                                            >
                                                20 Photos
                                            </a>
                                            <h4 className="text-white mb-2 mt-3">
                                                San francisco
                                            </h4>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                View All Place{' '}
                                                <i className="fa fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                        <div className="search-icon">
                                            <a
                                                data-lightbox="destination-6"
                                                href="img/destination-6.jpg"
                                            >
                                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade show p-0"
                            id="tab-5"
                        >
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img
                                            alt=""
                                            className="img-fluid rounded w-100"
                                            src="img/destination-5.jpg"
                                        />
                                        <div className="destination-overlay p-4">
                                            <a
                                                className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                href="#"
                                            >
                                                20 Photos
                                            </a>
                                            <h4 className="text-white mb-2 mt-3">
                                                San francisco
                                            </h4>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                View All Place{' '}
                                                <i className="fa fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                        <div className="search-icon">
                                            <a
                                                data-lightbox="destination-5"
                                                href="img/destination-5.jpg"
                                            >
                                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img
                                            alt=""
                                            className="img-fluid rounded w-100"
                                            src="img/destination-6.jpg"
                                        />
                                        <div className="destination-overlay p-4">
                                            <a
                                                className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                href="#"
                                            >
                                                20 Photos
                                            </a>
                                            <h4 className="text-white mb-2 mt-3">
                                                San francisco
                                            </h4>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                View All Place{' '}
                                                <i className="fa fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                        <div className="search-icon">
                                            <a
                                                data-lightbox="destination-6"
                                                href="img/destination-6.jpg"
                                            >
                                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade show p-0"
                            id="tab-6"
                        >
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img
                                            alt=""
                                            className="img-fluid rounded w-100"
                                            src="img/destination-5.jpg"
                                        />
                                        <div className="destination-overlay p-4">
                                            <a
                                                className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                href="#"
                                            >
                                                20 Photos
                                            </a>
                                            <h4 className="text-white mb-2 mt-3">
                                                San francisco
                                            </h4>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                View All Place{' '}
                                                <i className="fa fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                        <div className="search-icon">
                                            <a
                                                data-lightbox="destination-5"
                                                href="img/destination-5.jpg"
                                            >
                                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="destination-img">
                                        <img
                                            alt=""
                                            className="img-fluid rounded w-100"
                                            src="img/destination-6.jpg"
                                        />
                                        <div className="destination-overlay p-4">
                                            <a
                                                className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                href="#"
                                            >
                                                20 Photos
                                            </a>
                                            <h4 className="text-white mb-2 mt-3">
                                                San francisco
                                            </h4>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                View All Place{' '}
                                                <i className="fa fa-arrow-right ms-2" />
                                            </a>
                                        </div>
                                        <div className="search-icon">
                                            <a
                                                data-lightbox="destination-6"
                                                href="img/destination-6.jpg"
                                            >
                                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}