import React, { useEffect, useState } from 'react';
import { getAllGallery } from '../../api/gallery-api';
import styles from './Gallery.module.css';

// Modal Component
function ImageModal({ show, onClose, imageUrl, title }) {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className="modal show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="close ms-auto" onClick={onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="img-fluid w-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function Gallery() {
    const [galleryData, setGalleryData] = useState([]);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        getAllGallery()
            .then(setGalleryData)
            .catch((error) => {
                console.error('Failed to load gallery data:', error);
                setError('Failed to load gallery data');
            });
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    if (error) {
        return <div>{error}</div>;
    }



    return (
        <div className="container-fluid gallery py-5 my-5">
            <div
                className="mx-auto text-center mb-5"
                style={{
                    maxWidth: '900px',
                }}
            >
                <h5 className="section-title px-3">Our Gallery</h5>
                <h1 className="mb-4">Tourism & Traveling Gallery.</h1>
                <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    tempore nam, architecto doloremque velit explicabo? Voluptate sunt
                    eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
                    repellat a laborum quasi.
                </p>
            </div>
            <div className="tab-class text-center">
                <div className="tab-content">
                    <div className="tab-pane fade show p-0 active" id="GalleryTab-1">
                        <div className="row g-2">
                            {galleryData.map((item) => (
                                <div key={item._id} className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                    <div className="gallery-item h-100">
                                        <img
                                            alt={item.title || 'Gallery Image'}
                                            className="img-fluid w-100 h-100 rounded"
                                            src={item.imageUrl}
                                            onClick={() => handleImageClick(item)}

                                        />
                                        <div className="gallery-content">
                                            <div className="gallery-info">
                                                <h5 className="text-white text-uppercase mb-2">{item.title || 'Unknown Location'}</h5>
                                                <a
                                                    className="btn-hover text-white"
                                                    onClick={() => handleImageClick(item)}
                                                    style={{ cursor: 'pointer' }}  // Add cursor pointer for better UX
                                                >
                                                    View Image <i className="fa fa-arrow-up ms-2" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ImageModal
                show={showModal}
                onClose={handleCloseModal}
                imageUrl={selectedImage?.imageUrl}
                title={selectedImage?.title || 'Image'}
            />
        </div>


    );
}