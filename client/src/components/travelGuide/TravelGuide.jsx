import React, { useEffect, useState } from 'react';
import { getAllGuides } from '../../api/guides-api';

const TravelGuide = () => {
    const [guides, setGuides] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGuides = async () => {
            try {
                const data = await getAllGuides();
                setGuides(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchGuides();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container-fluid guide py-5">
            <div className="container py-5">
                <div
                    className="mx-auto text-center mb-5"
                    style={{ maxWidth: '900px' }}
                >
                    <h5 className="section-title px-3">Travel Guide</h5>
                    <h1 className="mb-0">Meet Our Guide</h1>
                </div>
                <div className="row g-4">
                    {guides.map((guide, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <div className="guide-item">
                                <div className="guide-img">
                                    <div className="guide-img-efects">
                                        <img
                                            alt={guide.name}
                                            className="img-fluid w-100 rounded-top"
                                            src={guide.imageUrl}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="guide-title text-center rounded-bottom p-4">
                                    <div className="guide-title-inner">
                                        <h4 className="mt-3">{guide.name}</h4>
                                        <p className="mb-0">{guide.designation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TravelGuide;
