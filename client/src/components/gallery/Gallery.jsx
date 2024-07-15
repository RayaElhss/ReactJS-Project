export default function Gallery() {
    return (
        <div className="container-fluid gallery py-5 my-5">
            <div
                className="mx-auto text-center mb-5"
                style={{
                    maxWidth: '900px'
                }}
            >
                <h5 className="section-title px-3">
                    Our Gallery
                </h5>
                <h1 className="mb-4">
                    Tourism & Traveling Gallery.
                </h1>
                <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto            doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum            cum repellat a laborum quasi.
                </p>
            </div>
            <div className="tab-class text-center">
                <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                    <li className="nav-item">
                        <a
                            className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                            data-bs-toggle="pill"
                            href="#GalleryTab-1"
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
                            href="#GalleryTab-2"
                        >
                            <span
                                className="text-dark"
                                style={{
                                    width: '150px'
                                }}
                            >
                                World tour
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                            data-bs-toggle="pill"
                            href="#GalleryTab-3"
                        >
                            <span
                                className="text-dark"
                                style={{
                                    width: '150px'
                                }}
                            >
                                Ocean Tour
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                            data-bs-toggle="pill"
                            href="#GalleryTab-4"
                        >
                            <span
                                className="text-dark"
                                style={{
                                    width: '150px'
                                }}
                            >
                                Summer Tour
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                            data-bs-toggle="pill"
                            href="#GalleryTab-5"
                        >
                            <span
                                className="text-dark"
                                style={{
                                    width: '150px'
                                }}
                            >
                                Sport Tour
                            </span>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div
                        className="tab-pane fade show p-0 active"
                        id="GalleryTab-1"
                    >
                        <div className="row g-2">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-1.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-1"
                                            href="img/gallery-1.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-2.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-2"
                                            href="img/gallery-2.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-3.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-3"
                                            href="img/gallery-3.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-4.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-4"
                                            href="img/gallery-4.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-5.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-5"
                                            href="img/gallery-5.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-6.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-6"
                                            href="img/gallery-6.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-7.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-7"
                                            href="img/gallery-7.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-8.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-8"
                                            href="img/gallery-8.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-9.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-9"
                                            href="img/gallery-9.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-10.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-10"
                                            href="img/gallery-10.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade show p-0"
                        id="GalleryTab-2"
                    >
                        <div className="row g-2">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-2.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-2"
                                            href="img/gallery-2.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-3.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-3"
                                            href="img/gallery-3.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade show p-0"
                        id="GalleryTab-3"
                    >
                        <div className="row g-2">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-2.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-2"
                                            href="img/gallery-2.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-3.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-3"
                                            href="img/gallery-3.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade show p-0"
                        id="GalleryTab-4"
                    >
                        <div className="row g-2">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-2.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-2"
                                            href="img/gallery-2.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-3.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-3"
                                            href="img/gallery-3.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade show p-0"
                        id="GalleryTab-5"
                    >
                        <div className="row g-2">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-2.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-2"
                                            href="img/gallery-2.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div className="gallery-item h-100">
                                    <img
                                        alt="Image"
                                        className="img-fluid w-100 h-100 rounded"
                                        src="img/gallery-3.jpg"
                                    />
                                    <div className="gallery-content">
                                        <div className="gallery-info">
                                            <h5 className="text-white text-uppercase mb-2">
                                                World Tour
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
                                    <div className="gallery-plus-icon">
                                        <a
                                            className="my-auto"
                                            data-lightbox="gallery-3"
                                            href="img/gallery-3.jpg"
                                        >
                                            <i className="fas fa-plus fa-2x text-white" />
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