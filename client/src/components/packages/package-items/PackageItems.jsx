import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PackageItem({
    _id,
    country,
    city,
    imageUrl,
    duration,
    peopleCount,
    price,
    description
}) {
    const [imgError, setImgError] = useState(false);
    const fallbackImageUrl = '/path/to/default-image.jpg'; // Replace with the actual path to your fallback image

    const firstImageUrl = Array.isArray(imageUrl) && imageUrl.length > 0 ? imageUrl[0] : fallbackImageUrl;

    return (
        <div className="packages-item">
            <div className="packages-img">
                <img
                    alt="Package"
                    className="img-fluid w-100 rounded-top"
                    src={imgError ? fallbackImageUrl : firstImageUrl}
                    onError={() => setImgError(true)}
                />
                <div
                    className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                    style={{
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        zIndex: '5'
                    }}
                >
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-map-marker-alt me-2" />
                        {city}
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-calendar-alt me-2" />
                        {duration} days
                    </small>
                    <small className="flex-fill text-center py-2">
                        <i className="fa fa-user me-2" />
                        {peopleCount} Person
                    </small>
                </div>
                <div className="packages-price py-2 px-4">
                    ${price}
                </div>
            </div>
            <div className="packages-content bg-light">
                <div className="p-4 pb-0">
                    <h5 className="mb-0">
                        {country}
                    </h5>
                    <small className="text-uppercase">
                        Hotel Deals
                    </small>
                    <div className="mb-3">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                    </div>
                    <p className="mb-4">
                        {description}
                    </p>
                </div>
                <div className="row bg-primary rounded-bottom mx-0">
                    <div className="col-6 text-start px-0">
                        <Link to={`/packages/${_id}`} className="btn-hover btn text-white py-2 px-4">
                            Read More
                        </Link>
                    </div>
                    <div className="col-6 text-end px-0">
                        <a
                            className="btn-hover btn text-white py-2 px-4"
                            href="#"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
