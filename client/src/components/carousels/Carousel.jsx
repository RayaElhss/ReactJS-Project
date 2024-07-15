export default function Carousel() {
    return (
        <div className="carousel-header">
            <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="carouselId"
            >
                <ol className="carousel-indicators">
                    <li
                        className="active"
                        data-bs-slide-to="0"
                        data-bs-target="#carouselId"
                    />
                    <li
                        data-bs-slide-to="1"
                        data-bs-target="#carouselId"
                    />
                    <li
                        data-bs-slide-to="2"
                        data-bs-target="#carouselId"
                    />
                </ol>
                <div
                    className="carousel-inner"
                    role="listbox"
                >
                    <div className="carousel-item active">
                        <img
                            alt="Image"
                            className="img-fluid"
                            src="img/carousel-2.jpg"
                        />
                        <div className="carousel-caption">
                            <div
                                className="p-3"
                                style={{
                                    maxWidth: '900px'
                                }}
                            >
                                <h4
                                    className="text-white text-uppercase fw-bold mb-4"
                                    style={{
                                        letterSpacing: '3px'
                                    }}
                                >
                                    Explore The World
                                </h4>
                                <h1 className="display-2 text-capitalize text-white mb-4">
                                    Let's The World Together!
                                </h1>
                                <p className="mb-5 fs-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a
                                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                                        href="#"
                                    >
                                        Discover Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            alt="Image"
                            className="img-fluid"
                            src="img/carousel-1.jpg"
                        />
                        <div className="carousel-caption">
                            <div
                                className="p-3"
                                style={{
                                    maxWidth: '900px'
                                }}
                            >
                                <h4
                                    className="text-white text-uppercase fw-bold mb-4"
                                    style={{
                                        letterSpacing: '3px'
                                    }}
                                >
                                    Explore The World
                                </h4>
                                <h1 className="display-2 text-capitalize text-white mb-4">
                                    Find Your Perfect Tour At Travel
                                </h1>
                                <p className="mb-5 fs-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a
                                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                                        href="#"
                                    >
                                        Discover Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            alt="Image"
                            className="img-fluid"
                            src="img/carousel-3.jpg"
                        />
                        <div className="carousel-caption">
                            <div
                                className="p-3"
                                style={{
                                    maxWidth: '900px'
                                }}
                            >
                                <h4
                                    className="text-white text-uppercase fw-bold mb-4"
                                    style={{
                                        letterSpacing: '3px'
                                    }}
                                >
                                    Explore The World
                                </h4>
                                <h1 className="display-2 text-capitalize text-white mb-4">
                                    You Like To Go?
                                </h1>
                                <p className="mb-5 fs-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a
                                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                                        href="#"
                                    >
                                        Discover Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-slide="prev"
                    data-bs-target="#carouselId"
                    type="button"
                >
                    <span
                        aria-hidden="false"
                        className="carousel-control-prev-icon btn bg-primary"
                    />
                    <span className="visually-hidden">
                        Previous
                    </span>
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-slide="next"
                    data-bs-target="#carouselId"
                    type="button"
                >
                    <span
                        aria-hidden="false"
                        className="carousel-control-next-icon btn bg-primary"
                    />
                    <span className="visually-hidden">
                        Next
                    </span>
                </button>
            </div>
            
        </div>
    );
}