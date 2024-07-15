export default function ExploreTour() {
    return (
        <div className="container-fluid ExploreTour py-5">
            <div className="container py-5">
                <div
                    className="mx-auto text-center mb-5"
                    style={{
                        maxWidth: '900px'
                    }}
                >
                    <h5 className="section-title px-3">
                        Explore Tour
                    </h5>
                    <h1 className="mb-4">
                        The World
                    </h1>
                    <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto                doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti                eum cum repellat a laborum quasi.
                    </p>
                </div>
                <div className="tab-class text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                        <li className="nav-item">
                            <a
                                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                                data-bs-toggle="pill"
                                href="#NationalTab-1"
                            >
                                <span
                                    className="text-dark"
                                    style={{
                                        width: '250px'
                                    }}
                                >
                                    National Tour Category
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                                data-bs-toggle="pill"
                                href="#InternationalTab-2"
                            >
                                <span
                                    className="text-dark"
                                    style={{
                                        width: '250px'
                                    }}
                                >
                                    International tour Category
                                </span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div
                            className="tab-pane fade show p-0 active"
                            id="NationalTab-1"
                        >
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img
                                            alt="Image"
                                            className="img-fluid w-100 rounded"
                                            src="img/explore-tour-1.jpg"
                                        />
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">
                                                    Weekend Tour
                                                </h5>
                                                <a
                                                    className="btn-hover text-white"
                                                    href="#"
                                                >
                                                    View All Place{' '}
                                                    <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="national-plus-icon">
                                            <a
                                                className="my-auto"
                                                href="#"
                                            >
                                                <i className="fas fa-link fa-2x text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img
                                            alt="Image"
                                            className="img-fluid w-100 rounded"
                                            src="img/explore-tour-2.jpg"
                                        />
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">
                                                    Holiday Tour
                                                </h5>
                                                <a
                                                    className="btn-hover text-white"
                                                    href="#"
                                                >
                                                    View All Place{' '}
                                                    <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="national-plus-icon">
                                            <a
                                                className="my-auto"
                                                href="#"
                                            >
                                                <i className="fas fa-link fa-2x text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img
                                            alt="Image"
                                            className="img-fluid w-100 rounded"
                                            src="img/explore-tour-3.jpg"
                                        />
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">
                                                    Road Trip
                                                </h5>
                                                <a
                                                    className="btn-hover text-white"
                                                    href="#"
                                                >
                                                    View All Place{' '}
                                                    <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tour-offer bg-info">
                                            15% Off
                                        </div>
                                        <div className="national-plus-icon">
                                            <a
                                                className="my-auto"
                                                href="#"
                                            >
                                                <i className="fas fa-link fa-2x text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img
                                            alt="Image"
                                            className="img-fluid w-100 rounded"
                                            src="img/explore-tour-4.jpg"
                                        />
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">
                                                    Historical Trip
                                                </h5>
                                                <a
                                                    className="btn-hover text-white"
                                                    href="#"
                                                >
                                                    View All Place{' '}
                                                    <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="national-plus-icon">
                                            <a
                                                className="my-auto"
                                                href="#"
                                            >
                                                <i className="fas fa-link fa-2x text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img
                                            alt="Image"
                                            className="img-fluid w-100 rounded"
                                            src="img/explore-tour-5.jpg"
                                        />
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">
                                                    Family Tour
                                                </h5>
                                                <a
                                                    className="btn-hover text-white"
                                                    href="#"
                                                >
                                                    View All Place{' '}
                                                    <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tour-offer bg-warning">
                                            50% Off
                                        </div>
                                        <div className="national-plus-icon">
                                            <a
                                                className="my-auto"
                                                href="#"
                                            >
                                                <i className="fas fa-link fa-2x text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="national-item">
                                        <img
                                            alt="Image"
                                            className="img-fluid w-100 rounded"
                                            src="img/explore-tour-6.jpg"
                                        />
                                        <div className="national-content">
                                            <div className="national-info">
                                                <h5 className="text-white text-uppercase mb-2">
                                                    Beach Tour
                                                </h5>
                                                <a
                                                    className="btn-hover text-white"
                                                    href="#"
                                                >
                                                    View All Place{' '}
                                                    <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="national-plus-icon">
                                            <a
                                                className="my-auto"
                                                href="#"
                                            >
                                                <i className="fas fa-link fa-2x text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade show p-0"
                            id="InternationalTab-2"
                        >
                            <div className="InternationalTour-carousel owl-carousel">
                                <div className="international-item">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 rounded"
                                        src="img/explore-tour-1.jpg"
                                    />
                                    <div className="international-content">
                                        <div className="international-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                Australia
                                            </h5>
                                            <a
                                                className="btn-hover text-white me-4"
                                                href="#"
                                            >
                                                <i className="fas fa-map-marker-alt me-1" />
                                                {' '}8 Cities
                                            </a>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                <i className="fa fa-eye ms-2" />
                                                {' '}
                                                <span>
                                                    143+                                            Tour Places
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tour-offer bg-success">
                                        30% Off
                                    </div>
                                    <div className="international-plus-icon">
                                        <a
                                            className="my-auto"
                                            href="#"
                                        >
                                            <i className="fas fa-link fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                                <div className="international-item">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 rounded"
                                        src="img/explore-tour-2.jpg"
                                    />
                                    <div className="international-content">
                                        <div className="international-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                Germany
                                            </h5>
                                            <a
                                                className="btn-hover text-white me-4"
                                                href="#"
                                            >
                                                <i className="fas fa-map-marker-alt me-1" />
                                                {' '}12 Cities
                                            </a>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                <i className="fa fa-eye ms-2" />
                                                {' '}
                                                <span>
                                                    21+                                            Tour Places
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="international-plus-icon">
                                        <a
                                            className="my-auto"
                                            href="#"
                                        >
                                            <i className="fas fa-link fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                                <div className="international-item">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 rounded"
                                        src="img/explore-tour-3.jpg"
                                    />
                                    <div className="international-content">
                                        <div className="tour-offer bg-warning">
                                            45% Off
                                        </div>
                                        <div className="international-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                Spain
                                            </h5>
                                            <a
                                                className="btn-hover text-white me-4"
                                                href="#"
                                            >
                                                <i className="fas fa-map-marker-alt me-1" />
                                                {' '}9 Cities
                                            </a>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                <i className="fa fa-eye ms-2" />
                                                {' '}
                                                <span>
                                                    133+                                            Tour Places
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="international-plus-icon">
                                        <a
                                            className="my-auto"
                                            href="#"
                                        >
                                            <i className="fas fa-link fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                                <div className="international-item">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 rounded"
                                        src="img/explore-tour-4.jpg"
                                    />
                                    <div className="international-content">
                                        <div className="international-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                Japan
                                            </h5>
                                            <a
                                                className="btn-hover text-white me-4"
                                                href="#"
                                            >
                                                <i className="fas fa-map-marker-alt me-1" />
                                                {' '}8 Cities
                                            </a>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                <i className="fa fa-eye ms-2" />
                                                {' '}
                                                <span>
                                                    137+                                            Tour Places
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="international-plus-icon">
                                        <a
                                            className="my-auto"
                                            href="#"
                                        >
                                            <i className="fas fa-link fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                                <div className="international-item">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 rounded"
                                        src="img/explore-tour-5.jpg"
                                    />
                                    <div className="international-content">
                                        <div className="tour-offer bg-info">
                                            70% Off
                                        </div>
                                        <div className="international-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                London
                                            </h5>
                                            <a
                                                className="btn-hover text-white me-4"
                                                href="#"
                                            >
                                                <i className="fas fa-map-marker-alt me-1" />
                                                {' '}17 Cities
                                            </a>
                                            <a
                                                className="btn-hover text-white"
                                                href="#"
                                            >
                                                <i className="fa fa-eye ms-2" />
                                                {' '}
                                                <span>
                                                    26+                                            Tour Places
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="international-plus-icon">
                                        <a
                                            className="my-auto"
                                            href="#"
                                        >
                                            <i className="fas fa-link fa-2x text-white" />
                                        </a>
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