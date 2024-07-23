export default function TourItem({
    title,
    description,
    imageUrl,
    offer,
    offerColor
}) {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="national-item">
                <img
                    alt="Image"
                    className="img-fluid w-100 rounded"
                    src={imageUrl}
                />
                <div className="national-content">
                    <div className="national-info">
                        <h5 className="text-white text-uppercase mb-2">
                            {title}
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
                {offer && (
                    <div className={`tour-offer bg-${offerColor}`}>
                        {offer}
                    </div>
                )}
                <div className="national-plus-icon">
                    <a className="my-auto" href="#">
                        <i className="fas fa-link fa-2x text-white" />
                    </a>
                </div>
            </div>
        </div>
    );
}